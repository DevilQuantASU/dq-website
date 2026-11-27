// Overview content for the Quant Trader path: roles, specializations, entry diagnostic, skills matrix, schedule, final rubric.

export const intro = {
    summary: 'Learn to make good decisions when outcomes are uncertain, then show it by building and defending a simulated market-making strategy.',
    audience: 'Written for students and early-career readers from computer science, math, engineering, statistics, economics, or anywhere else. You do not need finance experience, and you do not need to have done the Developer path first.',
    moneyNote: 'Everything here uses simulated or synthetic data and simulated money. Nothing on this path asks you to trade real money.',
    outcomeNote: 'Finishing the path means you can demonstrate specific skills. It does not guarantee an interview, an offer, or trading profit.',
};

export const roles = {
    intro: 'Quant traders, quant researchers, and quant developers share a lot of work, and the split is different at every firm. At some firms a trader mostly analyses data and works closely with engineers. At others a trader mostly makes pricing and risk decisions in real time. Job titles, interview formats, and expectations vary by firm, desk, product, and seniority, so treat the descriptions below as a rough guide rather than a rule.',
    rows: [
        { role: 'Quant Trader', focus: 'Pricing, risk, and live decisions under uncertainty; building and monitoring trading logic.', overlap: 'Uses research results and relies on developer-built systems.' },
        { role: 'Quant Researcher', focus: 'Finding and testing statistical or mathematical ideas that could become trading signals or models.', overlap: 'Traders often do research too, and researchers often write production code.' },
        { role: 'Quant Developer', focus: 'Building the fast, reliable software that trading and research depend on.', overlap: 'Developers often work on strategy logic and data tools alongside traders.' },
    ],
    firmNotes: [
        { firm: 'IMC', text: 'Says most of its trading is automated, that traders spend a significant amount of time using Python for data analysis, and that they work closely with software engineers. It uses "quant trader" for roles where most time goes to analysis. (IMC careers site, checked 2026-11-24.)' },
        { firm: 'Optiver', text: 'Describes trading as building models and systems that trade, extracting signal from noisy data, pricing and managing risk, with traders, researchers, and engineers collaborating. (Optiver trading page, checked 2026-11-24.)' },
        { firm: 'Jane Street', text: 'Says the trading interview process feels like a conversation, that no prior finance knowledge is required, and that questions may cover problem solving, probability and statistics, coding, and data analysis. (Jane Street trading interviews page, checked 2026-11-24.)' },
    ],
};

export const practitioner = {
    title: 'One practitioner\'s view',
    source: 'acRoadmapVideo',
    intro: 'The video "2026 Quant Roadmap" from the YouTube channel Algebraic Continuation (January 2025) gives one creator\'s advice for each quant role. He says he checked his views with two quant researchers, a quant trader, and someone in investment banking. The trader section starts at 10:18. These are opinions, not rules, but most of them line up with this path.',
    points: [
        'Finance knowledge matters most for traders. You need to understand the instruments you trade, including multi-leg option positions if you go into options market making, and on some desks you need to follow the news.',
        'Math and applied statistics come next. Trading job descriptions often include brain teasers and quick-reasoning tests, so speed and accuracy matter.',
        'Coding matters least of the three in his view: mostly Python, querying databases, and working with algorithms that advise your trades. IMC, by contrast, says its traders spend a lot of time in Python, so check what each firm says.',
        'Start networking and applying for internships early, even in your first year, and apply every summer. Go to firm dinners, discovery days, and talks when firms visit campus. He describes internships as long hiring processes.',
        'Do things that lead directly to the role. A degree in an unrelated field will not get you a trading job on its own.',
        'Traders are often hired out of a bachelor\'s degree, and the job usually means being at the desk through trading hours, which can be stressful.',
    ],
    project: 'His project idea is to build and paper-trade a real strategy that shows applied statistics, matched to the kind of firm you want. For an options market-making firm, that points to a market-making or high-frequency style project. For a statistical arbitrage firm, a stat-arb project, which is easier to run on your own. Stage 5 includes this as an optional project.',
    caveat: 'He also says traders at top firms mostly come from very selective schools and have strong internships. That is his reading of LinkedIn profiles, not published data. Treat it as a reason to start networking early, not a reason to give up.',
};

export const specializations = {
    intro: 'Stages 1 to 3 and the core lessons in Stages 4 to 6 are the common foundation for everyone. After that you can pick a specialization. Lessons marked Desk-specific belong to one of these. You can do both, but pick one first.',
    items: [
        {
            id: 'mm',
            name: 'Market making and options',
            text: 'You quote prices on both sides, manage inventory, and price and hedge options. Pick this if you enjoy fast mental estimation, probability puzzles, and thinking about who is trading against you.',
            lessons: ['Binomial pricing, Black-Scholes, and implied volatility (Stage 4)', 'Options hedging extension (Stage 5)', 'Market-making games and options questions (Stage 6)'],
        },
        {
            id: 'sys',
            name: 'Systematic trading',
            text: 'You turn data-driven ideas into rules and test them honestly. Pick this if you like statistics, working with data, and being careful about what a backtest can and cannot prove.',
            lessons: ['Systematic strategy extension: honest backtesting (Stage 5)', 'Presenting a research result (Stage 6)'],
        },
    ],
    optional: 'Optional depth for anyone: deeper derivatives theory, stochastic calculus, machine learning, and low-latency C++. None of these is needed to finish the common path.',
};

