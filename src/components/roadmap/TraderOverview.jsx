import React, { useMemo, useState } from 'react';
import {
    stages,
    resources as registry,
    intro,
    roles,
    specializations,
    diagnostic,
    skillsMatrix,
    priorityLabels,
    schedule,
    checkpointNote,
    finalRubric,
    practitioner,
    stageHours,
    lessonId,
} from '../../data/roadmap/trader/index.js';

const subHeading = 'text-[20px] leading-[24px] font-bold tracking-[-0.02em] text-chalk';
const bodyText = 'text-[16px] leading-[26px] text-chalk';
const smallText = 'text-[14px] leading-[24px] text-pencil';
const cell = 'border-t border-rule px-[12px] py-[12px] align-top text-[15px] leading-[24px] text-chalk';
const head = 'px-[12px] py-[8px] text-left text-[14px] leading-[24px] font-medium text-pencil';

const Section = ({ title, children, defaultOpen = false }) => (
    <details open={defaultOpen} className="border-t border-rule-major">
        <summary className="cursor-pointer py-[16px] text-[18px] leading-[24px] font-bold tracking-[-0.02em] text-chalk">{title}</summary>
        <div className="pb-[24px]">{children}</div>
    </details>
);

const TableWrap = ({ label, children }) => (
    <div className="mt-[12px] overflow-x-auto" tabIndex={0} role="region" aria-label={label}>
        {children}
    </div>
);

const resourceUses = () => {
    const uses = {};
    stages.forEach((stage, si) => {
        stage.lessons.forEach((lesson) => {
            lesson.resources.forEach((r) => {
                uses[r.key] = uses[r.key] || new Set();
                uses[r.key].add(si + 1);
            });
        });
    });
    return Object.entries(uses).map(([key, set]) => ({ key, stages: [...set].sort((a, b) => a - b), res: registry[key] }));
};

