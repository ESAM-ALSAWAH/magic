import React from "react";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
export const SwiperSection: React.FC<any> = ({ children }) => {
    return (
        <div className="max-w-[100%] w-[100%] ltr my-5 py-20 bg-[#fff6e7]">
            <Swiper
                navigation={true}
                pagination={{
                    clickable: true,
                    
                }}
                controller={{

                }}
                centeredSlides={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide  >
                    <div className="container flex flex-col sm:flex-row sm:justify-between py-10">
                        <div className="flex flex-col gap-y-6">
                            {/* <h5 className="text-[#f8bf58]">Offers</h5> */}
                            <h3 className="text-[#0f1b3e]">Villa in Ain Khaled</h3>
                            <ul className="list-disc flex flex-row  items-center gap-x-10 px-10">
                                <li>10 bedrooms</li>
                                <li>12 bathrooms</li>
                            </ul>
                            <ul className="list-disc flex flex-row  items-center gap-x-10 px-10">
                                <li> huge yard
                                </li>
                                <li>2021</li>
                            </ul>
                        </div>
                        <div className="max-w-[100%] sm:max-w-[50%]">
                            <img src="/images/realestate/sliderSection/Villa in Ain Khaled.png" alt="villa in ain khaled" />
                        </div></div>
                </SwiperSlide>
                <SwiperSlide  >
                    <div className="container flex flex-col sm:flex-row sm:justify-between py-10">
                        <div className="flex flex-col gap-y-6">
                            <h5 className="text-[#f8bf58]">Offers</h5>
                            <h3 className="text-[#0f1b3e]">Lusail Townhouses</h3>
                            <ul className="list-disc flex flex-row  items-center gap-x-10 px-10">
                                <li>3 bedrooms</li>
                                <li>2 living room</li>
                            </ul>
                            <ul className="list-disc flex flex-row  items-center gap-x-10 px-10">
                                <li> balcony
                                </li>
                                <li>2024</li>
                            </ul>
                        </div>
                        <div className="max-w-[100%] sm:max-w-[50%]">
                            <img src="/images/realestate/sliderSection/Lusail Townhouses.png" alt="Lusail Townhouses" />
                        </div></div>
                </SwiperSlide>
                <SwiperSlide  >
                    <div className="container flex flex-col sm:flex-row sm:justify-between py-10">
                        <div className="flex flex-col gap-y-6">
                            <h5 className="text-[#f8bf58]">Offers</h5>
                            <h3 className="text-[#0f1b3e]">Al Thumama Villas</h3>
                            <ul className="list-disc flex flex-row  items-center gap-x-10 px-10">
                                <li>5 bedrooms</li>
                                <li>2 living room</li>
                            </ul>
                            <ul className="list-disc flex flex-row  items-center gap-x-10 px-10">
                                <li> outdoor spaces
                                </li>
                                <li>2023</li>
                            </ul>
                        </div>
                        <div className="max-w-[100%] sm:max-w-[50%]">
                            <img src="/images/realestate/sliderSection/Al Thumama Villas.png" alt="Al Thumama Villas" />
                        </div></div>
                </SwiperSlide>
                <SwiperSlide  >
                    <div className="container flex flex-col sm:flex-row sm:justify-between py-10">
                        <div className="flex flex-col gap-y-6">
                            <h5 className="text-[#f8bf58]">Offers</h5>
                            <h3 className="text-[#0f1b3e]">Qatar, The Pearl</h3>
                            <ul className="list-disc flex flex-row  items-center gap-x-10 px-10">
                                <li>2 bedrooms</li>
                                <li>3 bathrooms</li>
                            </ul>
                            <ul className="list-disc flex flex-row  items-center gap-x-10 px-10">
                                <li> Outdoor Swimming Pool
                                </li>
                                <li>Kids Playroom</li>
                            </ul>
                        </div>
                        <div className="max-w-[100%] sm:max-w-[50%]">
                            <img src="/images/realestate/sliderSection/Capstone-Website-Rati5.png" alt="Capstone-Website" />
                        </div></div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
