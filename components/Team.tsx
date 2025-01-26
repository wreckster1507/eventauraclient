

import Link from "next/link";
import Image from "next/image";
// import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  roleColor: string;
  image: string;
  linkedin: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Sindhu Ravuri",
    role: "Founder & CEO",
    roleColor: "text-blue-500",
    image: "/images/shree.jpeg",
    linkedin:"https://www.linkedin.com/in/sindhu-ravuri/"
  },
  {
    name: "Varun Harinath",
    role: "Co-founder & Lead Software Engineer",
    roleColor: "text-blue-500",
    image: "/images/varun.jpeg",
    linkedin:"https://www.linkedin.com/in/varun-harinath/"
  },
  {
    name: "Sarthak Aitha",
    role: "CTO & Technology Team Lead",
    roleColor: "text-blue-500",
    image: "/images/sarthak.jpeg",
    linkedin:"https://www.linkedin.com/in/sarthak-aitha-943534252/"
  },
  {
    name: "Akshay Rachakonda",
    role: "Frontend Developer",
    roleColor: "text-blue-500",
    image: "/images/akshayR.jpeg",
    linkedin:"https://www.linkedin.com/in/akshay-rachakonda/"
  },
  {
    name: "Akshay Sakinam",
    role: "Frontend Developer",
    roleColor: "text-blue-500",
    image: "/images/akshayS.jpeg",
    linkedin:"https://www.linkedin.com/in/akshay-sakinam-516502255/"
  },
  {
    name: "Ratna Sunandita",
    role: "Frontend Developer",
    roleColor: "text-blue-500",
    image: "/images/ratna.jpeg",
    linkedin:"https://www.linkedin.com/in/ratna-sunanditha-vanama/"
  },
];

const TeamOne = () => {
  return (
    <div className="w-full p-6 bg-gradient-to-t  flex items-center justify-center">
      <div className="p-2 bg-blue-300 rounded-3xl">
        <div className="bg-white rounded-3xl p-8 max-w-7xl w-full">
          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start mb-4">
              <h1 className="text-4xl font-bold text-gray-900">
                Let&apos;s Meet Our Team
              </h1>
              
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 relative w-40 h-40">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className={`${member.roleColor} font-medium mb-2`}>
                  {member.role}
                </p>
                <div className="flex items-center gap-2">
                  <Link href={member.linkedin} className="text-gray-400 hover:text-gray-600">
                    <Linkedin className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamOne;
