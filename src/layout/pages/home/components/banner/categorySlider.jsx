import React from "react";
import { Phones1 } from "../../service/query/useGetBanner";
import Skeleton from "react-loading-skeleton";
import Slider from "react-slick";
import korzinka from "../../../../../assets/imgs/korzinka.svg"


const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
}


export const PhoneSliders = () => {
    const { data, isLoading } = Phones1()
    return (
        <Slider {...settings}>
            {isLoading ? (
                <div className="flex justify-center">
                    <h1>Loading</h1>
                </div>
            ) : (
                data?.map((item) => (
                    <div key={item.id}>
                        <div className="w-[280px] p-[20px] rounded-[10px]">
                            <div className="flex justify-center">
                                <img className="w-[165px]" src={item.img} alt="img" />
                            </div>
                            <div className="flex justify-center">
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">{item.brand}</h3>
                            </div>
                            <div className="flex justify-center">
                                <h3 className="text-[20px] text-center font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">{item.title}</h3>
                            </div>
                            <div className="flex justify-center">
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">{item.color}</h3>
                            </div>
                            <div className="flex justify-between  p-[10px]">
                                <div>
                                    <h2 className=" text-center font-jost font-bold text-[22px] text-[#7e7127]">{item.price} Сум</h2>
                                </div>
                                <div className="w-[36px] h-[36px] bg-yellow-400 flex justify-center cursor-pointer rounded-[6px]">
                                    <img className="w-[24px]" src={korzinka} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )
            }
        </Slider >
    )
}