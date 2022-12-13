import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import './Carousel.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const TrandingBooks = (props) => {
    const {name, books} = props
   
    return (
        <div className='container bg-white'>
            <h2 className='container text-start'>{name}</h2>
            <Swiper className=''
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
                            <h4 className='m-2 bg-primary'>{book.btn}</h4>
                        </SwiperSlide>)
                    }
                </div>
            </Swiper>
        </div>
    );
};

export default TrandingBooks;