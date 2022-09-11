import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

// MUI Components
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

// Components
import SeoHeaderAndTracking from "../components/SeoHeaderAndTracking";
import CabinCard from "../components/CabinCard";
import LocationsMap from "../components/map";

// Assets
import lodge55 from "../public/images/lodge-55-front.webp";

// Data
import cabinData from "../data/cabins.json";

// ------ Styles ------
const headerBanner = {
  minHeight: "70vh",
  maxWidth: "100%",
  width: "100vw",
  bgcolor: "background.paper",
  color: "white",
  textShadow: "2px 2px 1px  #000",
  borderTop: "1px solid #000",
  borderBottom: "1px solid #000",
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .4)), url(${lodge55.src}) `,
  backgroundPosition: "center",
  backgroundRepeat: "noRepeat",
  width: "100%",
  backgroundSize: "cover",
  p: 4,
  overflowX: "hidden",
  display: "flex",
  paddingBottom: "1vh",
  textAlign: "center",
  fontFamily: 'Montserrat'
};

const h2Titles = {
  fontSize: "2.5rem",
  paddingTop: "1vh"
};

const generateCabinCards = () => {
  return Object.keys(cabinData["cabins"]).map((cabins) => {
    return (
      <CabinCard
        key={cabins}
        name={cabinData["cabins"][cabins]["name"]}
        link={cabinData["cabins"][cabins]["link"]}
        rating={cabinData["cabins"][cabins]["rating"]}
        marketAddress={cabinData["cabins"][cabins]["marketAddressText"]}
        imageSrc={cabinData["cabins"][cabins]["imageSrc"]}
        description={cabinData["cabins"][cabins]["description"]}
      />
    );
  });
};

export default function Home() {

  function InfoDisplaySection(props) {
    return (
      <Box backgroundColor={props.backgroundColor} sx={{ paddingBottom: "3vh", textAlign: "center" }}>
        <Container>
          <Typography variant="h2" sx={h2Titles}>{props.title}</Typography>
          <Typography sx={{ fontSize: "1.1rem", paddingTop: "3vh", paddingBottom: "1vh" }}>{props.description}</Typography>
          <img
            src={props.image}
            alt={props.imageAlt}
            style={{ objectFit: "cover", width: "100%"}}
          />
          <Link href="tel:+6785083343" sx={{ textDecoration: "none", color: "inherit" }} passHref>
            <Button variant="contained" sx={{ marginTop: "5px" }}>
              Call or text to book:
              (678)-508-3343
            </Button>
          </Link>
        </Container>
      </Box>
    )
  }

  return (
    <div>
      <SeoHeaderAndTracking
        title="ARCHS - Alpine Rental Cabins and Hospitality Systems"
        description="Discover your beautiful Helen Georgia Cabin, rent a golf cart, and schedule your boat tour today!"
        canonical="/"
      />
      <div>
        <main >
          <Box sx={{fontFamily:'Montserrat'}}>
            <Box sx={headerBanner} align="center" maxWidth="lg" disableGutters>
              <Container sx={{ alignSelf: "flex-end" }} disableGutters>
                <Typography fontWeight={600} sx={{ fontSize: "2.5rem" }} variant="h1">
                  ARCHS
                </Typography>
                <Typography variant="h2" fontWeight={525} sx={{ fontSize: "1.5rem", paddingTop: "1vh" }}>Helen Georgia Rental Cabins and Adventures</Typography>
              </Container>
            </Box>
            <Container sx={{ textAlign: "center", paddingBottom: "3vh", }} >
              <Typography variant="h2" sx={h2Titles}>Incredible Cabins and Chateaus</Typography>
              <Typography sx={{ fontSize: "1.1rem", paddingTop: "2vh" }}>From cozy mountain side cabins in alpine Helen to beautiful sea-side chateaus. </Typography>
              <div style={{ alignContent: "center", paddingTop: "3vh" }}>
                <Grid
                  container
                  sx={{ paddingBottom: "5px" }}
                  spacing={2}
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                >
                  {generateCabinCards()}
                </Grid>
              </div>
            </Container>
            <InfoDisplaySection
              title="Glorious Golf Carts"
              description="For our guests, we offer some of the best golf cart rental deals around. Ride around in style, get into town with your very own golf cart."
              image="/images/golfcart.webp"
              imageAlt="Helen Georgia Golf Cart Rental"
              backgroundColor="WhiteSmoke"
            />
            <InfoDisplaySection
              title="Wonderful Wine Tours"
              description="Private wine tours can be provided for our guests. Experience a day of riding to the finest wineries North East Georgia has to offer with breaks at some of the scenic natural beauty."
              image="/images/wine-tour-helen.webp"
              imageAlt="Helen Georgia Wine Tours"
              backgroundColor="default"
            />
            <InfoDisplaySection
              title="Beautiful Boat Rides"
              description="Catch a ride with your host on the boat. You and all your friends and family can have a relaxing afternoon out on the water."
              image="/images/boat.webp"
              imageAlt="Helen Georgia Boat Rides"
              backgroundColor="WhiteSmoke"
            />
          </Box>
          <div style={{ width: "100vw" }}>
            <LocationsMap />
          </div>
        </main>
      </div >
    </div >
  );
}
