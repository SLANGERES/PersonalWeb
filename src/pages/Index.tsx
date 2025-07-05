
import React from 'react';
import Header from '@/components/Header';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <Header />
        <Skills />
        <Projects />
        
        <footer className="mt-16 pt-8 border-t border-border">
          <div className="text-center text-muted-foreground">
            <p className="text-sm">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