export const diagnostic = {
    intro: 'Ten questions, no calculator for the first four. Work them on paper, then reveal each answer and mark the ones you got right. Your starting point is worked out from your marks.',
    areas: { arithmetic: 'Arithmetic', algebra: 'Algebra', probability: 'Probability', statistics: 'Statistics', programming: 'Programming' },
    refreshers: {
        arithmetic: 'Do Zetamac sessions for two weeks, then start Stage 1.',
        algebra: 'Work through Khan Academy Algebra 1 and the Logarithms unit of Algebra 2, then start Stage 1.',
        probability: 'Read OpenIntro Statistics, Chapter 3 (Probability), then start Stage 1.',
        statistics: 'Read OpenIntro Statistics, Chapter 2 (Summarizing Data), then start Stage 1.',
        programming: 'Work through CS50P weeks 0 to 3 first, then start Stage 1.',
    },
    questions: [
        { id: 'd1', area: 'arithmetic', q: 'Compute 48 × 312 without a calculator.', a: '14,976. For example 48 × 300 = 14,400 and 48 × 12 = 576.' },
        { id: 'd2', area: 'arithmetic', q: 'Estimate 7.3% of 2,418 to the nearest 5.', a: 'About 175 (the exact value is 176.5). 7% of 2,400 is 168, and the extra 0.3% adds about 7.' },
        { id: 'd3', area: 'algebra', q: 'Solve 3x − 7 = 2x + 5. Then solve 2^x = 32.', a: 'x = 12, and x = 5.' },
        { id: 'd4', area: 'algebra', q: 'A price falls 20%. What percentage gain restores the original price?', a: '25%. A fall to 0.8 needs a rise by a factor of 1 / 0.8 = 1.25.' },
        { id: 'd5', area: 'probability', q: 'Two fair coins are flipped and at least one is heads. What is the probability both are heads?', a: '1/3. The outcomes HH, HT, TH are equally likely and only HH has two heads.' },
        { id: 'd6', area: 'probability', q: 'You roll a fair die four times. What is the probability of at least one six?', a: '1 − (5/6)^4, which is about 0.518.' },
        { id: 'd7', area: 'statistics', q: 'For the data 2, 4, 4, 4, 5, 5, 7, 9, find the mean and the standard deviation treating the list as the whole population.', a: 'Mean 5. The squared deviations sum to 32, so the variance is 4 and the standard deviation is 2.' },
        { id: 'd8', area: 'statistics', q: 'A sample of 400 observations has standard deviation 8. What is the standard error of the sample mean?', a: '8 / √400 = 0.4.' },
        { id: 'd9', area: 'programming', q: 'What does [x**2 for x in range(4)] evaluate to in Python?', a: '[0, 1, 4, 9].' },
        { id: 'd10', area: 'programming', q: 'Write a Python function mean(xs) that returns the average of a list and raises ValueError for an empty list.', a: 'def mean(xs):\n    if not xs:\n        raise ValueError("empty list")\n    return sum(xs) / len(xs)\nAny equivalent version counts.' },
    ],
};

// Priority: 1 = needed before you apply, 2 = strongly helpful, 3 = desk-specific, 4 = optional depth.
export const priorityLabels = {
    1: 'Needed before you apply',
    2: 'Strongly helpful',
    3: 'Desk-specific',
    4: 'Optional depth',
};

