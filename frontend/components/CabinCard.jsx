import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function CabinCard(props) {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card sx={{ borderRadius: "12px", textAlign: "left" }}>
        <Link href={props.link} passHref>
          <CardActionArea>
            {/* {displayLocationHeader(props.marketState, props.marketRegion, props.marketCity)} */}
            <CardMedia component="img" height="300" image={props.imageSrc} alt={props.name} />
            <CardHeader title={props.name} subheader={props.rating}></CardHeader>
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
                {props.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions align="center">
          <Link href="tel:+6785083343" sx={{ textDecoration: "none", color: "inherit" }} passHref>
            <Button size="medium" color="primary" sx={{ marginTop: "5px" }}>
              <Typography>
                Call or text to book:
                (678)-508-3343
              </Typography>
            </Button>
          </Link>
          
        </CardActions>
      </Card>
    </Grid>
  );
}
