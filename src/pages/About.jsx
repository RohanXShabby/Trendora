import { FaUserTie, FaDollarSign, FaGift, FaChartLine } from "react-icons/fa";
import ServiceFeatures from "../components/UI/ServiceFeature";
import CardContainer from "../components/containers/ProfileCardContainer";

const OurStory = () => {
    return (
        <div className=" py-10 space-y-10">

            {/* Top Section */}
            <div className="flex px-32 flex-col gap-40 md:flex-row items-center">
                {/* Text */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
                    <p className="text-gray-300 mb-4">
                        Launched in 2015, Exclusive is South Asia’s premier online shopping
                        marketplace with an active presence in Bangladesh. Supported by wide
                        range of tailored marketing, data and service solutions, Exclusive has
                        10,500 sellers and 300 brands and serves 3 million customers across the
                        region.
                    </p>
                    <p className="text-gray-300">
                        Exclusive has more than 1 Million products to offer, growing at a very
                        fast. Exclusive offers a diverse assortment in categories ranging from
                        consumer.
                    </p>
                </div>

                {/* Image */}
                <div className="w-full md:w-1/2">
                    <img
                        src="./about.jpg"
                        alt="Shopping women"
                        className="rounded-lg shadow-md w-full object-cover"
                    />
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid px-32 grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {/* Sellers */}
                <div className=" p-6 hover:bg-red-200 duration-300 border rounded space-y-2">
                    <div className="mx-auto w-12 h-12  bg-black text-white flex items-center justify-center rounded-full">
                        <FaUserTie />
                    </div>
                    <h3 className="text-xl font-semibold">10.5k</h3>
                    <p className="text-sm text-white">Sellers active our site</p>
                </div>

                {/* Monthly Sale - Highlighted */}
                <div className="hover:bg-red-200 duration-300 p-6 border rounded space-y-2">
                    <div className="mx-auto w-12 h-12 bg-black text-white flex items-center justify-center rounded-full">
                        <FaDollarSign />
                    </div>
                    <h3 className="text-xl font-semibold">33k</h3>
                    <p className="text-sm">Monthly Product Sale</p>
                </div>

                {/* Customer Active */}
                <div className="hover:bg-red-200 duration-300 p-6 border rounded space-y-2">
                    <div className="mx-auto w-12 h-12 bg-black text-white flex items-center justify-center rounded-full">
                        <FaGift />
                    </div>
                    <h3 className="text-xl font-semibold">45.5k</h3>
                    <p className="text-sm text-white">Customer active in our site</p>
                </div>

                {/* Annual Sale */}
                <div className="hover:bg-red-200 duration-300 p-6 border rounded space-y-2">
                    <div className="mx-auto w-12 h-12 bg-black text-white flex items-center justify-center rounded-full">
                        <FaChartLine />
                    </div>
                    <h3 className="text-xl font-semibold">25k</h3>
                    <p className="text-sm text-white">Annual gross sale in our site</p>
                </div>
            </div>
            <CardContainer />
            <ServiceFeatures />
        </div>
    );
};

export default OurStory;
