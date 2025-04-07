import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function ProfileCard({ name, title, image, socials }) {
    return (
        <div className="w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md text-center">
            <img
                src={image}
                alt={name}
                className="w-full h-72 object-cover"
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{name}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-300">{title}</p>

                <div className="flex justify-center mt-3 space-x-4 text-gray-600 dark:text-gray-300">
                    {socials.twitter && (
                        <a href={socials.twitter} className="hover:text-black dark:hover:text-white">
                            <FaTwitter />
                        </a>
                    )}
                    {socials.instagram && (
                        <a href={socials.instagram} className="hover:text-black dark:hover:text-white">
                            <FaInstagram />
                        </a>
                    )}
                    {socials.linkedin && (
                        <a href={socials.linkedin} className="hover:text-black dark:hover:text-white">
                            <FaLinkedin />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
