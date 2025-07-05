
import React from 'react';

const Experience = () => {
  const projects = [
  {
    title: "Steller Byte Technology",
    description: "Built backend APIs using Node.js integrating OpenAI and LangChain for automated workflows. Worked closely with frontend and product teams to ship RESTful features.",
    period: "Jan 2025 – Apr 2025",
    tech: ["Node.js", "OpenAI", "LangChain", "REST API"]
  },
  {
    title: "MereNearBy",
    description: "Built reusable React components with Redux for an e-commerce dashboard. Contributed to backend with Node.js and SQL during Agile sprints.",
    period: "Jun 2022 – Sep 2022",
    tech: ["React", "Redux", "Node.js", "SQL"]
  }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-xl font-mono font-semibold mb-8">Experience</h2>
      
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

export default Experience;
