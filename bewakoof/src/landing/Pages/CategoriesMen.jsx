import React from "react";
import Bannerss from "../Component/Categories/Bannerss";
import Bargain from "../Component/Categories/Bargain";
import Discount from "../Component/Categories/Discount";
import Header from "../Component/Categories/Header";
import Map from "../Component/Categories/Map";
import Popular from "../Component/Categories/Popular";
import Whatsnew from "../Component/Categories/Whatsnew";
import Footer from "../Component/Home/Footer";
import Navabar from "../Component/Home/Navbar";
import data from "./Data.json";
import Navbar from "../Component/Home/Navabar"
const Banners = [
  "https://images.bewakoof.com/uploads/grid/app/desktop-tod-strip-men-1654149139.jpg",
  "https://images.bewakoof.com/uploads/grid/app/desktop---strip-1440---x-150---tribe-1634552003.png",
  "https://images.bewakoof.com/uploads/grid/app/design-survey-desktop-ticker-banner-1646808890.gif",
];

const Men = () => {
  return (
    <div>
      <Navbar/>
      <Navabar />
      <Header data={data.Slider1M} />
      <Bannerss source={Banners[0]} />
      <Popular data={data.PopularM} />
      <Map data={data.mapM} />
      <Discount data={data.discountW} />
      <Whatsnew data={data.BestsellerM} />
      <Header data={data.Slider2M} />
      <Bargain data={data.BargainM} />
      <Discount data={data.StupidM} />
      <Whatsnew data={data.BestsellerM} />
      <Bannerss source={Banners[1]} />
      <Bannerss source={Banners[2]} />
      <Footer />
    </div>
  );
};

export default Men;