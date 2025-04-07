import ProfileCard from "../cards/ProfileCard";

const teamMembers = [
    {
        name: "Tom Cruise",
        title: "Founder & Chairman",
        image: "/Tom.jpeg",
        socials: {
            twitter: "#",
            instagram: "#",
            linkedin: "#",
        },
    },
    {
        name: "Scarlett Johansson",
        title: "Chief Marketing Officer",
        image: "scarlett.jpg",
        socials: {
            twitter: "#",
            instagram: "#",
            linkedin: "#",
        },
    },
    {
        name: "Chris Evans",
        title: "Technical Director",
        image: "/chris.jpeg",
        socials: {
            twitter: "#",
            instagram: "#",
            linkedin: "#",
        },
    },
];


export default function CardContainer() {
    return (
        <div className="grid grid-cols-3 px-70 justify-center gap-12 p-6 bg-gray-100 dark:bg-gray-800">
            {teamMembers.map((member, index) => (
                <ProfileCard
                    key={index}
                    name={member.name}
                    title={member.title}
                    image={member.image}
                    socials={member.socials}
                />
            ))}
        </div>
    );
}
