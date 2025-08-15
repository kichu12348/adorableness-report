import React, { useEffect, useRef } from "react";
import styles from "./Scene3.module.css";
import {
  FaSmile,
  FaLaughSquint,
  FaPalette,
  FaFire,
  FaHeart,
  FaStar,
} from "react-icons/fa";

interface Scene3Props {
  timeline: gsap.core.Timeline | null;
}

const Scene3: React.FC<Scene3Props> = ({ timeline }) => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const evidenceARef = useRef<HTMLDivElement>(null);
  const evidenceBRef = useRef<HTMLDivElement>(null);
  const evidenceCRef = useRef<HTMLDivElement>(null);
  const evidenceDRef = useRef<HTMLDivElement>(null);
  const evidenceERef = useRef<HTMLDivElement>(null);
  const evidenceFRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !sceneRef.current ||
      !headingRef.current ||
      !evidenceARef.current ||
      !evidenceBRef.current ||
      !evidenceCRef.current ||
      !evidenceDRef.current ||
      !evidenceERef.current ||
      !evidenceFRef.current ||
      !timeline
    )
      return;

    const tl = timeline.addLabel("scene3");

    tl.set(sceneRef.current, { autoAlpha: 1 })

      .fromTo(
        headingRef.current,
        { autoAlpha: 0, y: -50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        }
      )

      .fromTo(
        evidenceARef.current,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        }
      )
      .fromTo(
        evidenceBRef.current,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "+=0.3"
      )
      .fromTo(
        evidenceCRef.current,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "+=0.3"
      )
      .fromTo(
        evidenceDRef.current,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "+=0.3"
      )
      .fromTo(
        evidenceERef.current,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "+=0.3"
      )
      .fromTo(
        evidenceFRef.current,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "+=0.3"
      )
      .to(
        [
          headingRef.current,
          evidenceARef.current,
          evidenceBRef.current,
          evidenceCRef.current,
          evidenceDRef.current,
          evidenceERef.current,
          evidenceFRef.current,
        ],
        {
          autoAlpha: 0,
          y: -30,
          duration: 0.5,
          stagger: 0.1,
          delay: 1,
        }
      )
      .to({}, { duration: 0.3 });

    return () => {};
  }, [timeline]);

  return (
    <div className={styles.scene} ref={sceneRef}>
      <div className={styles.heading} ref={headingRef}>
        Aneenu is Adorable
      </div>
      <div className={styles.evidenceContainer}>
        <div className={styles.evidenceItem} ref={evidenceARef}>
          <div className={styles.icon}>
            <FaSmile />
          </div>
          <div className={styles.text}>
            Exhibit A: Your smile lights up any room you're in...
          </div>
        </div>
        <div className={styles.evidenceItem} ref={evidenceBRef}>
          <div className={styles.icon}>
            <FaLaughSquint />
          </div>
          <div className={styles.text}>
            Exhibit B: Your sense of humor makes everyone around you happy...
          </div>
        </div>
        <div className={styles.evidenceItem} ref={evidenceCRef}>
          <div className={styles.icon}>
            <FaPalette />
          </div>
          <div className={styles.text}>
            Exhibit C: Your creativity and artistic vision is extraordinary...
          </div>
        </div>
        <div className={styles.evidenceItem} ref={evidenceDRef}>
          <div className={styles.icon}>
            <FaFire />
          </div>
          <div className={styles.text}>
            Exhibit D: You're a supportive friend who brings out the best in
            others...
          </div>
        </div>
        <div className={styles.evidenceItem} ref={evidenceERef}>
          <div className={styles.icon}>
            <FaStar />
          </div>
          <div className={styles.text}>
            Exhibit E: Your kindness makes you shine brighter than any star...
          </div>
        </div>
        <div className={styles.evidenceItem} ref={evidenceFRef}>
          <div className={styles.icon}>
            <FaHeart />
          </div>
          <div className={styles.text}>
            Exhibit F: The way you care for others shows your beautiful heart...
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scene3;
