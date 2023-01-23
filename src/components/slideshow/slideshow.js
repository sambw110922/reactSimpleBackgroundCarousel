
import "./slideshowStyle.css";

//  Import the image block
import { ImageBlock } from "./imageBlock";

//  Slideshow js
function Slideshow(props){

    return (

        <div id="slideshowContainer">
            <ImageBlock
            ></ImageBlock>
        </div>

    );

}

export { Slideshow }