import React, { useEffect, useState } from 'react';
import './Astronaut.css';

const Astronaut = () => {
  const [astronaut, setAstronaut] = useState(null);

  useEffect(() => {
    const getRandomSize = () => {
      const minSize = 20;
      const maxSize = 400;
      return Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
    };

    const getDurationFromSize = (size) => {
      const minDuration = 15;
      const maxDuration = 90;
      const minSize = 20;
      const maxSize = 400;
      const normalizedSize = (size - minSize) / (maxSize - minSize);
      return maxDuration - (normalizedSize * (maxDuration - minDuration));
    };

    const createAstronaut = () => {
      if (astronaut !== null) return;

      const size = getRandomSize();
      const horizontalPosition = Math.random() * 100;
      const duration = getDurationFromSize(size);

      setAstronaut({
        size,
        left: horizontalPosition,
        duration,
        key: Date.now()
      });

      setTimeout(() => {
        setAstronaut(null);
      }, duration * 1000);
    };

    const spawnAstronaut = () => {
      createAstronaut();
      const nextSpawn = (Math.random() * 240 + 60) * 1000; // 60-300 seconds
      setTimeout(spawnAstronaut, nextSpawn);
    };

    const initialDelay = (Math.random() * 90 + 30) * 1000; // 30-120 seconds
    const timeout = setTimeout(spawnAstronaut, initialDelay);

    return () => clearTimeout(timeout);
  }, [astronaut]);

  return (
    <div id="astronauts">
      {astronaut && (
        <div
          key={astronaut.key}
          className="astronaut"
          style={{
            width: `${astronaut.size}px`,
            height: `${astronaut.size}px`,
            left: `${astronaut.left}%`,
            animationDuration: `${astronaut.duration}s`
          }}
        />
      )}
    </div>
  );
};

export default Astronaut;
