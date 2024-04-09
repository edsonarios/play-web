import { useState } from "react";
import { Feature } from "./Feature";
import FeatureModal from "./FeatureModal";

export function Features() {
  const [isModalOpen, setIsModalOpen] = useState(-1);
  const features = [
    {
      title: "Create new Playlists",
      src: "create-playlist.mp4",
      description: "Create new playlists and add songs to them",
      rowSpan: 2,
      colSpan: 1,
    },
    {
      title: "View songs in playlist",
      src: "view-songs.mp4",
      description: "View songs in a playlist and play them",
      rowSpan: 2,
      colSpan: 1,
    },
    {
      title: "Reproduce song by dragging and dropping",
      src: "reproduce-by-dd.mp4",
      description: "Reproduce songs by dragging and dropping them",
      rowSpan: 1,
      colSpan: 2,
    },

    {
      title: "Reproduce song by dragging and dropping",
      src: "enter-playlist.mp4",
      description: "Enter a playlist and view its songs",
      rowSpan: 1,
      colSpan: 2,
    },
    {
      title: "View songs in playlist",
      src: "view-songs.mp4",
      descritpion: "View songs in a playlist and play them",
      rowSpan: 2,
      colSpan: 1,
    },

    {
      title: "View songs in playlist",
      src: "view-songs.mp4",
      description: "View songs in a playlist and play them",
      rowSpan: 2,
      colSpan: 1,
    },
    {
      title: "View songs in playlist",
      src: "view-songs.mp4",
      description: "View songs in a playlist and play them",
      rowSpan: 2,
      colSpan: 1,
    },
  ];
  return (
    <section className="mx-40 mt-10">
      <div className="grid grid-cols-6 gap-8">
        {/* {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 ${
              i === 2 || i === 3 ? "col-span-2" : ""
            }`}
          ></div>
        ))} */}
        {features.map((feature, index) => (
          <Feature
            key={index}
            index={index}
            setKey={setIsModalOpen}
            title={feature.title}
            src={feature.src}
            rowSpan={feature.rowSpan}
            colSpan={feature.colSpan}
          />
        ))}

        {isModalOpen !== -1 &&
        <FeatureModal
          src={features[isModalOpen].src}
          title={features[isModalOpen].title}
          description={features[isModalOpen].description}
          onClose={() => setIsModalOpen(-1)}
        />}
      </div>
    </section>
  );
}
