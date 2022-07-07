import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Header from "../../components/Header";




export default () => (
  <div className="container mx-auto">
    
    <Header />

    <Hero />
    <Footer />
  
  </div>
    

  
);
