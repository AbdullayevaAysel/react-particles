import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import "../css/style.css";

function Home() {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <>
            <div className="wrapper">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 120,
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 250,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            directions: "none",
                            enable: true,
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    interactivity: {
                        events: {
                          onhover: {
                            enable: true,
                            mode: "grab"
                          },
                          resize: true
                        },
                        modes: {
                          grab: {
                            distance: 150,
                            line_linked: {
                              opacity: 1
                            }
                          },
                          
                        }
                    },
                    detectRetina: true,
                }
            }
            />
                <div className="container">
                    <div className="logo">
                        <img src={require("../image/logo.png")} alt="" />
                    </div>
                    <div className="content">
                        <p className='title'>
                            Launching in <span>00 Days 00h 00m 00s</span>
                        </p>
                        <p className="sub-title">
                            Perfect and awesome template to present your future product or service. <br />
                            Hooking audience attention is all in the opener.
                        </p>
                    </div>
                </div>
            </div>
        </>
  )
}


export default Home