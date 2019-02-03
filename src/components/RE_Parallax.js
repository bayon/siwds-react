import React from 'react';
import { Parallax, Background } from 'react-parallax';
 
const RE_Parallax = () => (
    <div>
        {/* -----basic config-----*/}
        <Parallax
            blur={10}
            bgImage={require('./images/IMG_0862-1.jpeg')}
            bgImageAlt="the cat"
            strength={200}
        >
            Put some text content here - even an empty div with fixed dimensions to have a height
            for the parallax.
            <div style={{ height: '600px' }} />
        </Parallax>
          {/* -----custom background element-----*/}
          <Parallax strength={300}>
            <div>Use the background component for custom elements</div>
            <Background className="custom-bg">
                <img src="./images/IMG_4713-488x650.jpeg" alt="fill murray" />
            </Background>
        </Parallax>
 
        {/* -----dynamic blur-----*/}
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('./images/IMG_0818-650x488.jpg')}
            bgImageAlt="the dog"
            strength={-200}
        >
            Blur transition from min to max
            <div style={{ height: '600px' }} />
        </Parallax>
 
        {/* -----custom background element-----*/}
        <Parallax strength={300}>
            <div>Use the background component for custom elements</div>
            <Background className="custom-bg">
                <img src="./images/IMG_4713-488x650.jpeg" alt="fill murray" />
            </Background>
        </Parallax>
 
        {/* -----renderProp: "renderLayer"-----*/}
        <Parallax
            bgImage={'./images/IMG_0856.jpeg'}
            strength={400}
            renderLayer={percentage => (
                <div
                    style={{
                        position: 'absolute',
                        background: `rgba(255, 125, 0, ${percentage * 1})`,
                        left: '50%',
                        top: '50%',
                        width: percentage * 500,
                        height: percentage * 500,
                    }}
                />
            )}
        >
            <p>... Content</p>
        </Parallax>
    </div>
);
export default RE_Parallax;