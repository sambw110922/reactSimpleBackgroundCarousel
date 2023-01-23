
import "./mainheaderStyle.css";

function MainHeader(props){

    return(
        <nav>
            <a href="./index.html">
                <h1>{ props.mainTitle }</h1>
            </a>
        </nav>
    );

}

export { MainHeader }