import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-purple-400">
              Click & Cart
            </h2>
            <p className="mt-3 text-gray-400">
              Your trusted online shopping destination.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-purple-400">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/products" className="hover:text-purple-400">
                  Products
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-purple-400">
                  About
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-purple-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3">
              Contact Us
            </h3>

            <p className="text-gray-400">
              Kathmandu, Nepal
            </p>

            <p className="text-gray-400">
              support@ecom.com
            </p>

            <p className="text-gray-400">
              +977 98********
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-5 text-center text-gray-400">
          © {new Date().getFullYear()}           Click & Cart. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;