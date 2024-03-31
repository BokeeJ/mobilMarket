import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { VscUnmute } from "react-icons/vsc";
import { FaVolumeMute } from "react-icons/fa";
import Slider from "./Components/Slider";


function App() {
  const [sound, setSound] = useState(false);

  const handleSound = () => {
    setSound(!sound);
  };

  return (
    <div className="relative">
      <button onClick={handleSound} className="text-white text-3xl bg-black absolute top-4 right-4 z-50">{sound ? <VscUnmute color="white" /> : <FaVolumeMute />}</button>
      <div className="relative">
        <video loop autoPlay className="absolute inset-0 w-full h-full object-cover opacity-50" muted={!sound}>
          <source src="/1.mp4" type="video/mp4" />

        </video>
        <div className="relative z-10">
          <Navbar />
          <div className="flex justify-center">
            <h1 className="text-black text-4xl">CHOOSE YOUR FAVOURITE</h1></div>
          <Slider />
        </div>
      </div>

    </div>
  );
}

export default App;
