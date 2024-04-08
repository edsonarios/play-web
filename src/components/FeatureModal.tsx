import { useEffect } from "react";

export default function FeatureModal({
  src,
  title,
  description,
  onClose,
}: {
  src: string;
  title: string;
  description: string | undefined;
  onClose: () => void;
}) {
  // Event key escape to close the modal
  useEffect(() => {
    const handleKeyPress = (event: any) => {
      if (event.key === "Escape") {
        console.log("close modal");
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div
      className={
        "fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10"
      }
      onClick={() => onClose()}
    >
      <section
        onClick={(event) => {
          event.stopPropagation();
        }}
        className="relative flex flex-row bg-zinc-900 rounded-md p-6 gap-8 z-40 items-center"
      >
        <div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="rounded-lg h-[500px] object-cover object-left group-hover:scale-105 transition-transform duration-300"
          >
            <source src={`/media/${src}`} type="video/mp4" />
          </video>
        </div>
        <div className="flex flex-col place-self-start w-60">
          <h2 className="text-white text-2xl font-bold mb-8">{title}</h2>
          <p className="text-white">{description}</p>
        </div>
      </section>
    </div>
  );
}
