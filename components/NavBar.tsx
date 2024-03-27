"use client";
import React, { useState } from "react";
import Link from "next/link";

const NavBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showOverlay, setShowOverlay] = useState<boolean>(false);

  const handleSearchInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
    if (event.target.value === "") {
      setSearchResults([]);
      setShowOverlay(false); // Hide overlay when search term is empty
      return;
    }
    try {
      const response = await fetch(`/api/songs?q=${event.target.value}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setSearchResults(data); // Update search results
      setShowOverlay(true); // Show overlay
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  return (
    <div>
      <nav className="bg-gradient-to-r from-emerald-600 to-emerald-400 relative">
        <ul className="flex justify-between list-none">
          <div className="left-nav flex">
            <li>
              <a href="#">
                <img className="mt-2 mr-2" src="/images/logo.png" alt="logo" />
              </a>
            </li>
            <li>
              <a href="#">
                <div className="mt-1.5">
                  <p>Music</p>
                  <p>Player</p>
                </div>
              </a>
            </li>
          </div>
          <div>
            <li className="pt-5 text-3xl font-bold">
              Welcome to World of Music!!
            </li>
          </div>
          <div className="right-nav flex relative">
            <li>
              <input
                className="mt-3 px-5 py-1 w-80 rounded text-black"
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchInputChange}
              />
            </li>
            <Link href="/signup">
              <li className="p-4 ml-2">Login</li>
            </Link>
            {/* Overlay for search results */}
            {showOverlay && (
              <div className="absolute overflow-auto bg-white shadow-lg border border-gray-200 rounded h-96 p-2 top-12 left-0 z-10">
                <ul>
                  {searchResults.map((result, index) => (
                    <li className="text-black" key={index}>
                      {result.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
