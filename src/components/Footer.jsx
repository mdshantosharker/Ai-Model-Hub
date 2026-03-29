import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-red-900/50 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 sm:gap-12">
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="AI Hub Logo" className="h-10 w-auto" />
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold tracking-tight text-white">
                AI Hub
              </h2>
            </div>

            <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-md">
              One subscription. Access all frontier AI models in a single
              powerful platform.
            </p>
          </div>

          <div className="md:col-span-2 flex flex-col gap-4">
            <h3 className="text-red-400 font-semibold mb-4 text-lg">Product</h3>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Models
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 flex flex-col gap-4">
            <h3 className="text-red-400 font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 flex flex-col gap-4">
            <h3 className="text-red-400 font-semibold mb-4 text-lg">Legal</h3>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cookie Settings
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm sm:text-base text-zinc-500">
          <div>© {new Date().getFullYear()} AI Hub. All rights reserved.</div>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="hover:text-red-400 transition-colors">
              Made with ❤️ for AI enthusiasts
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
