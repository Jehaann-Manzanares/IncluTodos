import React from "react";
import Header from "../Components/Header";
import HeroSection from "./HeroSection";
import VideoSection from "./VideoSection";




function Home (){
    return(
        <div>
            <Header/>
            <HeroSection/>
            <VideoSection/>
        </div>
    )
}

export default Home;