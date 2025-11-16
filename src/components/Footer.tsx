import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">📱</span>
              </div>
              <span className="text-lg sm:text-xl font-bold">Kasuwan Gizo</span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Empowering African MSMEs with digital tools, training, and real-time market access for sustainable business growth.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-sm sm:text-base">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/marketplace"
                  className="text-gray-400 hover:text-white transition text-xs sm:text-sm"
                >
                  Marketplace
                </Link>
              </li>
              <li>
                <Link
                  href="/training"
                  className="text-gray-400 hover:text-white transition text-xs sm:text-sm"
                >
                  Training
                </Link>
              </li>
              <li>
                <Link
                  href="/stakeholders"
                  className="text-gray-400 hover:text-white transition text-xs sm:text-sm"
                >
                  Stakeholders
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-gray-400 hover:text-white transition text-xs sm:text-sm"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-sm sm:text-base">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/help-center"
                  className="text-gray-400 hover:text-white transition text-xs sm:text-sm"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition text-xs sm:text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition text-xs sm:text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-white transition text-xs sm:text-sm"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-sm sm:text-base">Connect</h4>
            <div className="flex gap-3 sm:gap-4">
              <Link
                href="#"
                className="w-9 sm:w-10 h-9 sm:h-10 bg-gray-800 hover:bg-teal-600 rounded-full flex items-center justify-center transition text-xs sm:text-sm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                f
              </Link>
              <Link
                href="#"
                className="w-9 sm:w-10 h-9 sm:h-10 bg-gray-800 hover:bg-teal-600 rounded-full flex items-center justify-center transition text-xs sm:text-sm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                𝕏
              </Link>
              <Link
                href="#"
                className="w-9 sm:w-10 h-9 sm:h-10 bg-gray-800 hover:bg-teal-600 rounded-full flex items-center justify-center transition text-xs sm:text-sm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                in
              </Link>
              <Link
                href="#"
                className="w-9 sm:w-10 h-9 sm:h-10 bg-gray-800 hover:bg-teal-600 rounded-full flex items-center justify-center transition text-xs sm:text-sm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                📷
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <p className="text-gray-400 text-xs sm:text-sm text-center">
            © 2024 Kasuwan Gizo. All rights reserved. | Powered by Readby
          </p>
        </div>
      </div>
    </footer>
  );
}
