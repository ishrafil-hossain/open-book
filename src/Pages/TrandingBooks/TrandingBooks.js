import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import './TrandingBooks.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Button, Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';
// import 'swiper/css/scrollbar';

const TrandingBooks = () => {
    const trand = "Tranding Books"
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('tranding.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div className='m-5 '>
            <h2 className='container text-start'>{trand}</h2>
            <Swiper className='container'
                modules={[Navigation, Pagination, A11y]}
                // spaceBetween={10}
                slidesPerView={6}
                navigation
                pagination={{ clickable: true }}
                //   scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <div>
                    
                    {
                        books.map(book => <SwiperSlide className='slide-content'>
                            <img src={book.img} alt="" />
                            <h2 className='m-2 bg-primary'>{book.btn}</h2>
                        </SwiperSlide>)
                    }
                </div>
            </Swiper>
        </div>
    );
};

export default TrandingBooks;