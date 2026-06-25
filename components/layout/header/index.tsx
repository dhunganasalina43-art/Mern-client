"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-purple-600"
        >
          Click & Cart
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-purple-600">
            Home
          </Link>

          <Link href="/products" className="hover:text-purple-600">
            Products
          </Link>

          <Link href="/about" className="hover:text-purple-600">
            About
          </Link>

          <Link href="/contact" className="hover:text-purple-600">
            Contact
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex gap-3">
          <Link
            href="/auth/login"
            className="px-4 py-2 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50"
          >
            Login
          </Link>

          <Link
            href="/auth/register"
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;