import React from "react";
import { Search1 } from "../../imgs/imgs";

export const Search = () => {
    return (
        <>
            <div className="flex">
                <input className="w-[633px] h-[48px] bg-[#F2F4F7] p-[8px] text-[18px] text-[#828282] font-normal-100 outline-none rounded-[5px]" type="text" placeholder="Поиск" />
                <div className="w-[40px] h-[48px] bg-[#F2F4F7] flex justify-center pt-[14px] cursor-pointer">
                    <Search1 />
                </div>
            </div>
        </>
    )
}