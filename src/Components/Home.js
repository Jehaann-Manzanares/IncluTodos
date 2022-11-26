import React from "react";
import Header from "../Components/Header";
import CalltoAction from "./CalltoAction";
import HeroSection from "./HeroSection";
import VideoSection from "./VideoSection";
import "../../src/Responsive.css"




function Home (){
    return(
        <div>
            <Header/>
            <HeroSection/>
            <VideoSection/>
            <CalltoAction/>
            
        </div>
    )
}

export default Home;