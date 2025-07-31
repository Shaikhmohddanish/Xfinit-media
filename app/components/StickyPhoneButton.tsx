"use client"

import Link from "next/link"

export default function StickyPhoneButton() {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <Link
        href="tel:18885000024"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium shadow-lg transition-colors duration-200"
      >
        1-888 500-0024
      </Link>
    </div>
  )
}
