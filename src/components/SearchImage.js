import react, { useState, useEffect } from "react";
import NavBar from "./NavBar";

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function SearchImage() {


    const [photoByDate, setPhotoByDate] = useState("titre");
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        fetchPhotoByDate();
        

    async function fetchPhotoByDate() {
        const res = await fetch(
            `https://api.nasa.gov/planetary/apod?date=${inputValue}&api_key=${apiKey}`
        );
        const data = await res.json();
        setPhotoByDate(data);
        console.log(photoByDate);
        console.log("res" +res);
}
}, [inputValue]);

const addStorage = () => {
    let storedData = window.localStorage.pictures
    ? window.localStorage.pictures.split(",")
    : [];

    if (!storedData.includes(photoByDate.date)) {
    storedData.push(photoByDate.date);
    window.localStorage.pictures = storedData
    } 
  };



return (
    <div className="pod">
        <NavBar />

     <div className="center-input">
        <p className="select-date">Select a date in the past: </p>
        <input type="date" className="input-date" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
        {/*<button type="submit" id="dateSearch" onClick={() => fetchDatePhoto()}>Envoyer</button>*/}
     </div>

        <div className="pod-data">
       <div className="container">
           {photoByDate.media_type === "image" ? (
           <img
           src={photoByDate.url}
           alt={photoByDate.title}
           className="photo"
           onClick={() => window.open(`${photoByDate.url}`)}
           />
            ) : (
               <iframe
                title="space-video"
                src={photoByDate.url}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                height="650"
                width="860"
                allowFullScreen
                className="video" />
           )}
           <div>
               <div className="infos">
               <h1 className="title">{photoByDate.title}</h1>
               <p className="date">{photoByDate.date}</p>
               <p className="explanation">{photoByDate.explanation}</p>
               <div className="btn" onClick={() => addStorage()}>Add to my favorites list 💜 </div>
               </div>
               </div>
           </div>
       </div>
    </div>

)
}