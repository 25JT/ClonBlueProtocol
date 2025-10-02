import React, { useState, useEffect } from "react";

//frost mage
import FrostLogo from "../../assets/imgClass/Frost Mage/Frost_type.png";
import FrostBg from "../../assets/imgClass/Frost Mage/Frost_bg.jpg";
import FrostVideo from "../../assets/imgClass/Frost Mage/Frost_mp4.mp4";
import FrostVideo2 from "../../assets/imgClass/Frost Mage/WindKnight_video_0.mp4";
import FrostFaceColor from "../../assets/imgClass/Frost Mage/Frost_color.png";
import FrostFaceGray from "../../assets/imgClass/Frost Mage/Frost_gray.png";
import frostCargaBg from "../../assets/imgClass/Frost Mage/WindKnight_sumb_0.jpg";

//Verde Oracle
import VerdeLogo from "../../assets/imgClass/Verde Oracle/Verdant_type.png";
import VerdeBg from "../../assets/imgClass/Verde Oracle/Verdant_bg.jpg";
import VerdeVideo from "../../assets/imgClass/Verde Oracle/Verdant_mp4.mp4";
import VerdeVideo2 from "../../assets/imgClass/Verde Oracle/VerdantOracle_video_0.mp4";
import VerdeFaceColor from "../../assets/imgClass/Verde Oracle/Verdant_color.png";
import VerdeFaceGray from "../../assets/imgClass/Verde Oracle/Verdant_gray.png";
import VerdeCargaBg from "../../assets/imgClass/Verde Oracle/VerdantOracle_sumb_0.jpg";

//Heacy Guardian
import HeavyBg from "../../assets/imgClass/Heavy Guardian/Heavy_bg.jpg";
import HeavyColor from "../../assets/imgClass/Heavy Guardian/Heavy_color.png";
import HeavyGray from "../../assets/imgClass/Heavy Guardian/Heavy_gray.png";
import HeavyMp4 from "../../assets/imgClass/Heavy Guardian/Heavy_mp4.mp4";
import HeavyType from "../../assets/imgClass/Heavy Guardian/Heavy_type.png";
import HeavySumb from "../../assets/imgClass/Heavy Guardian/HeavyGuardian_sumb_0.jpg";
import HeavyVideo2 from "../../assets/imgClass/Heavy Guardian/HeavyGuardian_video_0.mp4";


//StormBlade
import StormbladeBg from "../../assets/imgClass/Stormblade/Stormblade_bg.jpg";
import StormbladeColor from "../../assets/imgClass/Stormblade/Stormblade_color.png";
import StormbladeGray from "../../assets/imgClass/Stormblade/Stormblade_gray.png";
import StormbladeMp4 from "../../assets/imgClass/Stormblade/Stormblade_mp4.mp4";
import StormbladeType from "../../assets/imgClass/Stormblade/Stormblade_type.png";
import StormbladeSumb from "../../assets/imgClass/Stormblade/Stormblade_sumb_0.jpg";
import StormbladeVideo2 from "../../assets/imgClass/Stormblade/Stormblade_video_0.mp4";
//Wind Knight
import WindBg from "../../assets/imgClass/wind/Wind_bg.jpg";
import WindColor from "../../assets/imgClass/wind/Wind_color.png";
import WindGray from "../../assets/imgClass/wind/Wind_gray.png";
import WindMp4 from "../../assets/imgClass/wind/Wind_mp4.mp4";
import WindType from "../../assets/imgClass/wind/Wind_type.png";
import WindSumb from "../../assets/imgClass/wind/FrostMage_sumb_0.jpg";
import WindVideo2 from "../../assets/imgClass/wind/FrostMage_video_0.mp4";

//Marksman
import MarksmanBg from "../../assets/imgClass/Marksman/Marksman_bg.jpg";
import MarksmanColor from "../../assets/imgClass/Marksman/Marksman_color.png";
import MarksmanGray from "../../assets/imgClass/Marksman/Marksman_gray.png";
import MarksmanMp4 from "../../assets/imgClass/Marksman/Marksman_mp4.mp4";
import MarksmanType from "../../assets/imgClass/Marksman/Marksman_type.png";
import MarksmanSumb from "../../assets/imgClass/Marksman/Marksman_sumb_0.jpg";
import MarksmanVideo2 from "../../assets/imgClass/Marksman/Marksman_video_0.mp4";

