import { Amplify, Auth, Hub } from "aws-amplify";
import { useRouter } from 'next/router'
// import { AmplifyProvider } from "@aws-amplify/ui-react";
import { AuthProvider } from 'context/auth';
// import { withAuthenticator } from "@aws-amplify/ui-react";
import { useEffect } from "react";
import { USER_POOL_CLIENT_ID, USER_POOL_ID, IDENTITY_POOL_ID, REGION, OAUTH_DOMAIN } from 'constants/constants';

import "../styles/globals.css";

import HeaderBar from "../components/HeaderBar";
import FooterBar from "../components/FooterBar";

const currentUrl = "localhost:3000"
// Amplify.Logger.LOG_LEVEL = 'DEBUG';


function MyApp({ Component, pageProps }) {
  // const router = useRouter()

  useEffect(() => {
    Amplify.configure({
      Auth: {
        region: REGION,
        identityPoolId: IDENTITY_POOL_ID,
        identityPoolRegion: REGION,
        userPoolId: USER_POOL_ID,
        userPoolWebClientId: USER_POOL_CLIENT_ID,
        cookieStorage: {
          domain: "localhost",
          path: "/",
          expires: 365,
          secure: true
        },
      },
      redirectSignIn: currentUrl,
      redirectSignOut: currentUrl,
      geo: {
        AmazonLocationService: {
          maps: {
            items: {
              "test-farm-map": {
                style: "Default style",
              },
            },
            default: "test-farm-map",
          },
          region: REGION,
        },
      },
    });

    Auth.configure({
      Auth: {
        region: REGION,
        identityPoolId: IDENTITY_POOL_ID,
        identityPoolRegion: REGION,
        userPoolId: USER_POOL_ID,
        userPoolWebClientId: USER_POOL_CLIENT_ID,
      },
      oauth: {
        domain: OAUTH_DOMAIN,
        scope: [
          "phone",
          "email",
          "profile",
          "openid",
          "aws.cognito.signin.user.admin"
        ],
        redirectSignIn: currentUrl,
        redirectSignOut: currentUrl,
        responseType: "token"
      }
    });
  }, []);

  // https://medium.com/@georgemccreadie/introduction-to-using-aws-cognito-hosted-ui-with-amplify-js-4711cf4f925a
  Hub.listen('auth', ({ payload: { event, data } }) => {
    switch (event) {
      case 'signIn':
        console.log('sign in', event, data)
        // this.setState({ user: data})
        break
      case 'signOut':
        console.log('sign out')
        // this.setState({ user: null })
        break
    }
  })

  return (
    <div>
      {/* <AmplifyProvider> */}
      <AuthProvider>
        <HeaderBar />
        <Component {...pageProps} />
        <FooterBar />
      </AuthProvider>
      {/* </AmplifyProvider> */}
    </div>
  );
}

export default MyApp;
// export default withAuthenticator(MyApp);
