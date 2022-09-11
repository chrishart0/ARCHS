import {
  Stack,
  StackProps,
  RemovalPolicy,
  CfnOutput,
  Duration,
  Aws
} from "aws-cdk-lib";
import { aws_cloudfront as cloudfront } from "aws-cdk-lib";
import { aws_route53 as route53 } from "aws-cdk-lib";
import { aws_route53_targets as targets } from "aws-cdk-lib";
import { aws_route53_patterns as route53_patterns } from "aws-cdk-lib";
import { aws_s3 as s3 } from "aws-cdk-lib";
import { aws_iam as iam } from "aws-cdk-lib";
import { aws_certificatemanager as acm } from "aws-cdk-lib";
import { Construct } from "constructs";

export class InfrastructureStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const hostedZoneId: string = process.env.NEXT_PUBLIC_HOSTED_ZONE_ID!;
    const hostedZoneName: string = process.env.NEXT_PUBLIC_HOSTED_ZONE_NAME!;
    const siteDomain: string = process.env.NEXT_PUBLIC_DOMAIN!;
    const apiDomain = "api." + siteDomain;
    const authURL: string = `auth.${siteDomain}`;

    const zone = route53.HostedZone.fromHostedZoneAttributes(this, "zone", {
      zoneName: hostedZoneName,
      hostedZoneId: hostedZoneId,
    });

    const cloudfrontOAI = new cloudfront.OriginAccessIdentity(
      this,
      "cloudfront-OAI",
      {
        comment: `OAI for ${siteDomain}`,
      }
    );

    const siteBucket = new s3.Bucket(this, "staticSiteBucket", {
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "404.html",
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });
    new CfnOutput(this, "SiteBucket", { value: siteBucket.bucketArn });

    // Grant access to cloudfront
    siteBucket.addToResourcePolicy(
      new iam.PolicyStatement({
        actions: ["s3:GetObject"],
        resources: [siteBucket.arnForObjects("*")],
        principals: [
          new iam.CanonicalUserPrincipal(
            cloudfrontOAI.cloudFrontOriginAccessIdentityS3CanonicalUserId
          ),
        ],
      })
    );
    new CfnOutput(this, "Bucket", { value: siteBucket.bucketName });

    const certificate = new acm.DnsValidatedCertificate(
      this,
      "SiteCertificate",
      {
        domainName: siteDomain,
        subjectAlternativeNames: [apiDomain],
        hostedZone: zone,
        region: "us-east-1", // Cloudfront only checks this region for certificates.
      }
    );
    const certificateArn = certificate.certificateArn;
    new CfnOutput(this, "Certificate", { value: certificateArn });

    const errorConfigurations: cloudfront.CfnDistribution.CustomErrorResponseProperty[] =
      [
        {
          errorCode: 403,
          responsePagePath: "/",
          responseCode: 200,
        },
        {
          errorCode: 404,
          responsePagePath: "/index.html",
          responseCode: 200,
        },
      ];

    // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_cloudfront.CloudFrontWebDistribution.html
    const distribution = new cloudfront.CloudFrontWebDistribution(
      this,
      "SiteDistribution",
      {
        viewerCertificate: {
          aliases: [siteDomain],
          props: {
            acmCertificateArn: certificateArn,
            sslSupportMethod: "sni-only",
          },
        },
        originConfigs: [
          {
            s3OriginSource: {
              s3BucketSource: siteBucket,
              originAccessIdentity: cloudfrontOAI,
            },
            behaviors: [
              {
                isDefaultBehavior: true,
                compress: true,
                allowedMethods:
                  cloudfront.CloudFrontAllowedMethods.GET_HEAD_OPTIONS,
              },
            ],
          },
        ],
        errorConfigurations: errorConfigurations,
      }
    );
    new CfnOutput(this, "DistributionId", {
      value: distribution.distributionId,
    });

    new route53.ARecord(this, "SiteAliasRecord", {
      recordName: siteDomain,
      target: route53.RecordTarget.fromAlias(
        new targets.CloudFrontTarget(distribution)
      ),
      zone,
    });

    new route53_patterns.HttpsRedirect(this, "wwwToNonWww", {
      recordNames: [`www.${siteDomain}`],
      targetDomain: siteDomain,
      zone,
    });

  }
}
