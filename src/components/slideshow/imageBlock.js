
import "./imageBlockStyle.css";

//  Import the slideshow controls
import { SlideshowControls } from "./slideshowControls";

//  Need use state and use effect
import { useState, useEffect } from "react";

//  The HTML block that contains the background image.
function ImageBlock(props){

    //  The number of seconds
    const noSeconds = 3;

    //  If the carousel is playing.
    var [ isPlaying, setIsPlaying ] = useState(false);

    //  The CSS classes that contain images
    const styleClasses = [ "handshake", "working", "meeting" ]

    //  The current slide index
    var [ currentPointer, setCurrentPointer ] = useState(0);

    //  Total number of images to scroll through
    const totalImages = 3;

    //  When the user clicks on next button
    const onClickNext = function(){
        
        if(currentPointer < totalImages -1 && isPlaying == false){
            setCurrentPointer(currentPointer += 1);
        }

    }

    //  When the user clicks on the previous button
    const onClickPrev = function(){

        if(currentPointer > 0 && isPlaying == false){
            setCurrentPointer(currentPointer -= 1);
        } 

    }

    //  When the user wants to go to the first carousel image
    const onClickFirst = function(){  

        if(currentPointer > 0 && isPlaying == false){
            setCurrentPointer(0);
        } 

    }

    //  When the userr wants to go to the last carousel image
    const onClickLast = function(){

        if(currentPointer < totalImages-1 && isPlaying == false){
            setCurrentPointer(totalImages-1);
        }

    }

    //  When the user wants to play the carousel.
    const onClickPlay = function(){

        if(isPlaying == false){
            setIsPlaying(true);
        } else {
            window.alert("stop the carousel");
        }

    }

    //  When the suer wants to stop the carousel.
    const onClickStop = function(){

        if(isPlaying == true){

            setIsPlaying(false);

        } 

    }

    //  This function creates a timer 
    //  that checks to see if the slideshow is playing.
    //  If it is, then check the pointer status. If pointer
    //  is less than the maximum, then increment the 
    //  pointer. otherwise set it back the beginning.
    useEffect(()=>{

        setTimeout(() => {

            if(isPlaying == true){

                if(currentPointer < totalImages-1){

                    setCurrentPointer(currentPointer += 1);
    
                } else {
    
                    //  Back to the beginning.
                    setCurrentPointer(0);
    
                }

            }

        }, 3000);

    });

    return (
        <div id="imageBlock" className={ styleClasses[ currentPointer ] } >
            
            <div className="imageBlockText" >
                <h2>Image Block</h2>
                <p>Text text text</p>
            </div>


            <SlideshowControls
                current = { currentPointer + 1 }
                total = { totalImages }
                nextBehavior = { onClickNext }
                prevBehavior = { onClickPrev }
                firstBehavior = { onClickFirst }
                lastBehavior = { onClickLast }
                playBehavior = { onClickPlay }
                stopBhevaior = { onClickStop }
            ></SlideshowControls>
            
        </div>
    );

}

export { ImageBlock }