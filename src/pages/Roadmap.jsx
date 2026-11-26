import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const paths = [
    {
        id: 'developer',
        icon: '</>',
        title: 'Quant Developer',
        summary: 'Building the fast, reliable software behind trading and research.',
        accent: 'indigo',
        stages: [
            {
                title: 'How quant development splits',
                type: 'Orientation',
                description: 'Quant development is not one job. Firms and teams weight three kinds of work differently, and many roles blend them. Treat the lanes below as a way to read job postings, not as official titles. Read a handful of postings at firms you would want to work at, notice which emphasis dominates, and use that to decide where your early effort goes.',
                lanes: [
                    { name: 'Low-latency & systems', text: 'Performance-critical software: execution, exchange connectivity, pricing libraries. Usually C++, with heavy emphasis on concurrency, memory, and networking.' },
                    { name: 'Research platforms & tooling', text: 'The software researchers rely on: backtesting frameworks, simulation, research environments, data access. Often Python, sometimes with C++ underneath.' },
                    { name: 'Data & infrastructure', text: 'Pipelines, storage, market data, distributed compute, and reliability. The language varies; the problems are about scale and correctness.' },
                ],
                learn: ['Read 5 to 10 quant developer postings and note the recurring languages and responsibilities', 'Notice how titles and scope differ between firms', 'Choose a lane to lead with, and expect to borrow skills from the others'],
                outcome: 'You can say which lane a given posting leans toward, which one you want to lead with, and why.',
                resources: [
                    { label: 'What quant finance covers', href: '/resources?guide=getting-started-with-quant', kind: 'DevilQuant guide' },
                    { label: 'Landing a quant internship', href: '/resources?guide=landing-a-quant-internship', kind: 'DevilQuant guide' },
                ],
            },
            {
                title: 'Language depth',
                type: 'Foundation',
                description: 'You do not need to master Python and C++ at the same time. Pick the language that matches your lane and build deep, production-ready knowledge instead of collecting surface-level syntax. Plan to add the other one later; most strong quant developers end up comfortable in both.',
                learn: [
                    'Python: the data model, iterators and generators, typing, packaging, profiling, and NumPy/pandas fundamentals',
                    'C++: modern C++ (17/20), ownership and RAII, the STL and its complexity guarantees, CMake builds, debugging with sanitizers',
                    'Algorithms, data structures, and complexity in your chosen language',
                    'Read Effective C++ critically: some advice predates modern C++, but its core lessons remain essential',
                ],
                outcome: 'You can build, test, and ship a small multi-file program in your language, and explain its memory and performance behavior.',
                courses: [
                    { code: 'CSE 110', name: 'Principles of Programming', note: 'Programming fundamentals; the starting point for either language.' },
                    { code: 'CSE 310', name: 'Data Structures and Algorithms', note: 'Algorithms and complexity analysis, the base for coding interviews.' },
                    { code: 'CSE 340', name: 'Principles of Programming Languages', note: 'How programming languages are designed and implemented.' },
                ],
                resources: [
                    { label: 'Fluent Python', href: 'https://www.oreilly.com/library/view/fluent-python-2nd/9781492056348/', kind: 'Book · Python' },
                    { label: 'NumPy user guide', href: 'https://numpy.org/doc/stable/user/index.html', kind: 'Docs · Python' },
                    { label: 'learncpp.com', href: 'https://www.learncpp.com/', kind: 'Tutorial · C++' },
                    { label: 'A Tour of C++', href: 'https://www.stroustrup.com/tour2.html', kind: 'Book · C++' },
                    { label: 'Effective C++', href: 'https://www.oreilly.com/library/view/effective-c-3rd/0321334876/', kind: 'Book · C++' },
                    { label: 'Daily C++ Interview', href: 'https://www.amazon.com/Daily-Interview-yourself-interview-question-ebook/dp/B0C31ZD7XP/', kind: 'Book · C++' },
                ],
            },
            {
                title: 'Systems foundations: OS, architecture & networking',
                type: 'Core',
                description: 'Build the systems foundation underneath quantitative software. Read Operating Systems: Three Easy Pieces through Part 1 (Virtualization) and Part 2 (Concurrency). Then read Computer Systems: A Programmer\'s Perspective to see how hardware actually runs your code, and work through Computer Networking: A Top-Down Approach, Chapters 1 through 5, paying extra attention to the transport layer and sockets.',
                learn: [
                    'Processes, scheduling, and virtual memory',
                    'Threads, locks, and the basics of memory ordering',
                    'Caches and the memory hierarchy, and why data layout changes speed',
                    'Sockets, TCP versus UDP, and how reliable communication is built',
                ],
                outcome: 'You can explain what happens, from your code through the OS and hardware, when two threads contend for a lock or a packet arrives on a socket.',
                courses: [
                    { code: 'CSE 230', name: 'Computer Organization and Assembly Language Programming', note: 'Assembly and how programs map onto the machine.' },
                    { code: 'CSE 330', name: 'Operating Systems', note: 'Processes, scheduling, memory, and concurrency.' },
                    { code: 'CSE 420', name: 'Computer Architecture I', note: 'Pipelining and the memory hierarchy. Core to Computer Systems Engineering; check eligibility for your major.' },
                    { code: 'CSE 434', name: 'Computer Networks', note: 'Protocols, routing, and reliable communication. CS majors choose one of CSE 412, 434, or 445.' },
                ],
                resources: [
                    { label: 'OSTEP: Parts 1 & 2', href: 'https://pages.cs.wisc.edu/~remzi/OSTEP/', kind: 'Book' },
                    { label: 'Computer Systems: A Programmer\'s Perspective', href: 'https://csapp.cs.cmu.edu/', kind: 'Book' },
                    { label: 'Computer Networking: Chapters 1-5', href: 'https://gaia.cs.umass.edu/kurose_ross/online_lectures.htm', kind: 'Lectures' },
                    { label: 'Beej\'s Guide to Network Programming', href: 'https://beej.us/guide/bgnet/', kind: 'Guide' },
                ],
            },
            {
                title: 'Data & system design',
                type: 'Core',
                description: 'Learn to design systems that move, store, and process large amounts of data, then apply it to quant-shaped problems: ingesting market data, storing time series, running an event-driven backtester, and tracking the life of an order. Start with Designing Data-Intensive Applications, 2nd Edition, and sketch the quant designs on paper as you go.',
                learn: [
                    'Data models, storage engines, and indexing',
                    'Replication, partitioning, and consistency',
                    'Batch and stream processing',
                    'Sketch a market data pipeline and an event-driven backtester, and defend your tradeoffs',
                ],
                outcome: 'You can design and defend a market data pipeline or a backtesting system, naming the tradeoffs you chose.',
                courses: [
                    { code: 'CSE 412', name: 'Database Management', note: 'Storage, queries, and transactions. CS majors choose one of CSE 412, 434, or 445.' },
                    { code: 'CSE 445', name: 'Distributed Software Development', note: 'Building software across services and machines.' },
                ],
                resources: [
                    { label: 'Designing Data-Intensive Applications, 2nd Edition', href: 'https://www.oreilly.com/library/view/designing-data-intensive-applications/9781098119058/', kind: 'Book' },
                    { label: 'A pipeline from raw text to a signal', href: '/resources?guide=sentiment-trading-signal', kind: 'DevilQuant guide' },
                ],
            },
            {
                title: 'Build projects & find your specialty',
                type: 'Applied',
                description: 'Projects are where you discover what you want to go deep on. Build coherent, end-to-end systems, contribute to existing open-source code, and show that you can work inside a real codebase instead of only starting from scratch. As the work accumulates, develop undeniable depth in one or two areas while keeping a broad base. Your specialty should be demonstrated by production-level work.',
                learn: [
                    'Choose projects that make you reuse what you learned in stages 2 to 4',
                    'Ship a complete, documented system with tests and a README',
                    'Read, review, and improve an existing codebase',
                    'Use issues, tests, pull requests, and code review',
                ],
                ideas: [
                    { lane: 'Low-latency & systems', items: ['A limit order book and matching engine, with benchmarks', 'A lock-free queue and a write-up of its memory ordering', 'A market data feed handler that parses and replays captured data'] },
                    { lane: 'Research platforms & tooling', items: ['An event-driven backtester with realistic fills and costs', 'A reproducible research environment with a clean data access layer'] },
                    { lane: 'Data & infrastructure', items: ['A market data ingestion pipeline with storage and replay', 'A scheduled scraper feeding a queryable store with monitoring'] },
                ],
                showTShape: true,
                outcome: 'You have at least one complete, documented project and one contribution to someone else\'s codebase, and you can say what your specialty is and why.',
                courses: [
                    { code: 'CSE 360', name: 'Introduction to Software Engineering', note: 'Teams, testing, and process on a shared codebase.' },
                ],
                resources: [
                    { label: 'Explore DevilQuant projects', href: '/projects', kind: 'DevilQuant' },
                    { label: 'Find a project partner', href: '/discord', kind: 'DevilQuant' },
                    { label: 'Getting started with projects', href: '/resources?guide=getting-started-with-projects', kind: 'DevilQuant guide' },
                    { label: 'Options pricing engine', href: '/resources?guide=options-pricing-engine', kind: 'DevilQuant guide' },
                    { label: 'How to contribute to open source', href: 'https://opensource.guide/how-to-contribute/', kind: 'Guide' },
                ],
            },
            {
                title: 'Interviews & entry strategy',
                type: 'Career preparation',
                description: 'Turn your skills into evidence and show how you think with other engineers. Interviews combine general algorithm problems with topics from your lane: concurrency and memory, operating systems and networking, or data and system design. If the direct quant path is crowded, a strong adjacent engineering role can be the right next step.',
                learn: [
                    'Algorithm patterns through LeetCode and Codeforces',
                    'Lane-specific topics: C++ and concurrency, OS and networking, or data and system design',
                    'Explain your reasoning aloud and ask good clarifying questions',
                    'Walk through a project end to end: decisions, tradeoffs, and what went wrong',
                    'A GitHub profile and resume bullets that show production-level work',
                ],
                outcome: 'You can walk through any project on your resume in depth for 20 minutes, and solve a medium algorithm problem while narrating your reasoning.',
                courses: [
                    { code: 'CSE 310', name: 'Data Structures and Algorithms', note: 'The foundation for coding interviews.' },
                    { code: 'CSE 494', name: 'Competitive Programming and Problem Solving', note: 'Prepares you for ICPC; offered in spring.' },
                ],
                resources: [
                    { label: 'LeetCode problem set', href: 'https://leetcode.com/problemset/', kind: 'Practice' },
                    { label: 'Codeforces', href: 'https://codeforces.com/', kind: 'Practice' },
                    { label: 'System Design Interview, Volume 1', href: 'https://www.amazon.com/dp/B08B3FWYBX', kind: 'Book' },
                    { label: 'System Design Interview, Volume 2', href: 'https://www.amazon.com/dp/B0CR977BQH', kind: 'Book' },
                    { label: 'Landing a quant internship', href: '/resources?guide=landing-a-quant-internship', kind: 'DevilQuant guide' },
                    { label: 'Publishing your code and walking through projects', href: '/resources?guide=getting-started-with-projects', kind: 'DevilQuant guide' },
                ],
            },
        ],
    },
    {
        id: 'trader',
        icon: '↗',
        title: 'Quant Trader',
        summary: 'Making decisions under uncertainty.',
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
        summary: 'Turning data into evidence-backed models.',
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
};

const isExternalLink = (href) => href.startsWith('http');

// A resource is either { label, href, kind } or, for tracks not yet reworked, a plain label looked up in resourceLinks.
const toResource = (resource) =>
    typeof resource === 'string' ? { label: resource, href: resourceLinks[resource] || '/resources' } : resource;

const ResourceLink = ({ resource, accentClass }) => {
    const { label, href, kind } = toResource(resource);
    const className = 'group flex items-center justify-between gap-3 border border-neutral-800/90 bg-[#0b0d0f] px-4 py-4 text-left text-sm font-medium text-neutral-200 transition-colors hover:border-neutral-500 hover:bg-neutral-900/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70';
    const content = (
        <>
            <span>
                {label}
                {kind && <span className="mt-1 block text-xs font-normal text-neutral-500">{kind}</span>}
            </span>
            <span className={`${accentClass} transition-transform group-hover:translate-x-0.5`}>↗</span>
        </>
    );

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

const resourceKey = (resource) => toResource(resource).label;

const Outcome = ({ text, accent }) => (
    <div className={`mt-6 border-l-2 border-current pl-4 ${accent.text}`}>
        <p className="text-xs font-semibold uppercase tracking-[0.16em]">You are done when</p>
        <p className="mt-2 text-sm leading-relaxed text-neutral-300">{text}</p>
    </div>
);

const Lanes = ({ lanes }) => (
    <div className="mt-6 grid gap-px border border-neutral-800 bg-neutral-800 sm:grid-cols-3">
        {lanes.map((lane) => (
            <div key={lane.name} className="bg-[#0b0d0f] p-4">
                <h4 className="text-sm font-semibold text-white">{lane.name}</h4>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">{lane.text}</p>
            </div>
        ))}
    </div>
);

const ProjectIdeas = ({ ideas, accentClass }) => (
    <div className="mt-8">
        <h4 className="text-sm font-semibold text-white">Project ideas by lane</h4>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {ideas.map((group) => (
                <div key={group.lane} className="border border-neutral-800 bg-[#0b0d0f] p-4">
                    <p className={`text-xs font-semibold ${accentClass}`}>{group.lane}</p>
                    <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                        {group.items.map((item) => <li key={item} className="flex gap-2"><span className={accentClass}>•</span>{item}</li>)}
                    </ul>
                </div>
            ))}
        </div>
    </div>
);

const Courses = ({ courses, accentClass }) => (
    <div>
        <h3 className="flex items-center gap-3 text-base font-semibold text-white"><span className={accentClass}>◆</span>Where this shows up at ASU</h3>
        <ul className="mt-5 space-y-3">
            {courses.map((course) => (
                <li key={course.code} className="border border-neutral-800/90 bg-[#0b0d0f] px-4 py-3 text-sm">
                    <span className="font-semibold text-neutral-200">{course.code}: {course.name}</span>
                    <span className="mt-1 block text-neutral-500">{course.note}</span>
                </li>
            ))}
        </ul>
        <p className="mt-3 text-xs text-neutral-500">Course numbers come from the ASU catalog. Which courses are required depends on your major, so check your degree map.</p>
    </div>
);

const specializationTopics = [
    { name: 'Databases', level: 42 },
    { name: 'Networking', level: 34 },
    { name: 'HPC', level: 100, specialty: true },
    { name: 'Numerical methods', level: 50 },
    { name: 'ML Ops', level: 38 },
];

const TShapeGraph = ({ accentClass }) => (
    <div className="mt-8 border border-neutral-800/90 bg-[#0b0d0f] p-5 sm:p-6" aria-label="T-shaped specialization graph">
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
        <div className="mt-5 border border-neutral-800 bg-neutral-900/40 p-5 sm:p-6">
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
        <main className="relative flex-1 overflow-hidden bg-[#090a0b] pt-16">
            <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
                <section className="grid gap-px border border-neutral-800 bg-neutral-800 lg:grid-cols-3" aria-label="Quant paths">
                    {paths.map((path) => {
                        const isActive = path.id === activePathId;
                        const pathAccent = accentClasses[path.accent];
                        return (
                            <button
                                key={path.id}
                                type="button"
                                onClick={() => selectPath(path.id)}
                                className={`group min-h-40 bg-[#0d0f11] p-5 text-left transition-colors hover:bg-neutral-900 ${isActive ? `${pathAccent.active} bg-[#15181c]` : ''}`}
                                aria-pressed={isActive}
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <span className={`font-mono text-lg ${isActive ? pathAccent.icon : 'text-neutral-500'}`}>{path.icon}</span>
                                    <span aria-hidden="true" className={`h-px w-8 ${isActive ? pathAccent.fill : 'bg-neutral-700'}`} />
                                </div>
                                <h2 className="mt-5 text-xl font-semibold text-white">{path.title}</h2>
                                <p className="mt-1 text-sm text-neutral-400">{path.summary}</p>
                            </button>
                        );
                    })}
                </section>

                <section className="mt-14 grid gap-10 lg:grid-cols-[17rem_1fr] lg:gap-16">
                    <aside className="lg:sticky lg:top-24 lg:self-start">
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

                    <article className="border border-neutral-800 bg-[#101214] shadow-[0_20px_80px_rgba(0,0,0,0.2)]">
                        <div className="border-b border-neutral-800 p-6 sm:p-8">
                            <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500">
                                <span className={`border border-current px-2 py-1 font-semibold ${accent.text}`}>{stage.type}</span>
                                <span>Stage {String(activeStage + 1).padStart(2, '0')} / {String(activePath.stages.length).padStart(2, '0')}</span>
                                <span aria-hidden="true">·</span>
                                <span>{activePath.title}</span>
                            </div>
                            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">{stage.title}</h2>
                            <p className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-400">{stage.description}</p>
                            {stage.outcome && <Outcome text={stage.outcome} accent={accent} />}
                            {stage.lanes && <Lanes lanes={stage.lanes} />}
                        </div>

                        <div className="space-y-10 p-6 sm:p-8">
                            <div>
                                <h3 className="flex items-center gap-3 text-base font-semibold text-white"><span className={accent.text}>◇</span>What you&apos;ll learn</h3>
                                <ul className="mt-5 grid gap-3 text-sm text-neutral-300 sm:grid-cols-2">
                                    {stage.learn.map((item) => <li key={item} className="flex gap-3"><span className={accent.text}>•</span>{item}</li>)}
                                </ul>
                                {stage.ideas && <ProjectIdeas ideas={stage.ideas} accentClass={accent.text} />}
                                {stage.showTShape && <TShapeGraph accentClass={accent.text} />}
                            </div>
                            {stage.courses && <Courses courses={stage.courses} accentClass={accent.text} />}
                            <div>
                                <h3 className="flex items-center gap-3 text-base font-semibold text-white"><span className={accent.text}>↗</span>Start with these resources</h3>
                                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                    {stage.resources.map((resource) => (
                                        <ResourceLink key={resourceKey(resource)} resource={resource} accentClass={accent.text} />
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