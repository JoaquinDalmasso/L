import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import LaAntoniaLogo from "../assets/LaAntoniaLogo.png"
import ImageFull from "../assets/image-full.png"
import ImageBottom from "../assets/image-bottom.png"

export default function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 0.5], ["0%", "200%"]);

  return (
    <div
      ref={ref}
      className="relative grid w-full h-screen overflow-hidden place-items-center"
    >
      <motion.h1
        style={{ y: textY }}
        className="relative z-10 flex justify-center items-center mt-[-500px]"
      >
        <img 
          src={LaAntoniaLogo} 
          alt="Logo" 
          className="w-3/4 h-auto"
        />
      </motion.h1>

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/image-full.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(/image-bottom.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
}