import React, { useState, useEffect } from "react";


// Asterleeds
import map_thumb_02 from "../../assets/contenido/Asterleeds/map-thumb-02.webp";
import map_l_22 from "../../assets/contenido/Asterleeds/map_l_22.png";
import map4 from "../../assets/contenido/Asterleeds/map4.mp4";

// Battle Site
import map_thumb_04 from "../../assets/contenido/Battle Site/map-thumb-04.webp";
import map_l_4 from "../../assets/contenido/Battle Site/map_l_4.png";
import map2 from "../../assets/contenido/Battle Site/map2.mp4";

// Carminam
import map_thumb_05 from "../../assets/contenido/Carminam/map-thumb-05.webp";
import map_l_5 from "../../assets/contenido/Carminam/map_l_5.png";
import map5 from "../../assets/contenido/Carminam/map5.mp4";

// LostAndra
import map_thumb_03 from "../../assets/contenido/LostAndra/map-thumb-03.webp";
import map_l_3 from "../../assets/contenido/LostAndra/map_l_3.png";
import map1 from "../../assets/contenido/LostAndra/map1.mp4";

// Mistone
import map_thumb_06 from "../../assets/contenido/Mistone/map-thumb-06.webp";
import map_l_6 from "../../assets/contenido/Mistone/map_l_6.png";
import map6 from "../../assets/contenido/Mistone/map6.mp4";

// Towering Ruin
import map_thumb_01 from "../../assets/contenido/Towering Ruin/map-thumb-01.webp";
import map_l_1 from "../../assets/contenido/Towering Ruin/map_l_1.png";
import map3 from "../../assets/contenido/Towering Ruin/map3.mp4";

const contenidoData = [
    {
        logo: map_l_3,
        video: map1,
        minilogo: map_thumb_03,
    },

    {
        logo: map_l_4,
        video: map2,
        minilogo: map_thumb_04,
    },
    {
        logo: map_l_1,
        video: map3,
        minilogo: map_thumb_01,
        
    },
    {
        logo: map_l_22,
        video: map4,
        minilogo: map_thumb_02,
    },
  

    {
        logo: map_l_5,
        video: map5,
        minilogo: map_thumb_05,
    },
    {
        logo: map_l_6,
        video: map6,
        minilogo: map_thumb_06,
    },
]

const Contenido = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const timeoutRef = React.useRef(null);
    //Cambios automaticos para el carusel 
    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % contenidoData.length)
        }, 8500 )// tiempo de ejecucion
        return () => clearTimeout(timeoutRef.current);
    }, [activeIndex])
    const handeleSelect = (idx) =>{
        setActiveIndex(idx);
    };
    const {logo, video, minilogo} = contenidoData[activeIndex];
    return(
        <div style={{position: "relative", width: "100vw", height: "100vh", overflow: "hidden"}}>
            {/*Video de fondo*/}
            <video key={video} src={video} autoPlay loop muted playsInline preload="auto" 
            style={{position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", objectFit: "cover", zIndex: 1}}/>
            {/*Logo*/}
            <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 2, pointerEvents: "none"}}>
                <img src={logo.src} alt="logo" style={{maxWidth: "50vw", maxHeight: "50vh", filter: "drop-shadow(0 0 30px #0008)"}} />
            </div>
            {/*Minilogo*/}
            <div style={{position: "absolute", left: "50%", bottom: 100, transform: "translateX(-50%)", display: "flex", gap: 10, zIndex: 3}}>
                {contenidoData.map((item, idx) => (
                    <img
                        key={idx}
                        src={item.minilogo.src}
                        alt={`minilogo-${idx}`}
                        className="hover:scale-115 transition-transform duration-400 2xl:w-28 2xl:h-28 xl:h-20 lg:w-20 lg:h-20 md:w-16 md:h-16 w-16 h-16 "
                        onClick={() => handeleSelect(idx)}
                        style={{

                            cursor: "pointer",
                            opacity: idx === activeIndex ? 1 : 0.5,
                        }}
                    />
                ))}
            </div>
        </div>
    )
}
export default Contenido