"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Artists: React.FC = () => {
  const [songs, setSongs] = useState<any[]>([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get("/api/songs");
        setSongs(response.data);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };
    fetchSongs();
  }, []);

  const handleTileClick = (index: number) => {
    // Action to perform when a tile is clicked
    console.log("Tile clicked:", songs[index]);
    // You can perform any action here, such as navigating to another page
  };

  return (
    <div className="flex overflow-x-auto overflow-y-hidden p-4 bg-gradient-to-r from-emerald-300 to-emerald-200">
      {songs.map((song, index) => (
        <div
          className="w-52 m-2 h-32 rounded-lg p-4 mb-4 cursor-pointer"
          key={index}
          onClick={() => handleTileClick(index)}
        >
          <img
            className="rounded-full w-16 h-16"
            src="/images/singer-icon.png"
            alt=""
          />
          <p className="song-singer font-bold text-emerald-900 text-center mb-1 w-16">
            {song.singer}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Artists;
