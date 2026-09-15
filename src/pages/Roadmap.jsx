import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const paths = [
    {
        id: 'developer',
        icon: '</>',
        title: 'Quant Developer',
        summary: 'Python. C++. Production systems.',
        accent: 'indigo',
        stages: [
            {
                title: 'Choose a language & learn it deeply',
                type: 'Foundation',
                description: 'You do not need to master both Python and C++ at the beginning. Research several quant developer job postings to see which programming stacks appear repeatedly, then choose the language that matches the work you want and build deep, production-ready knowledge instead of collecting surface-level syntax. Job postings are not a conclusive study of the market, but they can give you enough signal to choose a direction. For C++, work through Tour of C++, then Effective C++, then Daily C++ Interview.',
                learn: ['Python for data, research, APIs, and automation', 'C++ for systems, performance, and quantitative libraries', 'Read Effective C++ critically: some concepts are dated, but its core lessons remain essential', 'Algorithms, data structures, and complexity'],
                resources: ['Learn Python deeply', 'Fluent Python', 'Tour of C++', 'Effective C++', 'Daily C++ Interview'],
            },
            {
                title: 'Operating systems & networking',
                type: 'Core',
                description: 'Build the systems foundation behind quantitative software. Read Operating Systems: Three Easy Pieces through Part 1, Virtualization, and Part 2, Concurrency. Then work through Computer Networking: A Top-Down Approach, Chapters 1 through 5.',
                learn: ['Processes, memory, and virtual machines', 'Threads, locks, and concurrent programs', 'Networked applications and reliable communication', 'Transport, routing, and link-layer fundamentals'],
                resources: ['OSTEP: Parts 1 & 2', 'Computer Networking: Chapters 1-5'],
            },
            {
                title: 'System design for data-intensive applications',
                type: 'Core',
                description: 'Learn to design systems that move, store, and process large amounts of data. Start with Designing Data-Intensive Applications, 2nd Edition, then use Alex Xu\'s two-part System Design Interview series to practice communicating tradeoffs clearly.',
                learn: ['Data models, storage, and retrieval', 'Replication, partitioning, and consistency', 'Batch and stream processing', 'Reliability, scalability, and system tradeoffs'],
                resources: ['Designing Data-Intensive Applications, 2nd Edition', 'System Design Interview, Volume 1', 'System Design Interview, Volume 2'],
            },
            {
                title: 'Build a T-shaped specialty',
                type: 'Applied',
                description: 'Keep a broad base across quant development, then develop undeniable depth in one or two areas. Your specialty should be demonstrated by production-level work.',
                learn: ['High-performance computing and C++', 'Numerical methods and scientific Python', 'Databases and data engineering', 'Open-source contribution and code review'],
                resources: ['Explore DevilQuant projects', 'Find a project partner'],
            },
            {
                title: 'Build projects & contribute to open source',
                type: 'Applied',
                description: 'Turn your knowledge into production-level evidence. Build coherent projects, contribute to existing open-source code, and show that you can work within a real codebase instead of only starting from scratch.',
                learn: ['Choose projects that reinforce your specialty', 'Ship a complete, documented system', 'Read, review, and improve an existing codebase', 'Use issues, tests, pull requests, and code review'],
                resources: ['Explore DevilQuant projects', 'Contribute to open source'],
            },
            {
                title: 'Profile, interviews & entry strategy',
                type: 'Career preparation',
                description: 'Turn your skill set into evidence and show how you think with other engineers. If the direct quant path is crowded, a strong adjacent engineering role can be the right next step.',
                learn: ['LeetCode and Codeforces problem patterns', 'Explain your thought process and ask good questions', 'Personable, collaborative behavioral interviews', 'GitHub profile, production projects, and adjacent roles'],
                resources: ['Polish your GitHub', 'Practice a project walkthrough'],
            },
        ],
    },
    {
        id: 'trader',
        icon: '↗',
        title: 'Quant Trader',
        summary: 'Probability. Decisions. Risk.',
        accent: 'amber',
        stages: [
            {
                title: 'Probability foundations',
                type: 'Foundation',
                description: 'Learn to think in distributions, conditional outcomes, and expected value.',
                learn: ['Probability rules', 'Random variables', 'Expected value and variance', 'Conditional probability'],
                resources: ['Work through probability exercises', 'Simulate a simple strategy'],
            },
            {
                title: 'Market mechanics',
                type: 'Foundation',
                description: 'See how orders become trades and how liquidity, information, and incentives shape markets.',
                learn: ['Order types', 'Liquidity and spreads', 'Price discovery', 'Market structure'],
                resources: ['Read an exchange specification', 'Observe a live order book'],
            },
            {
                title: 'Risk & position sizing',
                type: 'Core',
                description: 'Build decision rules that respect uncertainty, drawdowns, and the limits of a strategy.',
                learn: ['Risk-adjusted returns', 'Position sizing', 'Drawdowns and limits', 'Scenario analysis'],
                resources: ['Create a risk dashboard', 'Stress test a portfolio'],
            },
            {
                title: 'Trading-system fundamentals',
                type: 'Core',
                description: 'Combine a market view with repeatable execution and disciplined measurement.',
                learn: ['Signal design', 'Execution assumptions', 'Performance attribution', 'Trading journals'],
                resources: ['Paper trade a hypothesis', 'Review your assumptions'],
            },
            {
                title: 'Choose your specialization',
                type: 'Applied',
                description: 'Focus your curiosity on a market, time horizon, or style of decision-making.',
                learn: ['Equities and ETFs', 'Derivatives', 'Macro and rates', 'Systematic strategies'],
                resources: ['Compare two markets', 'Present a trade thesis'],
            },
            {
                title: 'Interviews & portfolio',
                type: 'Career preparation',
                description: 'Show clear thinking under uncertainty and communicate decisions with evidence.',
                learn: ['Mental math and estimation', 'Probability interviews', 'Trade idea presentation', 'Behavioral preparation'],
                resources: ['Write a trade memo', 'Practice market questions'],
            },
        ],
    },
    {
        id: 'researcher',
        icon: 'Σ',
        title: 'Quant Researcher',
        summary: 'Statistics. Models. Evidence.',
        accent: 'emerald',
        stages: [
            {
                title: 'Statistics foundations',
                type: 'Foundation',
                description: 'Learn how to describe data honestly before asking it to support a conclusion.',
                learn: ['Descriptive statistics', 'Sampling and estimation', 'Confidence intervals', 'Correlation and causation'],
                resources: ['Analyze a public dataset', 'Write down your assumptions'],
            },
            {
                title: 'Linear algebra & calculus',
                type: 'Foundation',
                description: 'Build the mathematical language behind optimization, modeling, and dimensionality reduction.',
                learn: ['Vectors and matrices', 'Derivatives and gradients', 'Optimization', 'Eigenvalues and decomposition'],
                resources: ['Implement a regression model', 'Visualize an optimization path'],
            },
            {
                title: 'Research methods',
                type: 'Core',
                description: 'Form hypotheses that can be tested, measured, and challenged by someone else.',
                learn: ['Feature design', 'Train and test splits', 'Data leakage', 'Reproducible experiments'],
                resources: ['Keep a research notebook', 'Reproduce a published result'],
            },
            {
                title: 'Trading-system fundamentals',
                type: 'Core',
                description: 'Turn a promising result into a strategy that survives realistic data and implementation constraints.',
                learn: ['Backtesting', 'Transaction costs', 'Robustness checks', 'Model risk'],
                resources: ['Build a walk-forward test', 'Challenge a backtest'],
            },
            {
                title: 'Choose your specialization',
                type: 'Applied',
                description: 'Choose the models and questions that make you most curious, then pursue depth.',
                learn: ['Time-series models', 'Machine learning', 'Alternative data', 'Portfolio construction'],
                resources: ['Browse research projects', 'Find an open question'],
            },
            {
                title: 'Interviews & portfolio',
                type: 'Career preparation',
                description: 'Make your research legible: communicate the question, method, result, and limitations.',
                learn: ['Statistics interviews', 'Research presentation', 'Model critique', 'Behavioral preparation'],
                resources: ['Publish a research note', 'Present your findings'],
            },
        ],
    },
];

