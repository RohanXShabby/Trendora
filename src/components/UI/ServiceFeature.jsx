import { FaShippingFast, FaHeadphonesAlt, FaCheckCircle } from "react-icons/fa";

const ServiceFeatures = () => {
    const services = [
        {
            icon: <FaShippingFast className="text-white text-6xl" />,
            title: "FREE AND FAST DELIVERY",
            subtitle: "Free delivery for all orders over $140",
        },
        {
            icon: <FaHeadphonesAlt className="text-white text-6xl" />,
            title: "24/7 CUSTOMER SERVICE",
            subtitle: "Friendly 24/7 customer support",
        },
        {
            icon: <FaCheckCircle className="text-white text-6xl" />,
            title: "MONEY BACK GUARANTEE",
            subtitle: "We return money within 30 days",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3  grid-rows-3 md:grid-rows-1 gap-18 md:gap-2 mt-8 md:mt-0 text-center px-32 py-32">
            {services.map((item, index) => (
                <div key={index} className="flex h-fit flex-col gap-12 md:gap-8">
                    {/* Icon circle */}
                    <div className="w-32 h-32 mx-auto bg-gray-300 rounded-full flex items-center justify-center">
                        <div className="bg-black min-w-28 h-28 rounded-full flex items-center justify-center">
                            {item.icon}
                        </div>
                    </div>
                    {/* Title and subtitle */}
                    <div>
                        <h3 className="tex-xl md:text-2xl font-semibold">{item.title}</h3>
                        <p className="md:text-lg text-gray-300">{item.subtitle}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ServiceFeatures;
