import "./Navbar.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}
const drawerWidth = 240;
const navItems = [
  { title: "Home", url: "/home" },
  { title: "Student corner", url: "/student-corner" },
  { title: "About us", url: "/about-us" },
  { title: "Festival Photos", url: "/festival" },
  { title: "Contact Us", url: "/contact-us" },
];

const Navbar = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [showDropDown, setShowDropDown] = React.useState(false);
  const [showAboutDropDown, setShowAboutDropDown] = React.useState(false);

  const handleMouseEnter = (type: string) => {
    if (type === "student") {
      setShowDropDown(true);
    } else if (type === "about") {
      setShowAboutDropDown(true);
    }
  };

  const handleMouseLeave = (type: string) => {
    if (type === "student") {
      setShowDropDown(false);
    } else if (type === "about") {
      setShowAboutDropDown(false);
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
      className="mobile_nav_container"
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        Easy School
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link to={item.url}>{item.title}</Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  console.log({ showDropDown });

  return (
    <div>
      <Box className="nav_main_container">
        <CssBaseline />
        <AppBar className="nav_container">
          <Container maxWidth={"xl"} component="nav">
            {/* <Toolbar style={{ padding: "0px", margin: "0px" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  fontSize: "18px",
                  fontWeight: "700",
                  display: { xs: "none", sm: "block" },
                }}
              >
                Easy School
              </Typography>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map((item) => (
                  <Button key={item.title} sx={{ color: "#fff" }}>
                    <Link to={item.url}>{item.title}</Link>
                  </Button>
                ))}
              </Box>
            </Toolbar> */}

            <Toolbar style={{ padding: "0px", margin: "0px" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  fontSize: "18px",
                  fontWeight: "700",
                  display: { xs: "none", sm: "block" },
                }}
              >
                Easy School
              </Typography>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Button sx={{ color: "#fff" }}>
                  <Link to={"/"}>Home</Link>
                </Button>
                <Button
                  sx={{ color: "#fff" }}
                  onMouseEnter={() => handleMouseEnter("student")}
                  onMouseLeave={() => handleMouseLeave("student")}
                  className="drop_down_main"
                >
                  <Link to={"/student-corner"} className="drop_down_menu">
                    Student corner <KeyboardArrowDownIcon />
                  </Link>
                  {showDropDown && (
                    <Box className="drop_down_menu_item">
                      <Link to={"/book-list"}>Book list</Link>
                      <Link to={"/dress-code"}>Dress code</Link>
                      <Link to={"/syllabus"}>Syllabus</Link>
                      <Link to={"/class-routing"}>Class routing</Link>
                      <Link to={"/exam-routing"}>Exam routing</Link>
                    </Box>
                  )}
                </Button>
                <Button
                  sx={{ color: "#fff" }}
                  className="drop_down_main"
                  onMouseEnter={() => handleMouseEnter("about")}
                  onMouseLeave={() => handleMouseLeave("about")}
                >
                  <Link to={"/about-us"} className="drop_down_menu">
                    About us <KeyboardArrowDownIcon />
                  </Link>
                  {showAboutDropDown && (
                    <Box className="drop_down_menu_item">
                      <Link to={"/book-list"}>Book list</Link>
                      <Link to={"/dress-code"}>Dress code</Link>
                      <Link to={"/syllabus"}>Syllabus</Link>
                      <Link to={"/class-routing"}>Class routing</Link>
                      <Link to={"/exam-routing"}>Exam routing</Link>
                    </Box>
                  )}
                </Button>
                <Button sx={{ color: "#fff" }}>
                  <Link to={"/festival"}>Festival Photos</Link>
                </Button>
                <Button sx={{ color: "#fff" }}>
                  <Link to={"/contact-us"}>Contact Us</Link>
                </Button>
                <Button sx={{ color: "#fff" }}>
                  <Link to={"/register"}>Register</Link>
                </Button>
                <Button sx={{ color: "#fff" }}>
                  <Link to={"/sign-in"}>Sign in</Link>
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </div>
  );
};

export default Navbar;
