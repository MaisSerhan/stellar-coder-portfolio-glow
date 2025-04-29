
import React from 'react';

const CircuitBackground: React.FC = () => {
  return (
    <div className="circuit-container">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <path className="circuit-line animate-circuit-flow" d="M0,50 Q25,25 50,50 T100,50 T150,50 T200,50" />
        <path className="circuit-line animate-circuit-flow" d="M0,100 Q50,75 100,100 T200,100 T300,100" 
              style={{ animationDelay: '0.5s' }} />
        <path className="circuit-line animate-circuit-flow" d="M50,0 Q75,50 50,100 T50,200 T50,300" 
              style={{ animationDelay: '0.8s' }} />
        <path className="circuit-line animate-circuit-flow" d="M150,0 Q175,50 150,100 T150,200" 
              style={{ animationDelay: '1.2s' }} />
        <circle className="circuit-line animate-circuit-flow" cx="50" cy="50" r="10" 
                style={{ animationDelay: '1.5s' }} />
        <circle className="circuit-line animate-circuit-flow" cx="150" cy="100" r="15" 
                style={{ animationDelay: '1.8s' }} />
        <rect className="circuit-line animate-circuit-flow" x="100" y="150" width="30" height="30" 
              style={{ animationDelay: '2s' }} />
      </svg>
    </div>
  );
};

export default CircuitBackground;
