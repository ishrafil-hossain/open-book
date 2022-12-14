import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Carousel.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const TrandingBooks = (props) => {
    const { name, books } = props

    return (
        <div className='container bg-white'>
            <h4 className='container text-start pt-5'>{name}</h4>
            <Swiper className=''
                modules={[Navigation, A11y]}
                slidesPerView={6}
                navigation
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