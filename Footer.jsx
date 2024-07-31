import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.column}>
          <h3>Get to Know Us</h3>
          <a href="/">Careers</a>
          <a href="/">Blog</a>
          <a href="/">About Amazon</a>
          <a href="/">Investor Relations</a>
          <a href="/">Amazon Devices</a>
          <a href="/">Amazon Science</a>
        </div>
        <div className={styles.column}>
          <h3>Make Money with Us</h3>
          <a href="/">Sell on Amazon</a>
          <a href="/">Sell Your Services on Amazon</a>
          <a href="/">Sell on Amazon Business</a>
          <a href="/">Sell Your Apps on Amazon</a>
          <a href="/">Become an Affiliate</a>
          <a href="/">Advertise Your Products</a>
          <a href="/">Self-Publish with Us</a>
        </div>
        <div className={styles.column}>
          <h3>Amazon Payment Products</h3>
          <a href="/">Amazon Rewards Visa Signature Cards</a>
          <a href="/">Amazon.com Store Card</a>
          <a href="/">Amazon Business Card</a>
          <a href="/">Amazon Business Line of Credit</a>
          <a href="/">Shop with Points</a>
          <a href="/">Reload Your Balance</a>
          <a href="/">Amazon Currency Converter</a>
        </div>
        <div className={styles.column}>
          <h3>Let Us Help You</h3>
          <a href="/">Your Account</a>
          <a href="/">Your Orders</a>
          <a href="/">Shipping Rates & Policies</a>
          <a href="/">Returns & Replacements</a>
          <a href="/">Manage Your Content and Devices</a>
          <a href="/">Amazon Assistant</a>
          <a href="/">Help</a>
        </div>
      </div>
      <div className={styles.socialMedia}>
        <a href="/" aria-label="Facebook"><FaFacebookF /></a>
        <a href="/" aria-label="Twitter"><FaTwitter /></a>
        <a href="/" aria-label="Instagram"><FaInstagram /></a>
        <a href="/" aria-label="LinkedIn"><FaLinkedinIn /></a>
        <a href="/" aria-label="YouTube"><FaYoutube /></a>
      </div>
      <div className={styles.footerBottom}>
        <p>© 2024, Amazon Clone, Inc. or its affiliates</p>
        <div className={styles.footerBottomLinks}>
          <a href="/">Conditions of Use</a>
          <a href="/">Privacy Notice</a>
          <a href="/">Interest-Based Ads</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
