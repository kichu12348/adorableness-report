import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Scene2.module.css";

interface Scene2Props {
  timeline: gsap.core.Timeline | null;
}

const Scene2: React.FC<Scene2Props> = ({ timeline }) => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const chubbyRef = useRef<HTMLDivElement>(null);
  const adorableRef = useRef<HTMLDivElement>(null);
  const proofRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !sceneRef.current ||
      !chubbyRef.current ||
      !adorableRef.current ||
      !proofRef.current ||
      !timeline
    )
      return;

    const tl = timeline.addLabel("scene2");

    tl.set(sceneRef.current, { autoAlpha: 1 })
      .fromTo(
        chubbyRef.current,
        { autoAlpha: 0, x: 0, rotation: 0 },
        {
          autoAlpha: 1,
          duration: 0.5,
          onComplete: () => {
            gsap.to(chubbyRef.current, {
              rotation: 5,
              duration: 0.1,
              repeat: 5,
              yoyo: true,
              ease: "power1.inOut",
            });
          },
        }
      )
      .to(chubbyRef.current, {
        textDecoration: "line-through",
        color: "#6b6b6b",
        duration: 0.5,
      })
      .to(chubbyRef.current, {
        x: "-=50vw",
        opacity: 0,
        delay: 0.5,
        duration: 0.5,
        ease: "power1.inOut",
      })
      .fromTo(
        adorableRef.current,
        { autoAlpha: 0, x: 200 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: 0.2,
        }
      )

      .to(adorableRef.current, {
        scale: 1.3,
        color: "#FF7FA2",
        duration: 0.7,
        repeat: 1,
        yoyo: true,
        ease: "back.out(1.7)",
      })
      .to(adorableRef.current, {
        y: -20,
        scale: 1.2,
        textShadow: "0 0 10px rgba(255,127,162,0.7)",
        duration: 0.5,
        delay: 0.5,
      })

      .fromTo(
        proofRef.current,
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.4)",
        }
      )
      .to(
        {},
        {
          duration: 0.3,
        }
      );

    return () => {};
  }, [timeline]);

  return (
    <div className={styles.scene} ref={sceneRef}>
      <div className={styles.wordContainer}>
        <div className={styles.wordWrapper}>
          <div className={styles.word} ref={chubbyRef}>
            Not Adorable
          </div>
        </div>
        <div className={styles.adorableContainer}>
          <div
            className={`${styles.word} ${styles.adorable}`}
            ref={adorableRef}
          >
            You Are Beautiful & Adorable
          </div>
          <div className={styles.proofText} ref={proofRef}>
            and I have proof
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scene2;
