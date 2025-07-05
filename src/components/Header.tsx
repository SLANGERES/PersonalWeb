
import React from 'react';

const Header = () => {
  return (
    <header className="mb-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2 font-mono">Alex Morgan</h1>
          <p className="text-lg text-muted-foreground font-mono">(@alexmorgan_dev)</p>
        </div>
        <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-red-500 rounded transform rotate-45"></div>
        </div>
      </div>
      
      <p className="text-xl mb-4 font-semibold">Builder shaped by code</p>
      
      <div className="max-w-4xl">
        <p className="text-base leading-relaxed text-muted-foreground mb-4">
          Full Stack Developer specializing in React, Node.js, and TypeScript, with a focus on building 
          scalable applications and microservices. Experienced in Docker, Kubernetes, and cloud platforms. 
          I deliver high-performance systems. Committed to clean code and efficient architecture, I thrive in collaborative 
          environments, solving real-world problems through self-driven learning and pragmatic approaches.{' '}
          <button className="text-orange-500 hover:text-orange-600 underline transition-colors">
            Read more
          </button>
        </p>
      </div>
    </header>
  );
};

export default Header;
