
//  Need use state and use effect
import { useState } from "react";
import { useEffect } from "react";

//  Need header
import { MainHeader } from "./components/header/mainheader";

//  Need slideshow
import { Slideshow } from "./components/slideshow/slideshow";

//  Project title
const mainTitle = "Test Image Carousel";

//  The root
function App() {

  return (

    <div className="App">

      <MainHeader mainTitle={ mainTitle }></MainHeader>  
      <Slideshow></Slideshow>

    </div>

  );

}

export default App;