const Diagnostic = ({ progress }) => {
    const marks = diagnostic.questions.map((q) => Boolean(progress.get(`trader.diag.${q.id}`)));
    const total = marks.filter(Boolean).length;
    const byArea = Object.keys(diagnostic.areas).map((area) => {
        const qs = diagnostic.questions.filter((q) => q.area === area);
        const got = qs.filter((q) => progress.get(`trader.diag.${q.id}`)).length;
        return { area, got, of: qs.length };
    });
    const answered = diagnostic.questions.every((q) => progress.get(`trader.diag.${q.id}.seen`));
    const weak = byArea.filter((a) => a.got < a.of);

    let recommendation;
    if (!answered) recommendation = 'Reveal each answer and tick the questions you got right to see your starting point.';
    else if (total >= 9 && byArea.find((a) => a.area === 'programming').got === 2) {
        recommendation = 'Try the Stage 1 checkpoint cold. If you meet it, start at Stage 2. If not, start at Stage 1.';
    } else if (total >= 6 && weak.every((a) => a.got >= 1)) {
        recommendation = 'Start at Stage 1. The lessons will cover the gaps shown below.';
    } else {
        recommendation = 'Do the refreshers below for your weaker areas, then start Stage 1.';
    }

    return (
        <div>
            <p className={`max-w-[60ch] ${bodyText}`}>{diagnostic.intro}</p>
            <ol className="mt-[12px] space-y-[12px]">
                {diagnostic.questions.map((q, i) => (
                    <li key={q.id} className="bg-pad p-[16px] shadow-[inset_0_0_0_1px_var(--color-rule-major)]">
                        <p className={bodyText}><span className="font-medium">{i + 1}. {diagnostic.areas[q.area]}.</span> {q.q}</p>
                        <details className="mt-[8px]" onToggle={(e) => { if (e.currentTarget.open) progress.set(`trader.diag.${q.id}.seen`, true); }}>
                            <summary className="cursor-pointer text-[15px] leading-[24px] font-medium text-chalk">Show the answer</summary>
                            <pre className="mt-[8px] whitespace-pre-wrap font-sans text-[15px] leading-[24px] text-chalk">{q.a}</pre>
                        </details>
                        <label htmlFor={`diag-${q.id}`} className="mt-[8px] flex cursor-pointer items-center gap-[12px]">
                            <input
                                id={`diag-${q.id}`}
                                type="checkbox"
                                checked={marks[i]}
                                onChange={(e) => progress.set(`trader.diag.${q.id}`, e.target.checked)}
                                className="h-[18px] w-[18px] cursor-pointer accent-[var(--color-highlighter)]"
                            />
                            <span className={smallText}>I got this right</span>
                        </label>
                    </li>
                ))}
            </ol>
            <div className="mt-[24px] max-w-[60ch] border-[1.5px] border-chalk/60 bg-chalk/[0.06] p-[24px]" aria-live="polite">
                <p className="font-hand text-[20px] leading-[24px] text-redpen">your starting point</p>
                <p className={`mt-[4px] ${bodyText}`}>{recommendation}</p>
                {answered && (
                    <>
                        <p className={`mt-[8px] ${smallText}`}>Score: {total} of 10. {byArea.map((a) => `${diagnostic.areas[a.area]} ${a.got}/${a.of}`).join(', ')}.</p>
                        {weak.length > 0 && total < 9 && (
                            <ul className="mt-[8px] list-disc space-y-[4px] pl-[24px]">
                                {weak.map((a) => <li key={a.area} className={bodyText}>{diagnostic.areas[a.area]}: {diagnostic.refreshers[a.area]}</li>)}
                            </ul>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

const Schedule = ({ progress }) => {
    const [pace, setPace] = useState(Number(progress.get('trader.pace')) || schedule.defaultHours);
    const [desk, setDesk] = useState(progress.get('trader.desk') || 'none');
    const deskKey = desk === 'none' ? undefined : desk;

    const rows = useMemo(() => {
        const hoursByStage = stages.map((stage) => stageHours(stage, deskKey));
        return stages.map((stage, i) => {
            const before = hoursByStage.slice(0, i).reduce((a, h) => a + h, 0);
            const hours = hoursByStage[i];
            return { stage, hours, start: Math.floor(before / pace) + 1, end: Math.ceil((before + hours) / pace) };
        });
    }, [pace, deskKey]);
    const total = rows.reduce((a, r) => a + r.hours, 0);
    const weeks = Math.ceil(total / pace);

    const update = (value) => {
        const n = Math.min(schedule.maxHours, Math.max(schedule.minHours, Number(value) || schedule.defaultHours));
        setPace(n);
        progress.set('trader.pace', n);
    };

    return (
        <div>
            <p className={`max-w-[60ch] ${bodyText}`}>{schedule.note}</p>
            <div className="mt-[12px] flex flex-wrap items-end gap-[24px]">
                <label className="block">
                    <span className={smallText}>Hours per week ({schedule.minHours} to {schedule.maxHours})</span>
                    <input
                        type="number"
                        min={schedule.minHours}
                        max={schedule.maxHours}
                        value={pace}
                        onChange={(e) => update(e.target.value)}
                        className="mt-[4px] block min-h-[48px] w-[120px] bg-pad px-[12px] text-[16px] text-chalk shadow-[inset_0_0_0_1.5px_var(--color-chalk)]"
                    />
                </label>
                <label className="block">
                    <span className={smallText}>Specialization</span>
                    <select
                        value={desk}
                        onChange={(e) => { setDesk(e.target.value); progress.set('trader.desk', e.target.value === 'none' ? undefined : e.target.value); }}
                        className="mt-[4px] block min-h-[48px] bg-pad px-[12px] text-[16px] text-chalk shadow-[inset_0_0_0_1.5px_var(--color-chalk)]"
                    >
                        <option value="none">Common path only</option>
                        {specializations.items.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
                    </select>
                </label>
            </div>
            <p className={`mt-[12px] ${bodyText}`} aria-live="polite">
                {total} hours at {pace} hours a week is about {weeks} weeks. Optional lessons are not included.
            </p>
            <TableWrap label="Suggested schedule">
                <table className="w-full min-w-[480px] border-collapse">
                    <caption className="sr-only">Suggested schedule by stage</caption>
                    <thead><tr><th scope="col" className={head}>Stage</th><th scope="col" className={head}>Hours</th><th scope="col" className={head}>Weeks</th></tr></thead>
                    <tbody>
                        {rows.map((r, i) => (
                            <tr key={r.stage.id}>
                                <th scope="row" className={`${cell} text-left font-medium`}>{i + 1}. {r.stage.title}</th>
                                <td className={cell}>{r.hours}</td>
                                <td className={cell}>{r.start === r.end ? `Week ${r.start}` : `Weeks ${r.start} to ${r.end}`}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </TableWrap>
            <h4 className="mt-[24px] text-[16px] leading-[24px] font-bold text-chalk">Built into those hours</h4>
            <ul className="mt-[8px] list-disc space-y-[4px] pl-[24px]">
                {schedule.alongside.map((a) => <li key={a.text} className={bodyText}>From Stage {a.from}: {a.text}</li>)}
            </ul>
        </div>
    );
};

const TraderOverview = ({ progress }) => {
    const uses = useMemo(() => resourceUses(), []);
    const allLessonIds = stages.flatMap((s) => s.lessons.filter((l) => l.label === 'Core').map((l) => lessonId(s, l)));
    const shown = progress.count(allLessonIds);

    return (
        <section className="mt-[72px] border-t border-rule-major pt-[48px]" aria-labelledby="trader-start">
            <div className="bg-pad p-[24px] shadow-[inset_0_0_0_1.5px_var(--color-chalk)] md:p-[48px]">
                <p className="font-hand text-[20px] leading-[24px] text-redpen">before you start</p>
                <h2 id="trader-start" className="text-[32px] leading-[48px] font-bold tracking-[-0.03em] text-chalk">The Quant Trader path</h2>
                <p className={`mt-[12px] max-w-[60ch] ${bodyText}`}>{intro.summary}</p>
                <p className={`mt-[12px] max-w-[60ch] ${bodyText}`}>{intro.audience}</p>
                <p className={`mt-[12px] max-w-[60ch] ${bodyText}`}>{intro.moneyNote} {intro.outcomeNote}</p>
                <p className={`mt-[12px] ${smallText}`}>Core skills shown so far: {shown} of {allLessonIds.length}. Progress is saved in this browser only.</p>

                <div className="mt-[24px]">
                    <Section title="How trading, research, and development overlap" defaultOpen>
                        <p className={`max-w-[60ch] ${bodyText}`}>{roles.intro}</p>
                        <TableWrap label="Role overlap">
                            <table className="w-full min-w-[560px] border-collapse">
                                <caption className="sr-only">How the three quant roles differ and overlap</caption>
                                <thead><tr><th scope="col" className={head}>Role</th><th scope="col" className={head}>Usual focus</th><th scope="col" className={head}>Overlap</th></tr></thead>
                                <tbody>
                                    {roles.rows.map((r) => (
                                        <tr key={r.role}><th scope="row" className={`${cell} text-left font-medium`}>{r.role}</th><td className={cell}>{r.focus}</td><td className={cell}>{r.overlap}</td></tr>
                                    ))}
                                </tbody>
                            </table>
                        </TableWrap>
                        <h4 className="mt-[24px] text-[16px] leading-[24px] font-bold text-chalk">What three firms say about the work</h4>
                        <ul className="mt-[8px] space-y-[8px]">
                            {roles.firmNotes.map((f) => <li key={f.firm} className={bodyText}><span className="font-medium">{f.firm}.</span> {f.text}</li>)}
                        </ul>
                        <h4 className="mt-[24px] text-[16px] leading-[24px] font-bold text-chalk">{practitioner.title}</h4>
                        <p className={`mt-[8px] max-w-[60ch] ${bodyText}`}>{practitioner.intro}</p>
                        <p className="mt-[8px]">
                            <a href={registry[practitioner.source].url} target="_blank" rel="noopener noreferrer" className="ink-link text-[16px] leading-[24px] font-medium text-chalk underline decoration-[1.5px] decoration-chalk/60 underline-offset-[6px]">
                                Watch the video<span className="sr-only"> (opens in a new tab)</span>
                            </a>
                        </p>
                        <ul className="mt-[12px] list-disc space-y-[6px] pl-[24px]">
                            {practitioner.points.map((p) => <li key={p} className={bodyText}>{p}</li>)}
                        </ul>
                        <p className={`mt-[12px] max-w-[60ch] ${bodyText}`}>{practitioner.project}</p>
                        <p className={`mt-[12px] max-w-[60ch] ${smallText}`}>{practitioner.caveat}</p>
                    </Section>

                    <Section title="Two specializations after the common foundation">
                        <p className={`max-w-[60ch] ${bodyText}`}>{specializations.intro}</p>
                        <ul className="mt-[12px] grid gap-[24px] md:grid-cols-2">
                            {specializations.items.map((s) => (
                                <li key={s.id} className="bg-pad p-[24px] shadow-[inset_0_0_0_1px_var(--color-rule-major)]">
                                    <h4 className={subHeading}>{s.name}</h4>
                                    <p className={`mt-[8px] ${bodyText}`}>{s.text}</p>
                                    <ul className="mt-[8px] list-disc space-y-[4px] pl-[24px]">
                                        {s.lessons.map((l) => <li key={l} className={bodyText}>{l}</li>)}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                        <p className={`mt-[12px] max-w-[60ch] ${bodyText}`}>{specializations.optional}</p>
                    </Section>

                    <Section title="Entry diagnostic: where should you start?">
                        <Diagnostic progress={progress} />
                    </Section>

                    <Section title="Skills priority matrix">
                        <p className={`max-w-[60ch] ${bodyText}`}>Skills ranked by how much they matter before you apply. Evidence is what you can show for each.</p>
                        <TableWrap label="Skills priority matrix">
                            <table className="w-full min-w-[640px] border-collapse">
                                <caption className="sr-only">Skills, their priority, the stages that teach them, and the evidence you can show</caption>
                                <thead><tr><th scope="col" className={head}>Skill</th><th scope="col" className={head}>Priority</th><th scope="col" className={head}>Stages</th><th scope="col" className={head}>Evidence</th></tr></thead>
                                <tbody>
                                    {skillsMatrix.map((row) => (
                                        <tr key={row.skill}>
                                            <th scope="row" className={`${cell} text-left font-medium`}>{row.skill}</th>
                                            <td className={cell}>{priorityLabels[row.priority]}</td>
                                            <td className={cell}>{row.stages.length ? row.stages.join(', ') : 'None'}</td>
                                            <td className={cell}>{row.evidence}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </TableWrap>
                    </Section>

                    <Section title="Resource map: which resource trains which skill">
                        <p className={`max-w-[60ch] ${bodyText}`}>Every link on this path, with what it is for and how we checked it. Core resources are free. Anything that costs money is labeled.</p>
                        <TableWrap label="Resource map">
                            <table className="w-full min-w-[720px] border-collapse">
                                <caption className="sr-only">Resources, the skills they train, where they are used, their cost, and how they were checked</caption>
                                <thead><tr><th scope="col" className={head}>Resource</th><th scope="col" className={head}>Skills</th><th scope="col" className={head}>Stages</th><th scope="col" className={head}>Access</th><th scope="col" className={head}>Check</th></tr></thead>
                                <tbody>
                                    {uses.map(({ key, stages: used, res }) => (
                                        <tr key={key}>
                                            <th scope="row" className={`${cell} text-left font-medium`}>{res.title}<span className="block text-[14px] font-normal text-pencil">{res.provider}</span></th>
                                            <td className={cell}>{res.skills.join(', ')}</td>
                                            <td className={cell}>{used.join(', ')}</td>
                                            <td className={cell}>{res.access}</td>
                                            <td className={cell}>{res.verified === 'verified' ? `Checked ${res.checked}` : res.verified === 'partial' ? `Partly checked ${res.checked}` : 'Not checked'}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </TableWrap>
                    </Section>

                    <Section title="Suggested schedule">
                        <Schedule progress={progress} />
                    </Section>

                    <Section title="Checkpoints versus real hiring criteria">
                        <h4 className={subHeading}>{checkpointNote.title}</h4>
                        <p className={`mt-[8px] max-w-[60ch] ${bodyText}`}>{checkpointNote.text}</p>
                    </Section>

                    <Section title="Final rubric">
                        <p className={`max-w-[60ch] ${bodyText}`}>{finalRubric.intro}</p>
                        <TableWrap label="Final rubric">
                            <table className="w-full min-w-[720px] border-collapse">
                                <caption className="sr-only">Final rubric with three levels for each skill</caption>
                                <thead><tr><th scope="col" className={head}>Skill</th>{finalRubric.levels.map((l) => <th key={l} scope="col" className={head}>{l}</th>)}</tr></thead>
                                <tbody>
                                    {finalRubric.rows.map((row) => (
                                        <tr key={row.name}>
                                            <th scope="row" className={`${cell} text-left font-medium`}>{row.name}</th>
                                            {row.cells.map((c) => <td key={c} className={cell}>{c}</td>)}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </TableWrap>
                    </Section>
                </div>
            </div>
        </section>
    );
};

export default TraderOverview;
