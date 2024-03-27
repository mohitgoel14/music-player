"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const SongsList: React.FC = () => {
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
    <div className="w-3/4 overflow-auto p-4 flex flex-wrap justify-around bg-gradient-to-r from-emerald-200 to-emerald-100">
      {songs.map((song, index) => (
        <div
          className="song-tile bg-gradient-to-r from-emerald-600 to-emerald-400 w-48 h-44 rounded-lg shadow-md p-4 mb-4 cursor-pointer"
          key={index}
          onClick={() => handleTileClick(index)}
        >
          <h2 className="song-title text-lg text-white font-bold mb-2">
            {song.name}
          </h2>
          <p className="song-singer text-white mb-1">{song.singer}</p>
          <p className="song-duration text-white mb-1">{song.duration}</p>
          <p className="song-plays text-white mb-1">{song.plays} views</p>
        </div>
      ))}
    </div>
  );
};

export default SongsList;
