//React
import React, { useState, useRef } from 'react';
import axios from 'axios';

//Mui
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

//React-Router
// import { Link } from 'react-router-dom';

//Assets
import carimage from '../Assets/Images/carimage.jpg' 
import carimg from '../Assets/Images/carimg.jpg';

// import apple from 'Assets/Images/apple.png';
import { validateEmail } from '../Utils/validateEmail';
import { validatePassword } from '../Utils/validatePassword';
import { Messages } from '../Constants/Messages';
import { CSSProperties } from 'react';
// import { validateContact } from '../Utils/validateContact';

//Utils

const Signin: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  // const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [contact, setContact] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(validateEmail(value) ? '' : Messages.InvalidEmailError);
  };

  // const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value;
  //   setName(value);
  //   setNameError(value ? '' : Messages.EmptyNameError);
  // };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    // setPasswordError(validatePassword(value) ? '' : Messages.InvalidPasswordError);
  };

  // const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value;
  //   setContact(value);
  //   setContactError(validateContact(value)?'': Messages.InvalidContactError);
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password ) {
      // setNameError(!name ?Messages.EmptyNameError : '');
      setEmailError(!email ? Messages.EmptyEmailError : '');
      setPasswordError(!password ? Messages.EmptyPasswordError : '');
      // setContactError(!contact ? Messages.EmptyContactError : '');
      return;
    }
    const userData = { email, password };
    try {
      // Define the expected response type
      interface SignInResponse {
        token: string;
      }
      const response = await axios.post<SignInResponse>('http://localhost:5000/user/signin', userData, {
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('Login Success:', response.data);
      localStorage.setItem('token', response.data.token); // Store token for authentication
      alert('Login successful!');
    } catch (error) {
      console.error('Error signing in:', error);
      alert('Invalid email or password.');
    }
  };

  return (
    <div style={styles.maincontainer}>
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src={carimg} alt="logo" style={styles.carImage} />
      </div>
      <div style={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <h1 style={{marginBottom:'50px',fontSize:'48px',fontFamily:'Berlin Sans FB Demi'}}>Sign in </h1>
          </div>
          <Box sx={styles.inputBox}>
            <TextField fullWidth label="Email" value={email} onChange={handleEmailChange} inputRef={emailRef} />
            <span style={styles.errorText}>{emailError}</span>
          </Box>

          


          <Box sx={styles.inputBox}>
            <TextField fullWidth label="Password" type="password" value={password} onChange={handlePasswordChange} inputRef={passwordRef} />
            <span style={styles.errorText}>{passwordError}</span>
          </Box>

         <div style={styles.buttonContainer}>
          <Button type="submit" variant="contained" sx={styles.signupButton}>Sign In</Button>
          </div>
          <a
            href="/forgetpassword"
            style={{
              textDecoration: "none",
              color: "dark grey",
              fontSize: "18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
           Forgot your password?
            </a>
          {/* <p style={styles.orText}>OR</p>
          <div style={styles.appleContainer}>
            <img src={apple} alt="Apple Logo" style={styles.appleImage} />
          </div>
          <p>Already have an account? <Link to="/signin">Sign In</Link></p> */}
        </form>
      </div>
    </div>
    </div>
  );
};

const styles : { [key: string]: CSSProperties }= {
 maincontainer: {
    height: '500px',
    width: '1100px',
    borderRadius: '12px',
    margin: 'auto', // Centers the container
    position: 'absolute', // Positions it absolutely
    top: '50%', // Moves the top to 50% of the screen
    left: '50%', // Moves the left to 50% of the screen
    transform: 'translate(-50%, -50%)'
  },  
  buttonContainer:{marginTop:'15px',paddingBottom:'20px'},
  container: { display: 'flex', alignItems: 'center', justifyContent: 'center',background:'white',borderRadius:'16px' },
  imageContainer: { flex: 1.3, height:'500px' },
  carImage: { width: '95%',height:"500px" ,  borderBottomLeftRadius: '12px', 
    borderTopLeftRadius: '12px'},
  formContainer: { flex: 1, padding: '20px' },
  title: { fontSize: '32px', marginBottom: '10px' },
  inputBox: {marginBottom:'20px',height:'60px' },
  errorText: { color: 'red', fontSize: '16px',textOverflow:'hidden',display:'block' },
  signupButton: { width: '100%', backgroundColor: '#EF6E0B',borderRadius:'30px',height:'48px',fontSize:'18px ' },
  // orText: { textAlign: 'center', margin: '20px 0' },
  // appleContainer: { textAlign: 'center', marginTop: '10px' },
  // appleImage: { width: '200px' },
};

export default Signin;
