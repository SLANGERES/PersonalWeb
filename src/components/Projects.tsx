import React from 'react';

const Projects = () => {
  const projects = [
    {
      "title": "Appointment Management System",
      "description": "Developed a microservices-based backend in FastAPI for managing appointments, featuring RESTful APIs, secure authentication, service-to-service communication, and role-based access control.",
      "period": "Aug 2025 - Ongoing",
      "tech": ["Python", "FastAPI", "PostgreSQL", "Docker", "RabbitMQ", "SwaggerAPI", "Microservices", "Redis"],
      "link": "https://github.com/yourusername/appointment-management"
      },
      {
      title: "Coding Tournament",
      description: "Built a scalable backend API in Go for a Coding Tournament platform, integrating RESTful endpoints, real-time leaderboards, and secure authentication.",
      period: "June 2025 - Aug 2025",
      tech: ["Go", "Grpc", "Sqlite", "Docker", "SwaggerAPI", "Microservices", "Prometheus"],
      link: "https://github.com/SLANGERES/Tournament-Leaderboard"
    },
    {
      title: "Vypaar",
      description: "Developed a modular Inventory Management System backend using Go with a microservices architecture, focusing on efficient data fetching and processing for inventory management",
      period: "Feb 2025 - June 2025",
      tech: ["Go", "Redis", "Sqlite", "Docker", "Rabbit MQ", "Microservices"],
      link: "https://github.com/SLANGERES/Vypaar"
    },
    {
      title: "Pulse Vibe", 
      description: "Built an AI-powered music recommendation web app using LangChain, GPT, and Spotify API to deliver personalized playlists based on user preferences",
      period: "Feb 2025 - March 2025",
      tech: ["Next.js", "OAuth 2.0", "Spotify API", "Langchain"],
      link: "https://github.com/SLANGERES/PulseVibes"
    },
    {
      title: "Todo AI Agent",
      description: "An AI agent that manages a TODO list by performing CRUD operations and continuously improving tasks through a reasoning chain",
      period: "Oct 2024 - Nov 2024",
      tech: ["Node.js", "Drizzle ORM", "OpenAI", "PostgreSQL"],
      link: "https://github.com/SLANGERES/Todo_AI_Agent"
    },
    {
      title: "Syncwave",
      description: "Developed a React-based real-time chat application with WebSocket integration and AI-powered conversational personas.",
      period: "Sep 2024 - Oct 2024", 
      tech: ["Node.js", "Express", "MongoDB", "Socket.io", "WebRTC", "JWT"],
      link: "https://github.com/SLANGERES/Syncwave"
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
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline text-blue-600"
                >
                  {project.title}
                </a>
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
