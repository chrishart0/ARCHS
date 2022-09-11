import styles from "../styles/Home.module.css";
import Link from "next/link";

// MUI Components
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

// Components
import MarketCard from "../components/MarketCard";
import SeoHeaderAndTracking from "../components/SeoHeaderAndTracking";
import LocationsMap from "../components/map";

// Data
import marketData from "../data/markets.json";
import locationData from "../data/locations.json";

const generateMarketCards = () => {
  return Object.keys(marketData["markets"]).map((market) => {
    return (
      <MarketCard
        key={market}
        marketState={marketData["markets"][market]["state"]}
        marketRegion={marketData["markets"][market]["region"]}
        marketCity={marketData["markets"][market]["city"]}
        marketPageLink={`/markets/${market}`}
        marketName={marketData["markets"][market]["marketName"]}
        marketExternalWebsiteLink={marketData["markets"][market]["marketWebsiteLink"]}
        marketTimes={marketData["markets"][market]["marketTimes"]}
        marketAddress={marketData["markets"][market]["marketAddressText"]}
        marketImageSrc={marketData["markets"][market]["marketImageSrc"]}
        marketDescription={marketData["markets"][market]["marketDescription"]}
      />
    );
  });
};

const generateLocations = () => {
  return Object.keys(locationData["states"]).map((state) => {
    return (
      <Button key={state} variant="outlined" size="large" color="primary" sx={{ margin: "4vh" }}>
        <Link href={`/locations/${state}`} passHref>
          <Typography variant="h4" sx={{ fontSize: "1.5rem" }}>
            {locationData["states"][state]["name"]}
          </Typography>
        </Link>
      </Button>
    );
  });
};

export default function Home() {
  return (
    <div>
      <SeoHeaderAndTracking
        title="Farmers Market Finder"
        description="Discover your closest farmers market fast! Find your favorite vendors and even find resources to start selling on your own!"
        canonical="/"
      />
      <div className={styles.container}>
        <main className={styles.main}>
          <Container sx={{ paddingTop: "1vh" }} align="center" maxWidth="lg">
            <Typography sx={{ paddingTop: "1vh", fontSize: "2.5rem" }} variant="h1">
              Discover Your Farmers Markets
            </Typography>
            <Typography variant="h2" sx={{ fontSize: "1.5rem", paddingTop: "3vh" }}>Farmers Markets Map</Typography>
            <Typography>Click a pin to see details on the farmers market</Typography>
          </Container>
          <div style={{ width: "100vw" }}>
            <LocationsMap />
          </div>
          <Container align="center" maxWidth="lg">
            <Container sx={{ paddingTop: "5vh" }} align="center" maxWidth="lg">
              <Divider />

              <Typography variant="h2" sx={{ paddingTop: "3vh", fontSize: "1.5rem" }}>
                Search Farmers Markets by State
              </Typography>
              {generateLocations()}
              <Divider />
            </Container>

            <Typography variant="h2" sx={{ fontSize: "2.5rem", paddingTop: "5vh", paddingBottom: "1vh" }}>
              All Farmers Markets
            </Typography>
            <Typography variant="h3" sx={{ fontSize: "1.5rem", padding: "1vh" }}>
              Click on a Market
            </Typography>
            <Grid
              container
              sx={{ paddingBottom: "5px" }}
              spacing={2}
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              {generateMarketCards()}
            </Grid>
            <br />
          </Container>
        </main>
      </div>
    </div>
  );
}
