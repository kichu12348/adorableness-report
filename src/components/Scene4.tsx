import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Scene4.module.css";

interface Scene4Props {
  timelineRef: React.RefObject<gsap.core.Timeline | null>;
}

const Scene4: React.FC<Scene4Props> = ({ timelineRef }) => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const verdictRef = useRef<HTMLDivElement>(null);
  const signatureRef = useRef<HTMLDivElement>(null);
  const heartsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !sceneRef.current ||
      !verdictRef.current ||
      !signatureRef.current ||
      !heartsContainerRef.current ||
      !timelineRef.current
    )
      return;

    const tl = timelineRef.current.addLabel("scene4");
    const createHearts = () => {
      const heartsContainer = heartsContainerRef.current;
      if (!heartsContainer) return;

      const heartCount = 25; // More hearts for Aneenu!
      const hearts = [];
      while (heartsContainer.firstChild) {
        heartsContainer.removeChild(heartsContainer.firstChild);
      }
      for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement("div");
        heart.classList.add(styles.heart);
        heart.innerHTML =
          '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        heartsContainer.appendChild(heart);
        hearts.push(heart);
        gsap.set(heart, { autoAlpha: 0 });
        gsap.to(heart, {
          autoAlpha: 0.7,
          y: -100 - Math.random() * 200,
          x: 50 - Math.random() * 100,
          rotation: -10 + Math.random() * 20,
          duration: 3 + Math.random() * 5,
          delay: Math.random() * 2,
          ease: "power1.inOut",
          repeat: 1,
          yoyo: true,
        });
      }
    };
    tl.set(sceneRef.current, { autoAlpha: 1 })
      .fromTo(
        verdictRef.current,
        { autoAlpha: 0, scale: 0.8 },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
        }
      )
      .fromTo(
        signatureRef.current,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power1.inOut",
        },
        "+=0.5"
      )
      .call(createHearts);

    // Cleanup
    return () => {};
  }, [timelineRef]);

  return (
    <div className={styles.scene} ref={sceneRef}>
      <div className={styles.verdictContainer}>
        <div className={styles.verdict} ref={verdictRef}>
          The case is closed. Aneenu, you're absolutely adorable and
          extraordinary in every way.
        </div>
        <div className={styles.signature} ref={signatureRef}>
          - betmen 🙃
        </div>
      </div>
      <div className={styles.heartsContainer} ref={heartsContainerRef}></div>
    </div>
  );
};

export default Scene4;