//Shield Knight
import ShieldBg from "../../assets/imgClass/Shield Kingh/Shield_bg.jpg";
import ShieldColor from "../../assets/imgClass/Shield Kingh/Shield_color.png";
import ShieldGray from "../../assets/imgClass/Shield Kingh/Shield_gray.png";
import ShieldMp4 from "../../assets/imgClass/Shield Kingh/Shield_mp4.mp4";
import ShieldType from "../../assets/imgClass/Shield Kingh/Shield_type.png";
import ShieldSumb from "../../assets/imgClass/Shield Kingh/Shield_Knight_sumb_0.jpg";
import ShieldVideo2 from "../../assets/imgClass/Shield Kingh/Shield_Knight_video_0.mp4";
//Beat Performer

// Soul
import SoulType from "../../assets/imgClass/Soul/Soul_type.png";
import SoulBg from "../../assets/imgClass/Soul/Soul_bg2.jpg";
import SoulColor from "../../assets/imgClass/Soul/Soul_color.png";
import SoulGray from "../../assets/imgClass/Soul/Soul_gray.png";
import SoulMp4 from "../../assets/imgClass/Soul/Soul_mp42.mp4";
import SoulSumb from "../../assets/imgClass/Soul/Soul_sumb_0.webp";
import SoulVideo2 from "../../assets/imgClass/Soul/Soul_video_0.mp4";

//anexos
import StartWhite from "../../assets/imgClass/xing_white.png";
import StartBlack from "../../assets/imgClass/xing_black.png";
import buttonLeft from "../../assets/imgClass/left.png";
import buttonRight from "../../assets/imgClass/right.png";
import bgBlue from "../../assets/imgClass/video-bg.webp"

const classes = [
    {
        name: "Heavy Guardian",
        logo: HeavyType,
        bg: HeavyBg,
        video: HeavyMp4,
        videoJugabilidad: HeavyVideo2,
        faceColor: HeavyColor,
        faceGray: HeavyGray,
        carga: HeavySumb,
        role: "Tank",
        nameStyle: "Stonewall style",
        tipoStyle: " block Style",
        descriptionStyle: "Summons rock to shield allies. A versatile defender, reliable in all kinds of high-pressure scenarios.                      ",
        star: StartWhite,
        star2: StartBlack,
        whiteStars: "2",
        darkStars: "3",
    },
    {
        name: "StormBlade",
        logo: StormbladeType,
        bg: StormbladeBg,
        video: StormbladeMp4,
        videoJugabilidad: StormbladeVideo2,
        faceColor: StormbladeColor,
        faceGray: StormbladeGray,
        carga: StormbladeSumb,
        role: "DPS",
        nameStyle: "Iaido Style",
        tipoStyle: "Moonblade style",
        descriptionStyle: " Wields a longblade to unleash charged strikes, delivering devastating burst damage. ",
        star: StartWhite,
        star2: StartBlack,
        whiteStars: "4",
        darkStars: "1",
    },
    {
        name: "Wind Knight",
        logo: WindType,
        bg: WindBg,
        video: WindMp4,
        videoJugabilidad: WindVideo2,
        faceColor: WindColor,
        faceGray: WindGray,
        carga: WindSumb,
        role: "DPS",
        nameStyle: "Overdrive Style",
        tipoStyle: "Aerial Style",
        descriptionStyle: " Unleashes aggressive, high-speed strikes with exceptional mobility.                         ",
        star: StartWhite,
        star2: StartBlack,
        whiteStars: "3",
        darkStars: "2",
    },
    {
        name: "Marksman",
        logo: MarksmanType,
        bg: MarksmanBg,
        video: MarksmanMp4,
        videoJugabilidad: MarksmanVideo2,
        faceColor: MarksmanColor,
        faceGray: MarksmanGray,
        carga: MarksmanSumb,
        role: "DPS",
        nameStyle: "Beastmaster Style",
        tipoStyle: "Falconry style",
        descriptionStyle: "Fights alongside a giant wolf that draws enemy attention and coordinates attacks with precision. ",
        star: StartWhite,
        star2: StartBlack,
        whiteStars: "2",
        darkStars: "3",
    },
    {
        name: "Frost Mage",
        logo: FrostLogo,
        bg: FrostBg,
        video: FrostVideo,
        videoJugabilidad: FrostVideo2,
        faceColor: FrostFaceColor,
        faceGray: FrostFaceGray,
        carga: frostCargaBg,
        role: "DPS",
        nameStyle: "Frost Lance Style",
        tipoStyle: "Ray Style",
        descriptionStyle: "Delivers sustained damage with strong mobility.",
        star: StartWhite,
        star2: StartBlack,
        whiteStars: "3",
        darkStars: "2",
    },
    {
        name: "Verdant Oracle",
        logo: VerdeLogo,
        bg: VerdeBg,
        video: VerdeVideo,
        videoJugabilidad: VerdeVideo2,
        faceColor: VerdeFaceColor,
        faceGray: VerdeFaceGray,
        carga: VerdeCargaBg,
        role: "Support",
        nameStyle: "Thornlash style",
        tipoStyle: "Healing Style",
        descriptionStyle: "Summons vines that strike enemies while healing allies.",
        star: StartWhite,
        star2: StartBlack,
        whiteStars: "2",
        darkStars: "3",
    },
    {
        name: "Shield Knight",
        logo: ShieldType,
        bg: ShieldBg,
        video: ShieldMp4,
        videoJugabilidad: ShieldVideo2,
        faceColor: ShieldColor,
        faceGray: ShieldGray,
        carga: ShieldSumb,
        role: "Tank",
        nameStyle: "Bulwark Style",
        tipoStyle: "Radiant Guard style",
        descriptionStyle: "Self-Healing Defender ",
        star: StartWhite,
        star2: StartBlack,
        whiteStars: "3",
        darkStars: "2",
    },
    {
        name: "Beat Performer",
        logo: SoulType,
        bg: SoulBg,
        video: SoulMp4,
        videoJugabilidad: SoulVideo2,
        faceColor: SoulColor,
        faceGray: SoulGray,
        carga: SoulSumb,
        role: "Support",
        nameStyle: "Dissonance Style",
        tipoStyle: "Concerto Style",
        descriptionStyle: "This playstyle allows a high number of attack instances and converts damage into healing with exceptional efficiency, granting formidable burst damage and healing capabilities.         ",
        star: StartWhite,
        star2: StartBlack,
        whiteStars: "3",
        darkStars: "2",
    },

];

