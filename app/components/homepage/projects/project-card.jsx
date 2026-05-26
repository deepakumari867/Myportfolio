// @flow strict

import * as React from 'react';
import Image from 'next/image';

function ProjectCard({ project }) {

  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full overflow-hidden">

      <div className="p-4">

        <Image
          src={project.image}
          alt="Project Design"
          width={1200}
          height={700}
          className="w-full h-auto rounded-lg object-cover hover:scale-105 transition-all duration-500 cursor-pointer"
        />

      </div>

    </div>
  );
};

export default ProjectCard;