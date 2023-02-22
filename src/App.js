import React,{ useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import NasaPhoto from "./NasaPhoto";

const dummyData ={ 
  date: "2023-02-21",
  explanation: "They are both falling. The water in Yosemite Falls, California, USA, is falling toward the Earth. Comet ZTF is falling toward the Sun. This double cosmic cascade was captured late last month as fading Comet C/2022 E3 (ZTF) had just passed its closest to planet Earth. The orange star just over the falls is Kochab. With the exception of a brief encounter with a black bear, the featured image was a well-planned composite of a moonlit-foreground and long-duration background exposures - all designed to reconstruct a deep version of an actual single sight. Although Comet ZTF is now fading as it glides back to the outer Solar System, its path is determined by gravity and so it can be considered to still be falling toward the Sun -- but backwards.    Comet ZTF Gallery: Notable Submissions to APOD",
  hdurl: "https://apod.nasa.gov/apod/image/2302/CometZtfYosemite_Mostofi_1639.jpg",
  title: "Comet ZTF  over Yosemite Falls"
}

function App() {
  const [ data, setData ] = useState();
  
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      setData(res.data)
    })
    .catch(err => console.error(err))
  }, [])


  return (
    <div className="App">
      {data && <NasaPhoto photo={data} />}
    </div>
  );
}

export default App;

/**
 * Key/Value pairs im going to use from my (res.data) 
date: "2023-02-21"
explanation: "They are both falling. The water in Yosemite Falls, California, USA, is falling toward the Earth. Comet ZTF is falling toward the Sun. This double cosmic cascade was captured late last month as fading Comet C/2022 E3 (ZTF) had just passed its closest to planet Earth. The orange star just over the falls is Kochab. With the exception of a brief encounter with a black bear, the featured image was a well-planned composite of a moonlit-foreground and long-duration background exposures - all designed to reconstruct a deep version of an actual single sight. Although Comet ZTF is now fading as it glides back to the outer Solar System, its path is determined by gravity and so it can be considered to still be falling toward the Sun -- but backwards.    Comet ZTF Gallery: Notable Submissions to APOD"
hdurl: "https://apod.nasa.gov/apod/image/2302/CometZtfYosemite_Mostofi_1639.jpg"
title: "Comet ZTF  over Yosemite Falls"
 */