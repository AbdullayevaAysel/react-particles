import React from 'react';
import '../css/style.css';
import Canvas from './Canvas';

function Home() {
    return (
        <>
            <div className="wrapper">
                <Canvas />
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