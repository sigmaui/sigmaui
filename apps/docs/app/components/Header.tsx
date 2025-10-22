'use client';

import React from 'react';
import Link from 'next/link';

import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
  return (
    <header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Σ</span>
              </div>
              <span className="text-xl font-bold text-gray-900 [data-theme=dark]:text-gray-100">
                Sigma UI Kit
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-600 [data-theme=dark]:text-gray-400 hover:text-gray-900 [data-theme=dark]:hover:text-gray-100 px-3 py-2 text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/components"
              className="text-gray-600 [data-theme=dark]:text-gray-400 hover:text-gray-900 [data-theme=dark]:hover:text-gray-100 px-3 py-2 text-sm font-medium transition-colors"
            >
              Components
            </Link>
            <Link
              href="/components/button"
              className="text-gray-600 [data-theme=dark]:text-gray-400 hover:text-gray-900 [data-theme=dark]:hover:text-gray-100 px-3 py-2 text-sm font-medium transition-colors"
            >
              Button
            </Link>
          </nav>

          {/* Theme Switcher */}
          <div className="flex items-center">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
