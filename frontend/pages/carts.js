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

// MUI Icons
import SportsBarIcon from '@mui/icons-material/SportsBar';

// Components
import SeoHeaderAndTracking from "../components/SeoHeaderAndTracking";
import CallButton from "../components/CallButton";

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
    paddingTop: "2vh"
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
                                    <Typography variant="h3" sx={mainText}>The convenience of a cart available right at your room, a great price, and ARCHS hospitality are why our golf cart rentals are the best option for you. Don't worry, you don't need to be an ARCHS guest to rent your cart from us. </Typography>
                                    <CallButton/>
                                </CardContent>
                            </Container>
                        </Box>
                    </Card>
                    <Card sx={cards}>
                        <Box sx={{ backgroundColor: "WhiteSmoke", padding: "3vh" }}>
                            <Container sx={{ backgroundColor: "white" }} maxWidth="md">
                                <CardContent>
                                    <SportsBarIcon sx={{ height: "100px", width: "100%" }} />
                                    <Typography variant="h2" sx={h2Titles}>Discount Beer With Your Cart Rental!</Typography>
                                    <Divider sx={dividerCss} variant="insert" />
                                    <Typography sx={mainText}>With every ARCHS cart rental, you will get discount beers at locations around Helen!</Typography>
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
                                    <Typography sx={mainText}>Avoid the crowds and find easy parking.</Typography>
                                    <Typography sx={mainText}>You&apos;ll cruise the Helen, GA Innsbruck country club community in style with a golf cart rental from your friendly hosts at ARCHS. </Typography>
                                    <Typography sx={mainText}>Feel the breeze in your hair as you ride to downtown Helen, GA in about 5 minutes. </Typography>
                                    <Typography sx={mainText}>The over 50 restaurants in Helen, GA are within your reach!</Typography>
                                    <Typography sx={mainText}>Multiple waterfalls and swimming holes are within your carting range.</Typography>
                                    <Typography sx={mainText}>Carting to Octoberfest in your Lederhosen is the best way to get into beer-drinking sprit (as long as you&apos;re not the DD.)</Typography>
                                </CardContent>
                            </Container>
                        </Box>
                    </Card>
                    <Card sx={cards}>
                        <Box sx={{ backgroundColor: "WhiteSmoke", padding: "3vh" }}>
                            <Container sx={{ backgroundColor: "white" }} maxWidth="md">
                                <CardContent>
                                    <Typography variant="h2" sx={h2Titles}>Why Renting a Golf Cart in Helen Georgia From ARCHS Will Make Your Trip Better!</Typography>
                                    <Divider sx={dividerCss} variant="insert" />
                                    <Typography sx={mainText}>Whether you are coming to see the spectacular fall colors in the Blue Ridge Mountains, to cool off tubing the hooch in summer, or enjoy the shops and Bavarian architecture during Octoberfest, there is no better way to get around Helen, GA than in a Golf Cart. There are several attractions and activities that Alpine Helen has to offer its visitors, but they are all better visited in your very own golf cart. Just imagine yourself exploring the scenic roads, visiting the beautiful waterfalls, and walking the scenic trails of this beautiful location, then carting into town for the shopping, drinks and restaurants. Here's why renting a golf cart in Alpine Helen from ARCHS is going to make your trip so much more enjoyable. We can help make sure that getting around is easy and parking doesn't become a nightmare. Let us know if you have more questions or need more information about renting a golf cart in Alpine Helen.</Typography>
                                    <Typography variant="h3" sx={h3Titles}>What Are the Benefits of Renting a Golf Cart?</Typography>
                                    <Typography sx={mainText}>There are many benefits to renting a golf cart while you’re on vacation. First, they are an easy and convenient way to explore the area and see the sights. Next, they provide an extra level of comfort and convenience that is hard to obtain while walking or hiking. Finally, golf carts are affordable and a great way to save money on your trip. You can easily explore a larger area, take breaks whenever you want or stay out as long as you like. If you have young children, they can ride in comfort while you walk or hike. It’s also a great way to get healthy by walking and enjoying the fresh air. Plus, you can go at your own pace and not worry about getting lost or being too far from food and water.</Typography>
                                    <Typography variant="h3" sx={h3Titles}>Why You Should Rent a Golf Cart in Alpine Helen</Typography>
                                    <Typography sx={mainText}>There are many reasons why you should rent a golf cart in Alpine Helen. The first is that many attractions and activities are best enjoyed with a golf cart. Second, Alpine Helen is a small and easy-to-navigate town, but walking from one end takes ages. Finally, the weather in Alpine Helen is unpredictable and can be quite hot, you can overheat quickly walking up and down the alpine hills A golf cart is a great way to stay out of the elements and have fun all day long. There are many attractions and activities that are best enjoyed with a golf cart. For example, you can enjoy the Skyhomes Miniature Golf Course, the Alpine Helen Trail, or the Fudge Shop, then ride across town to one of the waterfalls or the waterpark all without the long treck in between. Simply put, they are the best way to get around in this small town, which makes them a must-have in Alpine Helen. </Typography>
                                    <Typography variant="h3" sx={h3Titles}>How to Rent a Golf Cart in Alpine Helen from ARCHS</Typography>
                                    <Typography sx={mainText}>If you want to rent a golf cart in Alpine Helen, you have several options. You can call or text us, just click on the call button below. </Typography>
                                    <CallButton/>
                                    <Typography variant="h3" sx={h3Titles}>FAQ: Is it easy to find parking when you rent a golf cart in Alpine Helen?</Typography>
                                    <Typography sx={mainText}>Yes, finding parking is super easy when you rent a golf cart in Alpine Helen, GA. First, you can park at any of the many tourist attractions that offer golf cart rentals. Next, you can easily find street parking near your desired location. Finally, there are plenty of paid parking lots available near the major attractions.</Typography>
                                    <Typography variant="h3" sx={h3Titles}>Conclusion</Typography>
                                    <Typography sx={mainText}>Renting a golf cart in Alpine Helen is an easy and fun way to see the sights and enjoy the beautiful scenery and architecture. You can go at your own pace, take breaks whenever you need to, and avoid dealing with crowds. Plus, golf carts are affordable and a great way to save money on your trip. If you are coming to see the spectacular fall colors in the Blue Ridge Mountains or dink in the worlds longest Octoberfest, there is no better way to enjoy yourself than in a golf cart from ARCHS. There are many attractions and activities that Alpine Helen has to offer its visitors, but better enjoyed when renting a golf cart to get around.</Typography>
                                </CardContent>
                            </Container>
                        </Box>
                    </Card>
                </Box>
            </Box>
        </div >
    );
}
