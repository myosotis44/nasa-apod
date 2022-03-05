import React, { useEffect, useState } from "react";
import reactDom from "react-dom";
import NavBar from "./NavBar";

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function POD() {

    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
            );
            const data = await res.json();
            setPhotoData(data);
            console.log(data);
        }
    }, []);

    if (!photoData) return <div />;


    return (
    <div className="pod">
        <NavBar />
        <div className="pod-data">
       <div className="container">
           {photoData.media_type === "image" ? (
           <img
           src={photoData.url}
           alt={photoData.title}
           className="photo"
           onClick={() => window.open(`${photoData.url}`)}
           />
            ) : (
               <iframe
                title="space-video"
                src={photoData.url}
                frameBorder="0"
                allow="autoplay" // ;encrypted-media
                allow="encrypted-media"
                allowFullScreen
                className="photo" />
           )}
           <div>
               <div className="infos">
               <h1 className="title">{photoData.title}</h1>
               <a id="tweet-quote" href=
                {encodeURI(`http://www.twitter.com/intent/tweet?text=${photoData.explanation}image=${photoData.url}`)}
                target='_blank'
                >
                <i className="fa-brands fa-twitter"></i>
                </a>
               <p className="date">{photoData.date} </p>
               <p className="explanation"> {photoData.explanation}</p>
               </div>
               </div>
           </div>
       </div>
    </div>
    )
}