import { VideoGame } from "../models/video-game";
import GameItem from "./GameItem";

interface Props {
  videoGames: VideoGame[];
}

const VideoGameGrid = ({videoGames} :Props) => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="title">Featured Games</h1>
        <div className="grid-container">
          {videoGames.map((game) => (
            <GameItem key={game.id} {...game} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoGameGrid;
