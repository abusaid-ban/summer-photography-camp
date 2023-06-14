import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";


const ExtraSection = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://summer-photography-camp-server-eight.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="my-20">
            <h2 className="text-3xl text-center  bg-green-200 p-2"><span className="p-1 rounded-xl bg-sky-600">Review </span> Our Students</h2>
           
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="flex flex-col items-center mx-24 my-16">
                           
                            <p className="py-4">{review.details}</p>
                            <h3 className="text-3xl text-orange-400 ">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default ExtraSection;