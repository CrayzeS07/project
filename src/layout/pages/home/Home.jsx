import React from "react";
import { Banner } from "./components/banner/banner";
import { Catalog } from "./components/banner/Catalog";
import { PhoneSliders } from "./components/banner/categorySlider";

export const Home = () => {
    return (
        <>
            <div>
                <Banner />
            </div>
            <div>
                <Catalog />
            </div>
            <div>
                <div className="mt-[48px]">
                    <h1 className=" text-[24px] text-[#333333] font-jost font-bold text-center">Смартфоны и планшеты</h1>
                </div>
                <div className="mt-[24px]">
                    <PhoneSliders />
                </div>
            </div>
            <div className="w-[100%] h-[346px] bg-yellow-400 mt-[52px]">
                <h1 className="pt-[26px] text-[24px] font-bold font-jost text-[#281800] text-center">
                    Акции
                </h1>
                <div className="flex justify-center gap-[20px] mt-[15px]">
                    <img className="w-[430px] h-[240px] rounded-[10px]" src='https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-cool-new-mobile-phone-promotion-purple-banner-image_183067.jpg' alt="" />
                    <img className="w-[430px] h-[240px] rounded-[10px]" src="https://img.freepik.com/free-psd/futuristic-cyber-monday-banner-template_23-2149117341.jpg" alt="" />
                    <img className="w-[430px] h-[240px] rounded-[10px]" src="https://www.popsci.com/uploads/2021/09/14/iphone_13.jpg?auto=webp" alt="" />
                </div>
            </div>
        </>
    )
}