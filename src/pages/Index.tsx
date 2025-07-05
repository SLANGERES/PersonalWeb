
import React from 'react';
import Header from '@/components/Header';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';

import Socials from '@/components/Social';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Header />
        <Skills />
        <Projects />
        <Experience/>
        <Socials/>

        
        <footer className="mt-16 pt-8 border-t border-muted">
          <div className="text-center">
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-wide">
              Slangres
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
