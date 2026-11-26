const stage = {
    id: 's5',
    title: 'Python, data analysis, and trading simulation',
    type: 'Applied',
    description: 'Learn the Python data tools, learn to evaluate ideas without fooling yourself, and build the Market-Making Simulator capstone.',
    purpose: 'This is where the earlier stages come together in code. You build habits that matter more than any one model: fixed seeds, separate development and evaluation data, uncertainty on every result, and a README that someone else can follow.',
    prerequisites: ['Stages 1 to 4 or the equivalent, including a tested Python module from Stage 1 and a seeded simulation from Stages 2 and 3.', 'No prior experience with pandas or Git is needed. Lessons 1 and 2 teach them.'],
    alongside: 'Keep the capstone repository tidy as you go, with small commits and a README you update each session.',
    lessons: [
        {
            id: 'l1', label: 'Core', title: 'Python for data: NumPy and pandas', hours: 8,
            outcomes: ['Create, slice, and do arithmetic on NumPy arrays, including broadcasting.', 'Load a CSV into a DataFrame, select rows and columns, create new columns, and summarise.', 'Work with a time-indexed series.'],
            resources: [
                { key: 'numpy', section: 'Sections "Array fundamentals", "Basic array operations", "Broadcasting", "More useful array operations", and "Generating random numbers".' },
                { key: 'pandas', section: 'The tutorials on reading and writing tabular data, selecting a subset of a DataFrame, creating new columns from existing ones, calculating summary statistics, combining tables, and handling time series data.' },
            ],
        },
        {
            id: 'l2', label: 'Core', title: 'Git, reproducibility, and SQL basics', hours: 4,
            outcomes: ['Create a repository, make small commits, and write a README.', 'Set up an isolated environment and list your dependencies.', 'Translate a simple pandas selection and aggregation into an equivalent SQL query.'],
            resources: [
                { key: 'pytut', section: 'Section 12 "Virtual Environments and Packages".' },
                { key: 'pandasSql', section: 'The "comparison with SQL" page in the pandas documentation. This page was not opened in our checks, so confirm it covers selection and grouping before you rely on it.', alt: true },
            ],
            note: 'We did not find a free Git tutorial that we could check. Use your own repository from day one: initialise it, commit after each working step, and push to a free account. The point is the habit, not a particular tutorial.',
        },
        {
            id: 'l3', label: 'Core', title: 'Honest evaluation: leakage, overfitting, and chronological splits', hours: 6,
            outcomes: ['Explain look-ahead leakage and give an example.', 'Split time-ordered data chronologically and evaluate with a rolling origin.', 'Say why trying many ideas inflates the chance of a lucky result, and adjust for it.'],
            resources: [
                { key: 'fpp3', section: 'Chapter 5, sections 5.8 "Evaluating point forecast accuracy" and 5.10 "Time series cross-validation". The examples are in R, so port the ideas to pandas and NumPy.' },
                { key: 'islp', section: 'The chapters on resampling methods and multiple testing, with their Python labs.', alt: true },
            ],
            note: 'Forecast accuracy is not trading profitability. A forecast can be statistically better than a baseline and still lose money after costs, or can be worse and still make money through sizing and execution. FPP3 itself notes that for stock prices the naive method is often hard to beat, which is a useful warning.',
            worked: {
                title: 'Many tests, one lucky result',
                prompt: 'You test 20 unrelated ideas, each at the 5% significance level. What is the chance at least one looks significant by luck? What threshold would a Bonferroni correction use? And a signal has correlation 0.10 with next-day returns over 250 days: is that significant?',
                steps: ['The chance none looks significant is 0.95^20 = 0.3585, so the chance at least one does is 1 − 0.3585 = 0.6415.', 'Bonferroni threshold = 0.05 / 20 = 0.0025.', 'The t statistic for a correlation r over n observations is r √(n − 2) / √(1 − r²) = 0.10 × √248 / √0.99 = 1.58.', 'The usual two-sided 5% cutoff is about 1.97, so 1.58 is not significant.'],
                answer: '64.15%; 0.0025; t = 1.58, not significant',
            },
        },
        {
            id: 'l4', label: 'Core', title: 'Metrics: returns, volatility, Sharpe uncertainty, drawdown, and payoffs', hours: 4,
            outcomes: ['Compute annualised volatility, maximum drawdown, and a Sharpe ratio from a return series.', 'Say how uncertain a Sharpe ratio is after a short sample.', 'Explain why hit rate alone says nothing about profitability.'],
            resources: [],
            note: 'No outside source is cited here because none was checked for this lesson. The worked example is self-contained. Use the same calculations in your capstone report.',
            worked: {
                title: 'Volatility, Sharpe error, and hit rate',
                prompt: 'Daily returns have a standard deviation of 1.2%. What is the annualised volatility? A strategy has an annualised Sharpe ratio of 2.0 measured over 60 trading days: how uncertain is that estimate? And a strategy wins 70% of trades for +1 and loses 30% of trades for −3: is it profitable?',
                steps: ['Annualised volatility = 0.012 × √252 = 0.1905, about 19%.', 'A common approximation for independent returns is that the standard error of an annualised Sharpe ratio is √((1 + SR² / 2) / T) with T in years. Here T = 60 / 252 = 0.238 and SR = 2, so the standard error is √(3 / 0.238) = 3.55.', 'A Sharpe of 2 with a standard error of 3.5 is statistically indistinguishable from zero or from 5.', 'Expected value per trade = 0.7 × 1 − 0.3 × 3 = −0.2. A 70% win rate loses money because the losses are three times bigger.'],
                answer: '19%; standard error about 3.5; −0.2 per trade',
            },
        },
        {
            id: 'l5', label: 'Core', title: 'Capstone: the Market-Making Simulator', hours: 22,
            outcomes: ['Build a synthetic market with informed and uninformed traders.', 'Compare a fixed-spread baseline with an inventory-aware strategy.', 'Evaluate with seeds, held-out scenarios, stress tests, and uncertainty, and write it up.'],
            resources: [
                { key: 'dqMonteCarlo', section: 'The DevilQuant Monte Carlo simulator guide, for structuring a seeded simulation.' },
            ],
            note: 'The full brief is below this lesson list. It is the required project for this stage.',
        },
        {
            id: 'l6', label: 'Desk-specific', desk: 'sys', title: 'Systematic extension: honest backtest of a simple signal', hours: 8,
            outcomes: ['Build a signal from synthetic or public data with a chronological train and test split.', 'Report results net of a stated cost assumption, with uncertainty.'],
            resources: [
                { key: 'fpp3', section: 'Chapter 5, sections 5.8 and 5.10, applied to a forecasting question of your own.' },
                { key: 'islp', section: 'The chapters on resampling methods and multiple testing.', alt: true },
            ],
            note: 'Use synthetic data you generate yourself (for example a return series with a known weak predictor) so you know the true answer and can check whether your method finds it.',
        },
        {
            id: 'l7', label: 'Desk-specific', desk: 'mm', title: 'Options extension: hedging a simulated option book', hours: 7,
            outcomes: ['Add an option position to the capstone market and delta-hedge it at each step.', 'Report hedging error and the cost of rebalancing.'],
            resources: [
                { key: 'oic', section: 'The Delta and Gamma pages.' },
                { key: 'dqOptions', section: 'The DevilQuant options pricing engine guide.', alt: true },
            ],
        },
        {
            id: 'l8', label: 'Optional', title: 'Machine learning for prediction, and a finance-focused Python book', hours: 6,
            outcomes: ['Fit a regression or tree model with a chronological split and compare it to a naive baseline.'],
            resources: [
                { key: 'islp', section: 'The regression, classification, and tree-based methods chapters with their Python labs.' },
                { key: 'pyFinance', section: 'Optional and paid. The club passed this book along as recommended by a firm, but we could not verify that, and a newer edition may exist.', alt: true },
            ],
        },
        {
            id: 'l9', label: 'Optional', title: 'Project: paper-trade a strategy matched to your target firm', hours: 10,
            outcomes: ['Pick a strategy style that matches the kind of firm you want, and explain the match.', 'Run it with simulated money, a written plan, risk limits, and a trade log.', 'Report the results with uncertainty and compare them with your plan.'],
            resources: [
                { key: 'acRoadmapVideo', section: 'The trader section from 10:18. The project idea comes near the end of it, around 13:16.' },
                { key: 'fpp3', section: 'Chapter 5, sections 5.8 and 5.10, for evaluating the strategy honestly.', alt: true },
            ],
            note: 'Paper trading only: a broker\'s practice account or your own simulator, never real money. If you want an options or market-making firm, extend your capstone, using real quote data if you can get it. If you want a statistical arbitrage firm, test a pairs or mean-reversion idea on public daily data with a chronological split, rules written before you start, and costs included. Write the plan before the first simulated trade, and log every trade with the reason for it.',
        },
    ],
    capstone: {
        title: 'Market-Making Simulator',
        summary: 'Build a synthetic market, a market-making agent, and an honest evaluation. The aim is not to find a profitable strategy. It is to show that you can reason about risk and test your own claims. A strategy that loses money, analysed well, is a good result.',
        time: [
            { part: 'Build the simulator and accounting', hours: 6 },
            { part: 'Baseline strategy and tests', hours: 4 },
            { part: 'Inventory-aware strategy and tuning on development seeds', hours: 4 },
            { part: 'Stress scenarios and the held-out evaluation', hours: 4 },
            { part: 'Report and README', hours: 4 },
        ],
        market: [
            'Hidden fair value: a random walk starting at 100 with a normal step of standard deviation 0.05 per step, over 2,000 steps per run.',
            'One taker arrives each step and trades one unit if the price suits them. Each taker is informed with probability π (default 0.2) or uninformed.',
            'An uninformed taker values the asset at the public reference price plus noise with standard deviation 0.10. They buy if that value is above your ask and sell if it is below your bid. Otherwise there is no trade.',
            'An informed taker knows the next fair value. They buy if it is above your ask and sell if it is below your bid. They never trade at a loss.',
            'Your agent never sees the fair value of the current step. It sees only a public reference price, which is the previous step\'s fair value, plus its own inventory, cash, and the step number. That one-step lag is what creates adverse selection.',
            'The agent posts a bid and an ask. A taker who buys pays the ask. A taker who sells receives the bid. Every fill pays a fee (default 0.005 per unit).',
            'Mark equity to the true fair value for evaluation only: equity = cash + inventory × fair value. The agent must not see this.',
            'Risk limits are part of the agent: a maximum absolute inventory (default 20 units, after which it quotes only the side that reduces inventory) and a drawdown stop (default: halt quoting if equity falls 50 below its running peak).',
        ],
        strategies: [
            'Baseline: quote the reference price minus and plus a fixed half-spread h.',
            'Inventory-aware: shift both quotes down when inventory is long and up when short, by k × inventory, and optionally widen the half-spread as inventory approaches the limit.',
            'Use your Stage 4 break-even formula as a lower bound for h, then tune h and k using development seeds only. A very wide spread earns more per fill but fills rarely, so expect a best spread somewhere in the middle.',
        ],
        scenarios: [
            'Development seeds 0 to 19: use these freely while building and tuning.',
            'Evaluation seeds 1000 to 1099: do not run these until your parameters are frozen and written in the README. Run them once and report the result whatever it is.',
            'Stress scenarios, each run on evaluation seeds: volatility times 3, informed share 0.6, fees times 4, and a one-sided jump where the fair value drops by 5 halfway through.',
        ],
        reproducibility: [
            'The same seed and parameters must give identical results. Add a test that runs a seed twice and compares the final equity.',
            'Report mean, standard deviation, and a 95% confidence interval of final equity across the evaluation seeds, for each strategy and each scenario.',
            'Also report the worst drawdown and the largest absolute inventory reached.',
        ],
        leakage: [
            'A test that perturbs the current and future fair value and confirms that the quotes do not change.',
            'A check in the code that the evaluation seeds are not used by any tuning function.',
            'A short note in the README listing every piece of information the agent sees at each step.',
        ],
        deliverables: [
            'A repository with the simulator, both strategies, tests, and a script that regenerates every figure and table.',
            'A README with how to run it, your design choices, your frozen parameters, your tuning log, and known limitations.',
            'A report of one to two pages with a P&L distribution plot, one inventory path, a drawdown figure, a table comparing the two strategies under every scenario, and a written explanation.',
        ],
        acceptance: [
            'Accounting: after every step, cash plus inventory times fair value equals your independently tracked equity.',
            'Determinism: the same seed gives the same final equity.',
            'Limits: inventory never exceeds the maximum and the drawdown stop halts quoting when it should.',
            'Leakage: the perturbation test passes.',
            'Split: tuning code never touches evaluation seeds.',
        ],
        grading: [
            { name: 'Correctness', weight: 25, text: 'The simulator and accounting are right, the tests pass, and results reproduce from a clean checkout.' },
            { name: 'Reasoning', weight: 25, text: 'You explain why each strategy behaves as it does, including how adverse selection and inventory affect it, and you say what surprised you.' },
            { name: 'Risk', weight: 25, text: 'Limits work, stress scenarios are run and interpreted, and you say honestly where the strategy breaks.' },
            { name: 'Experimental design', weight: 25, text: 'Development and evaluation seeds are separate, results carry uncertainty, parameters are frozen before evaluation, and leakage checks exist.' },
        ],
        gradingNote: 'Profit and loss alone is not graded. A strategy that loses money in evaluation, with a clear explanation, can score higher than a profitable one with no analysis.',
        extensions: [
            'Systematic: add a noisy signal about the next price move and evaluate it with a chronological split and costs.',
            'Options: add an option position on the fair value and delta-hedge it each step.',
        ],
    },
    deliverable: {
        title: 'The Market-Making Simulator',
        text: 'The capstone repository, README, and report described in the brief. This is the main deliverable for the path.',
        doneWhen: ['Every acceptance test in the brief passes.', 'The README lists frozen parameters, the tuning log, and known limitations.', 'The report compares both strategies on all scenarios with uncertainty.', 'Someone who has not seen your code can clone it and reproduce the figures.'],
    },
    checkpoint: {
        intro: 'Tick each item only when you have met it.',
        items: [
            { id: 'c1', text: 'Your capstone meets every acceptance item in the brief.' },
            { id: 'c2', text: 'You can explain, without notes, how your development and evaluation seeds were kept apart and what you would do if the evaluation result disappointed you.' },
            { id: 'c3', text: 'You can compute a t statistic for a correlation, a Bonferroni threshold, and an annualised volatility by hand.' },
            { id: 'c4', text: 'A peer has cloned your repository and reproduced one figure from the README alone.' },
        ],
        target: 'These targets are our own benchmarks. They are not employer score cutoffs.',
    },
    mistakes: [
        { mistake: 'Tuning on the evaluation seeds "just to check".', fix: 'Freeze parameters in the README before touching the evaluation seeds, and run them once.' },
        { mistake: 'Letting the agent see the current fair value.', fix: 'Pass only the public reference price and your own state into the quote function, and keep the perturbation test.' },
        { mistake: 'Reporting a single run.', fix: 'Report a mean, spread, and confidence interval across many seeds for every number.' },
        { mistake: 'Hiding a losing result.', fix: 'Report it, and explain it. A clear analysis of why a quote loses is the point.' },
        { mistake: 'Treating a better forecast as a profitable strategy.', fix: 'Test the strategy, with costs and risk limits, not only the forecast error.' },
    ],
    skip: 'If you already have a tested, reproducible simulation project of your own that meets the acceptance items, you can use it in place of the capstone. Show a peer or mentor the checkpoint results first.',
    next: 'Create the repository, write the market step function, and add the accounting test before you write any strategy.',
};

export default stage;
