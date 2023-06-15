import React,{useState} from 'react';
import { Footer, Header, Novelties } from '../components';
import FlippedModal from '../components/FlippedModal';

const Login: React.FC = () => {
  window.scrollTo(0, 0);
  
  return (
    <>
      <Header />
     <FlippedModal/>
      <Footer />
    </>
  );
};

export default Login;
