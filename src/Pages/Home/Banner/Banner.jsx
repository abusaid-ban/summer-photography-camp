import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import photo1 from '../../../assets/tortoise.png'
import photo2 from '../../../assets/tiger.png'
import photo3 from '../../../assets/butterfly.png'
import photo4 from '../../../assets/bird.png'
const Banner = () => {
    return (
        <div className="bg-black">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-[400px]"
            >
                <SwiperSlide><img className="mx-auto" src={photo1} alt="" />
                </SwiperSlide>
                <SwiperSlide><img className="mx-auto" src={photo2} alt="" /></SwiperSlide>
                <SwiperSlide><img className="mx-auto" src={photo3} alt="" /></SwiperSlide>
                <SwiperSlide><img className="mx-auto" src={photo4} alt="" /></SwiperSlide>

            </Swiper>

        </div>
    );
};

export default Banner;