import NavBar from "@/components/NavBar";
import SongListPage from "@/components/songsCard";
import SongsList from "@/components/songsList";
import Artists from "@/components/artists";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Artists />
      <div className="flex h-custom">
        <SongListPage />
        <SongsList />
      </div>
    </div>
  );
}
