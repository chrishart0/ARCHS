import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

// MUI Components
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Carousel from 'react-material-ui-carousel'

// Components
import SeoHeaderAndTracking from "../components/SeoHeaderAndTracking";
import CabinCard from "../components/CabinCard";
import CallButton from "../components/CallButton";

// Assets
import lodge55 from "../public/images/lodge-55-front.webp";
import downtown from "../public/images/downtown-helen-christmas.webp";
import firePlaces from "../public/images/room-photos/fire-places.webp";
import frontDoor from "../public/images/room-photos/front-door.webp";
import kingRoom from "../public/images/room-photos/king-room.webp";
import kingRoomSeat from "../public/images/room-photos/king-room-seat-angle.webp";


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
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .5)), url(${downtown.src}) `,
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

// const generateCabinCards = () => {
//   return Object.keys(cabinData["cabins"]).map((cabins) => {
//     return (
//       <CabinCard
//         key={cabins}
//         name={cabinData["cabins"][cabins]["name"]}
//         link={cabinData["cabins"][cabins]["link"]}
//         rating={cabinData["cabins"][cabins]["rating"]}
//         marketAddress={cabinData["cabins"][cabins]["marketAddressText"]}
//         imageSrc={cabinData["cabins"][cabins]["imageSrc"]}
//         description={cabinData["cabins"][cabins]["description"]}
//       />
//     );
//   });
// };

function Item(props) {
  return (
    <Paper >
      <div style={{ position: 'relative'}} >
        <Image
          src={props.item.image}
          priority={true}
          layout="intrinsic"
          width={1634}
          height={763}
          alt="ARCHS Helen, GA Rentals"
        />
      </div>
      {/* <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button> */}
    </Paper>
  )
}

var items = [
  {
    name: "Fire Place",
    description: "Nice king room with fire place",
    image: firePlaces
  },
  {
    name: "King Room",
    description: "Nice king room",
    image: frontDoor.src
  },
  {
    name: "King Room",
    description: "Nice king room",
    image: kingRoom.src
  },
  {
    name: "King Room",
    description: "Nice king room",
    image: kingRoomSeat.src
  }
]

export default function Home() {

  function DetailsPageButton(props) {
    if (props.link) {
      return (
        <Link href={props.link} sx={{ textDecoration: "none", color: "inherit" }} passHref>
          <Button variant="contained" sx={{marginTop: "10px"}}>
            Learn More
          </Button>
        </Link>
      );
    }
  }

  function InfoDisplaySection(props) {
    return (
      <Box backgroundColor={props.backgroundColor} sx={{ paddingBottom: "3vh", textAlign: "center" }}>
        <Container>
          <Typography variant="h2" sx={h2Titles}>{props.title}</Typography>
          <Typography sx={{ fontSize: "1.25rem", paddingTop: "3vh", paddingBottom: "1vh" }}>{props.description}</Typography>
          <img
            src={props.image}
            alt={props.imageAlt}
            style={{ objectFit: "cover", width: "100%" }}
          />
          <CallButton />
          <br/>
          <DetailsPageButton link={props.link}/>
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
          <Box sx={{ fontFamily: 'Montserrat' }}>
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
              <Typography sx={{ fontSize: "1.25rem", paddingTop: "2vh" }}>From cozy mountainside cabins in alpine Helen to beautiful sea-side chateaus. </Typography>
              <Carousel navButtonsAlwaysVisible={true}>
                {
                  items.map((item, i) => <Item key={i} item={item} />)
                }
              </Carousel>
              <div style={{ alignContent: "center", paddingTop: "3vh" }}>
                <CallButton />
              </div>
            </Container>
            <InfoDisplaySection
              title="Glorious Golf Carts"
              description="For our guests, we offer some of the best golf cart rental deals around. Ride around in style, with your very own golf cart."
              image="/images/golfcart.webp"
              imageAlt="Helen Georgia Golf Cart Rental"
              backgroundColor="WhiteSmoke"
              link="/carts"
            />
            <InfoDisplaySection
              title="Wonderful Wine and Boat Tours"
              description="Private wine and boat tours can be provided for our guests. Experience a day of riding to the finest wineries North East Georgia has to offer with breaks at some of the scenic natural beauty. When the weather is warm you, your friends, and family can have a relaxing afternoon out on the water of Chatuge Lake in beautiful Hiawassee."
              image="/images/wine-tour-helen.webp"
              imageAlt="Helen Georgia Wine Tours"
              backgroundColor="default"
            />
            {/* <InfoDisplaySection
              title="Beautiful Boat Rides"
              description="Catch a ride with your host on the boat. You and all your friends and family can have a relaxing afternoon out on the water."
              image="/images/boat.webp"
              imageAlt="Helen Georgia Boat Rides"
              backgroundColor="WhiteSmoke"
            /> */}
          </Box>
        </main>
      </div >
    </div >
  );
}
