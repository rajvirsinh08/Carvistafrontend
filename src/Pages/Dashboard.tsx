import React, { useState } from "react";
import cars24logo from "../Assets/Images/cars24logo.png";
import carvista from "../Assets/Images/carvista.png";

import cars24heropage from "../Assets/Images/cars24heropage.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Modal from "@mui/joy/Modal";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Signup from "./Signup";
import Signin from "./Signin";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";


export default function DashBoard() {
  const [open, setOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<"signup" | "signin" | null>(null);
  // const [isHovered, setIsHovered] = useState(false);

  // const [searchQuery, setSearchQuery] = useState<string>("");

  // const handleSearch = () => {
  //   console.log("Searching for:", searchQuery);
  // };

  return (
    <div>
      <React.Fragment>
        <Modal
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
          open={open}
          onClose={() => setOpen(false)}
          sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <Sheet
            variant="outlined"
            sx={{ maxWidth: 500, borderRadius: "md", p: 3, boxShadow: "lg" }}
          >
            <Typography
              component="h2"
              id="modal-title"
              level="h4"
              textColor="inherit"
              sx={{ fontWeight: "lg", mb: 1 }}
            >
              {modalType === "signup" ? <Signup /> : <Signin />}
            </Typography>
          </Sheet>
        </Modal>
      </React.Fragment>

      {/* Header section */}
      <div className="header" style={styles.header}>
        <div className="innerheader container" style={styles.innerheader}>
          <div className="headersection1" style={styles.headersection1}>
            <div className="Logosection" style={styles.logosection}>
              <p>
                <img src={carvista} style={styles.logoimage} alt="Cars24logo" />
              </p>
            </div>
            <div className="locationsection" style={styles.locationsection}>
              <div className="locationsectionborder" style={styles.locationsectionborder}>
                <FontAwesomeIcon icon={faLocationDot} style={styles.falocationdot} />
                <p style={{ fontWeight: "bold", fontFamily: "sans-serif", paddingRight: "15px" }}>
                  location
                </p>
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </div>
          </div>
          <div className="headersection2" style={{ display: "flex", paddingRight: "60px", flex: 5 }}>
            <ul className="headermidsection" style={{ gap: "20px", display: "flex" }}>
              <div className="buysection" style={{ display: "flex", alignItems: "center", gap: "3px" }}>
                <li style={{ fontFamily: "sans-serif", fontSize: "16px", listStyle: "none" }}>
                  Buy used car
                </li>
                <FontAwesomeIcon icon={faChevronDown} style={styles.fachevrondown} />
              </div>
              <div className="sellsection" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <li style={{ fontFamily: "sans-serif", fontSize: "16px", listStyle: "none" }}>
                  Sell Car
                </li>
                <FontAwesomeIcon icon={faChevronDown} style={styles.fachevrondown} />
              </div>
              <div className="carfinancesection" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <li style={{ fontFamily: "sans-serif", fontSize: "16px", listStyle: "none" }}>
                  Car finance
                </li>
                <FontAwesomeIcon icon={faChevronDown} style={styles.fachevrondown} />
              </div>
              <div className="newcarssection" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <li style={{ fontFamily: "sans-serif", fontSize: "16px", listStyle: "none" }}>
                  New cars
                </li>
                <FontAwesomeIcon icon={faChevronDown} style={styles.fachevrondown} />
              </div>
              <div className="carservicesection" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <li style={{ fontFamily: "sans-serif", fontSize: "16px", listStyle: "none" }}>
                  Car services
                </li>
                <FontAwesomeIcon icon={faChevronDown} style={styles.fachevrondown} />
              </div>
            </ul>
          </div>
          <div className="headersection3" style={styles.headersection3}>
            <div className="loginsection">
              <div style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AccountCircleIcon />
                </div>

                {/* Account Section */}

                {/* Signup Button */}
                <Button 
                 variant="outlined"
                 color="info"
                  style={{
                    // height: "40px",
                    // width: "100%",
                    // background: "#EF6E0B"  ,
                    // borderRadius: "10px",
                    
                    // border: "none",
                    cursor: "pointer",
                    // marginBottom: "10px",
                  }}
                  onClick={() => {
                    setModalType("signup");
                    setOpen(true);
                  }}
                >
                  Signup
                </Button>

                {/* Signin Button */}
                <Button
                  variant="outlined"
                 color="info"
                  // style={{
                  //   // height: "40px",
                  //   // width: "100%",
                  //   // background: "#EF6E0B",
                  //   // borderRadius: "10px",
                  //   // color: "white",
                  //   // border: "none",
                  //   // cursor: "pointer",
                  // }}
                  onClick={() => {
                    setModalType("signin");
                    setOpen(true);
                  }}
                >
                  Signin
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="herosection" style={{ position: "relative",zIndex:-1 ,marginBottom:'120px'}}>
        <img
          src={cars24heropage}
          style={{ height: "500px", width: "100%", objectFit: "cover"}}
          alt="heropage"
        />
      </div>

      <div className="heropagecontainer" style={{ height:'278px',width:'1200px',position:'absolute',top:'90%',left:'50%', transform: 'translate(-50%,-50%)'}}>
        <div style={styles.container1}>
          {/* Top Menu */}
          <div style={styles.menu}>
            {menuItems.map((item, index) => (
              <div key={index} style={styles.menuItem}>
                <img src={item.icon} alt={item.label} style={styles.icon1} />
                <span
                  style={{
                    ...styles.label,
                    color: index === 0 ? "#FF7A00" : "#333",
                    fontWeight: index === 0 ? "bold" : "normal",
                  }}
                >
                  {item.label}
                </span>
                {index === 0 && <div style={styles.underline} />}
              </div>
            ))}
          </div>

          {/* Search Bar */}
          <div style={styles.searchContainer}>
            <TextField
              variant="outlined"
              placeholder="Search for your favourite cars"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon style={{ color: "#666" }} />
                  </InputAdornment>
                ),
                style: {
                  borderRadius: "15px",
                  backgroundColor: "#F7F7F7",
                  paddingLeft: "10px",
                },
              }}
            />
          </div>

          {/* Car Brands */}
          <div style={styles.brandsContainer}>
            {brands.map((brand, index) => (
              <div key={index} style={styles.brandBox}>
                <img src={brand.logo} alt={brand.name} style={styles.brandLogo} />
              </div>
            ))}
            <Button variant="contained" style={styles.viewAllButton}>
              View all cars
            </Button>
          </div>

        </div>

      </div>
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h2 style={{ fontSize: "28px", fontWeight: "bold" }}>Our Services</h2>
        <div style={{ display: "flex", gap: "20px", overflowX: "auto", padding: "20px" }}>
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                width: "300px",
                borderRadius: "10px",
                overflow: "hidden",
                backgroundColor: service.bgColor,
                color: "white",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                style={{ width: "100%", height: "180px", objectFit: "cover" }}
              />
              <div style={{ padding: "20px" }}>
                <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>{service.title}</h3>
                <p style={{ fontSize: "16px", fontWeight: "bold" }}>{service.description}</p>
                <ul style={{ listStyle: "none", padding: 0, fontSize: "14px", lineHeight: "1.5" }}>
                  {service.details.map((detail, i) => (
                    <li key={i}>&#10003; {detail}</li>
                  ))}
                </ul>
                <button
                  style={{
                    marginTop: "15px",
                    padding: "10px",
                    width: "100%",
                    backgroundColor: "white",
                    border: "none",
                    color: service.bgColor,
                    fontSize: "14px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    borderRadius: "5px",
                  }}
                >
                  {service.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Footer section */}
      <div style={styles.footerContainer}>
        {/* Logo and Tagline */}
        <div style={styles.topSection}>
          <img
            src="https://via.placeholder.com/80x30" // Replace with actual logo URL
            alt="Cars24 Logo"
            style={styles.logo}
          />
          <span style={styles.tagline}>Better drives, better lives</span>
        </div>

        {/* Footer Content */}
        <div style={styles.footerContent}>
          {/* Column 1 - Company */}
          <div style={styles.column}>
            <h4 style={styles.heading}>COMPANY</h4>
            {["About Us", "Careers", "Blog", "Article", "News", "Privacy Policy", "Sustainability", "Testimonials"].map(
              (item, index) => (
                <p key={index} style={styles.link}>
                  {item}
                </p>
              )
            )}
          </div>

          {/* Column 2 - Discover */}
          <div style={styles.column}>
            <h4 style={styles.heading}>DISCOVER</h4>
            {[
              "Buy used car",
              "Sell used car",
              "Used car valuation",
              "Motor insurance",
              "Check & pay challan",
              "Check vehicle details",
              "Explore new cars",
              "Scrap your car",
            ].map((item, index) => (
              <p key={index} style={styles.link}>
                {item}
              </p>
            ))}
          </div>

          {/* Column 3 - Help & Support */}
          <div style={styles.column}>
            <h4 style={styles.heading}>HELP & SUPPORT</h4>
            {["FAQs", "Security", "Contact us", "Become a partner", "RC transfer status", "Terms & conditions"].map(
              (item, index) => (
                <p key={index} style={styles.link}>
                  {item}
                </p>
              )
            )}
          </div>

          {/* Column 4 - Social Links & Apps */}
          <div style={styles.column}>
            <h4 style={styles.heading}>SOCIAL LINKS</h4>
            <div style={styles.socialIcons}>
              <FaFacebook style={styles.icon} />
              <FaTwitter style={styles.icon} />
              <FaInstagram style={styles.icon} />
              <FaYoutube style={styles.icon} />
              <FaLinkedin style={styles.icon} />
            </div>

            <h4 style={styles.heading}>Download App</h4>
            <div style={styles.appLinks}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Download_on_the_App_Store_Badge.svg"
                alt="App Store"
                style={styles.appIcon}
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                style={styles.appIcon}
              />
            </div>

            <h4 style={styles.heading}>WE ARE GLOBAL</h4>
            <div style={styles.globalSection}>
              <span style={styles.globalItem}>🇦🇺 Australia</span>
              <span style={styles.globalItem}>🇦🇪 UAE</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div style={styles.bottomSection}>
          <p>© 2025 CARS24, All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

