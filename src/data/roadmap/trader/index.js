import resources from './resources.js';
import stage1 from './stage1.js';
import stage2 from './stage2.js';
import stage3 from './stage3.js';
import stage4 from './stage4.js';
import stage5 from './stage5.js';
import stage6 from './stage6.js';

export * from './meta.js';
export { resources };
export const stages = [stage1, stage2, stage3, stage4, stage5, stage6];

// Stable identifiers used for saved progress. They never change once published,
// so renaming a lesson title does not reset anyone's progress.
export const lessonId = (stage, lesson) => `trader.${stage.id}.${lesson.id}`;
export const checkpointId = (stage, item) => `trader.${stage.id}.${item.id}`;
export const deliverableId = (stage) => `trader.${stage.id}.deliverable`;
export const resourceOpenId = (stage, lesson, key) => `trader.${stage.id}.${lesson.id}.r.${key}`;

export const lessonHours = (lesson) => lesson.hours;
export const stageHours = (stage, desk) =>
    stage.lessons
        .filter((l) => l.label === 'Core' || (l.label === 'Desk-specific' && l.desk === desk))
        .reduce((sum, l) => sum + l.hours, 0);
