import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { Button, CardActionArea, CardActions } from "@mui/material";

function displayLocationHeader(state, region, city) {
  if (state && region && city) {
    return (
      <div>
        <Divider />
        <Typography>
          {state} | {region} | {city}
        </Typography>
        <Divider />
      </div>
    );
  }
}

function marketSiteLink(link) {
  if (link) {
    return (
      <Button size="small" color="primary">
        <Link href={link} passHref>
          <a target="_blank" rel="noopener noreferrer">
            Visit Their Site
          </a>
        </Link>
      </Button>
    );
  }
}

export default function MarketCard(props) {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card sx={{ borderRadius: "12px" }}>
        <Link href={props.marketPageLink} passHref>
          <CardActionArea>
            {displayLocationHeader(props.marketState, props.marketRegion, props.marketCity)}
            <CardMedia component="img" height="300" image={props.marketImageSrc} alt={props.marketName} />
            <CardHeader title={props.marketName} subheader={props.marketTimes}></CardHeader>
            <CardContent sx={{ height: "200px" }}>
              <Typography
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "7",
                  WebkitBoxOrient: "vertical",
                }}
              >
                {props.marketDescription}
              </Typography>
            </CardContent>
            <CardContent sx={{ paddingTop: "4px" }}>
              <Typography variant="h6" color="text.secondary">
                Address
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.marketAddress}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions>
          <Button size="small" color="primary">
            <Link href={props.marketPageLink} passHref>
              <a target="_blank" rel="noopener noreferrer">
                More Information
              </a>
            </Link>
          </Button>
          {marketSiteLink(props.marketExternalWebsiteLink)}
        </CardActions>
      </Card>
    </Grid>
  );
}
