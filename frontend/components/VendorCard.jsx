import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function VendorCard(props) {
  return (
    <Grid item xs={12} md={4}>
      <Card>
        <Link href={props.vendorPageLink} passHref>
          <CardActionArea>
            {/* {displayLocationHeader(props.vendorState, props.vendorRegion, props.vendorCity)} */}
            {/*<CardMedia component="img" height="250" image={props.vendorImageSrc} alt={props.vendorName} /> */}
            <CardHeader title={props.vendorName}></CardHeader>
            <CardContent sx={{ minHeight: "200px" }}>
              <Typography variant="body2" color="text.secondary">
                {props.vendorDescription}
              </Typography>
            </CardContent>
            <CardContent sx={{ paddingTop: "4px" }}></CardContent>
          </CardActionArea>
        </Link>
        <CardActions>
          <Button size="small" color="primary">
            <Link href={props.vendorPageLink} passHref>
              <a target="_blank" rel="noopener noreferrer">
                More Information
              </a>
            </Link>
          </Button>
          {/* <Button size="small" color="primary">
            <Link href={props.vendorExternalWebsiteLink} passHref>
              <a target="_blank" rel="noopener noreferrer">
                Visit Their Site
              </a>
            </Link>
          </Button> */}
        </CardActions>
      </Card>
    </Grid>
  );
}