export const skillsMatrix = [
    { skill: 'Fast, accurate mental arithmetic', priority: 1, stages: [1, 6], evidence: 'Practice log and a timed drill result' },
    { skill: 'Percentages, basis points, compounding', priority: 1, stages: [1], evidence: 'Checkpoint problem set' },
    { skill: 'Probability and counting', priority: 1, stages: [2], evidence: 'Timed problem set with explanations' },
    { skill: 'Conditional probability and Bayes', priority: 1, stages: [2], evidence: 'Worked solutions in your notebook' },
    { skill: 'Expected value and variance', priority: 1, stages: [2, 3], evidence: 'Notebook comparing analytic and simulated answers' },
    { skill: 'Decisions under uncertainty and risk limits', priority: 1, stages: [3], evidence: 'Decision journal and simulated risk experiment' },
    { skill: 'Order books, spreads, and market-maker thinking', priority: 1, stages: [4], evidence: 'Market-mechanics notebook' },
    { skill: 'Python and data analysis', priority: 1, stages: [1, 5], evidence: 'Tested function module and the capstone repository' },
    { skill: 'Thinking out loud under time pressure', priority: 1, stages: [6], evidence: 'Mock interview rubric scores' },
    { skill: 'Estimation error and calibration', priority: 2, stages: [3, 5], evidence: 'Confidence intervals and a Brier score' },
    { skill: 'Futures and forwards', priority: 2, stages: [4], evidence: 'Payoff and P&L calculations' },
    { skill: 'Options payoffs, put-call parity, delta hedging', priority: 2, stages: [4], evidence: 'Payoff diagrams and a hedging notebook' },
    { skill: 'Honest evaluation: leakage, overfitting, chronological splits', priority: 2, stages: [5], evidence: 'Capstone leakage checks' },
    { skill: 'Git, reproducibility, and a clear README', priority: 2, stages: [5, 6], evidence: 'Capstone repository' },
    { skill: 'Explaining results to a reader', priority: 2, stages: [6], evidence: 'Capstone report' },
    { skill: 'Binomial pricing, Black-Scholes, implied volatility', priority: 3, stages: [4], evidence: 'Pricing function with tests', desk: 'mm' },
    { skill: 'Honest backtesting of a simple signal', priority: 3, stages: [5], evidence: 'Systematic extension report', desk: 'sys' },
    { skill: 'Stochastic calculus and deeper derivatives theory', priority: 4, stages: [4], evidence: 'Not required for the path' },
    { skill: 'Machine learning for prediction', priority: 4, stages: [5], evidence: 'Not required for the path' },
    { skill: 'Low-latency C++', priority: 4, stages: [], evidence: 'Not required for the path' },
];

export const schedule = {
    defaultHours: 9,
    minHours: 4,
    maxHours: 20,
    note: 'The total comes from the hours assigned to each lesson, deliverable, and checkpoint. Pace changes only how many weeks it takes. Interview practice and recruiting preparation are built into the same hours rather than added on top, and they start in Stage 1.',
    alongside: [
        { from: 1, text: 'Ten minutes of mental arithmetic on most days, starting in Stage 1.' },
        { from: 1, text: 'Start networking now: club meetings, firm talks, and campus recruiting events. Apply for internships every year, including your first.' },
        { from: 2, text: 'One probability puzzle a week, written up out loud as if explaining to an interviewer.' },
        { from: 3, text: 'Keep your decision journal going from Stage 3 onward.' },
        { from: 4, text: 'Read one firm\'s recruiting page and write down its stated process and timing.' },
        { from: 5, text: 'Keep your capstone repository public-ready as you go, with commits and a README.' },
        { from: 6, text: 'Recruiting runs beside learning, not after it. Do not wait until Stage 6 to look at timelines.' },
    ],
};

export const checkpointNote = {
    title: 'Roadmap checkpoints are not employer criteria',
    text: 'The targets in each checkpoint are our own teaching benchmarks, chosen so you can tell whether you have the skill. Employers do not publish score cutoffs for this material and their assessments differ by firm, role, and year, so meeting a checkpoint does not mean you would pass any particular company\'s screen. Use the checkpoints to find gaps, then read each firm\'s own recruiting page for how it actually evaluates candidates.',
};

export const finalRubric = {
    title: 'Final rubric',
    intro: 'Score yourself on each row, or better, have a friend or mentor do it. Aim for Solid across the board before you call the path done. Be honest with yourself: a Developing score just tells you what to work on next week.',
    levels: ['Developing', 'Solid', 'Strong'],
    rows: [
        { name: 'Numerical reasoning', cells: ['Needs paper or a calculator for most mental math, and slips up often.', 'Does percentages, basis points, and estimates in their head, and sanity-checks the answers.', 'Fast and accurate, and notices right away when an answer is off by a factor of ten.'] },
        { name: 'Probability and expected value', cells: ['Can solve textbook problems but can\'t explain why the method works.', 'Can solve new problems, picking a method and explaining each step out loud.', 'Finds the clean way to do it (linearity, say) and checks it with a simulation.'] },
        { name: 'Risk and decisions', cells: ['Makes a call without a limit or a reason for the size.', 'Sizes a bet based on a stated edge, a worst case, and a point where they\'d stop.', 'Also says how wrong the edge might be, and sizes down to match.'] },
        { name: 'Market and derivatives knowledge', cells: ['Knows the words but can\'t work out a payoff or a hedge.', 'Gets payoffs, put-call parity, and delta hedges right.', 'Can explain how quotes should move with inventory and new information, and has tested it.'] },
        { name: 'Python and experimental design', cells: ['Code runs on their laptop once, and results change every run.', 'Results are repeatable, with fixed seeds, tests, and separate data for tuning and testing.', 'Also has leakage checks and puts error bars on results across many seeds.'] },
        { name: 'Communication', cells: ['Gives answers with no reasoning or structure.', 'Clearly lays out the question, the approach, the answer, and the main catch.', 'Fixes mistakes calmly, asks good clarifying questions, and adjusts to who they\'re talking to.'] },
    ],
};