const accentClasses = {
    indigo: {
        active: 'border-indigo-400 bg-indigo-500/15',
        text: 'text-indigo-300',
        fill: 'bg-indigo-400',
        icon: 'text-indigo-300',
    },
    amber: {
        active: 'border-amber-400 bg-amber-500/15',
        text: 'text-amber-300',
        fill: 'bg-amber-400',
        icon: 'text-amber-300',
    },
    emerald: {
        active: 'border-emerald-400 bg-emerald-500/15',
        text: 'text-emerald-300',
        fill: 'bg-emerald-400',
        icon: 'text-emerald-300',
    },
};

const resourceLinks = {
    'Learn Python deeply': 'https://docs.python.org/3/tutorial/',
    'Fluent Python': 'https://www.oreilly.com/library/view/fluent-python-2nd/9781492056348/',
    'Build a small data project': '/resources?guide=getting-started-with-projects',
    'Practice with algorithm problems': 'https://leetcode.com/problemset/',
    'Learn C++ deeply': 'https://www.learncpp.com/',
    'Tour of C++': 'https://www.stroustrup.com/tour2.html',
    'Effective C++': 'https://www.oreilly.com/library/view/effective-c-3rd/0321334876/',
    'Daily C++ Interview': 'https://www.amazon.com/Daily-Interview-yourself-interview-question-ebook/dp/B0C31ZD7XP/',
    'Implement a backtester': '/resources?guide=monte-carlo-simulator',
    'Read market data documentation': '/resources?guide=getting-started-with-projects',
    'Contribute to open source': 'https://opensource.guide/how-to-contribute/',
    'Profile a data pipeline': '/projects',
    'Build a paper-trading system': '/resources?guide=sentiment-trading-signal',
    'Review a trading project': '/projects',
    'Explore DevilQuant projects': '/projects',
    'Find a project partner': '/discord',
    'Polish your GitHub': 'https://docs.github.com/en/get-started/learning-to-code',
    'Practice a project walkthrough': '/resources?guide=getting-started-with-projects',
    'Work through probability exercises': 'https://seeing-theory.brown.edu/basic-probability/index.html',
    'Simulate a simple strategy': '/resources?guide=monte-carlo-simulator',
    'Read an exchange specification': 'https://www.sec.gov/answers/orderbystock.htm',
    'Observe a live order book': '/resources?guide=getting-started-with-quant',
    'Create a risk dashboard': '/resources?guide=portfolio-optimizer',
    'Stress test a portfolio': '/resources?guide=portfolio-optimizer',
    'Paper trade a hypothesis': '/resources?guide=sentiment-trading-signal',
    'Review your assumptions': '/resources?guide=getting-started-with-quant',
    'Compare two markets': '/projects',
    'Present a trade thesis': '/resources?guide=landing-a-quant-internship',
    'Write a trade memo': '/resources?guide=landing-a-quant-internship',
    'Practice market questions': '/resources?guide=landing-a-quant-internship',
    'Analyze a public dataset': 'https://datasetsearch.research.google.com/',
    'Write down your assumptions': '/resources?guide=getting-started-with-quant',
    'Implement a regression model': '/resources?guide=portfolio-optimizer',
    'Visualize an optimization path': '/resources?guide=portfolio-optimizer',
    'Keep a research notebook': '/resources?guide=getting-started-with-projects',
    'Reproduce a published result': '/resources?guide=getting-started-with-projects',
    'Build a walk-forward test': '/resources?guide=monte-carlo-simulator',
    'Challenge a backtest': '/resources?guide=monte-carlo-simulator',
    'Browse research projects': '/projects',
    'Find an open question': '/discord',
    'Publish a research note': '/resources?guide=getting-started-with-projects',
    'Present your findings': '/resources?guide=landing-a-quant-internship',
    'OSTEP: Parts 1 & 2': 'https://pages.cs.wisc.edu/~remzi/OSTEP/',
    'Computer Networking: Chapters 1-5': 'https://gaia.cs.umass.edu/kurose_ross/online_lectures.htm',
    'Designing Data-Intensive Applications, 2nd Edition': 'https://dataintensive.net/',
    'System Design Interview, Volume 1': 'https://www.amazon.com/dp/B08B3FWYBX?ref=KC_GS_GB_US',
    'System Design Interview, Volume 2': 'https://www.amazon.com/System-Design-Interview-Insiders-Guide-ebook/dp/B0CR977BQH/ref=books_amazonstores_desktop_mfs_author_smart_catalog_4?_encoding=UTF8&pd_rd_w=DWWEx&content-id=amzn1.sym.0f6800d6-c0f7-4cc4-9fe4-a8d57d8d7ad6&pf_rd_p=0f6800d6-c0f7-4cc4-9fe4-a8d57d8d7ad6&pf_rd_r=146-3848614-4847046&pd_rd_wg=9FDpZ&pd_rd_r=c54cb7fa-3507-4d83-952e-458e5541532e',
};

