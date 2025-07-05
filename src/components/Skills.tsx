
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Go", "JavaScript", "TypeScript", "Python", "SQL"]
    },
    {
      title: "Backend", 
      skills: ["Node.js", "Express", "REST APIs", "GraphQL", "gRPC"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL"]
    },
    {
      title: "Infrastructure",
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Linux"]
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-xl font-mono font-semibold mb-8">Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="font-mono font-medium mb-3 text-sm uppercase tracking-wide">
              {category.title}
            </h3>
            <div className="space-y-1">
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skillIndex}
                  className="text-sm text-muted-foreground font-mono"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
