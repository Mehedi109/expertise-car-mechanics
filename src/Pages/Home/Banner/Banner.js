import React from 'react';
import { Carousel } from 'react-bootstrap';

// const banner = [
//     { img: 'https://i.ibb.co/Rz4by47/banner-1.jpg' },
//     { img: 'https://i.ibb.co/SwPVbBB/banner-2.jpg' },
//     { img: 'https://i.ibb.co/rwqQCr0/banner-3.jpg' }
// ]

import banner1 from '../../../images/banner/banner-4.jpg';
import banner2 from '../../../images/banner/banner-5.jpg';
import banner3 from '../../../images/banner/banner-6.jpg';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        style={{ height: '500px' }}
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '500px' }}
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '500px' }}
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;