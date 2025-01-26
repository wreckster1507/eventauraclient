import { Mail, Linkedin, Instagram } from "lucide-react"; // Import your icons

export const Socials = () => (
  <div className="flex space-x-4">
    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
      <Mail className="w-5 h-5" />
    </a>
    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
      <Linkedin className="w-5 h-5" />
    </a>
    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
      <Instagram className="w-5 h-5" />
    </a>
  </div>
);
