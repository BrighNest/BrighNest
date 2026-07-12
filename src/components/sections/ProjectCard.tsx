import { BeforeAfter } from "@/components/sections/BeforeAfter";
import type { Project } from "@/lib/projects";

/**
 * A single project in a grid: the draggable before/after reveal plus a caption.
 * Shared by the landing "Our work" grid and the full /gallery page so both read
 * identically. The reveal frame is sized by CSS (.project-card .ba): fixed
 * height in the desktop grid, aspect-ratio on mobile so single-column cards
 * keep the same proportions instead of squashing flat.
 */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-card">
      <BeforeAfter pair={project} />
      <div className="project-card-cap">
        <span className="project-card-label">{project.label}</span>
        {project.city && <span className="project-card-city">· {project.city}</span>}
      </div>
    </div>
  );
}