const isExternalLink = (href) => href.startsWith('http');

const ResourceLink = ({ resource, accentClass }) => {
    const href = resourceLinks[resource] || '/resources';
    const className = 'group flex items-center justify-between border border-neutral-800 bg-black px-4 py-4 text-left text-sm font-medium text-neutral-200 transition-colors hover:border-neutral-600 hover:bg-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70';
    const content = <><span>{resource}</span><span className={`${accentClass} transition-transform group-hover:translate-x-0.5`}>↗</span></>;

    return isExternalLink(href) ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
            {content}
        </a>
    ) : (
        <Link to={href} className={className}>
            {content}
        </Link>
    );
};

const specializationTopics = [
    { name: 'Databases', level: 42 },
    { name: 'Networking', level: 34 },
    { name: 'HPC', level: 100, specialty: true },
    { name: 'Numerical methods', level: 50 },
    { name: 'ML Ops', level: 38 },
];

const TShapeGraph = ({ accentClass }) => (
    <div className="mt-8 border border-neutral-800 bg-black p-5 sm:p-6" aria-label="T-shaped specialization graph">
        <div className="flex flex-col gap-2 border-b border-neutral-800 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
                <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${accentClass}`}>The T-shaped profile</p>
                <h3 className="mt-2 text-lg font-semibold text-white">Broad enough to contribute. Deep enough to be undeniable.</h3>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-neutral-500">Choose one or two topics for serious depth while building working knowledge across the rest of the stack.</p>
        </div>
        <p className="mt-5 max-w-3xl border-l-2 border-indigo-400 pl-4 text-sm leading-relaxed text-neutral-300">
            Your goal should be to develop a T-shaped skill profile. Quant Dev rewards people who are proficient in a broad range of skills, and an <span className="font-semibold uppercase text-indigo-300">expert</span> at one or two things.
        </p>

        <div className="mt-6 overflow-x-auto pb-2">
            <div className="relative min-w-[38rem] pl-12 pr-2 pt-8">
                <div className="pointer-events-none absolute inset-x-2 top-[25%] border-t border-amber-400/70">
                    <span className="absolute -top-6 right-0 text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-300">Expert</span>
                </div>
                <div className="pointer-events-none absolute inset-x-2 top-[60%] border-t border-emerald-400/70">
                    <span className="absolute -top-6 right-0 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-300">Proficient</span>
                </div>
                <div className="absolute bottom-0 -left-16 top-0 flex items-center">
                    <span className="-rotate-90 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">Depth of knowledge</span>
                </div>
                <div className="grid h-72 grid-cols-5 items-end gap-2 border-b border-l border-neutral-700 px-3 sm:gap-4">
                    {specializationTopics.map((topic) => (
                        <div key={topic.name} className="flex h-full flex-col items-center justify-end gap-3">
                            <div
                                className={`w-full max-w-24 border ${topic.specialty ? 'border-indigo-300/80 bg-indigo-400/30' : 'border-neutral-600 bg-neutral-700/50'} ${topic.specialty ? 'shadow-[0_0_24px_rgba(129,140,248,0.15)]' : ''}`}
                                style={{ height: `${topic.level}%` }}
                                title={`${topic.name}: ${topic.specialty ? 'deep specialization' : 'working proficiency'}`}
                            />
                            <span className={`min-h-8 text-center text-[11px] leading-4 ${topic.specialty ? `font-semibold ${accentClass}` : 'text-neutral-400'}`}>{topic.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="mt-5 border border-neutral-700 bg-neutral-900/60 p-5 sm:p-6">
            <h4 className="text-base font-semibold text-white">Try to make the skillset <span className="text-indigo-300">coherent</span>.</h4>
            <p className="mt-2 text-sm text-neutral-400">Different proficiencies should lend well to one another.</p>
            <div className="mt-5 border-l-2 border-indigo-400/70 bg-black/40 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-300">For example</p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                    Expert at <span className="font-semibold text-white">high-performance computing</span>.<br />
                    Proficient with <span className="font-semibold text-white">numerical optimization</span> and <span className="font-semibold text-white">data pipelines</span>.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">This kind of skillset may make you highly desirable for a team looking to scale the scope of its derivatives pricing engine.</p>
            </div>
            <div className="mt-5 border border-neutral-800 p-4">
                <p className="text-sm font-semibold text-white">How is this a coherent skillset?</p>
                <p className="mt-2 text-sm text-neutral-400">Because it shows you can:</p>
                <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                    <li className="flex gap-2"><span className={accentClass}>•</span>Handle end-to-end projects</li>
                    <li className="flex gap-2"><span className={accentClass}>•</span>Pipeline clean, enriched market data in a scalable manner</li>
                    <li className="flex gap-2"><span className={accentClass}>•</span>Implement pricing algorithms that scale to distributed compute</li>
                    <li className="flex gap-2"><span className={accentClass}>•</span>Generate analytics from the output</li>
                </ul>
            </div>
        </div>
        <div className="mt-5 border border-indigo-400/30 bg-indigo-500/5 p-4 sm:p-5">
            <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${accentClass}`}>Other possible topics</p>
            <ul className="mt-3 grid gap-2 text-sm text-neutral-300 sm:grid-cols-3">
                <li className="flex items-center gap-2"><span className={accentClass}>•</span>Parallel/GPU Programming</li>
                <li className="flex items-center gap-2"><span className={accentClass}>•</span>Data Science</li>
                <li className="flex items-center gap-2"><span className={accentClass}>•</span>Low-Level Systems</li>
            </ul>
        </div>
        <p className="mt-4 text-xs text-neutral-500">Example specialization: high-performance computing. Your deep area can be HPC, numerical methods, databases, networking, or ML Ops.</p>
    </div>
);

