import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FilterSection = ({ filters }) => {
    const [openSections, setOpenSections] = useState(filters.reduce((acc, filter) => ({ ...acc, [filter.title]: true }), {}));

    const toggleSection = (title) => {
        setOpenSections((prev) => ({
            ...prev,
            [title]: !prev[title],
        }));
    };

    return (
        <div className="w-64 rounded-lg  bg-gray-800 shadow-md">
            {filters.map((filter, index) => (
                <div key={index} className="pb-4 border-b ">
                    <div
                        className="flex justify-between items-center cursor-pointer py-2 "
                        onClick={() => toggleSection(filter.title)}
                    >
                        <span className="font-semibold">{filter.title}</span>
                        {openSections[filter.title] ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
                    </div>
                    {openSections[filter.title] && (
                        <div className="mt-2 space-y-2">
                            {filter.options.map((option, i) => (
                                <label key={i} className="flex items-center space-x-2">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <span>{option}</span>
                                </label>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FilterSection;
