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


export default function MarketCard(props) {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card sx={{ borderRadius: "12px" }}>
          <CardActionArea>
            <CardHeader title={props.marketName}></CardHeader>
          </CardActionArea>
      </Card>
    </Grid>
  );
}
