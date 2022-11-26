import React from "react";
import Header from "../Components/Header";
import CalltoAction from "./CalltoAction";
import HeroSection from "./HeroSection";
import VideoSection from "./VideoSection";




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