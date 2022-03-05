import React, { useState } from 'react';
import NavBar from './NavBar';
import { Parser } from 'html-to-react';
import { Link } from 'react-router-dom';



const Moon = () => {
    const english = ` <p><li>The Moon is <strong>Earth's only natural satellite.</strong></li> </p> \
    <p><li>The brightest and largest object in our night sky, the Moon makes Earth <strong>a more livable planet </strong>by moderating our home planet's wobble on its axis, leading to <strong>a relatively stable climate. </strong> It also causes tides, creating a rhythm that has guided humans for thousands of years. The Moon was likely formed after <strong>a Mars-sized body collided with Earth.</strong></li></p> \
    <p><li>Earth's Moon is the fifth largest of the 200+ moons orbiting planets in our solar system. \
\
Earth's only natural satellite is simply called \"the Moon\" because people didn't know other moons existed until<strong> Galileo Galilei discovered four moons orbiting Jupiter in 1610.</strong></li></p> \
\
<p><li> NASA currently has three robotic spacecraft exploring the Moon – Lunar Reconnaissance Orbiter and the twin ARTEMIS spacecraft (not to be confused with NASA's new Artemis program to send astronauts back to the Moon).</li></p>`

    const [lang, setLang] = useState(english)

    
    const changeLang = () => {
        const french = "<li>La Lune est <strong> le seul satellite naturel de la Terre. </strong> </li>\
        <p> <li> Objet le plus large et le plus brillant dans notre ciel nocturne, la Lune fait de la Terre <strong>un endroit plus vivable</strong> en modérant \
        l\'oscillation de notre planète sur son axe, permettant <strong>un climat relativement stable.</strong> C\'est aussi la cause des marées, créant un \
        rythme qui a guidé la vie des humains depuis des milliers d'années. La Lune a probablement été formée après qu'<strong>un corps de la taille \
        de Mars est entré en collision avec la Terre.</strong></li></p> \
        <p><li> La Lune de la Terre est la cinquième plus large des plus de 200 lunes orbitant autour des planètes dans notre système solaire. \
        Le seul satellite naturel de la Terre est simplement appelé \"la Lune\" car les hommes ne savaient pas que d'autres lunes existaient \
        jusqu'à ce que <strong>Galileo Galilei découvrit quatre lunes orbitant autour de Jupiter en 1610.</strong></li></p><p><li> La NASA a actuellement trois vaisseaux \
        spatiaux explorant la Lune - Lunar Reconnaissance Orbiter et les doubles vaisseaux ARTEMIS (à ne pas confondre avec le nouveau programme de la NASA Artemis pour renvoyer des astronautes sur la Lune).</li></p>"
        
        if (lang === english) {
        return setLang(french) 
        } else {
        return setLang(english)
        }
        
    }


    return (
        <div className='pod'>
            <NavBar/>
            <div className='card'>
        <img src='/Lunarlibration.gif' alt='moon' className='img-planets'/>
        <a href='#themooncard' className='samepage-link'>Learn more about the moon</a>
        <div className='infos themoon' id='themooncard'>
        <a href='#'><i className="fa-solid fa-circle-chevron-up"></i></a>
        <input className='changeLang' type='image' src='/drapeau-france.png' alt='drapeau-francais' onClick={()=> changeLang()} style={{float: 'right', width: '45px', height: '40px'}}></input>
        { lang === english ? (
        <h1 className='title'>The Moon <span className="fa-regular fa-moon"></span> </h1>
        ) : (
        <h1 className='title'>La Lune <span className="fa-regular fa-moon"></span> </h1>
        )}
        <div>
            {Parser().parse(lang)}
        </div>
        </div>
        </div>
        </div>
    );
};

export default Moon;