import React from "react";
import { Call, Card, User, Like, Korzinka } from "./imgs/imgs";
import { Search } from "./components/search/search";
import Logo from "../../assets/imgs/logo.svg"
import { Modal } from "../../components/iu/modal/modal";
import useModal from "../../hooks/useModal";
import { Link } from "react-router-dom";
import { useGetCatalog } from "./service/query/useGetCatalog";
import { useLocation } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export const Header = () => {
    const { close, isOpen, open } = useModal();
    const { data, isLoading } = useGetCatalog();
    const location = useLocation();
    React.useEffect(() => {
        close();
    }, [location.pathname]);

    return (
        <>
            <Modal close={close} isOpen={isOpen}>
                <Link className="text-[#ffffff]" to="/category/123">
                    <button className="w-[100px] h-[40px] bg-[#a01d1dcc] rounded-[5px]">Kategoriya</button>
                </Link>
                {isLoading ? <Skeleton count={7} height={50} /> : (
                    <div className="grid grid-cols-3 gap-5 transition-300 ease">
                        {data?.map((item) => (
                            <div key={item.id}>
                                <Link to={`category/${item.name}`}>
                                    <div className="mt-[10px]">
                                        <div className="bg-[#5c5a5a21] flex justify-center rounded-[10px] w-[250px] h-[200px]">
                                            <img src={item.img} alt="Card" />
                                        </div>
                                        <div className="text-[#a01d1dcc] text-[20px] font-medium">
                                            <h3 className="text-[#000000]">{item.name}</h3>
                                            <p>{item.text}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </Modal>
            <div>
                <div className="flex gap-[24px] justify-end p-[20px]">
                    <p className="cursor-pointer text-[16px] text-[#211A1A] font-normal font-jost">Доставка и оплата</p>
                    <p className="cursor-pointer text-[16px] text-[#211A1A] font-normal font-jost">Пункты выдачи</p>
                    <p className="cursor-pointer text-[16px] text-[#211A1A] font-normal font-jost">Поддержка</p>
                    <div className="flex gap-[16px]">
                        <Call />
                        <p className="text-[14px] font-normal font-jost text-[#211A1A]">+998 90 253 77 53</p>
                    </div>
                </div>
                <div className="flex px-[50px] py-[20px] container">
                    <div>
                        <div>
                            <img src={Logo} alt="" />
                        </div>
                    </div>
                    <div className="pl-[62px]">
                        <div onClick={open} className="flex w-[158px] h-[48px] bg-yellow-400 gap-[12px] cursor-pointer rounded-[5px]">
                            <div className="mt-[18px] ml-[12px]">
                                <Card />
                            </div>
                            <div className="text-[20px] text-[#281800] font-jost font-semibold mt-[10px]">Каталог</div>
                        </div>
                    </div>
                    <div className="pl-[32px]">
                        <Search />
                    </div>
                    <div className="flex gap-[40px] pl-[80px]">
                        <div>
                            <div className="flex justify-center">
                                <User />
                            </div>
                            <p className="text-center text-[16px] text-[#211A1A] font-jost font-medium">Войти</p>
                        </div>
                        <div>
                            <div className="flex justify-center">
                                <Like />
                            </div>
                            <p className="text-center text-[16px] text-[#211A1A] font-jost font-medium">Избранное</p>
                        </div>
                        <div>
                            <div className="flex justify-center">
                                <Korzinka />
                            </div>
                            <p className="text-center text-[16px] text-[#211A1A] font-jost font-medium">Корзина</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
