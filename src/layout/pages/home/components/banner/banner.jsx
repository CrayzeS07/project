import React from "react";
import Slider from "react-slick";
import { useGetBanner } from "../../service/query/useGetBanner";
import Skeleton from "react-loading-skeleton";

const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};



export const Banner = () => {
    const { data, isLoading } = useGetBanner();

    return (
        <Slider {...settings}>
            {isLoading ? (
                <div>
                    <Skeleton height={200} />
                </div>
            ) : (
                data?.map((item) => (
                    <div key={item.id}>
                        <img src={item.img} alt="Banner" />
                    </div>
                ))
            )}
        </Slider>
    );
};
