import React from 'react';
import allProjects from '../data/projects';

const projects = allProjects.filter((p) => p.visible);

const Projects = () => {
  return (
    <div className="sheet py-[72px]">
      <h1 className="text-[clamp(48px,10vw,96px)] leading-[1] font-extrabold tracking-[-0.04em] text-chalk">
        Projects
      </h1>

      <div className="mt-[72px]">
        {projects.map((project, i) => (
          <article
            key={project.title}
            className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] lg:gap-[48px] items-center py-[48px] border-t border-rule-major"
          >
            <img
              src={project.image}
              alt={project.title}
              className={`w-full aspect-[16/10] object-cover outline outline-[1.5px] outline-chalk/70 -outline-offset-[1.5px] ${i % 2 === 0 ? '' : 'lg:order-2'}`}
              loading="lazy"
            />
            <div>
              <h2 className="text-[28px] sm:text-[32px] leading-[1.25] font-bold tracking-[-0.03em] text-chalk">
                {project.title}
              </h2>
              <p className="mt-[4px] font-hand text-[18px] leading-[24px] text-redpen">{project.type}</p>
              <p className="mt-[24px] max-w-[60ch] text-[16px] leading-[26px] text-pencil">
                {project.description}
              </p>
              <ul className="mt-[24px] flex flex-wrap gap-[12px]">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="text-[13px] leading-[24px] px-[12px] text-chalk shadow-[inset_0_0_0_1px_var(--color-rule-major)] bg-pad"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-[24px] p-[24px] md:p-[48px] shadow-[inset_0_0_0_1.5px_var(--color-chalk)] bg-pad">
        <h2 className="text-[28px] sm:text-[32px] leading-[1.25] font-bold tracking-[-0.03em] text-chalk">
          Build Real Things
        </h2>
        <p className="mt-[12px] max-w-[64ch] text-[16px] leading-[26px] text-pencil">
          Every project at DevilQuant exists to solve a real problem. If it doesn't collect real data, answer a real question, or support real decision-making, we don't make it. The goal is infrastructure that the club actually uses.
        </p>
      </section>
    </div>
  );
};

export default Projects;
