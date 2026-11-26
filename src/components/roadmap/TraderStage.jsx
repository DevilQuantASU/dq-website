import React from 'react';
import {
    resources as registry,
    checkpointNote,
    lessonId,
    checkpointId,
    deliverableId,
    resourceOpenId,
    stageHours,
    specializations,
    finalRubric,
} from '../../data/roadmap/trader/index.js';
import { Link } from 'react-router-dom';

const subHeading = 'text-[20px] leading-[24px] font-bold tracking-[-0.02em] text-chalk';
const panel = 'bg-pad p-[24px] shadow-[inset_0_0_0_1.5px_var(--color-rule-major)]';
const bodyText = 'text-[16px] leading-[26px] text-chalk';
const smallText = 'text-[14px] leading-[24px] text-pencil';
const tag = 'text-[13px] leading-[24px] px-[12px] text-chalk shadow-[inset_0_0_0_1px_var(--color-rule-major)] bg-pad';

const deskName = (desk) => specializations.items.find((item) => item.id === desk)?.name;

const Callout = ({ title, children, tone = 'chalk' }) => (
    <div className={`mt-[24px] max-w-[60ch] border-[1.5px] p-[24px] ${tone === 'red' ? 'border-redpen/70 bg-redpen/[0.06]' : 'border-chalk/60 bg-chalk/[0.06]'}`}>
        <p className="font-hand text-[20px] leading-[24px] text-redpen">{title}</p>
        <div className={`mt-[4px] ${bodyText}`}>{children}</div>
    </div>
);

const Check = ({ id, checked, onChange, children }) => (
    <label htmlFor={id} className="flex cursor-pointer items-start gap-[12px] py-[6px]">
        <input
            id={id}
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            className="mt-[5px] h-[18px] w-[18px] shrink-0 cursor-pointer accent-[var(--color-highlighter)]"
        />
        <span className={bodyText}>{children}</span>
    </label>
);

const statusText = (res) => {
    if (res.verified === 'verified') return `Link checked ${res.checked}`;
    if (res.verified === 'partial') return `Partly checked ${res.checked}`;
    return 'Not checked, so confirm the link before relying on it';
};

const ResourceItem = ({ res, section, alt, opened, onOpen }) => {
    const external = res.url.startsWith('http');
    const linkClass = 'ink-link text-[16px] leading-[24px] font-medium text-chalk underline decoration-[1.5px] decoration-chalk/60 underline-offset-[6px]';
    return (
        <li className="border-t border-rule py-[12px]">
            <div className="flex flex-wrap items-center gap-[12px]">
                {external ? (
                    <a href={res.url} target="_blank" rel="noopener noreferrer" onClick={onOpen} className={linkClass}>
                        {res.title}<span className="sr-only"> (opens in a new tab)</span>
                    </a>
                ) : (
                    <Link to={res.url} onClick={onOpen} className={linkClass}>{res.title}</Link>
                )}
                {alt && <span className={tag}>Alternative</span>}
                {opened && <span className={tag}>Opened</span>}
            </div>
            {section && <p className={`mt-[4px] ${bodyText}`}>{section}</p>}
            <p className={`mt-[4px] ${smallText}`}>
                {res.provider}. {res.format}. {res.access}. {res.difficulty}.
            </p>
            <p className={smallText}>
                {statusText(res)}.{res.verified !== 'verified' && res.note ? ` ${res.note}` : ''}
            </p>
        </li>
    );
};

const Worked = ({ worked }) => (
    <details className="mt-[24px] bg-pad-deep p-[24px] shadow-[inset_0_0_0_1px_var(--color-rule-major)]">
        <summary className="cursor-pointer text-[16px] leading-[24px] font-medium text-chalk">Worked example: {worked.title}</summary>
        <p className={`mt-[12px] ${bodyText}`}>{worked.prompt}</p>
        <ol className="mt-[12px] list-decimal space-y-[6px] pl-[24px]">
            {worked.steps.map((step) => <li key={step} className={bodyText}>{step}</li>)}
        </ol>
        <p className={`mt-[12px] ${bodyText}`}><span className="font-hand text-[18px] text-redpen">answer </span>{worked.answer}</p>
    </details>
);

