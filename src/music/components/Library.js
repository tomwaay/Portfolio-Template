import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) => {
  return (
    //if library status is true then use activelibrary css class (show) or leave blank (hide)
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            setSongs={setSongs}
            isPlaying={isPlaying}
            audioRef={audioRef}
            id={song.id}
            key={song.id}
            song={song}
            setCurrentSong={setCurrentSong}
            songs={songs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
