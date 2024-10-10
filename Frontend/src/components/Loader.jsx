import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return <div style={ {display: 'flex',
    
  justifyContent: 'center',
  alignItems: 'center',
   }} >
  <Spinner animation="border" variant="info" />;
  </div>
  
};

export default Loader;
