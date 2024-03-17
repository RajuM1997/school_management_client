import { Box, Container, Grid, Typography } from "@mui/material";
import "./Footer.css";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import fb from "../../../assets/social/facebook.png";
import wh from "../../../assets/social/whatsapp.png";
import yt from "../../../assets/social/youtube.png";
import { Link } from "react-router-dom";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MailIcon from "@mui/icons-material/Mail";

const Footer = () => {
  return (
    <Box className="footer_main">
      <Container maxWidth={"xl"}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3} lg={3}>
            <h5 className="common_footer_title">Easy School</h5>
            <p className="common_footer_para">
              Your hassle-free solution for school management. Simplify
              administration and enhance efficiency with us!
            </p>
            <Box className="contact_info">
              <Box className="call_icon">
                <AddIcCallIcon />
              </Box>
              <Typography
                sx={{ fontSize: "16px", fontWeight: 600, color: "#fff" }}
                component={"h6"}
              >
                01711062807
              </Typography>
            </Box>
            <Box className="contact_info">
              <Box className="call_icon">
                <LocationOnOutlinedIcon />
              </Box>
              <Typography
                sx={{ fontSize: "16px", fontWeight: 600, color: "#fff" }}
                component={"h6"}
              >
                Mirpur-1, Dhaka, Bangladesh
              </Typography>
            </Box>
            <Box className="contact_info">
              <Box className="call_icon">
                <MailIcon />
              </Box>
              <Typography
                sx={{ fontSize: "16px", fontWeight: 600, color: "#fff" }}
                component={"h6"}
              >
                info@easyschool.com
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <h5 className="common_footer_title">Useful Links</h5>
            <Box className="footer_item">
              <Link to={""}> মাধ্যমিক ও উচ্চমাধ্যমিক শিক্ষা বোর্ড, ঢাকা</Link>
              <Link to={""}> প্রাথমিক শিক্ষা অধিদপ্তর</Link>
              <Link to={""}> এনসিটিবি</Link>
              <Link to={""}>বাংলাদেশ কারিগরি শিক্ষা বোর্ড</Link>
              <Link to={""}> শিক্ষা মন্ত্রণালয়</Link>

              {/* <Typography
                sx={{ fontSize: "16px", fontWeight: 600, color: "#fff" }}
                component={"h6"}
              >
                House no- 24, Road no- 03, Monsurabad R/A, Dhaka
              </Typography> */}
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <h5 className="common_footer_title">Get in Touch</h5>
            <Box className="footer_item">
              <Link to={""}>Notice board</Link>
              <Link to={""}>Festival photos</Link>
              <Link to={""}>Book list</Link>
              <Link to={""}>Syllabus</Link>
              <Link to={""}>Contact us</Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <h5 className="common_footer_title">Join Easy School</h5>
            <Box className="footer_item">
              <Link to={""}>How it work</Link>
              <Link to={""}> Login/SignUp</Link>
            </Box>

            <Box className="footer_img_container">
              <img src={fb} alt="" />
              <img src={wh} alt="" />
              <img src={yt} alt="" />
            </Box>
          </Grid>
        </Grid>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "14px",
            color: "#fff",
            fontWeight: "400",
            pt: 3,
          }}
          component={"p"}
        >
          @Copyright © “Easy School”   || All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
