import * as React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

// MUI Components
import AppBar from '@mui/material/AppBar';
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { styled } from "@mui/material/styles";
//import SwipeableViews from 'react-swipeable-views';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
//import { useTheme } from '@react-navigation/native';

// Icons
import PhoneIcon from "@mui/icons-material/Phone";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import EmailIcon from "@mui/icons-material/Email";
import WebIcon from '@mui/icons-material/Web';

// Components
import SeoHeaderAndTracking from "../components/SeoHeaderAndTracking";

// Will need to pull from data later
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];

// For the avatar badge
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    width: 15,
    height: 15,
    borderRadius: "50%",
    boxShadow: `0 0 0 3px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: -1,
      left: -1,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 3s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(1.8)",
      opacity: 0,
    },
  },
}));

function seoTitle(marketName) {
  return `${marketName}`;
}

function seoDescription(marketName) {
  return `Discover local produce and crafts at ${marketName}`;
}

export default function VendorProfile(props) {
  // For the tabs
  const [tab, setTab] = React.useState("0");

  const handleChange = (event, newTab) => {
    console.log(newTab)
    setTab(newTab);
  };

  function photoDisplay() {
    if (tab == "0") {
      return (
        <ImageList sx={{ width: "100%", height: "100%" }} cols={3} rowHeight={'auto'}>
          {props.imagesList.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      )
    }
  }

  function blogDisplay() {
    if (tab == "1") {
      return (
        <Typography variant="body2" color="text.secondary">
          blog will go here
        </Typography>
      )
    }
  }

  function shopDisplay() {
    if (tab == "2") {
      return (
        <Typography variant="body2" color="text.secondary">
          shop will go here
        </Typography>
      )
    }
  }

  function websiteLink() {
    if (props.vendorWebsiteLink) {
      return (
        <Link href={props.vendorWebsiteLink}>
          <Typography variant="body2" color="text.secondary">
            <WebIcon fontSize="inherit" />
            {props.vendorWebsiteLink}
          </Typography>
        </Link>
      )
    }
  }

  return (
    <div className={styles.container}>
      <SeoHeaderAndTracking
        title={seoTitle(props.vendorName)}
        description={seoDescription(props.vendorDescription)}
        canonical={`/vendors/${props.vendorName}`}
      />
      <main className={styles.main}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh", maxWidth: "800px" }}
        >
          {/* Banner */}
          <Grid item lg={12} width="80%">
            <Card
              sx={{
                marginTop: "12px",
                marginLeft: "-80px",
                marginRight: "-80px",
                height: "40vh",
                minHeight: "280px",
                borderRadius: "10px",
              }}
            >
              <CardMedia
                component="img"
                image={props.vendorHeaderImageSrc}
                alt="CardMedia Image Example"
                height="50%"
                title="CardMedia Image Example"
              />
              <CardContent sx={{ width: "100%", marginTop: -8, marginBottom: 2, marginLeft: 1 }}>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar sx={{ width: 100, height: 100, marginBottom: 1 }}>
                    <h1>{props.vendorAcronym}</h1>
                  </Avatar>
                </StyledBadge>
                <Typography variant="body2" color="text.secondary">
                  <b>{props.vendorName}</b>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <PhoneIcon fontSize="inherit" />
                  {props.vendorPhoneNumber}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <EmailIcon fontSize="inherit" />
                  {props.vendorEmail}
                </Typography>
                {websiteLink()}
              </CardContent>
            </Card>
          </Grid>
          {/* Body */}
          <Grid item lg={12} width="80%">
            <Card
              sx={{
                marginTop: "10px",
                marginLeft: "-80px",
                marginRight: "-80px",
                height: "auto",
                borderRadius: "10px",
              }}
            >
              <Tabs
                tab={tab}
                onChange={handleChange}
                aria-label="icon label tabs example"
                centered
                variant="fullWidth"
              >
                <Tab icon={<CameraAltIcon />} label="GALLERY" />
                <Tab icon={<QuestionAnswerIcon />} label="BLOG" />
                <Tab icon={<ShoppingCartIcon />} label="SHOP" />
              </Tabs>
              {photoDisplay()}
              {blogDisplay()}
              {shopDisplay()}
            </Card>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
