import React, { FC } from 'react';
import Carousel from "react-bootstrap/Carousel";

const sliderItems = [
    {
        id: "1",
        name: "Photo 1",
        url: "https://i2.wp.com/www.smartprix.com/bytes/wp-content/uploads/2018/06/mejores-camaras-reflex-para-principiantes.jpg?fit=1280%2C720&ssl=1"
    },
    {
        id: "2",
        name: "Photo 2",
        url: "https://cdn.mos.cms.futurecdn.net/vEcELHdn998wRTcCzqV5m9.jpg"
    },
    {
        id: "3",
        name: "Photo 3",
        url: "https://cdn.shopify.com/s/files/1/0248/1877/8165/files/1100-x-400-main-banner-women.jpg?9319"
    }
];

const CarouselImageSlider: FC = () => {
    const settings = {
        indicators: false,
        fade: true,
        infinite: true,
        interval: 1500
    }

    return (
        <div>
            <Carousel {...settings}>
                {sliderItems.map((item, index) => {
                    return (
                        <Carousel.Item key={item.id}>
                            <img style={{ height: "600px", width: "100%", marginTop: "20px" }}
                                className="d-block w-100" src={item.url} alt={item.name} />
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    );
}

export default CarouselImageSlider;
