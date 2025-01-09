import { Heart } from 'lucide-react';
import logo from '../assets/images/logopic.png'; // Adjust the path based on where you place the image

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start gap-8"> {/* Horizontal row */}
          {/* HIV Connect Section */}
          <div className="flex-1 min-w-[200px]">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="w-6 h-6 text-red-500" />
              <span className="text-lg font-bold">HIV Connect</span>
            </div>
            <p className="text-gray-400">
              Bridging knowledge and care in The Bahamas
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/resources" className="text-gray-400 hover:text-white">Resources</a></li>
            </ul>
          </div>

          {/* Partners Section */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-lg font-semibold mb-4">Partners</h3>
            <p className="text-gray-400 mb-4">
              The National Reference Laboratory<br />
              Ministry of Health and Wellness | The Bahamas
            </p>
            <img src={logo} alt="The National Reference Laboratory Logo" className="w-20 h-auto" />
          </div>

          {/* Created By Section */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-lg font-semibold mb-4">Created By</h3>
            <p className="text-gray-400">Jaydette Callender</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} HIV Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
