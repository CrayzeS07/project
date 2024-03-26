import React from "react";
import korzinka from "../../../assets/imgs/korzinka.svg"

export const ProductCard = ({ img, title, rame, color, brand, price, id, }) => {
    return (
        <div className="w-[280px] p-[20px] rounded-[10px]">
            <div className="flex justify-center">
                <img className="w-[165px]" src={img} alt="img" />
            </div>
            <div className="flex justify-center">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">{brand}</h3>
            </div>
            <div className="flex justify-center">
                <h3 className="text-[20px] text-center font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">{title}</h3>
            </div>
            <div className="flex justify-center">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">{color}</h3>
            </div>
            <div className="flex justify-between  p-[10px]">
                <div>
                    <h2 className=" text-center font-jost font-bold text-[22px] text-[#7e7127]">{price} Сум</h2>
                </div>
                <div className="w-[36px] h-[36px] bg-yellow-400 flex justify-center cursor-pointer rounded-[6px]">
                    <img className="w-[24px]" src={korzinka} alt="" />
                </div>
            </div>
        </div>
    )
}