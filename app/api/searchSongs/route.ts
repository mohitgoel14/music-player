// pages/api/songs.ts

import { NextApiRequest, NextApiResponse } from "next";

interface Song {
  name: string
  singer: string;
  duration: string;
  plays: number;
  // Add more properties as needed
}

const songsData: Song[] = [
  {
    name: "Shape of You",
    singer: "Ed Sheeran",
    duration: "3:53",
    plays: 10000000,
  },
  {
    name: "Bohemian Rhapsody",
    singer: "Queen",
    duration: "5:55",
    plays: 8500000,
  },
  {
    name: "Billie Jean",
    singer: "Michael Jackson",
    duration: "4:54",
    plays: 7800000,
  },
  {
    name: "Rolling in the Deep",
    singer: "Adele",
    duration: "3:48",
    plays: 9200000,
  },
  {
    name: "Hotel California",
    singer: "Eagles",
    duration: "6:30",
    plays: 7600000,
  },
  {
    name: "Stairway to Heaven",
    singer: "Led Zeppelin",
    duration: "8:02",
    plays: 6900000,
  },
  {
    name: "Smells Like Teen Spirit",
    singer: "Nirvana",
    duration: "5:01",
    plays: 8200000,
  },
  {
    name: "Sweet Child o' Mine",
    singer: "Guns N' Roses",
    duration: "5:56",
    plays: 7500000,
  },
  {
    name: "Yesterday",
    singer: "The Beatles",
    duration: "2:05",
    plays: 9800000,
  },
  {
    name: "Wonderwall",
    singer: "Oasis",
    duration: "4:18",
    plays: 8900000,
  },
  {
    name: "Hey Jude",
    singer: "The Beatles",
    duration: "7:11",
    plays: 7200000,
  },
  {
    name: "I Will Always Love You",
    singer: "Whitney Houston",
    duration: "4:31",
    plays: 8600000,
  },
  {
    name: "Let It Be",
    singer: "The Beatles",
    duration: "3:50",
    plays: 9100000,
  },
  {
    name: "Hallelujah",
    singer: "Jeff Buckley",
    duration: "6:53",
    plays: 7300000,
  },
  {
    name: "Don't Stop Believin'",
    singer: "Journey",
    duration: "4:11",
    plays: 9400000,
  },
  {
    name: "Thriller",
    singer: "Michael Jackson",
    duration: "5:57",
    plays: 7900000,
  },
  {
    name: "Dancing Queen",
    singer: "ABBA",
    duration: "3:51",
    plays: 9000000,
  },
  {
    name: "Like a Rolling Stone",
    singer: "Bob Dylan",
    duration: "6:13",
    plays: 7100000,
  },
  {
    name: "Imagine",
    singer: "John Lennon",
    duration: "3:04",
    plays: 9700000,
  },
  {
    name: "I Want to Hold Your Hand",
    singer: "The Beatles",
    duration: "2:24",
    plays: 9600000,
  },
  {
    name: "Every Breath You Take",
    singer: "The Police",
    duration: "4:13",
    plays: 9300000,
  },
  {
    name: "Hey Soul Sister",
    singer: "Train",
    duration: "3:36",
    plays: 8800000,
  },
  {
    name: "Wonderful Tonight",
    singer: "Eric Clapton",
    duration: "3:42",
    plays: 8700000,
  },
  {
    name: "Tears in Heaven",
    singer: "Eric Clapton",
    duration: "4:34",
    plays: 8500000,
  },
  {
    name: "Under Pressure",
    singer: "Queen, David Bowie",
    duration: "4:04",
    plays: 9100000,
  },
  {
    name: "Rocket Man",
    singer: "Elton John",
    duration: "4:41",
    plays: 8000000,
  },
  {
    name: "Killing Me Softly with His Song",
    singer: "Roberta Flack",
    duration: "4:46",
    plays: 8200000,
  },
  {
    name: "Bridge Over Troubled Water",
    singer: "Simon & Garfunkel",
    duration: "4:52",
    plays: 8100000,
  },
  {
    name: "Nothing Compares 2 U",
    singer: "Sinéad O'Connor",
    duration: "5:09",
    plays: 7800000,
  },
  {
    name: "Purple Rain",
    singer: "Prince",
    duration: "8:41",
    plays: 6900000,
  },
  {
    name: "Waterloo",
    singer: "ABBA",
    duration: "2:46",
    plays: 9700000,
  },
  {
    name: "Someone Like You",
    singer: "Adele",
    duration: "4:45",
    plays: 8400000,
  },
  {
    name: "Smooth",
    singer: "Santana featuring Rob Thomas",
    duration: "4:00",
    plays: 9000000,
  },
  {
    name: "Another Brick in the Wall",
    singer: "Pink Floyd",
    duration: "3:59",
    plays: 9100000,
  },
  {
    name: "Billie Jean",
    singer: "Michael Jackson",
    duration: "4:54",
    plays: 7800000,
  },
  {
    name: "Shape of You",
    singer: "Ed Sheeran",
    duration: "3:53",
    plays: 10000000,
  },
  {
    name: "Sweet Child o' Mine",
    singer: "Guns N' Roses",
    duration: "5:56",
    plays: 7500000,
  },
  {
    name: "Hotel California",
    singer: "Eagles",
    duration: "6:30",
    plays: 7600000,
  },
  {
    name: "Rolling in the Deep",
    singer: "Adele",
    duration: "3:48",
    plays: 9200000,
  },
  {
    name: "Stairway to Heaven",
    singer: "Led Zeppelin",
    duration: "8:02",
    plays: 6900000,
  },
  {
    name: "Smells Like Teen Spirit",
    singer: "Nirvana",
    duration: "5:01",
    plays: 8200000,
  },
  {
    name: "Bohemian Rhapsody",
    singer: "Queen",
    duration: "5:55",
    plays: 8500000,
  },
  {
    name: "Thriller",
    singer: "Michael Jackson",
    duration: "5:57",
    plays: 7900000,
  },
  {
    name: "Yesterday",
    singer: "The Beatles",
    duration: "2:05",
    plays: 9800000,
  },
  {
    name: "I Will Always Love You",
    singer: "Whitney Houston",
    duration: "4:31",
    plays: 8600000,
  },
  {
    name: "Hallelujah",
    singer: "Jeff Buckley",
    duration: "6:53",
    plays: 7300000,
  },
  {
    name: "Hey Jude",
    singer: "The Beatles",
    duration: "7:11",
    plays: 7200000,
  },
  {
    name: "Dancing Queen",
    singer: "ABBA",
    duration: "3:51",
    plays: 9000000,
  },
  {
    name: "Like a Rolling Stone",
    singer: "Bob Dylan",
    duration: "6:13",
    plays: 7100000,
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const { q } = req.query;
    if (q) {
      // Perform search if query parameter 'q' is present
      const filteredSongs = songsData.filter((song) =>
        song.name.toLowerCase().includes((q as string).toLowerCase())
      );
      res.status(200).json(filteredSongs);
    } else {
      // Return all songs if no query parameter is provided
      res.status(200).json(songsData);
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
