
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "zenxbattle",
      description: "Competitive Programming Platform built with React, TypeScript, and Go. Features coding challenges, and competitive modes with 2FA security.",
      period: "(Feb 2025 - Present)",
      link: "#",
      tags: ["React", "TypeScript", "Go", "2FA", "Competitive Programming"]
    },
    {
      title: "xcodeEngine", 
      description: "High-performance Dockerized code execution engine in Go, supporting multiple languages with low latency.",
      period: "(Feb 2025 - Present)",
      link: "#",
      tags: ["Go", "Docker", "Microservices", "Performance"]
    },
    {
      title: "RedisBoard",
      description: "Go library for Redis-backed leaderboards using sorted sets for gaming applications.",
      period: "(Oct 2024 - Present)",
      link: "#",
      tags: ["Go", "Redis", "Gaming", "Library"]
    },
    {
      title: "AskMe",
      description: "Microservices-based backend with Go, Gin, MongoDB, and SQLite, using gRPC for communication.",
      period: "(Sep 2024 - Present)", 
      link: "#",
      tags: ["Go", "Gin", "MongoDB", "SQLite", "gRPC", "Microservices"]
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-8 text-muted-foreground">Projects</h2>
      
      <div className="space-y-8">
        {projects.map((project, index) => (
          <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl mb-2">
                    <a 
                      href={project.link}
                      className="text-blue-600 hover:text-blue-800 transition-colors underline"
                    >
                      {project.title}
                    </a>
                  </CardTitle>
                  <p className="text-muted-foreground text-sm mb-3">
                    {project.period}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge 
                    key={tagIndex} 
                    variant="secondary"
                    className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
