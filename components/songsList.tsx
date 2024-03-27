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
    <div className="w-1/4 overflow-auto p-4 flex flex-wrap justify-around bg-gradient-to-r from-emerald-200 to-emerald-100">
      {songs.map((song, index) => (
        <div
          className="song-tile bg-gradient-to-r from-emerald-600 to-emerald-400 w-80 h-16 rounded-lg shadow-md p-2 mb-4 cursor-pointer"
          key={index}
          onClick={() => handleTileClick(index)}
        >
          <div className="flex justify-between">
            <div>
              <h2 className="song-title text-lg text-white font-bold">
                {song.name}
              </h2>
              <p className="song-singer text-white mb-1">{song.singer}</p>
            </div>
            <p className="song-duration text-white mb-1">{song.duration}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SongsList;
