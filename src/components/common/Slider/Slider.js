import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Slide from './Section/Slide';

import { URL } from '../../../utils/url';
import arrow_left from '../../../asset/icon/arrow-left.png';
import arrow_right from '../../../asset/icon/arrow-right.png';

function Slider(props) {

    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null); // Slider의 정보를 보여줄 수 있는 역할...?

    const TOTAL_SLIDES = props?.imageLength - 1;

    useEffect(() => {
        slideRef.current.style.transition = "all 0.5s ease-in-out";
        slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 슬라이드로 이동하는 애니메이션
    }, [currentSlide])

    const nextSlide  = () => {
        if (currentSlide >= TOTAL_SLIDES) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(TOTAL_SLIDES);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    }

    return (
        <div className={props.className}>
            {/* <p className="number">{currentSlide + 1}/{TOTAL_SLIDES + 1}</p> */}
            <div className="container">
                <div className="slider-container" ref={slideRef}>
                    {props?.images && props?.images.map(img => (
                        <Slide img={`${URL}/${img}`} key={img} />
                    ))}
                </div>
            </div>
            <div className="buttons">
                <button onClick={prevSlide}>
                    <img src={arrow_left} alt="arrow_left" className="arrow" />
                </button>
                <button onClick={nextSlide}>
                    <img src={arrow_right} alt="arrow_right" className="arrow" />
                </button>
            </div>
        </div>
    )
}

export default styled(Slider)`
    /* border: 1px solid red; */

    & {
        .container {
            width: 550px;
            overflow: hidden;
        }
        .number {
            /* border: 1px solid green; */
            color: gray;
            margin: 0;
            text-align: end;
        }
        .slider-container {
            /* border: 1px solid blue; */
            width: 100%;
            display: flex;
        }
        .buttons {
            text-align: center;
            button {
                all: unset;
                padding: 0.5em 2em;
                color: gray;
                border-radius: 10px;
                &:hover {
                    cursor: pointer;
                    transition: all 0.3s ease-in-out;
                    color: #000;
                }
            }
            .arrow {
                width: 20px;
                height: 20px;
            }
        }
    }


    @media (max-width: 768px) {
        .container {
            /* border: 1px solid green; */
            width: 380px;
            height: 380px;
        }
       .slider-container {
           /* border: 2px solid yellow; */
           width: 100%;
           height: 100%;
       }
    }

`;