// Define styles with React.CSSProperties type
const styles: { [key: string]: React.CSSProperties } = {
  header: {
    height: "80px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
  },
  innerheader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    paddingRight: "100px",
    width: "100%",
    marginRight: "0px",
  },
  headersection1: {
    display: "flex",
    paddingRight: "60px",
  },
  logosection: {
    marginLeft: "5.6px",
  },
  logoimage: {
    height: "39px",
    width: "80px",
    marginRight: "5px",

  },
  locationsection: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  locationsectionborder: {
    height: "46px",
    width: "162.46px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FAFAFA",
  },
  falocationdot: {
    marginRight: "10px",
  },
  fachevrondown: {
    marginLeft: "5px",
  },
  headersection3: {
    display: "flex",
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    padding: "10px",
  },
  container1: {
    backgroundColor: "#fff",
    borderRadius: "15px",
    padding: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "80%",
    margin: "auto",
  },
  menu: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "15px",
  },
  menuItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    position: "relative",
  },
  icon: {
    width: "30px",
    height: "30px",
  },
  label: {
    fontSize: "14px",
    marginTop: "5px",
  },
  underline: {
    height: "3px",
    width: "50%",
    backgroundColor: "#FF7A00",
    borderRadius: "10px",
    marginTop: "5px",
  },
  brandsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",
  },
  brandBox: {
    width: "50px",
    height: "50px",
    borderRadius: "10px",
    backgroundColor: "#F7F7F7",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
  },
  brandLogo: {
    width: "40px",
    height: "40px",
    objectFit: "contain",
  },
  viewAllButton: {
    backgroundColor: "#FF7A00",
    color: "#fff",
    padding: "10px 15px",
    borderRadius: "10px",
    fontWeight: "bold",
  },
  footerContainer: {
    background: "linear-gradient(to right, #F6FAF7, #F9FBF7)",
    padding: "30px 50px",
    textAlign: "left",
  },
  topSection: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  logo: {
    width: "80px",
    marginRight: "10px",
  },
  tagline: {
    fontSize: "16px",
    color: "#666",
  },
  footerContent: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  column: {
    flex: "1",
    minWidth: "200px",
    marginBottom: "20px",
  },
  heading: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  link: {
    fontSize: "14px",
    color: "#333",
    marginBottom: "6px",
    cursor: "pointer",
  },
  socialIcons: {
    display: "flex",
    gap: "10px",
    marginBottom: "10px",
  },
  icon1: {
    fontSize: "20px",
    cursor: "pointer",
    color: "#333",
  },
  appLinks: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "10px",
  },
  appIcon: {
    width: "120px",
    cursor: "pointer",
  },
  globalSection: {
    display: "flex",
    gap: "10px",
    fontSize: "14px",
    color: "#333",
  },
  globalItem: {
    display: "flex",
    alignItems: "center",
  },
  bottomSection: {
    textAlign: "center",
    marginTop: "20px",
    fontSize: "14px",
    color: "#666",
  },


};

