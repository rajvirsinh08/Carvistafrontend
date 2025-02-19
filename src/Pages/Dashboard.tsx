import React from "react";
import cars24logo from "../Assets/Images/cars24logo.png";
import cars24heropage from "../Assets/Images/cars24heropage.png";
import buycar from "../Assets/Images/buycar.png";
import sellcar from "../Assets/Images/sellcar.png";
import newcar from "../Assets/Images/newcar.png";
import carloan from "../Assets/Images/carloan.png";
import vehiclehistory from "../Assets/Images/vehiclehistory.png";
import insurance from "../Assets/Images/insurance.png";
import servicerepair from "../Assets/Images/servicerepair.png";
import more from "../Assets/Images/more.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";


export default function DashBoard() {
  const navigate=useNavigate();

  return (

    <div className="container">
      {/* Header section */}
      <div
        className="header"
        style={styles.header}
      >
        <div
          className="innerheader"
          style={styles.innerheader}
        >
          {/* Logo and Location */}
          {/* <div className='headeritems'  style={{display:'flex',justifyContent: 'space-evenly',alignItems:'center',width:'100%'}}> */}
          <div
            className="headersection1"
            style={styles.headersection1}
          >
            <div className="Logosection" style={styles.logosection}>
              <p>
                <img
                  src={cars24logo}
                  style={styles.logoimage} alt="Cars24logo"
                />
              </p>
            </div>
            <div
              className="locationsection"
              style={styles.locationsection}
            >
              <div
                className="locationsectionborder"
                style={styles.locationsectionborder}
              >
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={styles.falocationdot}
                />
                <p
                  style={{
                    fontWeight: "bold",
                    fontFamily: "sans-serif",
                    paddingRight: "15px",
                  }}
                >
                  {" "}
                  location
                </p>
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </div>
          </div>
          <div
            className="headersection2"
            style={{ display: "flex", paddingRight: "60px", flex: 5 }}
          >
            <ul
              className="headermidsection"
              style={{ gap: "20px", display: "flex" }}
            >
              <div
                className="buysection"
                style={{ display: "flex", alignItems: "center", gap: "3px" }}
              >
                <li
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "16px",
                    listStyle: "none",
                  }}
                >
                  Buy used car
                </li>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={styles.fachevrondown}
                />
              </div>
              <div
                className="sellsection"
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <li
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "16px",
                    listStyle: "none",
                  }}
                >
                  Sell Car
                </li>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={styles.fachevrondown}
                />
              </div>
              <div
                className="carfinancesection"
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <li
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "16px",
                    listStyle: "none",
                  }}
                >
                  Car finance
                </li>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={styles.fachevrondown}
                />
              </div>
              <div
                className="newcarssection"
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <li
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "16px",
                    listStyle: "none",
                  }}
                >
                  New cars{" "}
                </li>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={styles.fachevrondown}
                />
              </div>
              <div
                className="carservicesection"
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <li
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "16px",
                    listStyle: "none",
                  }}
                >
                  Car services{" "}
                </li>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={styles.fachevrondown}
                />
              </div>
            </ul>
          </div>
          <div className="headersection3" style={styles.headersection3}>
            <div className="loginsection">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                }}
              >
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
                <button style={{height:'20px',width:'40px',color:'green'}} onClick={()=>navigate('/signin')}>Signup</button>
                <button style={{height:'20px',width:'40px',color:'green'}} onClick={()=>navigate('/signup')}>Signin</button>
                {/* <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    lineHeight: "1.2",
                  }}
                >
                  <span
                    style={{
                      fontSize: "14px",
                      color: "#757575",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Hello, Sign in
                  </span>
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "#212121",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Account
                  </span>
                </div>
                <ArrowDropDownIcon /> */}
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="herosection" style={{ position: "relative" }}>
        <img
          src={cars24heropage}
          style={{ height: "500px", width: "100%", objectFit: "cover" }}
          alt="heropage"
        ></img>
      </div>
      <div
        className="heropagecontainer"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div
          className="heroconatiner"
          style={{
            display: "absolute",
            top: "50px",
            height: "268px",
            width: "1024px",
            backgroundColor: "#FFFFFf",
            borderRadius: "18px",
            border: "1px solid black",
          }}
        >
          <div
            className="contentcontainer"
            style={{
              paddingTop: "24px",
              display: "flex",
              justifyContent: "space-evenly",
              paddingRight: "56px",
              paddingLeft: "56px",
            }}
          >
            <div className="buycontent">
              <img
                src={buycar}
                style={{ paddingTop: "14px" }}
                alt="buycar"
              ></img>
              <p>
                Buy used <br />
                cars
              </p>
            </div>
            <div className="sellcontent">
              <img src={sellcar} style={{}} alt="sellcar"></img>
              <p>Sell car</p>
            </div>
            <div className="newcarcontent">
              <img
                src={newcar}
                style={{ paddingTop: "3px" }}
                alt="newcar"
              ></img>
              <p>New car</p>
            </div>
            <div className="carloancontent">
              <img
                src={carloan}
                style={{ paddingTop: "2px" }}
                alt="carloan"
              ></img>
              <p>Car loan</p>
            </div>
            <div className="vehiclehistorycontent">
              <img src={vehiclehistory} style={{}} alt="vehiclehistory"></img>
              <p>Vehicle history</p>
            </div>
            <div className="servicerepaircontent">
              <img src={servicerepair} style={{}} alt="servicerepair"></img>
              <p>
                Service & <br />
                repair
              </p>
            </div>
            <div className="insurancecontent">
              <img
                src={insurance}
                style={{ paddingTop: "5px" }}
                alt="insurance"
              ></img>
              <p>Insurance</p>
            </div>
            <div className="morecontent">
              <img
                src={more}
                style={{ paddingTop: "3px", paddingBottom: "14px" }}
                alt="more"
              ></img>
              <p>More</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


const styles={
 header:{
  height: "80px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  overflow: "hidden",
},

innerheader:{
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  paddingRight: "100px",
  width: "1200px",
  marginRight: "0px",
},

headersection1:
{ 
  display: "flex", 
  paddingRight: "60px" 
},

logosection:{ 
  marginLeft: "5.6px", 
},

logoimage:{
   height: "39px",
   width: "80px", 
   marginRight: "5px",
},

locationsection:{ 
  display: "flex",
  alignItems: "center", 
  gap: "5px"
},

locationsectionborder:{
    height: "46px",
    width: "162.46px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FAFAFA",
},

falocationdot:
{
  marginRight: "10px" ,
},

fachevrondown:
{
  marginLeft: "5px" 
},

headersection3:
{
   display: "flex" 
}


};
