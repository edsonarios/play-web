import type { Dispatch, SetStateAction } from "react";
import { flushSync } from "react-dom";

export function Feature({
  index,
  setKey,
  title,
  src,
  rowSpan = 1,
  colSpan = 1,
}: {
  index: number;
  setKey: Dispatch<SetStateAction<number>>;
  title: string;
  src: string;
  rowSpan?: number;
  colSpan?: number;
}) {
  return (
    <div
      className={`row-span-${rowSpan} col-span-${colSpan} rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 relative overflow-hidden group`}
      onClick={() => {
        // @ts-expect-error startViewTransition is not supported by all browsers
        document.startViewTransition(async () => {
          flushSync(() => {
            setKey(index);
          })
        })
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="rounded-lg h-full object-cover object-left group-hover:scale-105 transition-transform duration-300"
        style={{ viewTransitionName: `img-${src}` }}
      >
        <source src={`/media/${src}`} type="video/mp4" />
      </video>
      <div className="absolute bottom-0 left-0 right-0 h-1/6 bg-gradient-to-t from-black to-transparent group-hover:opacity-0"></div>
      <h2 className="absolute bottom-0 ml-2 mb-4 text-white group-hover:opacity-0">
        {title}
      </h2>
    </div>
  );
}
