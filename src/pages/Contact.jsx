import React from 'react'
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    return (
        <div className='px-32'>
            <div className="flex flex-col md:flex-row gap-6 p-6 md:p-10">
                {/* Left Section */}
                <div className=" p-6 w-full md:w-1/3 space-y-6">
                    {/* Call Section */}
                    <div className="flex items-start gap-4">
                        <div className="bg-red-200 text-white p-3 rounded-full">
                            <FaPhoneAlt />
                        </div>
                        <div>
                            <h3 className="font-semibold">Call To Us</h3>
                            <p className="text-sm mt-1">We are available 24/7, 7 days a week.</p>
                            <p className="text-sm mt-1">Phone: +8801611112222</p>
                        </div>
                    </div>

                    <hr />

                    {/* Write Section */}
                    <div className="flex items-start gap-4">
                        <div className="bg-red-200 text-white p-3 rounded-full">
                            <FaEnvelope />
                        </div>
                        <div>
                            <h3 className="font-semibold">Write To US</h3>
                            <p className="text-sm mt-1">
                                Fill out our form and we will contact you within 24 hours.
                            </p>
                            <p className="text-sm mt-1">Emails: customer@trendora.com</p>
                            <p className="text-sm">Emails: support@trendora.com</p>
                        </div>
                    </div>
                </div>

                {/* Right Section - Form */}
                <div className=" p-6 w-full md:w-2/3 rounded-md shadow-sm">
                    <div className="grid md:grid-cols-3 gap-4">
                        <input
                            type="text"
                            placeholder="Your Name *"
                            className="border px-4 py-2 rounded"
                        />
                        <input
                            type="email"
                            placeholder="Your Email *"
                            className="border px-4 py-2 rounded"
                        />
                        <input
                            type="tel"
                            placeholder="Your Phone *"
                            className="border px-4 py-2 rounded"
                        />
                    </div>
                    <textarea
                        placeholder="Your Message"
                        rows={6}
                        className="w-full mt-4 border px-4 py-2 rounded resize-none"
                    ></textarea>
                    <button className="mt-4 bg-red-200 hover:bg-red-300 duration-300 text-white px-6 py-2 rounded">
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contact
