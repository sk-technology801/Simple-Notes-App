'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tight">
          📝 NotesApp
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/notes" className="hover:text-gray-300 transition">
                My Notes
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-300 transition">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
