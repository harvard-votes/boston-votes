import React from "react";
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Calendar from "../../components/Calendar";





export default () => (
  <div className="container mx-auto">
    
    <Header />

    <Calendar />




    <Footer />
  
  </div>
    

  
);
