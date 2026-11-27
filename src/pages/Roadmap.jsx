import React, { useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import PenCircle from '../components/PenCircle';
import { DISCORD_URL } from '../data/links';
import { stages as traderStages } from '../data/roadmap/trader/index.js';
import TraderStage from '../components/roadmap/TraderStage';
import { useTrackProgress } from '../components/roadmap/progress';

const paths = [
    {
        id: 'developer',
        title: 'Quant Developer',
        summary: 'Building the fast, reliable software behind trading and research.',
        stages: [
            {
                title: 'How quant development splits',
                type: 'Orientation',
                description: 'There\'s no single quant developer job. Some teams want low-latency C++ people, some want people building research tools, and some want people keeping the data flowing. Most roles mix all three. Use the three lanes below to make sense of job postings (they aren\'t official titles). Read a few postings from firms you\'d actually want to work at, see which lane keeps showing up, and spend your early time there.',
                lanes: [
                    { name: 'Low-latency & systems', text: 'The software where speed matters most: order execution, exchange connections, pricing libraries. Mostly C++, and a lot of time spent on concurrency, memory, and networking.' },
                    { name: 'Research platforms & tooling', text: 'The tools researchers use every day: backtesters, simulators, research environments, and ways to get at data. Usually Python, sometimes with C++ underneath.' },
                    { name: 'Data & infrastructure', text: 'Pipelines, storage, market data, distributed compute, and keeping it all running. The language changes from team to team. The hard part is scale and getting the numbers right.' },
                ],
                learn: ['Read 5 to 10 quant developer postings and write down the languages and duties that keep coming up', 'Compare how different firms title and scope the same kind of work', 'Pick a lane to start with. You\'ll still borrow skills from the other two'],
                outcome: 'You can look at a posting and tell which lane it leans toward, and you know which lane you want to start with and why.',
                resources: [
                    { label: 'What quant finance covers', href: '/resources?guide=getting-started-with-quant', kind: 'DevilQuant guide' },
                    { label: 'Landing a quant internship', href: '/resources?guide=landing-a-quant-internship', kind: 'DevilQuant guide' },
                ],
            },
            {
                title: 'Language depth',
                type: 'Foundation',
                description: 'Don\'t try to learn Python and C++ at the same time. Pick the one that fits your lane and get really good at it, past the syntax and into how it actually works. You\'ll pick up the other one later. Most experienced quant devs end up using both.',
                learn: [
                    'Python: the data model, iterators and generators, typing, packaging, profiling, and NumPy/pandas fundamentals',
                    'C++: modern C++ (17/20), ownership and RAII, the STL and its complexity guarantees, CMake builds, debugging with sanitizers',
                    'Algorithms, data structures, and complexity in your chosen language',
                    'Effective C++: some of it predates modern C++, so read it with that in mind. The core ideas still hold up',
                ],
                outcome: 'You can build, test, and ship a small program with a few files in your language, and explain how it uses memory and where it\'s slow.',
                courses: [
                    { code: 'CSE 110', name: 'Principles of Programming', note: 'Programming basics. Start here for either language.' },
                    { code: 'CSE 310', name: 'Data Structures and Algorithms', note: 'Algorithms and complexity. Most coding interviews build on this.' },
                    { code: 'CSE 340', name: 'Principles of Programming Languages', note: 'How programming languages are designed and built.' },
                ],
                resources: [
                    { label: 'Fluent Python', href: 'https://www.oreilly.com/library/view/fluent-python-2nd/9781492056348/', kind: 'Python book' },
                    { label: 'NumPy user guide', href: 'https://numpy.org/doc/stable/user/index.html', kind: 'Python docs' },
                    { label: 'Python for Finance', href: 'https://www.amazon.com/dp/1491945281', kind: 'Python book, recommended by Citadel' },
                    { label: 'learncpp.com', href: 'https://www.learncpp.com/', kind: 'C++ tutorial' },
                    { label: 'A Tour of C++', href: 'https://www.stroustrup.com/tour2.html', kind: 'C++ book' },
                    { label: 'Effective C++', href: 'https://www.oreilly.com/library/view/effective-c-3rd/0321334876/', kind: 'C++ book' },
                    { label: 'Daily C++ Interview', href: 'https://www.amazon.com/Daily-Interview-yourself-interview-question-ebook/dp/B0C31ZD7XP/', kind: 'C++ book' },
                ],
            },
            {
                title: 'Systems foundations: OS, architecture & networking',
                type: 'Core',
                description: 'This is the layer under everything you\'ll write. Read Operating Systems: Three Easy Pieces through Part 1 (Virtualization) and Part 2 (Concurrency). Then read Computer Systems: A Programmer\'s Perspective to see what the hardware actually does with your code. Finish with Computer Networking: A Top-Down Approach, chapters 1 to 5, and spend extra time on the transport layer and sockets.',
                learn: [
                    'Processes, scheduling, and virtual memory',
                    'Threads, locks, and the basics of memory ordering',
                    'Caches and the memory hierarchy, and why data layout changes speed',
                    'Sockets, TCP versus UDP, and how reliable communication is built',
                ],
                outcome: 'You can explain what happens, all the way down through the OS and hardware, when two threads fight over a lock or a packet shows up on a socket.',
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
                description: 'Learn how to design systems that move, store, and process a lot of data. Then use it on problems quant teams actually have: pulling in market data, storing time series, running an event-driven backtester, and tracking an order from start to finish. Start with Designing Data-Intensive Applications (2nd edition), and sketch the quant versions on paper as you read.',
                learn: [
                    'Data models, storage engines, and indexing',
                    'Replication, partitioning, and consistency',
                    'Batch and stream processing',
                    'Sketch a market data pipeline and an event-driven backtester, and be ready to explain your tradeoffs',
                ],
                outcome: 'You can design a market data pipeline or a backtester and explain the tradeoffs you made.',
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
                description: 'Projects are how you figure out what you want to go deep on. Build complete systems from start to finish, contribute to code someone else wrote, and show you can work in a real codebase, not just a blank folder. Over time, go really deep on one or two areas and keep a broad base around them. Let your projects show what your specialty is.',
                learn: [
                    'Pick projects that make you use what you learned in stages 2 to 4',
                    'Finish a full system with tests, docs, and a README',
                    'Read, review, and improve an existing codebase',
                    'Work the way teams do: issues, tests, pull requests, and code review',
                ],
                ideas: [
                    { lane: 'Low-latency & systems', items: ['A limit order book and matching engine, with benchmarks', 'A lock-free queue and a write-up of its memory ordering', 'A market data feed handler that parses and replays captured data'] },
                    { lane: 'Research platforms & tooling', items: ['An event-driven backtester with realistic fills and costs', 'A reproducible research environment with a clean data access layer'] },
                    { lane: 'Data & infrastructure', items: ['A market data ingestion pipeline with storage and replay', 'A scheduled scraper feeding a queryable store with monitoring'] },
                ],
                showTShape: true,
                outcome: 'You\'ve finished at least one documented project and contributed to someone else\'s codebase, and you can say what your specialty is and why.',
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
                description: 'Now turn your skills into something an interviewer can see. Interviews usually mix standard algorithm problems with topics from your lane: concurrency and memory, operating systems and networking, or data and system design. And if the direct route into quant is crowded, a strong engineering job next to it is a perfectly good next step.',
                learn: [
                    'Algorithm patterns through LeetCode and Codeforces',
                    'Lane-specific topics: C++ and concurrency, OS and networking, or data and system design',
                    'Explain your thinking out loud and ask good clarifying questions',
                    'Walk through a project end to end: what you decided, the tradeoffs, and what went wrong',
                    'A GitHub profile and resume bullets that show real, finished work',
                ],
                outcome: 'You can talk through any project on your resume for 20 minutes, and solve a medium algorithm problem while explaining your thinking out loud.',
                courses: [
                    { code: 'CSE 310', name: 'Data Structures and Algorithms', note: 'The foundation for coding interviews.' },
                    { code: 'CSE 494', name: 'Competitive Programming and Problem Solving', note: 'Prepares you for ICPC; offered in spring.' },
                ],
                resources: [
                    { label: 'LeetCode problem set', href: 'https://leetcode.com/problemset/', kind: 'Practice' },
                    { label: 'Codeforces', href: 'https://codeforces.com/', kind: 'Practice' },
                    { label: 'MyntBit: Quant Developer track', href: 'https://myntbit.com/tracks/developer', kind: 'Interview practice, free tier' },
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
        title: 'Quant Trader',
        summary: 'Making decisions under uncertainty.',
        stages: traderStages.map((item) => ({
            title: item.title,
            type: item.type,
            description: item.description,
            trader: item,
        })),
    },
    {
        id: 'researcher',
        title: 'Quant Researcher',
        summary: 'Turning data into evidence-backed models.',
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

const resourceKey = (resource) => toResource(resource).label;

const sectionHeading = 'text-[32px] leading-[48px] font-bold tracking-[-0.03em] text-chalk';
const subHeading = 'text-[20px] leading-[24px] font-bold tracking-[-0.02em] text-chalk';
const outlinedTag = 'text-[13px] leading-[24px] px-[12px] text-chalk shadow-[inset_0_0_0_1px_var(--color-rule-major)] bg-pad';

// The hand-drawn red-pen tick used for list markers on the About page.
const Tick = () => (
    <svg className="mt-[6px] w-[20px] h-[12px] shrink-0 text-redpen" viewBox="0 0 20 12" fill="none" aria-hidden="true">
        <path d="M1 7C4 6 7 10 9 10C12 10 15 3 19 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const TickList = ({ items, className = '' }) => (
    <ul className={`grid gap-x-[48px] gap-y-[12px] sm:grid-cols-2 ${className}`}>
        {items.map((item) => (
            <li key={item} className="flex gap-[12px] text-[16px] leading-[24px] text-chalk">
                <Tick />
                <span>{item}</span>
            </li>
        ))}
    </ul>
);

const ResourceLink = ({ resource }) => {
    const { label, href, kind } = toResource(resource);
    const external = isExternalLink(href);
    const linkClass = 'ink-link text-[16px] leading-[24px] font-medium text-chalk underline decoration-[1.5px] decoration-chalk/60 underline-offset-[6px]';
    return (
        <li className="border-t border-rule py-[12px]">
            {external ? (
                <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {label}
                    <span className="sr-only"> (opens in a new tab)</span>
                </a>
            ) : (
                <Link to={href} className={linkClass}>{label}</Link>
            )}
            {kind && <p className="mt-[4px] text-[14px] leading-[24px] text-pencil">{kind}</p>}
        </li>
    );
};

// A callout: what "done" looks like for this stage.
const Outcome = ({ text }) => (
    <div className="mt-[24px] max-w-[60ch] border-[1.5px] border-chalk/60 bg-chalk/[0.06] p-[24px]">
        <p className="font-hand text-[20px] leading-[24px] text-redpen">you're done when</p>
        <p className="mt-[4px] text-[16px] leading-[26px] text-chalk">{text}</p>
    </div>
);

const Lanes = ({ lanes }) => (
    <ul className="mt-[48px] grid gap-[24px] min-[1224px]:grid-cols-3 min-[1224px]:gap-[48px]">
        {lanes.map((lane) => (
            <li key={lane.name} className="border-t border-rule-major pt-[24px]">
                <h3 className={subHeading}>{lane.name}</h3>
                <p className="mt-[12px] text-[15px] leading-[24px] text-chalk">{lane.text}</p>
            </li>
        ))}
    </ul>
);

const ProjectIdeas = ({ ideas }) => (
    <div className="mt-[48px]">
        <h3 className={subHeading}>Project ideas by lane</h3>
        <div className="mt-[24px] grid gap-[24px] min-[1224px]:grid-cols-3 min-[1224px]:gap-[48px]">
            {ideas.map((group) => (
                <div key={group.lane} className="border-t border-rule-major pt-[12px]">
                    <p className="text-[16px] leading-[24px] font-semibold text-chalk">{group.lane}</p>
                    <ul className="mt-[12px] space-y-[12px]">
                        {group.items.map((item) => (
                            <li key={item} className="flex gap-[12px] text-[15px] leading-[24px] text-chalk">
                                <Tick />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </div>
);

const Courses = ({ courses }) => (
    <section className="mt-[48px] border-t border-rule-major pt-[24px]">
        <h3 className={subHeading}>Where this shows up at ASU</h3>
        <ul className="mt-[12px]">
            {courses.map((course) => (
                <li key={course.code} className="border-t border-rule py-[12px]">
                    <p className="text-[16px] leading-[24px] text-chalk">
                        <span className="font-semibold">{course.code}</span> {course.name}
                    </p>
                    <p className="text-[14px] leading-[24px] text-pencil">{course.note}</p>
                </li>
            ))}
        </ul>
        <p className="mt-[12px] text-[14px] leading-[24px] text-pencil">
            Course numbers come from the ASU catalog. Which courses are required depends on your major, so check your degree map.
        </p>
    </section>
);

// Illustrative only: bar heights are a teaching device, not data.
const specializationTopics = [
    { name: 'Databases', level: 52 },
    { name: 'Networking', level: 48 },
    { name: 'HPC', level: 100, specialty: true },
    { name: 'Numerical methods', level: 55 },
    { name: 'ML Ops', level: 50 },
];

const TShapeGraph = () => (
    <div className="mt-[48px] border-t border-rule pt-[24px]">
        <h3 className="text-[24px] leading-[36px] font-bold tracking-[-0.03em] text-chalk">
            Broad enough to help anywhere. Deep enough to stand out.
        </h3>
        <p className="mt-[12px] max-w-[60ch] text-[16px] leading-[26px] text-chalk">
            Aim for a T-shaped skill set: decent at a lot of things, really good at one or two. Pick one or two topics to go deep on, and build working knowledge across the rest of the stack.
        </p>

        <div className="mt-[24px] max-w-[60ch] border-[1.5px] border-pencil/50 bg-pencil/[0.08] p-[24px]">
            <p className="font-hand text-[20px] leading-[24px] text-redpen">just an example</p>
            <p className="mt-[4px] text-[16px] leading-[26px] text-chalk">
                Not everyone needs these skills. The graph just shows the shape: one deep area with working knowledge around it. Your deep area and the skills around it depend on your lane and what you’re into.
            </p>
        </div>

        <div className="mt-[24px] overflow-x-auto pb-[12px]">
            <div
                role="img"
                aria-label="Example bar chart, not a requirement: one deep specialty, high-performance computing, at expert level, and working proficiency in databases, networking, numerical methods, and ML Ops."
                className="relative min-w-[32rem] pt-[36px]"
            >
                <span className="absolute left-[12px] top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap font-hand text-[18px] leading-[24px] text-pencil">
                    Depth of knowledge
                </span>
                <div className="relative ml-[48px] h-[288px] border-b-[1.5px] border-l-[1.5px] border-pencil">
                    <div className="pointer-events-none absolute inset-x-0 bottom-[85%] border-t border-dashed border-pencil/70">
                        <span className="absolute -top-[28px] right-0 font-hand text-[18px] leading-[24px] text-chalk">Expert</span>
                    </div>
                    <div className="pointer-events-none absolute inset-x-0 bottom-[45%] border-t border-dashed border-pencil/70">
                        <span className="absolute -top-[28px] right-0 font-hand text-[18px] leading-[24px] text-chalk">Proficient</span>
                    </div>
                    <div className="absolute inset-0 grid grid-cols-5 items-end gap-[12px] px-[12px] sm:gap-[24px]">
                        {specializationTopics.map((topic) => (
                            <div
                                key={topic.name}
                                className={`mx-auto w-full max-w-[96px] bg-pad ${topic.specialty ? 'shadow-[inset_0_0_0_1.5px_var(--color-chalk)]' : 'shadow-[inset_0_0_0_1.5px_var(--color-pencil)]'}`}
                                style={{ height: `${topic.level}%` }}
                            />
                        ))}
                    </div>
                </div>
                <div className="ml-[48px] mt-[12px] grid grid-cols-5 gap-[12px] px-[12px] sm:gap-[24px]">
                    {specializationTopics.map((topic) => (
                        <span key={topic.name} className={`text-center text-[13px] leading-[16px] ${topic.specialty ? 'font-semibold text-chalk' : 'text-pencil'}`}>
                            {topic.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
        <p className="text-[14px] leading-[24px] text-pencil">Example only. The bar heights are made up to show the shape. Your deep area could be HPC, numerical methods, databases, networking, or ML Ops.</p>

        <div className="mt-[24px] border-t border-rule pt-[24px]">
            <h4 className={subHeading}>Make your skills fit together.</h4>
            <p className="mt-[12px] text-[16px] leading-[26px] text-chalk">Each skill should make the others more useful.</p>
            <div className="mt-[24px] max-w-[60ch] border-l-[1.5px] border-redpen pl-[24px]">
                <p className="font-hand text-[20px] leading-[24px] text-redpen">for example</p>
                <p className="mt-[4px] text-[16px] leading-[26px] text-chalk">
                    Expert at <span className="font-semibold">high-performance computing</span>. Proficient with <span className="font-semibold">numerical optimization</span> and <span className="font-semibold">data pipelines</span>.
                </p>
                <p className="mt-[12px] text-[16px] leading-[26px] text-chalk">
                    A team trying to grow its derivatives pricing engine would be very interested in someone like this.
                </p>
            </div>
            <p className="mt-[24px] text-[16px] leading-[24px] font-semibold text-chalk">Why does this mix work? It shows you can:</p>
            <TickList
                className="mt-[12px]"
                items={[
                    'Take a project from start to finish',
                    'Build a pipeline that delivers clean market data at scale',
                    'Write pricing code that runs across many machines',
                    'Turn the output into useful analytics',
                ]}
            />
        </div>

        <div className="mt-[24px] border-t border-rule pt-[24px]">
            <h4 className={subHeading}>Other possible topics</h4>
            <ul className="mt-[12px] flex flex-wrap gap-[12px]">
                {['Parallel/GPU programming', 'Data science', 'Low-level systems'].map((topic) => (
                    <li key={topic} className={outlinedTag}>{topic}</li>
                ))}
            </ul>
        </div>
    </div>
);

const StageSelect = ({ stages, value, onChange }) => (
    <label className="relative mt-[12px] inline-flex w-full items-center lg:hidden">
        <span className="sr-only">Stage</span>
        <select
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="appearance-none w-full bg-pad text-chalk text-[15px] font-medium min-h-[48px] pl-[16px] pr-[40px] shadow-[inset_0_0_0_1.5px_var(--color-chalk)] cursor-pointer"
        >
            {stages.map((item, index) => (
                <option key={item.title} value={index}>{index + 1}. {item.title}</option>
            ))}
        </select>
        <svg className="pointer-events-none absolute right-[14px] w-[12px] h-[12px] text-chalk" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
    </label>
);

const Roadmap = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const articleRef = useRef(null);
    const traderProgress = useTrackProgress('trader');

    // The path and stage live in the URL (?path=trader&stage=3) so a stage can be shared.
    const activePath = paths.find((path) => path.id === searchParams.get('path')) || paths[0];
    const stageNumber = Number.parseInt(searchParams.get('stage'), 10);
    const activeStage = stageNumber >= 1 && stageNumber <= activePath.stages.length ? stageNumber - 1 : 0;
    const stage = activePath.stages[activeStage];
    const lastStage = activePath.stages.length - 1;

    const go = (pathId, stageIndex, scroll = false) => {
        setSearchParams(stageIndex > 0 ? { path: pathId, stage: String(stageIndex + 1) } : { path: pathId });
        if (scroll) articleRef.current?.scrollIntoView({ behavior: 'auto' });
    };

    return (
        <div className="sheet py-[72px]">
            <header>
                <h1 className="text-[clamp(48px,10vw,96px)] leading-[1] font-extrabold tracking-[-0.04em] text-chalk">
                    Roadmap
                </h1>
                <p className="mt-[24px] max-w-[60ch] text-[17px] leading-[28px] text-pencil">
                    Pick a path and work through it one stage at a time, from foundations to interviews.
                </p>
            </header>

            <section className="mt-[72px] border-t border-rule-major pt-[48px]" aria-label="Choose a path">
                <ul className="grid gap-[24px] lg:grid-cols-3">
                    {paths.map((path) => {
                        const isActive = path.id === activePath.id;
                        return (
                            <li key={path.id}>
                                <button
                                    type="button"
                                    onClick={() => go(path.id, 0)}
                                    aria-pressed={isActive}
                                    className={`group block h-full w-full cursor-pointer bg-pad p-[24px] text-left ${isActive ? 'shadow-[inset_0_0_0_1.5px_var(--color-chalk)]' : 'shadow-[inset_0_0_0_1.5px_var(--color-rule-major)] hover:shadow-[inset_0_0_0_1.5px_var(--color-pencil)]'}`}
                                >
                                    <span className={`relative inline-block text-[24px] leading-[32px] font-bold tracking-[-0.03em] ${isActive ? 'text-chalk' : 'text-pencil group-hover:text-chalk'}`}>
                                        {path.title}
                                        {isActive && <PenCircle />}
                                    </span>
                                    <span className="mt-[12px] block text-[16px] leading-[26px] text-chalk">{path.summary}</span>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </section>

            <section className="mt-[72px] grid gap-[48px] border-t border-rule-major pt-[48px] lg:grid-cols-[288px_1fr]">
                <aside className="lg:sticky lg:top-[96px] lg:self-start lg:bg-pad lg:p-[24px] lg:shadow-[inset_0_0_0_1.5px_var(--color-rule-major)]">
                    <p className="font-hand text-[20px] leading-[24px] text-chalk">{activePath.title}</p>
                    <StageSelect stages={activePath.stages} value={activeStage} onChange={(index) => go(activePath.id, index, true)} />
                    <nav className="mt-[12px] hidden lg:block" aria-label={`${activePath.title} stages`}>
                        <ol className="border-l-[1.5px] border-rule-major pl-[12px]">
                            {activePath.stages.map((item, index) => {
                                const isCurrent = index === activeStage;
                                return (
                                    <li key={item.title}>
                                        <button
                                            type="button"
                                            onClick={() => go(activePath.id, index, true)}
                                            aria-current={isCurrent ? 'step' : undefined}
                                            className={`group w-full cursor-pointer py-[12px] text-left text-[15px] leading-[24px] font-medium ${isCurrent ? 'text-chalk' : 'text-pencil hover:text-chalk'}`}
                                        >
                                            <span className={`relative inline-block ${isCurrent ? '' : 'ink-link'}`}>
                                                {index + 1}. {item.title}
                                                {isCurrent && <PenCircle />}
                                            </span>
                                        </button>
                                    </li>
                                );
                            })}
                        </ol>
                    </nav>
                </aside>

                <article ref={articleRef} className="min-w-0 scroll-mt-[96px] bg-pad p-[24px] shadow-[inset_0_0_0_1.5px_var(--color-chalk)] md:p-[48px]">
                    <p className="text-[15px] leading-[24px] text-pencil">Stage {activeStage + 1} of {activePath.stages.length}</p>
                    <h2 className={`mt-[4px] ${sectionHeading}`}>{stage.title}</h2>
                    <p className="font-hand text-[18px] leading-[24px] text-redpen">{stage.type}</p>
                    <p className="mt-[24px] max-w-[60ch] text-[16px] leading-[26px] text-chalk">{stage.description}</p>
                    {stage.trader ? (
                        <TraderStage stage={stage.trader} progress={traderProgress} desk={traderProgress.get('trader.desk')} />
                    ) : (
                        <>
                        {stage.outcome && <Outcome text={stage.outcome} />}
                        {stage.lanes && <Lanes lanes={stage.lanes} />}

                        <section className="mt-[48px] border-t border-rule-major pt-[24px]">
                            <h3 className={subHeading}>What you&apos;ll learn</h3>
                            <TickList className="mt-[24px]" items={stage.learn} />
                            {stage.ideas && <ProjectIdeas ideas={stage.ideas} />}
                            {stage.showTShape && <TShapeGraph />}
                        </section>

                        {stage.courses && <Courses courses={stage.courses} />}

                        <section className="mt-[48px] border-t border-rule-major pt-[24px]">
                            <h3 className={subHeading}>Start with these resources</h3>
                            <ul className="mt-[12px] grid gap-x-[48px] sm:grid-cols-2">
                                {stage.resources.map((resource) => (
                                    <ResourceLink key={resourceKey(resource)} resource={resource} />
                                ))}
                            </ul>
                        </section>
                        </>
                    )}

                    <div className="mt-[48px] flex flex-wrap items-center justify-between gap-[24px] border-t border-rule-major pt-[24px]">
                        {activeStage > 0 ? (
                            <button type="button" onClick={() => go(activePath.id, activeStage - 1, true)} className="btn-pen cursor-pointer py-[12px] text-left text-[16px]">
                                Previous: {activePath.stages[activeStage - 1].title}
                            </button>
                        ) : <span />}
                        {activeStage < lastStage && (
                            <button type="button" onClick={() => go(activePath.id, activeStage + 1, true)} className="btn-pen cursor-pointer py-[12px] text-left text-[16px]">
                                Next: {activePath.stages[activeStage + 1].title}
                            </button>
                        )}
                    </div>
                </article>
            </section>

            <section className="mt-[96px] border-t border-rule-major pt-[48px]">
                <h2 className="text-[clamp(40px,8vw,72px)] leading-[1] font-extrabold tracking-[-0.04em] text-chalk">
                    Build it together.
                </h2>
                <p className="mt-[24px] max-w-[52ch] text-[17px] leading-[28px] text-pencil">
                    Join the Discord to find people to build with.
                </p>
                <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="btn-highlight mt-[24px] text-[17px]">
                    Join the Discord
                </a>
            </section>
        </div>
    );
};

export default Roadmap;
