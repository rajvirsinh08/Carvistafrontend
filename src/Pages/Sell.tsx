import {
  faChevronDown,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { FaMapMarkerAlt, FaUserCircle } from "react-icons/fa";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import cars24logo from "../Assets/Images/cars24logo.png";
import sellerPerson from "../Assets/Images/sellerPerson.jpg";
// import '../Styles/temp1';
import '../Styles/temp.css';
type Step = "brand" | "year" | "model" | "type" | "fuel" | "transmission";

const Sell: React.FC = () => {
  // const [step, setStep] = useState<"brand" | "year" | "model">("brand");
  // const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  // const [selectedYear, setSelectedYear] = useState<string | null>(null);
  // const [selectedModel, setSelectedModel] = useState<string | null>(null);

  // const brands = ["Honda", "Toyota", "Hyundai", "Ford", "Kia", "Skoda"];
  const year = ["2024", "2023", "2022", "2021", "2020","2019","2018","2017","2016","2015","2014","2013","2012","2011","2010"];
  // const model: Record<string, string[]> = {
  //   Honda: ["Amaze", "City", "Elevate", "Jazz", "WR-V"],
  //   Toyota: ["Innova", "Fortuner", "Glanza"],
  //   Hyundai: ["Creta", "i20", "Venue"],
  //   Ford: ["Ecosport", "Endeavour"],
  //   Kia: ["Seltos", "Sonet"],
  //   Skoda: ["Kushaq", "Superb"],
  // }
  const [step, setStep] = useState<Step>("brand");
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedFuel, setSelectedFuel] = useState<string | null>(null);
  const [selectedTransmission, setSelectedTransmission] = useState<
    string | null
  >(null);

  const brands: string[] = [
    "Honda",
    "Toyota",
    "Hyundai",
    "Ford",
    "Kia",
    "Skoda",
  ];
  const years: string[] = ["2024", "2023", "2022", "2021", "2020"];
  const carTypes: string[] = ["Sedan", "SUV", "Hatchback", "Coupe"];
  const fuelTypes: string[] = ["Petrol", "Diesel", "Electric", "Hybrid"];
  const transmissions: string[] = ["Manual", "Automatic"];

  type CarModels = {
    [brand: string]: string[];
  };

  const models: CarModels = {
    Honda: ["Amaze", "City", "Elevate", "Jazz", "WR-V"],
    Toyota: ["Innova", "Fortuner", "Glanza"],
    Hyundai: ["Creta", "i20", "Venue"],
    Ford: ["Ecosport", "Endeavour"],
    Kia: ["Seltos", "Sonet"],
    Skoda: ["Kushaq", "Superb"],
  };
  const [modalType, setModalType] = useState<"signup" | "signin" | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="w-full min-h-screen">
      {/* Navbar */}
      <div className="header" style={styles.header}>
        <div className="innerheader container" style={styles.innerheader}>
          <div className="headersection1" style={styles.headersection1}>
            <div className="Logosection" style={styles.logosection}>
              <p>
                <img
                  src={cars24logo}
                  style={styles.logoimage}
                  alt="Cars24logo"
                />
              </p>
            </div>
            <div className="locationsection" style={styles.locationsection}>
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
                  New cars
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
                  Car services
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

                {/* Account Section */}

                {/* Signup Button */}
                <button
                  style={{
                    height: "40px",
                    width: "100%",
                    background: "#EF6E0B",
                    borderRadius: "10px",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    marginBottom: "10px",
                  }}
                  onClick={() => {
                    setModalType("signup");
                    setOpen(true);
                  }}
                >
                  Signup
                </button>

                {/* Signin Button */}
                <button
                  style={{
                    height: "40px",
                    width: "100%",
                    background: "#EF6E0B",
                    borderRadius: "10px",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setModalType("signin");
                    setOpen(true);
                  }}
                >
                  Signin
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center flex flex-col md:flex-row items-center justify-center p-10 min-h-[80vh]"
        style={{ backgroundImage: `url(${sellerPerson})` }}
      >
        <div
          style={{
            color: "white",
            fontFamily: "Arial Black",
            position: "absolute",
            top: "330px",
            left: "80px",
          }}
        >
          <h1 className="text-3xl font-bold " style={{ fontSize: "40px" }}>
            Sell Car in & <br />
            Get Instant Payment
          </h1>
          <p className="mt-2">Get doorstep pick-up and instant payment</p>
        </div>

        <div style={{ position: "absolute", top: "5%", left: "65%" }}>
       
        <div className="form-container hide-scrollbar">
       <h3>{selectedBrand ? selectedBrand : "Select Car"} {selectedYear ? selectedYear : ""}</h3>

      <div className="navigation hide-scrollbar">
         {["brand", "year", "model", "type", "fuel", "transmission"].map((item) => (
          <button
            key={item}
            onClick={() => setStep(item as Step)}
            style={{borderRadius:'12px'}}
            disabled={
              (item === "year" && !selectedBrand) ||
              (item === "model" && !selectedYear) ||
              (item === "type" && !selectedModel) ||
              (item === "fuel" && !selectedType) ||
              (item === "transmission" && !selectedFuel)
            }
            className={`nav-button ${step === item ? "active" : ""} hide-scrollbar`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>

      {step === "brand" && (
        <div>
          <h4>Select Car Brand</h4>
          <div className="button-group">
            {brands.map((brand) => (
              <button key={brand} onClick={() => { setSelectedBrand(brand); setStep("year"); }}>
                {brand}
              </button>
            ))}
          </div>
        </div>
      )}

{step === "year" && (
  <div
    style={{
      flex: 1,
      padding: "20px",
      backgroundColor: "#fff",
      borderRadius: "10px",
      width: "100%",
      maxWidth: "400px",
      margin: "auto",
    }}
  >
    <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>
      Select Car Manufacturing Year
    </h4>

    {/* Scrollable Year List */}
    <div
      style={{
        maxHeight: "250px",
        overflowY: "auto",
        paddingRight: "5px",
      }}
    >
      {year.map((year) => (
        <button
          key={year}
          onClick={() => {
            setSelectedYear(year);
            setStep("model");
          }}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "10px",
            borderRadius: "10px",
            fontSize: "16px",
            fontWeight: selectedYear === year ? "bold" : "normal",
            backgroundColor: selectedYear === year ? "#E6F0FF" : "#fff",
            border: selectedYear === year ? "1px solid #003366" : "1px solid #ddd",
            color: "#003366",
            cursor: "pointer",
            textAlign: "center",
            display: "block",
          }}
        >
          {year}
        </button>
      ))}
    </div>
  </div>
)}


{step === "model" && selectedBrand && (
  <div style={{ padding: "16px", borderRadius: "10px", backgroundColor: "#fff", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", maxWidth: "400px", margin: "auto" }}>
    <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>Select Car Model</h4>
    
   
    <div style={{ maxHeight: "300px", overflowY: "auto" }}>
      {models[selectedBrand]?.map((model) => (
        <button
          key={model}
          onClick={() => { setSelectedModel(model); setStep("type"); }}
          style={{
            display: "block",
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            backgroundColor: selectedModel === model ? "#0046be" : "#fff",
            color: selectedModel === model ? "#fff" : "#333",
            fontWeight: "bold",
            fontSize: "16px",
            textAlign: "center",
            marginBottom: "8px",
            cursor: "pointer",
            transition: "background 0.3s, color 0.3s",
          }}
        >
          {model}
        </button>
      ))}
    </div>
  </div>
)}


{step === "type" && (
  <div>
    <h4>Select Car Type</h4>
    {carTypes.map((type) => (
      <button
        key={type}
        onClick={() => {
          setSelectedType(type);
          setStep("fuel");
        }}
        style={{
          display: "block",
          width: "100%",
          padding: "12px",
          fontSize: "16px",
          border: "1px solid #ddd",
          borderRadius: "5px",
          textAlign: "center",
          backgroundColor: selectedType === type ? "#E8F0FE" : "#fff",
          fontWeight: selectedType === type ? "bold" : "normal",
          color: "#000",
          cursor: "pointer",
          marginBottom: "8px",
        }}
      >
        {type}
      </button>
    ))}
  </div>
)}


      {step === "fuel" && (
        <div>
          <h4>Select Fuel Type</h4>
          {fuelTypes.map((fuel) => (
            <button key={fuel} onClick={() => { setSelectedFuel(fuel); setStep("transmission"); }}
               style={{
          display: "block",
          width: "100%",
          padding: "12px",
          fontSize: "16px",
          border: "1px solid #ddd",
          borderRadius: "5px",
          textAlign: "center",
          backgroundColor: selectedType ===fuel ? "#E8F0FE" : "#fff",
          fontWeight: selectedType === fuel ? "bold" : "normal",
          color: "#000",
          cursor: "pointer",
          marginBottom: "8px",
        }}>
              {fuel}
            </button>
          ))}
        </div>
      )}

      {step === "transmission" && (
        <div>
          <h4>Select Transmission</h4>
          {transmissions.map((trans) => (
            <button key={trans} onClick={() => setSelectedTransmission(trans)}
            style={{
              display: "block",
              width: "100%",
              padding: "12px",
              fontSize: "16px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              textAlign: "center",
              backgroundColor: selectedType ===trans ? "#E8F0FE" : "#fff",
              fontWeight: selectedType === trans ? "bold" : "normal",
              color: "#000",
              cursor: "pointer",
              marginBottom: "8px",
            }}>
              {trans}
            </button>
          ))}
        </div>
      )}

      {selectedTransmission && (
        <div className="selected-info">
          <h3>Selected: {selectedBrand} {selectedYear} {selectedModel} {selectedType} {selectedFuel} {selectedTransmission}</h3>
        </div>
      )}
    </div>

          {/* <div
            style={{
              width: "400px",
              padding: "20px",
              borderRadius: "10px",
              backgroundColor: "#fff",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h3>
              {selectedBrand ? selectedBrand : "Select Car"}{" "}
              {selectedYear ? selectedYear : ""}
            </h3>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <button
                onClick={() => setStep("brand")}
                style={{
                  flex: 1,
                  padding: "10px",
                  backgroundColor: step === "brand" ? "#003366" : "#ddd",
                  color: step === "brand" ? "#fff" : "#000",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Brand
              </button>
              <button
                onClick={() => setStep("year")}
                disabled={!selectedBrand}
                style={{
                  flex: 1,
                  padding: "10px",
                  backgroundColor: step === "year" ? "#003366" : "#ddd",
                  color: step === "year" ? "#fff" : "#000",
                  border: "none",
                  cursor: selectedBrand ? "pointer" : "not-allowed",
                }}
              >
                Year
              </button>
              <button
                onClick={() => setStep("model")}
                disabled={!selectedYear}
                style={{
                  flex: 1,
                  padding: "10px",
                  backgroundColor: step === "model" ? "#003366" : "#ddd",
                  color: step === "model" ? "#fff" : "#000",
                  border: "none",
                  cursor: selectedYear ? "pointer" : "not-allowed",
                }}
              >
                Model
              </button>
            </div>

            {step === "brand" && (
              <div>
                <h4>Select Car Brand</h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {brands.map((brand) => (
                    <button
                      key={brand}
                      onClick={() => {
                        setSelectedBrand(brand);
                        setStep("year");
                      }}
                      style={{
                        padding: "10px",
                        backgroundColor:
                          selectedBrand === brand ? "#003366" : "#eee",
                        color: selectedBrand === brand ? "#fff" : "#000",
                        border: "1px solid #ccc",
                        cursor: "pointer",
                      }}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === "year" && (
              <div>
                <h4>Select Car Manufacturing Year</h4>
                <div>
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => {
                        setSelectedYear(year);
                        setStep("model");
                      }}
                      style={{
                        display: "block",
                        width: "100%",
                        padding: "10px",
                        backgroundColor:
                          selectedYear === year ? "#003366" : "#eee",
                        color: selectedYear === year ? "#fff" : "#000",
                        border: "1px solid #ccc",
                        marginBottom: "5px",
                        cursor: "pointer",
                      }}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === "model" && selectedBrand && (
              <div>
                <h4>Select Car Model</h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {models[selectedBrand]?.map((model) => (
                    <button
                      key={model}
                      onClick={() => setSelectedModel(model)}
                      style={{
                        padding: "10px",
                        backgroundColor:
                          selectedModel === model ? "#003366" : "#eee",
                        color: selectedModel === model ? "#fff" : "#000",
                        border: "1px solid #ccc",
                        cursor: "pointer",
                      }}
                    >
                      {model}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {selectedModel && (
              <div style={{ marginTop: "20px", textAlign: "center" }}>
                <h3>
                  Selected: {selectedBrand} {selectedYear} {selectedModel}
                </h3>
              </div>
            )}
          </div>
          {/* <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-md">
          <h2 className="text-lg font-bold mb-3">Enter your car number</h2>
          <input
            type="text"
            placeholder="IND XX XX XXXX"
            value={carNumber}
            onChange={(e) => setCarNumber(e.target.value)}
            className="w-full p-2 border rounded mb-4"
          />
          <button className="w-full bg-orange-500 text-white py-2 rounded font-bold">GET CAR PRICE</button>
          <div className="mt-4 text-center text-gray-500">Or</div>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {carBrands.map((brand, index) => (
              <button key={index} className="border p-2 rounded text-gray-700 hover:bg-gray-100">
                {brand}
              </button>
            ))}
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
};
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
export default Sell;
// import { useState } from "react";
// // import "./CarSelectionForm.css"; // Import the CSS file
// import '../Styles/temp.css';

// type Step = "brand" | "year" | "model" | "type" | "fuel" | "transmission";

// const CarSelectionForm: React.FC = () => {
// const [step, setStep] = useState<Step>("brand");
// const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
// const [selectedYear, setSelectedYear] = useState<string | null>(null);
// const [selectedModel, setSelectedModel] = useState<string | null>(null);
// const [selectedType, setSelectedType] = useState<string | null>(null);
// const [selectedFuel, setSelectedFuel] = useState<string | null>(null);
// const [selectedTransmission, setSelectedTransmission] = useState<string | null>(null);

// const brands: string[] = ["Honda", "Toyota", "Hyundai", "Ford", "Kia", "Skoda"];
// const years: string[] = ["2024", "2023", "2022", "2021", "2020"];
// const carTypes: string[] = ["Sedan", "SUV", "Hatchback", "Coupe"];
// const fuelTypes: string[] = ["Petrol", "Diesel", "Electric", "Hybrid"];
// const transmissions: string[] = ["Manual", "Automatic"];

// type CarModels = {
//   [brand: string]: string[];
// };

// const models: CarModels = {
//   Honda: ["Amaze", "City", "Elevate", "Jazz", "WR-V"],
//   Toyota: ["Innova", "Fortuner", "Glanza"],
//   Hyundai: ["Creta", "i20", "Venue"],
//   Ford: ["Ecosport", "Endeavour"],
//   Kia: ["Seltos", "Sonet"],
//   Skoda: ["Kushaq", "Superb"],
// };

//   return (
//     <div className="form-container hide-scrollbar">
//       <h3>{selectedBrand ? selectedBrand : "Select Car"} {selectedYear ? selectedYear : ""}</h3>

//       <div className="navigation hide-scrollbar">
//         {["brand", "year", "model", "type", "fuel", "transmission"].map((item) => (
//           <button
//             key={item}
//             onClick={() => setStep(item as Step)}
//             disabled={
//               (item === "year" && !selectedBrand) ||
//               (item === "model" && !selectedYear) ||
//               (item === "type" && !selectedModel) ||
//               (item === "fuel" && !selectedType) ||
//               (item === "transmission" && !selectedFuel)
//             }
//             className={`nav-button ${step === item ? "active" : ""} hide-scrollbar`}
//           >
//             {item.charAt(0).toUpperCase() + item.slice(1)}
//           </button>
//         ))}
//       </div>

//       {step === "brand" && (
//         <div>
//           <h4>Select Car Brand</h4>
//           <div className="button-group">
//             {brands.map((brand) => (
//               <button key={brand} onClick={() => { setSelectedBrand(brand); setStep("year"); }}>
//                 {brand}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}

//       {step === "year" && (
//         <div>
//           <h4>Select Car Manufacturing Year</h4>
//           {years.map((year) => (
//             <button key={year} onClick={() => { setSelectedYear(year); setStep("model"); }}>
//               {year}
//             </button>
//           ))}
//         </div>
//       )}

//       {step === "model" && selectedBrand && (
//         <div>
//           <h4>Select Car Model</h4>
//           {models[selectedBrand]?.map((model) => (
//             <button key={model} onClick={() => { setSelectedModel(model); setStep("type"); }}>
//               {model}
//             </button>
//           ))}
//         </div>
//       )}

//       {step === "type" && (
//         <div>
//           <h4>Select Car Type</h4>
//           {carTypes.map((type) => (
//             <button key={type} onClick={() => { setSelectedType(type); setStep("fuel"); }}>
//               {type}
//             </button>
//           ))}
//         </div>
//       )}

//       {step === "fuel" && (
//         <div>
//           <h4>Select Fuel Type</h4>
//           {fuelTypes.map((fuel) => (
//             <button key={fuel} onClick={() => { setSelectedFuel(fuel); setStep("transmission"); }}>
//               {fuel}
//             </button>
//           ))}
//         </div>
//       )}

//       {step === "transmission" && (
//         <div>
//           <h4>Select Transmission</h4>
//           {transmissions.map((trans) => (
//             <button key={trans} onClick={() => setSelectedTransmission(trans)}>
//               {trans}
//             </button>
//           ))}
//         </div>
//       )}

//       {selectedTransmission && (
//         <div className="selected-info">
//           <h3>Selected: {selectedBrand} {selectedYear} {selectedModel} {selectedType} {selectedFuel} {selectedTransmission}</h3>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CarSelectionForm;
// /* Hide scrollbar for webkit browsers */