const Roadmap = () => {
    const [activePathId, setActivePathId] = useState(paths[0].id);
    const [activeStage, setActiveStage] = useState(0);
    const activePath = paths.find((path) => path.id === activePathId) || paths[0];
    const accent = accentClasses[activePath.accent];
    const stage = activePath.stages[activeStage];

    const selectPath = (pathId) => {
        setActivePathId(pathId);
        setActiveStage(0);
    };

    return (
        <main className="relative flex-1 overflow-hidden bg-black pt-16">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.12),transparent_32rem)]" />
            <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <header className="flex flex-col gap-8 border-b border-neutral-800 pb-10 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-2xl">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-indigo-300">Your next move</p>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Find your edge.</h1>
                        <p className="mt-4 text-lg leading-relaxed text-neutral-400">Three paths into quant. A clear next step for each.</p>
                    </div>
                    <div className="border-l-2 border-amber-400 pl-5 text-sm leading-6 text-neutral-400">
                        <p>Learn the foundations.</p>
                        <p>Build something you can explain.</p>
                        <p className="font-semibold text-white">Make your next move.</p>
                    </div>
                </header>

                <section className="mt-8 grid gap-4 lg:grid-cols-3" aria-label="Quant paths">
                    {paths.map((path) => {
                        const isActive = path.id === activePathId;
                        const pathAccent = accentClasses[path.accent];
                        return (
                            <button
                                key={path.id}
                                type="button"
                                onClick={() => selectPath(path.id)}
                                className={`group min-h-36 border p-5 text-left transition-colors ${isActive ? pathAccent.active : 'border-neutral-800 bg-neutral-950 hover:border-neutral-600 hover:bg-neutral-900'}`}
                                aria-pressed={isActive}
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <span className={`font-mono text-lg ${isActive ? pathAccent.icon : 'text-neutral-400'}`}>{path.icon}</span>
                                    <span className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${isActive ? pathAccent.text : 'text-neutral-500'}`}>{path.eyebrow}</span>
                                </div>
                                <h2 className="mt-5 text-xl font-semibold text-white">{path.title}</h2>
                                <p className="mt-1 text-sm text-neutral-400">{path.summary}</p>
                            </button>
                        );
                    })}
                </section>

                <section className="mt-12 grid gap-8 lg:grid-cols-[17rem_1fr] lg:gap-12">
                    <aside>
                        <div className="flex items-end justify-between border-b border-neutral-800 pb-3">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">Your roadmap</p>
                            <span className="text-xs text-neutral-500">{activeStage + 1} of {activePath.stages.length} complete</span>
                        </div>
                        <div className="mt-3 h-1 bg-neutral-800">
                            <div className={`h-full ${accent.fill}`} style={{ width: `${((activeStage + 1) / activePath.stages.length) * 100}%` }} />
                        </div>
                        <nav className="mt-6" aria-label={`${activePath.title} stages`}>
                            {activePath.stages.map((item, index) => {
                                const isCurrent = index === activeStage;
                                return (
                                    <button
                                        key={item.title}
                                        type="button"
                                        onClick={() => setActiveStage(index)}
                                        className={`relative flex w-full gap-3 border-l px-2 pb-6 text-left transition-colors ${isCurrent ? `${accent.text} border-current` : 'border-neutral-800 text-neutral-500 hover:border-neutral-600 hover:text-neutral-300'}`}
                                        aria-current={isCurrent ? 'step' : undefined}
                                    >
                                        <span className={`-ml-[1.05rem] flex h-7 w-7 shrink-0 items-center justify-center border bg-black text-xs ${isCurrent ? `border-current ${accent.text}` : 'border-neutral-700 text-neutral-500'}`}>
                                            {index < activeStage ? '✓' : String(index + 1).padStart(2, '0')}
                                        </span>
                                        <span className="pt-1">
                                            <span className={`block text-sm font-semibold ${isCurrent ? 'text-white' : ''}`}>{item.title}</span>
                                            <span className="mt-1 block text-xs text-neutral-500">{item.type}</span>
                                        </span>
                                    </button>
                                );
                            })}
                        </nav>
                    </aside>

                    <article className="border border-neutral-800 bg-neutral-950">
                        <div className="border-b border-neutral-800 p-6 sm:p-8">
                            <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500">
                                <span className={`border border-current px-2 py-1 font-semibold ${accent.text}`}>{stage.type}</span>
                                <span>Stage {String(activeStage + 1).padStart(2, '0')} / {String(activePath.stages.length).padStart(2, '0')}</span>
                                <span aria-hidden="true">·</span>
                                <span>{activePath.title}</span>
                            </div>
                            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">{stage.title}</h2>
                            <p className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-400">{stage.description}</p>
                        </div>

                        <div className="space-y-10 p-6 sm:p-8">
                            <div>
                                <h3 className="flex items-center gap-3 text-base font-semibold text-white"><span className={accent.text}>◇</span>What you&apos;ll learn</h3>
                                <ul className="mt-5 grid gap-3 text-sm text-neutral-300 sm:grid-cols-2">
                                    {stage.learn.map((item) => <li key={item} className="flex gap-3"><span className={accent.text}>•</span>{item}</li>)}
                                </ul>
                                {activePath.id === 'developer' && activeStage === 3 && <TShapeGraph accentClass={accent.text} />}
                            </div>
                            <div>
                                <h3 className="flex items-center gap-3 text-base font-semibold text-white"><span className={accent.text}>↗</span>Start with these resources</h3>
                                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                    {stage.resources.map((resource) => (
                                        <ResourceLink key={resource} resource={resource} accentClass={accent.text} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
            </div>
        </main>
    );
};

export default Roadmap;