import { FC } from 'react';
import { Carousel, Row } from 'react-bootstrap';
import { brandsItem1, brandsItem2, brandsItem3, BrandType } from './BrandData';
import './BrandSlider.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const BrandSlider: FC = () => {
    const settings = {
        controls: false,
        indicators: true
    };

    return (
        <div className="container text-center my-3 mt-5">
            <h3>BRANDS</h3>
            <Carousel {...settings}>
                <Carousel.Item className="row">
                    <Row>
                        {brandsItem1.map((brand: BrandType, index: number) => {
                            return (
                                <div className="col-2 float-left" key={index}>
                                    <img className="img-fluid" src={brand.url} alt={brand.name} />
                                </div>
                            )
                        })}
                    </Row>
                </Carousel.Item>
                <Carousel.Item className="row">
                    <Row>
                        {brandsItem2.map((brand: BrandType, index: number) => {
                            return (
                                <div className="col-2 float-left" key={index}>
                                    <img className="img-fluid" src={brand.url} alt={brand.name} />
                                </div>
                            )
                        })}
                    </Row>
                </Carousel.Item>
                <Carousel.Item className="row">
                    <Row>
                        {brandsItem3.map((brand: BrandType, index: number) => {
                            return (
                                <div className="col-2 float-left" key={index}>
                                    <img className="img-fluid" src={brand.url} alt={brand.name} />
                                </div>
                            )
                        })}
                    </Row>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BrandSlider;