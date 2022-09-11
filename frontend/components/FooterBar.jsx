import { useState } from "react";
import { FACEBOOK_URL, INSTA_URL, TWITTER_URL } from 'constants/constants';
import Link from "next/link";

// MUI Components
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

// MUI Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

// ----- Styles ----- //
const instaIconStyles = {
  color: "white",
  background: "#E4405F",
  margin: "2px",
  "&:hover": {
    transform: "scale(1.2)",
  },
};

const facebookIconStyles = {
  color: "white",
  background: "#4267B2",
  margin: "2px",
  "&:hover": {
    transform: "scale(1.2)",
  },
};

const twitterIconStyles = {
  color: "white",
  background: "#1D9BF0",
  margin: "2px",
  "&:hover": {
    transform: "scale(1.2)",
  },
};

//Special handling to use localhost SAM API if running locally via npm start(make run)
const apiUrl =
  process.env.NODE_ENV !== "development"
    ? "https://api." + process.env.NEXT_PUBLIC_DOMAIN + "/users"
    : "http://localhost:3001/users";

async function submitContactMessage(email, location, vendor) {
  if (location == "") {
    location = "unspecified";
  }

  let body = {
    email: email,
    location: location,
    vendor: vendor,
  };

  //Prepare options for fetch
  const requestConfig = {
    method: "POST",
    body: JSON.stringify(body),
  };

  fetch(apiUrl, requestConfig)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      setUserCount(response["User count"]);
    })
    .catch((err) => {
      console.log(err);
    });
}

export default function FooterBar() {
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [vendor, setVendor] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleVendorChange = (event) => {
    setVendor(event.target.checked);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar align="center" position="static" sx={{ backgroundColor: "background.paper", color: "black" }}>
        <Toolbar>
          <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
            <Grid item>
              <Typography variant="h6">Get Updates About Your Local Markets</Typography>
            </Grid>
            <Grid item>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <FormGroup>
                  <TextField id="email-input" label="Email" value={email} required onChange={handleEmailChange} />
                  <TextField
                    id="location-input"
                    label="Location"
                    value={location}
                    required
                    onChange={handleLocationChange}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={vendor}
                        onChange={handleVendorChange}
                        name="I'm a Vendor"
                        required
                        inputProps={{ "aria-label": "vendorBoolCheckbox" }}
                      />
                    }
                    label="I'm a Vendor"
                  />
                </FormGroup>
              </Box>
            </Grid>
            <Grid item>
              <Button variant="outlined" onClick={() => submitContactMessage(email, location, vendor)}>
                Subscribe
              </Button>
            </Grid>
            <Grid item>
              <div style={{ width: "90vw", padding: "2vh" }}>
                <Divider />
              </div>
            </Grid>
            <Grid item>
              <Grid container spacing={1} direction="row" alignItems="center" justifyContent="center">
                <Grid item>
                  <Typography>The Local Egg ©</Typography>
                </Grid>
                <Grid item>
                  <Typography> | </Typography>
                </Grid>
                <Grid item>
                  <Typography> Farmers Market Finder </Typography>
                </Grid>
              </Grid>
              <Grid  item>
                <Grid container spacing={1} direction="row" alignItems="center" justifyContent="center">
                  <Grid item>
                    <Link href={FACEBOOK_URL} passHref>
                      <a target="_blank" rel="noopener noreferrer">
                        <FacebookIcon sx={facebookIconStyles} fontSize="large" />
                      </a>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href={INSTA_URL} passHref>
                      <a target="_blank" rel="noopener noreferrer">
                        <InstagramIcon sx={instaIconStyles} fontSize="large" />
                      </a>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href={TWITTER_URL} passHref>
                      <a target="_blank" rel="noopener noreferrer">
                        <TwitterIcon sx={twitterIconStyles} fontSize="large" />
                      </a>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
