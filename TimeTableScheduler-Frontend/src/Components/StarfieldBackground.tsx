import React, { useEffect, useRef } from 'react';
import '../Style/StarfieldBackground.css';

interface StarfieldBackgroundProps {}

const StarfieldBackground: React.FC<StarfieldBackgroundProps> = () => {
  const orbContainerRef = useRef<HTMLDivElement>(null);
  const shootingStarContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createFloatingOrbs = () => {
      const container = orbContainerRef.current;
      if (!container) return;

      // Clear existing orbs
      container.innerHTML = '';

      // Create 20 floating orbs with variety
      for (let i = 0; i < 20; i++) {
        const orb = document.createElement('div');
        orb.className = 'floating-orb';
        
        // Random size between 1-10px
        const size = Math.random() * 9 + 1;
        orb.style.width = `${size}px`;
        orb.style.height = `${size}px`;
        
        // Random position
        orb.style.left = `${Math.random() * 100}%`;
        orb.style.top = `${Math.random() * 100}%`;
        
        // Enhanced color palette with more variety
        const colors = [
          'rgba(120, 197, 255, 0.8)',    // Light blue
          'rgba(14, 165, 233, 0.6)',     // Sky blue
          'rgba(6, 182, 212, 0.7)',      // Cyan
          'rgba(34, 211, 238, 0.5)',     // Light cyan
          'rgba(125, 211, 252, 0.8)',    // Pale blue
          'rgba(16, 185, 129, 0.6)',     // Emerald
          'rgba(59, 130, 246, 0.7)',     // Blue
          'rgba(139, 92, 246, 0.5)',     // Purple
          'rgba(236, 72, 153, 0.4)'      // Pink
        ];
        orb.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Random animation duration and delay
        const duration = Math.random() * 15 + 8; // 8-23 seconds
        orb.style.animation = `float-orb ${duration}s ease-in-out infinite`;
        orb.style.animationDelay = `${Math.random() * 8}s`;
        
        // Add some blur effect
        orb.style.filter = `blur(${Math.random() * 2}px)`;
        
        container.appendChild(orb);
      }
    };

    const createShootingStars = () => {
      const container = shootingStarContainerRef.current;
      if (!container) return;

      // Create shooting stars periodically
      const createShootingStar = () => {
        const star = document.createElement('div');
        star.className = 'shooting-star';
        
        // Random starting position (top area)
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 20}%`;
        
        container.appendChild(star);
        
        // Remove after animation
        setTimeout(() => {
          if (container.contains(star)) {
            container.removeChild(star);
          }
        }, 3000);
      };

      // Create initial shooting star
      createShootingStar();
      
      // Create new shooting stars every 5-15 seconds
      const createRandomShootingStar = () => {
        createShootingStar();
        const nextDelay = Math.random() * 10000 + 5000; // 5-15 seconds
        setTimeout(createRandomShootingStar, nextDelay);
      };
      
      setTimeout(createRandomShootingStar, Math.random() * 5000 + 2000);
    };

    createFloatingOrbs();
    createShootingStars();
    
    // Recreate orbs every 45 seconds for variety
    const orbInterval = setInterval(createFloatingOrbs, 45000);
    
    return () => {
      clearInterval(orbInterval);
    };
  }, []);

  return (
    <div className="starfield-background">
      {/* Multiple Star Layers */}
      <div className="stars-layer-1" />
      <div className="stars-layer-2" />
      <div className="stars-layer-3" />

      {/* Nebula Effect */}
      <div className="nebula-effect" />

      {/* Floating Orbs Container */}
      <div ref={orbContainerRef} className="floating-orbs-container" />

      {/* Shooting Stars Container */}
      <div ref={shootingStarContainerRef} style={{ position: 'absolute', width: '100%', height: '100%' }} />

      {/* Large Animated Stars */}
      <div className="large-stars">
        <div className="large-star star-1" style={{ left: '10%', top: '15%' }}>✦</div>
        <div className="large-star star-2" style={{ left: '85%', top: '25%' }}>✧</div>
        <div className="large-star star-3" style={{ left: '60%', top: '70%' }}>✦</div>
        <div className="large-star star-4" style={{ left: '20%', top: '80%' }}>✧</div>
        <div className="large-star star-5" style={{ left: '75%', top: '10%' }}>✦</div>
        <div className="large-star star-6" style={{ left: '40%', top: '30%' }}>✧</div>
        <div className="large-star star-7" style={{ left: '90%', top: '60%' }}>✦</div>
        <div className="large-star star-8" style={{ left: '15%', top: '50%' }}>✧</div>
        <div className="large-star star-1" style={{ left: '55%', top: '5%' }}>✦</div>
        <div className="large-star star-2" style={{ left: '25%', top: '35%' }}>✧</div>
        <div className="large-star star-3" style={{ left: '70%', top: '85%' }}>✦</div>
        <div className="large-star star-4" style={{ left: '5%', top: '65%' }}>✧</div>
        <div className="large-star star-5" style={{ left: '95%', top: '40%' }}>✦</div>
        <div className="large-star star-6" style={{ left: '50%', top: '90%' }}>✧</div>
        <div className="large-star star-7" style={{ left: '80%', top: '45%' }}>✦</div>
        <div className="large-star star-8" style={{ left: '30%', top: '75%' }}>✧</div>
      </div>
    </div>
  );
};

export default StarfieldBackground;
