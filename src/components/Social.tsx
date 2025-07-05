import React from 'react';
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';

const socials = [
  {
    name: 'GitHub',
    link: 'https://github.com/SLANGERES',
    icon: <FaGithub className="text-gray-800 dark:text-gray-200" />,
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/karan-nautiyal-lin/',
    icon: <FaLinkedin className="text-blue-600" />,
  },
];

const Socials = () => {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold font-mono mb-6"> Connect with Me</h2>
      <div className="flex flex-wrap gap-6">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 border border-muted rounded-md hover:bg-muted transition font-mono text-sm"
          >
            {social.icon}
            <span>{social.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Socials;
