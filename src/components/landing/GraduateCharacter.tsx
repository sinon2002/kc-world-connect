import graduateImg from "@/assets/boy_on_graduation-amico.png.asset.json";

export function GraduateCharacter({ className }: { className?: string }) {
  return (
    <img
      src={graduateImg.url}
      alt="Улыбающийся студент-выпускник в мантии и академической шапке с дипломом"
      className={`kc-breathe ${className ?? ""}`}
      loading="eager"
      decoding="async"
    />
  );
}
