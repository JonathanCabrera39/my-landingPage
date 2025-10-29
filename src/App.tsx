// import "./App.css";
// import Navbar from "./components/Navbar";
// import { VideoGame } from "./models/video-game";
// import VideoGameGrid from "./VideoGames/VideoGameGrid";

// function App() {
//   const games: VideoGame[] = [
//     {
//       id: 1,
//       title: "Cyber Odyssey 2077",
//       subtitle: "Future Reality RPG",
//       description:
//         "Immerse yourself in a dystopian future where choices shape your destiny",
//       image: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
//     },
//     {
//       id: 2,
//       title: "Medieval Legends",
//       subtitle: "Fantasy Adventure",
//       description:
//         "Explore vast kingdoms and battle mythical creatures in this epic journey",
//       image: "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e",
//     },
//     {
//       id: 3,
//       title: "Space Warriors",
//       subtitle: "Sci-Fi Strategy",
//       description:
//         "Command your fleet and conquer the galaxy in this strategic space warfare",
//       image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5",
//     },
//     {
//       id: 4,
//       title: "Racing Evolution",
//       subtitle: "High-Speed Action",
//       description:
//         "Experience ultimate racing thrills with next-gen graphics and physics",
//       image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e",
//     },
//     {
//       id: 5,
//       title: "Ninja Chronicles",
//       subtitle: "Action Adventure",
//       description: "Master ancient arts and defend your clan in feudal Japan",
//       image: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
//     },
//     {
//       id: 6,
//       title: "Monster Hunter X",
//       subtitle: "Action RPG",
//       description:
//         "Track and hunt magnificent creatures in a breathtaking open world",
//       image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f",
//     },
//   ];

//   return (
//     <>
//       <Navbar/>
//       <VideoGameGrid videoGames={games}/>
//     </>
//   );
// }

// export default App;

// src/App.tsx
import "./App.css";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatsAppButton from './components/WhatsAppButton';


export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <WhatsAppButton />
    </div>
  );
}
