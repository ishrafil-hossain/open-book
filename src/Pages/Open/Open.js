import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import './Open.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';
// import 'swiper/css/scrollbar';

const Open = () => {
    const [opens, setOpens] = useState([]);
    useEffect(() => {
        fetch('open.json')
            .then(res => res.json())
            .then(data => setOpens(data))
    }, [])
    return (
        <div>
            <div className='container bg-white'>
                <h4 className='container text-start pt-5'>Welcome to Open Library</h4>
                <Swiper className=''
                    modules={[Navigation, Pagination, A11y]}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <div>
                        {
                            opens.map(book => <SwiperSlide className=' open-content m-2 border border-1 rounded'>
                                <img src={book.img} alt="" />
                                <div className='info'>
                                    <p>{book.title}</p>
                                    <p className='small'>{book.dec}</p>
                                </div>
                            </SwiperSlide>)
                        }
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default Open;