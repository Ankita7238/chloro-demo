import BelowHeader from "@/components/BelowHeader";
import BlogNews from "@/components/BlogNews";
import Clients from "@/components/Clients";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Review from "@/components/Review";
import Services from "@/components/Services";
import Story from "@/components/Story";

export default function Home() {
    return (
        <section className=" ">
        <Hero/>
        <BelowHeader/>
        <Products/>
        <Services/>
        <Story/>
        <Review/>
        <Clients/>
        <BlogNews/>
        
      </section>
    );
  }
  