import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

import Offcanvas from "react-bootstrap/Offcanvas";
import { CartContext } from "../context/CartContext";
interface CartLinkProps {
  open: () => void;
  close: () => void;
}
function SideBar({ open, close }: CartLinkProps) {
    const { cartItems, deleteFromCart ,handleAddToCart } = useContext(CartContext);


  const handleDeleteItem = (itemId: number) => {
    deleteFromCart(itemId);
  };
  return (
    <>
      {/* <Button variant="primary" onClick={open}>
        Launch
      </Button> */}

      <Offcanvas show={true} onHide={close} style={{background:'rgb(224 190 162)'}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
          <ListGroup >
            {cartItems.map((c) => (
              <ListGroup.Item key={c.id} style={{background:'rgb(224 190 162)',fontSize:'12px',padding:'25px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <img src={c.image} width={40} style={{borderRadius:'50%'}}/>
                <span style={{marginLeft:'10px',color:'#ab7373'}}>{c.title}</span>
                <span style={{marginLeft:'10px',color:'#ab7373'}}>INR {c.price}</span>
                <span style={{ marginLeft: "10px", color: "#ab7373" }}>Quantity: {c.quantity}</span>
                <i className="fa fa-trash" onClick={()=>handleDeleteItem(c.id)} style={{cursor:'pointer'}}></i>
                </ListGroup.Item>
            ))}
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideBar;
