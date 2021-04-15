import { NextPage, GetStaticProps } from 'next';
import {useEffect, useState} from "react";
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

  var [navData, setNavData] = useState(null);
  var [heroData, setHeroData] = useState(null);
  var [detailsData, setDetailsData] = useState(null);
  var [customerData, setCustomerData] =  useState(null); 
  var [reviewData, setReviewData] = useState(null);

  var grabData = async () =>{
    var res = await import(`../content/${'data'}.md`);
    var data = res.default;

    //sending data
    setNavData(data.attributes.Navbar);
    setHeroData(data.attributes.HeroData);
    setDetailsData(data.attributes.DetailsData);
    setCustomerData(data.attributes.CustomersData);
    setReviewData(data.attributes.ReviewData);
  }
  useEffect(() => {
    setTimeout(grabData,2000);
  })

return (
    <div className="border-box bg-bgColor overflow-x-hidden">
      <Head>
        <title>Ramp | The Corporate Card Built for Savings</title>
      </Head>

      <Nav content={navData} />
      <Hero content={heroData} />
      <Details content={detailsData}/>
      <Customers content={customerData} />
      <Reviews content={reviewData} />
      <ExtraBenifits />
      <Perks />
      <Footer />

    </div>
  );
};
export default HomePage;