import { useState } from "react";
import { Feature } from "./Feature";
import FeatureModal from "./FeatureModal";
import { media } from "../utils/media";

export function Features() {
  const [isModalOpen, setIsModalOpen] = useState(-1);
  const features = media
  return (
    <section className="md:mx-20 xl:mx-40 mt-10">
      <div className="grid 2xl:grid-cols-4 grid-cols-2 gap-8">
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
            position={feature.position}
          />
        ))}

        {isModalOpen !== -1 && (
          <FeatureModal
            src={features[isModalOpen].src}
            title={features[isModalOpen].title}
            description={features[isModalOpen].description}
            onClose={() => setIsModalOpen(-1)}
          />
        )}
      </div>
      <p className="mt-10">
        <a
          href="/docs"
          className="text-blue-500 hover:underline"
        />
        You can discover more features in the documentation.
      </p>
    </section>
  );
}
