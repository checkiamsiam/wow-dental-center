import Banner from "@/components/home/Banner";
import FAQ from "@/components/home/FAQ";
import Gallery from "@/components/home/Gallery";
import HomeAbout from "@/components/home/HomeAbout";
import HomeContact from "@/components/home/HomeContact";
import Welcome from "@/components/home/Welcome";
import WhatWeDo from "@/components/home/WhatWeDo";

export default function Home() {
  return (
    <>
      <Banner />
      <HomeAbout />
      <Welcome />
      <WhatWeDo />
      <Gallery />
      <FAQ />
      <HomeContact />
    </>
  );
}
