import React from 'react';
/* LOADING */
import BounceLoader from "react-spinners/BounceLoader";
import './Preloader.css';


export default function Preloader() {
    return (
        <div id="preloader-wrapper">
            <div className="w-auto d-flex flex-column justify-content-center align-items-center align-self-center">
                <div id="preloader" className="preloader"></div>
                <BounceLoader
                        color={"#2d1937"}
                        loading={true}
                        size={50}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />

            </div>
        </div>

    )
}