// Menu Items (Replace with actual icons)
const menuItems = [
  { label: "Buy used car", icon: "https://via.placeholder.com/30" },
  { label: "Sell car", icon: "https://via.placeholder.com/30" },
  { label: "New cars", icon: "https://via.placeholder.com/30" },
  { label: "Car loan", icon: "https://via.placeholder.com/30" },
  { label: "Insurance", icon: "https://via.placeholder.com/30" },
  { label: "Personal loan", icon: "https://via.placeholder.com/30" },
  { label: "Pay challan", icon: "https://via.placeholder.com/30" },
  { label: "More", icon: "https://via.placeholder.com/30" },
];

// Car Brands (Replace with actual logos)
const brands = [
  { name: "Maruti Suzuki", logo: "https://via.placeholder.com/40" },
  { name: "Honda", logo: "https://via.placeholder.com/40" },
  { name: "Hyundai", logo: "https://via.placeholder.com/40" },
  { name: "Tata", logo: "https://via.placeholder.com/40" },
  { name: "Renault", logo: "https://via.placeholder.com/40" },
  { name: "Ford", logo: "https://via.placeholder.com/40" },
  { name: "Mahindra", logo: "https://via.placeholder.com/40" },
  { name: "Nissan", logo: "https://via.placeholder.com/40" },
];
const services = [
  {
    title: "BUY",
    description: "Drive home your dream car",
    details: ["140 quality checks", "7-day return", "Finance it your way"],
    buttonText: "View all cars",
    image: "car-buy.jpg", // Replace with actual image URL
    bgColor: "#033c73",
  },
  {
    title: "LOANS24",
    description: "Make your dreams real with a personal loan",
    details: ["Attractive interest rates", "Disbursal in 5 mins", "Get upto Rs 10 Lakhs"],
    buttonText: "Apply now",
    image: "loan.jpg", // Replace with actual image URL
    bgColor: "#007bff",
  },
  {
    title: "CREDIT CARDS",
    description: "All your credit card options in one place",
    details: ["30+ Card options", "Digital process", "100% transparency"],
    buttonText: "Apply now",
    image: "credit-card.jpg", // Replace with actual image URL
    bgColor: "#001f3f",
  },
];