const Lesson = ({ stage, lesson, progress, index }) => {
    const id = lessonId(stage, lesson);
    const shown = Boolean(progress.get(id));
    const desk = lesson.desk ? deskName(lesson.desk) : null;
    return (
        <li className="border-t border-rule-major">
            <details className="group">
                <summary className="flex cursor-pointer flex-wrap items-center gap-x-[12px] gap-y-[4px] py-[12px] text-[16px] leading-[24px] text-chalk">
                    <span className="font-medium">{index + 1}. {lesson.title}</span>
                    <span className={tag}>{lesson.label}</span>
                    {desk && <span className={smallText}>{desk}</span>}
                    <span className={smallText}>about {lesson.hours} hours</span>
                    {shown && <span className="font-hand text-[18px] text-redpen">skill shown</span>}
                </summary>
                <div className="pb-[24px] pl-[12px] sm:pl-[24px]">
                    <p className="font-hand text-[18px] leading-[24px] text-redpen">you will be able to</p>
                    <ul className="mt-[4px] list-disc space-y-[4px] pl-[24px]">
                        {lesson.outcomes.map((o) => <li key={o} className={bodyText}>{o}</li>)}
                    </ul>

                    <p className="mt-[24px] font-hand text-[18px] leading-[24px] text-redpen">resources</p>
                    {lesson.resources.length > 0 ? (
                        <ul className="mt-[4px]">
                            {lesson.resources.map((r) => (
                                <ResourceItem
                                    key={r.key}
                                    res={registry[r.key]}
                                    section={r.section}
                                    alt={r.alt}
                                    opened={Boolean(progress.get(resourceOpenId(stage, lesson, r.key)))}
                                    onOpen={() => progress.set(resourceOpenId(stage, lesson, r.key), true)}
                                />
                            ))}
                        </ul>
                    ) : null}
                    {lesson.note && <p className={`mt-[12px] max-w-[60ch] ${bodyText}`}>{lesson.note}</p>}

                    {lesson.worked && <Worked worked={lesson.worked} />}

                    <div className="mt-[24px]">
                        <Check id={`${id}-shown`} checked={shown} onChange={(v) => progress.set(id, v)}>
                            I have shown this skill: I did the exercise or explained it aloud without looking.
                        </Check>
                        <p className={`ml-[30px] ${smallText}`}>Opening a resource is saved separately and does not count as showing the skill.</p>
                    </div>
                </div>
            </details>
        </li>
    );
};

const List = ({ title, items }) => (
    <div className="mt-[24px]">
        <h4 className="text-[16px] leading-[24px] font-bold text-chalk">{title}</h4>
        <ul className="mt-[8px] list-disc space-y-[6px] pl-[24px]">
            {items.map((item) => <li key={item} className={bodyText}>{item}</li>)}
        </ul>
    </div>
);

const Capstone = ({ capstone }) => {
    return (
        <section className={`mt-[48px] ${panel}`} aria-labelledby="capstone-heading">
            <p className="font-hand text-[20px] leading-[24px] text-redpen">required project</p>
            <h3 id="capstone-heading" className={subHeading}>Capstone brief: {capstone.title}</h3>
            <p className={`mt-[12px] max-w-[60ch] ${bodyText}`}>{capstone.summary}</p>
            <div className="mt-[24px]">
                <h4 className="text-[16px] leading-[24px] font-bold text-chalk">Time budget</h4>
                <ul className="mt-[8px] space-y-[4px]">
                    {capstone.time.map((t) => <li key={t.part} className={bodyText}>{t.part}: about {t.hours} hours</li>)}
                </ul>
            </div>
            <List title="The synthetic market" items={capstone.market} />
            <List title="Strategies to compare" items={capstone.strategies} />
            <List title="Scenarios and seeds" items={capstone.scenarios} />
            <List title="Reproducibility and uncertainty" items={capstone.reproducibility} />
            <List title="Leakage checks" items={capstone.leakage} />
            <List title="What to hand in" items={capstone.deliverables} />
            <List title="Acceptance tests" items={capstone.acceptance} />
            <div className="mt-[24px]">
                <h4 className="text-[16px] leading-[24px] font-bold text-chalk">How it is graded</h4>
                <ul className="mt-[8px] space-y-[8px]">
                    {capstone.grading.map((g) => (
                        <li key={g.name} className={bodyText}><span className="font-medium">{g.name}, {g.weight} points.</span> {g.text}</li>
                    ))}
                </ul>
                <p className={`mt-[12px] max-w-[60ch] ${bodyText}`}>{capstone.gradingNote}</p>
            </div>
            <List title="Optional extensions" items={capstone.extensions} />
        </section>
    );
};

