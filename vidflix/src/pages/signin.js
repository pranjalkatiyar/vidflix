import React,{useState , useContext} from 'react';
import {FirebaseContext} from '../context/firebase.js';
import Form from '../components/form';
import { FooterContainer } from '../containers/footers';
import { HeaderContainer } from '../containers/header';
import * as ROUTES from '../constants/routes';
import {useNavigate} from 'react-router-dom';
// import {getAuth,sendSignInLinkToEmail} from '../firebase/auth';


export default function SignIn(){
  const history=useNavigate();
  const {firebase} = useContext(FirebaseContext);
  const [emailAddress,setEmailAddress]=useState();
  const [password,setPassword]=useState();
  const [error,setError]=useState('');

const isInValid = password=='' || emailAddress=='';


const handleSignin=(event)=>{
  event.preventDefault();
 
  firebase
  .auth()
  .signInWithEmailAndPassword(emailAddress, password)
  .then(()=>{
history(ROUTES.BROWSE);
  })
  .catch((error)=>{
    setEmailAddress(' ');
    setPassword();
    setError(error.message);
  })

}
return (
    <>
    <HeaderContainer>
    <Form>
      <Form.Title>Sign In</Form.Title>
      {error && <Form.Error>{error}</Form.Error>}
      <Form.Base onSubmit={handleSignin} method="POST">
      <Form.Input 
      placeholder="Email Address" 
      type="email" 
      name="email" 
      value={emailAddress} 
      onChange={(e)=>setEmailAddress(e.target.value)}/>
      
      <Form.Input 
      placeholder="Password" 
      type="password" 
      name="password"
      autoComplete="off"
       value={password}
       onChange={(e)=>setPassword(e.target.value)}/>

      <Form.Submit type="submit" disabled={isInValid}>Sign In
      </Form.Submit>
      </Form.Base>

      <Form.Text>
        New to Vidflix ? <Form.Link to="/signup">Sign Up</Form.Link>
      </Form.Text>
      <Form.TextSmall>
      This page is protected by Google reCAPTCHA to ensure you're
      not a bot. Learn more.
      </Form.TextSmall> 
      <Form.Link to="/forgotpassword">Forgot Password</Form.Link>
   
    </Form>

    </HeaderContainer>
    <FooterContainer />
    </>
  )
}
