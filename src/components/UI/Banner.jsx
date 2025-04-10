import React from "react";
import CountdownTimer from "./CountDownTimer";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center gap-[20vw] items-center mt-10 bg-black p-10 rounded-md  px-32 ">

            <div className="space-y-5 max-w-md">
                <p className="text-green-400 font-semibold">Categories</p>
                <h1 className="text-4xl font-bold leading-snug">
                    Enhance Your <br /> Music Experience
                </h1>

                <div className="mt-4 -ml-16">
                    <CountdownTimer targetDate="2026-04-05T23:59:59" />
                </div>

                <Link to='products/76' className="cursor-pointer bg-green-500 hover:bg-green-600 text-xl text-white font-semibold py-2 px-6 rounded mt-4 transition">
                    Buy Now!
                </Link>
            </div>
            <div className="mt-10  md:mt-0">
                <img
                    src='/speaker.png'
                    alt="Speaker"
                    className="w-[500px] md:w-[400px] drop-shadow-xl"
                />
            </div>
        </div>
    );
};

export default Banner;
