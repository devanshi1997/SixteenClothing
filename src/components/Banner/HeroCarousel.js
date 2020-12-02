import React from 'react'
import './Hero.css';

const HeroCarousel = (props) => {

    return (
        <div class="banner header-text">
            <div class="owl-banner owl-carousel">
                <div class="banner-item-01">
                    <img className="img-responsive Banner-img" src={props.src[0]} />
                    <div className="overlay">
                        <div className="content-wrapper">
                            <div class="text-content">
                                <h4>{props.title[0]}</h4>
                                <h2>{props.subtitle[0]}</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="banner-item-02">
                    <img className="img-responsive Banner-img" src={props.src[1]} />
                    <div className="overlay">
                        <div className="content-wrapper">
                            <div class="text-content">
                                <h4>{props.title[1]}</h4>
                                <h2>{props.subtitle[1]}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="banner-item-03">
                    <img className="img-responsive Banner-img" src={props.src[2]} />
                    <div className="overlay">
                        <div className="content-wrapper">
                            <div class="text-content">
                                <h4>{props.title[2]}</h4>
                                <h2>{props.subtitle[2]}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroCarousel
