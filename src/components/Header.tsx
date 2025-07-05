
import React from 'react';

const Header = () => {
  return (
    <header className="mb-16">
      <div className="mb-8">
        <h1 className="text-3xl font-mono font-semibold mb-2">Alex Morgan</h1>
        <p className="text-muted-foreground font-mono">Backend Developer</p>
      </div>
      
      <div className="max-w-3xl">
        <p className="text-base leading-relaxed text-muted-foreground mb-4">
          Backend engineer focused on building scalable systems with Go, Node.js, and cloud technologies. 
          Experience with microservices, databases, and DevOps practices. I write clean, efficient code 
          and solve complex technical problems.
        </p>
      </div>
    </header>
  );
};

export default Header;
