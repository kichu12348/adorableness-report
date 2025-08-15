import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Scene1.module.css";

interface Scene1Props {
  timeline: gsap.core.Timeline | null;
}

const Scene1: React.FC<Scene1Props> = ({ timeline }) => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const text = "I heard you were saying something silly about yourself…";

  useEffect(() => {
    if (!sceneRef.current || !textRef.current || !timeline) return;

    const typewriterTL = gsap.timeline();

    timeline

      .set(sceneRef.current, { autoAlpha: 1 })

      .set(textRef.current, { autoAlpha: 1 })

      .add(() => {
        const chars = text.split("");
        let html = "";

        textRef.current!.innerHTML = "";

        typewriterTL.to(textRef.current, {
          duration: chars.length * 0.05,
          onUpdate: function () {
            const progress = Math.round(typewriterTL.progress() * chars.length);
            html = chars.slice(0, progress).join("");
            textRef.current!.innerHTML = html;
          },
        });
      })
      .to({}, { duration: 0.5 })
      .to([sceneRef.current, textRef.current], {
        autoAlpha: 0,
        delay: 3,
        duration: 0.5,
      });

    return () => {
      typewriterTL.kill();
    };
  }, [timeline]);

  return (
    <div className={styles.scene} ref={sceneRef}>
      <div className={styles.text} ref={textRef}></div>
    </div>
  );
};

export default Scene1;
