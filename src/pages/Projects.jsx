import React from 'react';
import projects from '../data/projects';
import { GridPattern } from '../components/magicui/grid-pattern';
import { DotPattern } from '../components/magicui/dot-pattern';
import { PulseGrid } from '../components/magicui/pulse-grid';

const dottedBorder = '2px dashed rgba(255, 255, 255, 0.25)';
const tagBorder = '1px solid rgba(255, 255, 255, 0.15)';

const Projects = () => {
  return (
    <div className="relative bg-black flex-1 flex flex-col pt-16">
      <PulseGrid className="z-0" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col w-full">
        {/* Outer dotted frame — vertical lines span full height */}
        <div className="flex-1 flex flex-col" style={{ borderLeft: dottedBorder, borderRight: dottedBorder }}>
          <div className="my-auto py-8">
            {/* Header box */}
            <div
              className="relative overflow-hidden bg-neutral-900 min-h-[360px] flex items-center justify-center"
              style={{ borderTop: dottedBorder, borderBottom: dottedBorder }}
            >
              {/* Always-animating glow dots */}
              <DotPattern
                width={20}
                height={20}
                cr={2.5}
                glow
                className="text-neutral-400/60 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
              />
              <div className="relative z-10 text-center px-6">
                <h1 className="text-5xl sm:text-6xl font-bold text-white tracking-widest uppercase">
                  Projects
                </h1>
              </div>
            </div>

            {/* Project cards  */}
            {projects.map((project, i) => (
              <div
                key={project.title}
                className="relative overflow-hidden bg-neutral-900"
                style={{ borderBottom: dottedBorder }}
              >
                <GridPattern
                  width={48}
                  height={48}
                  className="fill-white/5 stroke-white/5 [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
                />
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
                  {/* Image */}
                  <div
                    className={i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}
                    style={{
                      borderRight: i % 2 === 0 ? dottedBorder : 'none',
                      borderLeft: i % 2 !== 0 ? dottedBorder : 'none',
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover aspect-[16/10] lg:aspect-auto lg:min-h-[280px]"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div
                    className={`${
                      i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
                    } px-8 sm:px-10 py-10 lg:py-14 flex flex-col justify-center`}
                  >
                    <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                      {project.type}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3 mb-4">
                      {project.title}
                    </h2>
                    <p className="text-neutral-400 leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono text-neutral-400 px-3 py-1.5"
                          style={{ border: tagBorder }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Philosophy box */}
            <div
              className="bg-neutral-950 min-h-[360px] flex items-center justify-center px-8 sm:px-12"
              style={{ borderBottom: dottedBorder }}
            >
              <div className="text-center max-w-2xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide uppercase mb-4">
                  Build Real Things
                </h2>
                <p className="text-neutral-400 leading-relaxed">
                  Every project at DevilQuant exists to solve a real problem. If it doesn't collect real data, answer a real question, or support real decision-making, we don't make it. The goal is infrastructure that the club actually uses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
