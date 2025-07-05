
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Vypaar",
      description: "Competitive programming platform with Go backend, Redis leaderboards, and 2FA authentication.",
      period: "Feb 2025 - Present",
      tech: ["Go", "Redis", "Sqlite", "Docker", "Rabbit MQ", "Microservices"]
    },
    {
      title: "Pulse Vibe", 
      description: "Dockerized code execution engine supporting multiple languages with sub-second response times.",
      period: "Feb 2025 - Present",
      tech: ["Next.js", "OAuth 2.0", "Spotify API", "Langchain"]
    },
    {
      title: "Todo AI Agent",
      description: "Go library for Redis-backed leaderboards using sorted sets for real-time rankings.",
      period: "Oct 2024 - Present",
      tech: ["Node.js", "Drizzle ORM", "OpenAI", "PostgreSQL"]
    },
    {
      title: "Syncwave",
      description: "Microservices backend with gRPC communication, MongoDB storage, and Gin routing.",
      period: "Sep 2024 - Present", 
      tech: ["Node.js", "Express", "MongoDB", "Socket.io","WebRTC", "JWT"]
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-xl font-mono font-semibold mb-8">Projects</h2>
      
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="border-l-2 border-muted pl-4">
            <div className="mb-2">
              <h3 className="font-mono font-medium text-lg mb-1">
                {project.title}
              </h3>
              <p className="text-xs text-muted-foreground font-mono uppercase tracking-wide">
                {project.period}
              </p>
            </div>
            
            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <span 
                  key={techIndex} 
                  className="text-xs font-mono bg-muted px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