const ClassCarousel = ({ data = classes }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [hovered, setHovered] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (showModal) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % data.length);
        }, 20000);
        return () => clearInterval(interval);
    }, [data.length, showModal]);

    const handleSelect = (idx) => setActiveIndex(idx);
    const activeClass = data[activeIndex];

    return (
        <div className="relative w-full h-screen flex flex-col overflow-hidden">
            {/* Fondo dinámico */}
            <div className="absolute inset-0 -z-10">
                <video
                    key={activeClass.video}
                    className="absolute inset-0 mt-5 object-cover w-full h-full"
                    src={activeClass.video}
                    autoPlay
                    loop
                    muted
                />
            </div>

            {/* Contenido principal */}
            <div className="flex flex-col items-start px-16 pt-16">
                <div className="ml-[10%] mt-10 w-full h-auto">
                    {/* Logo y nombre */}
                    <img
                        src={activeClass.logo.src}
                        key={activeClass.logo.src}
                        className="w-24 h-auto "
                        alt="CLaseImg"
                    />
                    <h1 className="text-6xl font-bold uppercase text-white drop-shadow-lg">
                        {activeClass.name}
                    </h1>

                    {/* Role y dificultad */}
                    <div className="mt-4">
                        <div className="bg-[url('../assets/imgClass/title_bg2.png')] space-x-10  w-[60%] flex align-center bg-contain bg-no-repeat">
                            <span className="text-white px-4 py-1 rounded-l text-xl ml-4">
                                ROLE: {activeClass.role}
                            </span>
                            <span className="text-white px-4 py-1 ml-2 rounded-r text-xl">
                                DIFFICULTY:{" "}
                                <span className="inline-flex align-middle ">
                                    {Array.from({ length: activeClass.whiteStars }).map((_, i) => (
                                        <img
                                            key={`white-${i}`}
                                            src={activeClass.star.src}
                                            alt="estrella blanca"
                                            className="w-5 h-5"
                                        />
                                    ))}
                                    {Array.from({ length: activeClass.darkStars }).map((_, i) => (
                                        <img
                                            key={`dark-${i}`}
                                            src={activeClass.star2.src}
                                            alt="estrella oscura"
                                            className="w-5 h-5"
                                        />
                                    ))}
                                </span>
                            </span>
                        </div>
                    </div>

                    {/* Tabs y video */}
                    <div className="flex flex-col mt-8">
                        <div className="mb-5">
                            <button className="bg-[#323232] text-white text-sm px-4 py-1 font-[TimesNewRoman]">
                                {activeClass.nameStyle}
                            </button>
                            <button className="bg-black/40 text-white text-sm px-4 py-1 font-[TimesNewRoman]">
                                {activeClass.tipoStyle}
                            </button>
                        </div>
                        <div>
                            <div
                                className="rounded-lg w-[400px] h-[225px] flex items-center justify-center cursor-pointer"
                                onClick={() => setShowModal(true)}
                            >
                                <div className="absolute mr-5 mb-5 w-101  h-55  z-10 border-2 border-cyan-400 "></div>
                                <img src={bgBlue.src} alt="CLaseImg" className="absolute ml-5 mt-5 w-100 h-auto -z-10 " />
                                <video
                                    src={activeClass.videoJugabilidad}
                                    autoPlay
                                    loop
                                    muted
                                    key={activeClass.videoJugabilidad}
                                    className="w-full h-full object-cover "
                                ></video>
                            </div>
                            {showModal && (
                                <div className="fixed inset-0 z-50 flex items-center justify-center  backdrop-blur-sm bg-black/50" onClick={() => setShowModal(false)}>
                                    <div className="relative w-[110vh] h-[60vh] flex items-center justify-center">
                                        <button
                                            className="absolute -top-15 right-3 text-white text-4xl z-50"
                                            onClick={e => { e.stopPropagation(); setShowModal(false); }}
                                        >
                                            &times;
                                        </button>
                                        <video
                                            src={activeClass.videoJugabilidad}
                                            autoPlay
                                            loop
                                            muted
                                            controls
                                            className=" object-contain rounded-lg "
                                            style={{ maxHeight: '70vh' }}
                                        ></video>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="text-white mt-6 text-sm w-[27%] flex-shrink-0 font-[TimesNewRoman]">
                            {activeClass.descriptionStyle}
                        </div>

                    </div>
                </div>

                {/* Carrusel de rostros */}
                <div className=" absolute 2xl:bottom-15 xl:bottom-20 bottom-20 ml-[5%]  2xl:w-[80%] xl:w-[60%] w-[50%] flex py-4 ">
                    <button
                        onClick={() =>
                            setActiveIndex((prev) => (prev - 1 + data.length) % data.length)
                        }
                        className=" mx-4 focus:outline-none"
                    >
                        <img src={buttonLeft.src} alt="Prev" className="w-10 h-10" />
                    </button>
                    <div className="flex">
                        {(() => {
                            // Mostrar siempre la imagen activa en la primera posición (izquierda)
                            const visibleCount = 5;
                            const total = data.length;
                            const visible = [];
                            for (let i = 0; i < visibleCount; i++) {
                                const idx = (activeIndex + i) % total;
                                visible.push(idx);
                            }
                            return visible.map((idx, pos) => {
                                const cls = data[idx];
                                const isActive = pos === 0 || hovered === idx;
                                const showColor = isActive;
                                return (
                                    <div
                                        key={cls.name + idx}
                                        className={`mx-2 flex flex-col items-center transition-all duration-300 ${isActive ? 'scale-100' : 'scale-90 opacity-70'}`}
                                        onClick={() => handleSelect(idx)}
                                        onMouseLeave={() => setHovered(null)}
                                    >
                                        <div className="relative flex flex-col">
                                            {/* Si está mostrando faceGray → logo + nombre */}
                                            {!showColor && (
                                                <div className="flex flex-col absolute mt-4 ">
                                                    <img className="w-10 h-10" src={cls.logo.src} alt="" />
                                                    <span className="text-white text-xs">{cls.name}</span>
                                                </div>
                                            )}
                                            <img
                                                src={showColor ? cls.faceColor.src : cls.faceGray.src}
                                                alt={cls.name}
                                                className="w-30 h-17"
                                            />
                                        </div>
                                    </div>
                                );
                            });
                        })()}
                        <button
                            onClick={() =>
                                setActiveIndex((prev) => (prev + 1) % data.length)
                            }
                            className="mx-4 focus:outline-none"
                        >
                            <img src={buttonRight.src} alt="Next" className="w-10 h-10" />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ClassCarousel;