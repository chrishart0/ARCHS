import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

// MUI Components
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

// Components
import SeoHeaderAndTracking from "../components/SeoHeaderAndTracking";
import LocationsMap from "../components/map";

// Assets
import lodge55 from "../public/images/lodge-55-front.webp";

// Data
import { Divider } from "@mui/material";

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
    color: "text.secondary",
    textAlign: "center",
    fontSize: "2.5rem",
    paddingTop: "1vh"
};

const cards = {
    width: "100%"
}

const h3Titles = {
    color: "text.secondary",
    textAlign: "left",
    fontSize: "1.5rem",
    paddingTop: "1vh"
};

const priceTitles = {
    color: "text.secondary",
    textAlign: "left",
    fontSize: "2rem",
    paddingTop: "2vh"
};

const mainText = {
    fontSize: "1.25rem",
    paddingTop: "2vh"
}

const mainBody = {
    textAlign: "left"
}

const dividerCss = {
    marginTop: "1vh",
    marginLeft: "10vw",
    marginRight: "10vw",
}

export default function Carts() {

    return (
        <div>
            <SeoHeaderAndTracking
                title="ARCHS - Helen GA Golf Cart Rentals"
                description="Discover the best Helen GA golf cart rentals!"
                canonical="/carts"
            />
            <Box sx={{ fontFamily: 'Montserrat' }}>
                <Box sx={headerBanner} align="center" maxWidth="lg" disableGutters>
                    <Container sx={{ alignSelf: "flex-end" }} disableGutters>
                        <Typography fontWeight={600} sx={{ fontSize: "2.5rem" }} variant="h1">
                            Golf Carts
                        </Typography>
                        <Typography variant="h2" fontWeight={525} sx={{ fontSize: "1.5rem", paddingTop: "1vh" }}>Helen Georgia Golf Cart Rentals</Typography>
                    </Container>
                </Box>
                <Box sx={mainBody} >
                    <Card sx={cards}>
                        <Box>
                            <Container maxWidth="sm">
                                <CardContent>
                                    <Typography variant="h2" sx={h2Titles}>ARCHS Golf Cart Rentals</Typography>
                                    <Divider sx={dividerCss} variant="insert" />
                                    <Typography variant="h3" sx={h3Titles}>ARCHS Golf Cart Rentals are THE most popular cart rentals for ARCHS guests.</Typography>
                                    <Typography variant="h3" sx={mainText}>Convinience of a cart available right at your room, a great price, and ARCHS hospitality are why our golf cart rentals are the best option for you.</Typography>
                                    <Typography variant="h2" sx={priceTitles}>Only $100/day!</Typography>
                                    <Link href="tel:+6785083343" sx={{ textDecoration: "none", color: "inherit" }} passHref>
                                        <Button variant="contained" sx={{ marginTop: "3vh" }}>
                                            Call or text to reserve:
                                            (678)-508-3343
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Container>
                        </Box>
                    </Card>

                    <Card sx={cards}>
                        <Box sx={{ backgroundColor: "WhiteSmoke", padding: "3vh" }}>
                            <Container sx={{ backgroundColor: "white" }} maxWidth="md">
                                <CardContent>
                                    <Typography variant="h2" sx={h2Titles}>Top 5 Reasons Why Golf Cart Rentals Are So Popular?</Typography>
                                    <Divider sx={dividerCss} variant="insert" />
                                    <Typography sx={mainText}>Avoid the crowds and find easy parking </Typography>
                                    <Typography sx={mainText}>You'll cruise the Helen, GA Innsbruck country club community in style with a golf cart rental from your friendly hosts at ARCHS. </Typography>
                                    <Typography sx={mainText}>Feel the breeze in your hair as you cruise to downtown Helen, GA in about 5 minutes. </Typography>
                                    <Typography sx={mainText}>The over 50 restaurants in Helen, GA are within your reach!</Typography>
                                    <Typography sx={mainText}>Multiple waterfalls and swimming holes are withing your carting range.</Typography>
                                    <Typography sx={mainText}>Carting to Octoberfest in your Lederhosen is the best way to get into beer drinking sprit (as long as you're not the DD.)</Typography>
                                </CardContent>
                            </Container>
                        </Box>
                    </Card>
                </Box>
                <div style={{ width: "100vw" }}>
                    <LocationsMap />
                </div>
            </Box>
        </div >
    );
}
