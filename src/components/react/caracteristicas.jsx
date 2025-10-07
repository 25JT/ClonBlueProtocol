import React, { useState , useEffect, useRef} from "react"
import {motion, AnimatePresence, time} from "framer-motion"

//IMG
import Img1 from "../../assets/bgCarac/fp_1.png"
import Img2 from "../../assets/bgCarac/fp_2.png"
import Img3 from "../../assets/bgCarac/fp_3.png"
import Img4 from "../../assets/bgCarac/fp_4.png"
import Img5 from "../../assets/bgCarac/fp_5.png"
import bg from "../../assets/bgCarac/bg-4.jpg"

const imagenes = [Img1,Img2,Img3,Img4,Img5]


const Carousel = () => {
  const [index, setIndex] = useState(0)
  const timeoutRef = useRef(null)

  //cambio automatico
  useEffect(()=>{
    resetTimeout();
    timeoutRef.current = setTimeout(()=>{
      setIndex((prevIndex) =>(prevIndex + 1)% imagenes.length)
    }, 4000) //cada 4 seg
  },[index])

  const resetTimeout = () => {
    if (timeoutRef.current){
      clearInterval(timeoutRef.current)
    }
  }
  //Control manual o dedo
  const handleDragEnd = (event, info ) =>{
    if(info.offset.x < -50){
      setIndex((prevIndex) =>(prevIndex + 1)% imagenes.length)
    }else if(info.offset.x > 50){
      setIndex((prevIndex) =>(prevIndex - 1 + imagenes.length)% imagenes.length)
    }
  }

return(
    <>
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    style={{backgroundImage: `url(${bg.src})`, backgroundSize: "cover", backgroundPosition: "center"}} >
<div className="relative w-full h-[500px] flex items-center justify-center z-10">
  <AnimatePresence>
    {imagenes.map((img, i)=>{
      let position = (i - index + imagenes.length)% imagenes.length
      let isCenter = position === 0
      return (
        <motion.img key = {i} src={img.src} drag = "x" onDragEnd={handleDragEnd} className= {`absolute rounded-xl shadow-lg cursor-grab ${isCenter ? "z-20" : "z-10"}`}
        style={{width: isCenter ? "50%" : "50%",
          height: "auto",
          x:position === 0 ? 0 : position === 1 ? 300 : -300,
          scale: isCenter ? 1: 0.8,
        }}
        animate = {{x: position === 0 ? 0: position === 1 ? 300 : position === imagenes.length -1 ? -300 : 600,// sale si no esta dentro de los tres que se muestran
          scale: isCenter ? 1: 0.8,
          opacity: position <= 1 || position === imagenes.length -1 ? 1:0,
        }}
        transition={{duration: 0.6}}
         />
      )
    })}
  </AnimatePresence>

</div>
    </div>
    </>
)
}
export default Carousel