const TraderStage = ({ stage, progress, desk }) => {
    const cpIds = stage.checkpoint.items.map((i) => checkpointId(stage, i));
    const delId = deliverableId(stage);
    const coreLessons = stage.lessons.filter((l) => l.label === 'Core');
    const coreShown = progress.count(coreLessons.map((l) => lessonId(stage, l)));
    const cpDone = progress.count(cpIds);
    const hours = stageHours(stage, desk);
    const checkpointMet = cpDone === cpIds.length;

    return (
        <div>
            <p className={`mt-[24px] max-w-[60ch] ${bodyText}`}>{stage.purpose}</p>

            <div className="mt-[24px] grid gap-[24px] md:grid-cols-2">
                <div>
                    <h3 className={subHeading}>Before you start</h3>
                    <ul className="mt-[8px] list-disc space-y-[6px] pl-[24px]">
                        {stage.prerequisites.map((p) => <li key={p} className={bodyText}>{p}</li>)}
                    </ul>
                </div>
                <div>
                    <h3 className={subHeading}>How long it takes</h3>
                    <p className={`mt-[8px] ${bodyText}`}>
                        About {hours} hours of study and practice for the core lessons{desk ? ' plus your chosen specialization' : ''}. Lessons labeled Desk-specific or Optional are extra.
                    </p>
                    <p className={`mt-[8px] ${smallText}`}>
                        Skills shown: {coreShown} of {coreLessons.length} core lessons. Checkpoint: {cpDone} of {cpIds.length}.
                    </p>
                </div>
            </div>
            <Callout title="alongside this stage">{stage.alongside}</Callout>

            <section className="mt-[48px] border-t border-rule-major pt-[24px]" aria-labelledby={`${stage.id}-lessons`}>
                <h3 id={`${stage.id}-lessons`} className={subHeading}>Lessons, in order</h3>
                <p className={`mt-[8px] max-w-[60ch] ${smallText}`}>
                    Core lessons are for everyone. Desk-specific lessons belong to one specialization. Optional lessons add depth. Open a lesson to see what to do and where.
                </p>
                <ol className="mt-[12px] border-b border-rule-major">
                    {stage.lessons.map((lesson, index) => (
                        <Lesson key={lesson.id} stage={stage} lesson={lesson} progress={progress} index={index} />
                    ))}
                </ol>
                <p className={`mt-[8px] ${smallText}`}>Hours shown are for study and practice together.</p>
            </section>

            {stage.capstone && <Capstone capstone={stage.capstone} />}

            <section className="mt-[48px] border-t border-rule-major pt-[24px]" aria-labelledby={`${stage.id}-deliverable`}>
                <h3 id={`${stage.id}-deliverable`} className={subHeading}>Deliverable: {stage.deliverable.title}</h3>
                <p className={`mt-[8px] max-w-[60ch] ${bodyText}`}>{stage.deliverable.text}</p>
                <ul className="mt-[12px] list-disc space-y-[4px] pl-[24px]">
                    {stage.deliverable.doneWhen.map((d) => <li key={d} className={bodyText}>{d}</li>)}
                </ul>
                <div className="mt-[12px]">
                    <Check id={delId} checked={Boolean(progress.get(delId))} onChange={(v) => progress.set(delId, v)}>
                        I have produced this deliverable and it meets every item above.
                    </Check>
                </div>
            </section>

            <section className="mt-[48px] border-t border-rule-major pt-[24px]" aria-labelledby={`${stage.id}-checkpoint`}>
                <h3 id={`${stage.id}-checkpoint`} className={subHeading}>Checkpoint</h3>
                <p className={`mt-[8px] ${bodyText}`}>{stage.checkpoint.intro}</p>
                <div className="mt-[12px]">
                    {stage.checkpoint.items.map((item) => (
                        <Check key={item.id} id={checkpointId(stage, item)} checked={Boolean(progress.get(checkpointId(stage, item)))} onChange={(v) => progress.set(checkpointId(stage, item), v)}>
                            {item.text}
                        </Check>
                    ))}
                </div>
                <p className={`mt-[8px] max-w-[60ch] ${smallText}`}>{stage.checkpoint.target} {checkpointNote.text}</p>
                {checkpointMet && <p className="mt-[12px] font-hand text-[20px] leading-[24px] text-redpen">checkpoint met, you can move on</p>}
                {stage.showRubric && (
                    <div className="mt-[24px]">
                        <h4 className="text-[16px] leading-[24px] font-bold text-chalk">{finalRubric.title}</h4>
                        <p className={`mt-[8px] max-w-[60ch] ${bodyText}`}>{finalRubric.intro}</p>
                        <div className="mt-[12px] overflow-x-auto" tabIndex={0} role="region" aria-label="Final rubric">
                            <table className="w-full min-w-[720px] border-collapse">
                                <caption className="sr-only">Final rubric with three levels for each skill</caption>
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-[12px] py-[8px] text-left text-[14px] leading-[24px] font-medium text-pencil">Skill</th>
                                        {finalRubric.levels.map((l) => <th key={l} scope="col" className="px-[12px] py-[8px] text-left text-[14px] leading-[24px] font-medium text-pencil">{l}</th>)}
                                    </tr>
                                </thead>
                                <tbody>
                                    {finalRubric.rows.map((row) => (
                                        <tr key={row.name}>
                                            <th scope="row" className="border-t border-rule px-[12px] py-[12px] text-left align-top text-[15px] leading-[24px] font-medium text-chalk">{row.name}</th>
                                            {row.cells.map((c) => <td key={c} className="border-t border-rule px-[12px] py-[12px] align-top text-[15px] leading-[24px] text-chalk">{c}</td>)}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
                <Callout title="can you skip this stage?">{stage.skip}</Callout>
            </section>

            <section className="mt-[48px] border-t border-rule-major pt-[24px]" aria-labelledby={`${stage.id}-mistakes`}>
                <h3 id={`${stage.id}-mistakes`} className={subHeading}>Common mistakes and how to fix them</h3>
                <ul className="mt-[12px] grid gap-[12px]">
                    {stage.mistakes.map((m) => (
                        <li key={m.mistake} className={bodyText}>
                            <span className="font-medium">{m.mistake}</span> {m.fix}
                        </li>
                    ))}
                </ul>
            </section>

            <Callout title="your next action">{stage.next}</Callout>
        </div>
    );
};

export default TraderStage;
