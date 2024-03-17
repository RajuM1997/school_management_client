import { Box, Container } from "@mui/material";
import "./Home.css";
import Banner from "../../../components/home/banner/Banner";
import HowItWork from "../../../components/home/howItWork/HowItWork";
import Gallery from "../../../components/home/gallery/Gallery";
import OurEvent from "../../../components/home/event/OurEvent";
import CommonModal from "../../../components/home/modal/CommonModal";
import WelcomeSpeech from "../../../components/home/welcomeSpeech/WelcomeSpeech";

const Home = () => {
  return (
    <Box component={"main"} className="home_main">
      <Banner />
      <Container maxWidth={"xl"}>
        <WelcomeSpeech />
        <Gallery />
        <HowItWork />
        <OurEvent />
        <CommonModal />
        <h2>this is home page</h2>
      </Container>
    </Box>
  );
};

export default Home;
