import { VideoGame } from "../models/video-game";

const GameItem = (game: Omit<VideoGame, "id">) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img
          className="w-full h-full object-cover"
          src={game.image}
          alt={game.title}
        />
        <div className="card-overlay">
          <p className="card-icon">🎮</p>
        </div>
      </div>
      <div className="card-content">
        <h3 className="title title-md ">{game.title}</h3>
        <h4 className="subtitle text-secondary-100">{game.subtitle}</h4>
        <p className="description">{game.description}</p>
      </div>
    </div>
  );
};

export default GameItem;
