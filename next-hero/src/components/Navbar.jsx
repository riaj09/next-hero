import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-red-500 px-6 py-4 flex justify-between items-center">
        <h6 className="text-3xl">
          Next <span className="text-cyan-200">Hero</span>
        </h6>
        <ul className="flex justify-between items-center">
          <li>About</li>
          <li>Service</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}
