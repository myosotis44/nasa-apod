import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';

const apiKey = process.env.REACT_APP_NASA_KEY;

const UserList = () => {
    const [listData, setListData] = useState([]);


        useEffect(() => {

            let picturesUrl = window.localStorage.pictures
        ? window.localStorage.pictures.split(',')
        : []; 

        fetchFavPicture();
        
        
            async function fetchFavPicture() {
                for (let i = 0; i < picturesUrl.length; i++) {

                const res = await fetch(
                    `https://api.nasa.gov/planetary/apod?date=${picturesUrl[i]}&api_key=${apiKey}`
                );
                const data = await res.json();
                setListData((listData) => [...listData, data])
                console.log(listData);
                }
        }
}, []);

/* const deletePicture = () => {
    let storedData = window.localStorage.pictures.split(",")
     let newData = storedData.filter((date) => date != data.date);

     window.localStorage.pictures = newData } */


    return (
       <div className='pod'>
        <div className='user-list-page'>
            <NavBar/>
            <h2 className='fav-title'> Favorites pictures and videos <span>🌌</span></h2>
            <div className="result">
                {listData.length > 0 ?
                (listData.map((picture) => 
                <div>
                    <img src={picture.url} className="favorite-img" alt="favorite-images-videos" onClick={() => window.open(`${picture.url}`)}/>
                    <p className='title'>{picture.title}</p>
                    <p className="date">{picture.date} </p>
                 {/* <div className='btn' onClick={() => deletePicture()}>Delete from the list</div> */}
                </div>
                )
                ) : (
                    <h2> Aucun coup de coeur pour le moment</h2>
                )
                }
            </div>
        </div>
       </div>
    );
};

export default UserList;