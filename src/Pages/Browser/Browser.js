import { Navigation, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import './Browser.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';

const Browser = () => {
    const [browsers, setBrowsers] = useState([]);
    useEffect(() => {
        fetch('browser.json')
            .then(res => res.json())
            .then(data => setBrowsers(data))
    }, [])
    return (
        <div>
            <div className='container bg-white'>
                <h4 className='container text-start pt-5 mb-4'>Browse by Subject</h4>
                <Swiper className=''
                    modules={[Navigation, A11y]}
                    slidesPerView={6}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <div className='browser'>
                        {
                            browsers.map(book => <SwiperSlide className=' browser-content'>
                                <img src={book.img} alt="" />
                                <div className='browser-info'>
                                    <span>{book.title}</span> <br />
                                    <small>{book.dec}</small>
                                </div>
                            </SwiperSlide>)
                        }
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default Browser;