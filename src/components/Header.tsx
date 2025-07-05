import React from 'react';
import { FaFileAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="mb-16 flex flex-col">
      {/* Top Row: Name + GIF + Resume Button */}
      <div className="mb-8 flex flex-row items-center justify-between max-w-3xl">
        {/* Left: Name + GIF */}
        <div className="flex flex-row gap-4 items-center">
          <img 
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExam81czZpcHQxd25sMXhhbTk0N2pzNzB6OW1nNTlvOGxuYTRidWkyeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZVik7pBtu9dNS/giphy.gif" 
            alt="fun gif"
            className="w-21 h-20 object-cover"
          />
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-mono font-semibold mb-2">Karan Nautiyal</h1>
            <p className="text-muted-foreground font-mono">Backend Developer</p>
          </div>
        </div>

        {/* Right: Resume Button */}
        <a
          href="https://drive.google.com/file/d/1QqLA3ibxCRscWBmnPa6I7BasqVMnY1RQ/view?usp=drive_link" // Make sure this file exists in /public
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-4 py-2 border border-muted rounded-md hover:bg-muted transition font-mono text-sm"
        >
          <FaFileAlt className="text-yellow-500" />
          <span>Resume</span>
        </a>
      </div>

      {/* Bio */}
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
