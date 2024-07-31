import React from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import './ListBar.css';

function ListBar() {
  return (
    <div className="listbar-wrapper">
      <ul>
        <li id='ico'><GiHamburgerMenu style={{ color: "white", fontSize: "1.2rem" }} /></li>

        
        <a href="/" style={{ fontSize: "17px", textDecoration: "none", marginRight: "14px", color: "white" }}>All</a>
        <a href="/" style={{ fontSize: "17px", textDecoration: "none", marginRight: "14px", color: "white" }}>Fresh</a>   
        <a href="/" style={{ fontSize: "17px", textDecoration: "none", marginRight: "14px", color: "white" }}>Amazon miniTV</a>
        <a href="/" style={{ fontSize: "17px", textDecoration: "none", marginRight: "14px", color: "white" }}>Sell</a>
        <a href="/" style={{ fontSize: "17px", textDecoration: "none", marginRight: "14px", color: "white" }}>Best Sellers</a>
        <a href="/" style={{ fontSize: "17px", textDecoration: "none", marginRight: "14px", color: "white" }}>Today's Deals</a>
        <a href="/" style={{ fontSize: "17px", textDecoration: "none", marginRight: "14px", color: "white" }}>Mobiles</a>
        <a href="/" style={{ fontSize: "17px", textDecoration: "none", marginRight: "14px", color: "white" }}>Prime</a>
        <a href="/" style={{ fontSize: "17px", textDecoration: "none", marginRight: "14px", color: "white" }}>Customer Service</a>
        <a href="/" style={{ fontSize: "17px", textDecoration: "none", marginRight: "14px", color: "white" }}>Electronics</a>
        <a href="/" style={{ fontSize: "17px", textDecoration: "none", marginRight: "14px", color: "white" }}>Fashion</a>
        <a href="/" style={{ fontSize: "17px", textDecoration: "none", marginRight: "14px", color: "white" }}>New Releases</a>
        <a href="/" style={{ fontSize: "17px", textDecoration: "none", marginRight: "14px", color: "white" }}>Home & Kitchen</a>
        <a href="/" style={{ fontSize: "17px", textDecoration: "none", marginRight: "14px", color: "white" }}>Amazon Pay</a>
        <a href="/" style={{ fontSize: "17px", textDecoration: "none", marginRight: "14px", color: "white" }}>Computers</a>
        <a href="/" style={{ fontSize: "17px", textDecoration: "none", marginRight: "14px", color: "white" }}>Books</a>

      </ul>
    </div>
  );
}

export default ListBar;





  












