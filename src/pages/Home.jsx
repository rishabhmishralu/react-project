import React from "react";
import Header from "../component/Header";
import Nav from "../component/Nav";
import FitnessReuse from "../component/reusable/FitnessReuse";
import Bollywood from "./Bollywood";
import Fitness from "./Fitness";
import Food from "./Food";
import Hollywood from "./Hollywood";
import Technology from "./Technology";
import HomeReuse from "../component/reusable/HomeReuse";
import FoodReuse from "../component/reusable/FoodReuse";
import BollyReuse from "../component/reusable/BollyReuse";

function Home() {
  return (
    <>
      <HomeReuse
        img1="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTPvMv0Ml0J3mz130ahFn__b-E-uZEcw61n86Scb1AIB-A0X9jx8hMj1nwEcsgWyvKzZ3dhfvGQ2da1jfvR4mS3wA"
        img2="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcT1euqVPb2Xts-PEV5m33J23mWRSjn-rF-TjgIgEyBcv_LXEWDJ_0L9YIOZ5FLYAZmTWJR46b1bL2bvqEdFmt8cMQ"
        img3="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQMrL1SHFbwJTZsBWYDQ80PQOULm_zt1gOwmlXzRqjWbbfbSC57-60MJaDlO5PJuTuIrMwOWz-aTdypOW0T_Lsy2A"
        heading="Varanasi"
        manali="Rajasthan"
        kasol="Agra"
      />
      <HomeReuse
        img1="https://static.toiimg.com/photo/msid-87726041,width-96,height-65.cms"
        img2="https://i0.wp.com/onedayitinerary.com/wp-content/uploads/2020/02/One-day-in-Manali-Itinerary-India.jpg?w=800&ssl=1"
        img3="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcReTQYPvevoPUg2JxuIBceNEhmFFCInS-WpX5rJm4MJMdVNLOB24qboT0EeO_sGYJMbuxgp5Y09QJH5liqS3ESVXA"
        heading="ladakh"
        manali="manali"
        kasol="Shimla"
      />

      <h1>Bollywood</h1>
      <BollyReuse
        img="https://staticimg.amarujala.com/assets/images/2022/04/10/kajaefa-capatara-2_1649536889.jpeg"
        heading="Climax fight featuring Yash and Sanjay Dutt to be highlight of ‘KGF 2’"
        bollywood="Bollywood"
        posts="Top Posts"
        hero="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Dev_Patel_by_Gage_Skidmore.jpg/640px-Dev_Patel_by_Gage_Skidmore.jpg"
        bollywoodpara="The team is currently stationed in Mysuru where the action block is being canned."
        para="
Dev Patel"
      ></BollyReuse>

      <hr />

      <h1>Food</h1>
      <FoodReuse
        img1="https://b.zmtcdn.com/data/pictures/chains/3/19165593/1edc341a1cb0b7bd57c812b93e6ce333_o2_featured_v2.jpg?output-format=webp"
        img2="https://b.zmtcdn.com/data/pictures/chains/3/800363/c708fcdb888abd4f493c0fdc67ac766e_o2_featured_v2.jpg?output-format=webp"
        img3="https://b.zmtcdn.com/data/pictures/chains/6/800126/b60f4031c5e0eaa1e7f6cbc31e02fbdf_o2_featured_v2.jpg"
        heading="Burger King"
        manali="Pizza Hut"
        kasol="KFC"
      />
      <h1>Technology</h1>
      <FitnessReuse fitnessimg1="https://www.itcilo.org/sites/default/files/styles/fullscreen_image/public/courses/cover-images/A9715955.jpeg?h=fec1bf88&itok=M98l4a73" />
    </>
  );
}

export default Home;
