
import "./slideshowControls.css"

//  The slideshow controls
function SlideshowControls(props){

    return (

        <div id="controlContainer">

            <label>Showing { props.current } of { props.total }</label>
        
            <button onClick={ props.playBehavior } >Play</button>
            <button onClick={ props.stopBhevaior } >Stop</button>

            <div>
                <button onClick={ props.firstBehavior } >First</button>
                <button onClick={ props.prevBehavior }>Previous</button>
                <button onClick={ props.nextBehavior }>Next</button>
                <button onClick={ props.lastBehavior } >Last</button>
            </div>

        </div>

    );

}

export { SlideshowControls }