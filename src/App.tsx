import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './App.css';
import styles from './App.module.css';

import Scene1 from './components/Scene1';
import Scene2 from './components/Scene2';
import Scene3 from './components/Scene3';
import Scene4 from './components/Scene4';

function App() {
  const masterTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create a master timeline
    const masterTimeline = gsap.timeline({
      paused: true,
      onUpdate: () => {
        if (progressFillRef.current) {
          const progress = masterTimeline.progress() * 100;
          gsap.to(progressFillRef.current, {
            width: `${progress}%`,
            duration: 0.1
          });
        }
      }
    });
    
    masterTimelineRef.current = masterTimeline;
    
    // Play the timeline
    masterTimeline.play();
    
    // Cleanup function
    return () => {
      if (masterTimelineRef.current) {
        masterTimelineRef.current.kill();
      }
    };
  }, []);

  return (
    <div className={styles.app}>
      <Scene1 timelineRef={masterTimelineRef} />
      <Scene2 timelineRef={masterTimelineRef} />
      <Scene3 timelineRef={masterTimelineRef} />
      <Scene4 timelineRef={masterTimelineRef} />
      <div className={styles.progressBar}>
        <div className={styles.progressFill} ref={progressFillRef}></div>
      </div>
    </div>
  );
}

export default App;
