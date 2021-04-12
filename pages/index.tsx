import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

//Sections of the page
import Nav from "../components/Sections/Nav";
import Hero from "../components/Sections/Hero";
import Details from "../components/Sections/Details";
import Customers from "../components/Sections/Customers";
import Reviews from "../components/Sections/Reviews";
import ExtraBenifits from "../components/Sections/ExtraBenifits";
import Perks from "../components/Sections/Perks";
import Footer from "../components/Sections/Footer";

const HomePage = () => {
return (
    <>
      <Head>
        <title>Ramp | The Corporate Card Built for Savings</title>
      </Head>

      <Nav />
      <Hero />
      <Details />
      <Customers />
      <Reviews />
      <ExtraBenifits />
      <Perks />
      <Footer />
      
    </>
  );
};
export default HomePage;