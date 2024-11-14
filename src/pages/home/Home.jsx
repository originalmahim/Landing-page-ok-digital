import React from "react";

import Container from "../../components/Container";

// import Headers from "./Headers";
import WhyWeBest from "./WhyWeBest";
// import CustomerReview from "./CustomerReview";
import Faq from "./Faq";

import Help from "./Help";
import Review2 from "./Review2";
import Orders from "./Orders";
import Headers2 from "./Headers2";
import Banner from "./Banner";

import Bangu from "./Bangu";
import Bannerr from "./Bannerr";
import GiftSection from "./GiftSection";
import Review from "./Review";
import Headers from "./Headers";

const Home = () => {
  return (
    <>
      <div className="max-w-full mx-auto bg-black">
        <>
          <div className="mx-auto w-full bg-black">
            <Container>
              {/* <Bangu></Bangu> */}
              {/* <Headers></Headers> */}
              <Headers2></Headers2>
              {/* <WhyWeBest></WhyWeBest> */}
           {/* <Review></Review> */}
               <Review2></Review2> 
               {/* <GiftSection></GiftSection> */}
              <Faq></Faq> 
              {/* <Gallary2></Gallary2>
              <Box></Box>
              
              <GiftSection></GiftSection>
              
              {/* <Orders></Orders> */}
              
              
            </Container>
          </div>
        </>
      </div>
    </>
  );
};

export default Home;
