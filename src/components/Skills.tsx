
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Shadcn UI", "Framer Motion"]
    },
    {
      title: "Backend", 
      skills: ["Node.js", "Express", "Go", "REST APIs", "Supabase", "Firebase"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Redis", "Neo4j"]
    },
    {
      title: "DevOps & Tools",
      skills: ["Docker", "Kubernetes", "AWS", "GitHub Actions", "Postman", "k6", "NATS", "Zap", "Betterstack", "Grafana", "Stripe", "Razorpay", "Web3.js"]
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-8 text-muted-foreground">Technical Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;
