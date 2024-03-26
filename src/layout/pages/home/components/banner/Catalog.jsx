import React from "react";
import Slider from "react-slick";
import { useSliderCard } from "../../service/query/useGetBanner";
import Skeleton from "react-loading-skeleton";

const settings34 = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
};

export const Catalog = () => {
    const { data, isLoading } = useSliderCard()
    return (
        <Slider {...settings34}>
            {isLoading ? (
                <div>
                    <Skeleton height={200} />
                </div>
            ) : (
                data?.map((item) => (
                    <div key={item.id}>
                        <div className="flex w-[241px] h-[124px] justify-center bg-[#F6F6F6] rounded-[5px] gap-[5px] mt-[40px]">
                            <div>
                                <img className="w-[100px] mt-[14px] pl-[10px]" src={item.img} alt="catalog" />
                            </div>
                            <div>
                                <p className="text-[16px] font-medium font-jost text-[#333333] w-[97px] mt-[26px]">{item.text}</p>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </Slider>
    )
}