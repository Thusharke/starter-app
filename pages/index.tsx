import { useEffect, useState } from 'react';
import Head from 'next/head';

//Sections of the page
import Nav from '../components/Sections/Nav';
import Hero from '../components/Sections/Hero';
import Details, { DetailsData } from '../components/Sections/Details';
import Customers from '../components/Sections/Customers';
import Reviews from '../components/Sections/Reviews';
import ExtraBenifits from '../components/Sections/ExtraBenifits';
import Perks from '../components/Sections/Perks';
import Footer from '../components/Sections/Footer';

const HomePage = () => {
   var [navData, setNavData] = useState(null);
   var [heroData, setHeroData] = useState(null);
   var [detailsData, setDetailsData] = useState<DetailsData>(null);
   var [customerData, setCustomerData] = useState(null);
   var [reviewData, setReviewData] = useState(null);
   var [extraBenefits, setExtraBenifitsData] = useState(null);
   var [perksData, setPerksData] = useState(null);
   var [footerData, setFooterData] = useState(null);

   var grabData = async () => {
      var res = await import(`../content/${'data'}.md`);
      var res2 = await import(`../content/${'data_2'}.md`);
      var data = res.default;
      var data2 = res2.default;
      //sending data
      setNavData(data.attributes.navbar);
      setHeroData(data.attributes.heroData);
      setDetailsData(data.attributes.detailsData);
      setCustomerData(data.attributes.customersData);
      setReviewData(data.attributes.reviewData);
      setExtraBenifitsData(data.attributes.extraBenefitsData);
      setPerksData(data.attributes.perksData);
      setFooterData(data2.attributes.FooterData);
   };

   useEffect(() => {
      setTimeout(grabData, 2000);
   });

   return (
      <div className="border-box bg-bgColor overflow-x-hidden">
         <Head>
            <title>Ramp | The Corporate Card Built for Savings</title>
         </Head>

         <Nav content={navData} />
         <Hero content={heroData} />
         <Details content={detailsData} />
         <Customers content={customerData} />
         <Reviews content={reviewData} />
         <ExtraBenifits content={extraBenefits} />
         <Perks content={perksData} />
         <Footer content={footerData} />
      </div>
   );
};
export default HomePage;
