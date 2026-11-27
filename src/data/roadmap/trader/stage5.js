const stage = {
    id: 's5',
    title: 'Python, data analysis, and trading simulation',
    type: 'Applied',
    description: 'Get comfortable with Python\'s data tools, learn how to test ideas without fooling yourself, and build the Market-Making Simulator capstone.',
    purpose: 'This is where everything from the earlier stages turns into code. The habits matter more than any single model: fixed seeds, keeping your test data separate, putting error bars on every result, and writing a README someone else can actually follow.',
    prerequisites: ['Stages 1 to 4, or equivalent experience. That includes a tested Python file like the one from Stage 1, and a seeded simulation like the ones from Stages 2 and 3.', 'You don\'t need to know pandas or Git yet. Lessons 1 and 2 cover them.'],
    alongside: 'Keep your capstone repo tidy as you go: small commits, and a README you update every time you work on it.',
    lessons: [
        {
            id: 'l1', label: 'Core', title: 'Python for data: NumPy and pandas', hours: 8,
            outcomes: ['Create NumPy arrays, slice them, and do math on them, including broadcasting.', 'Load a CSV into a DataFrame, pick out rows and columns, add new columns, and summarize the data.', 'Work with data indexed by date and time.'],
            resources: [
                { key: 'numpy', section: 'The sections "Array fundamentals", "Basic array operations", "Broadcasting", "More useful array operations", and "Generating random numbers".' },
                { key: 'pandas', section: 'The tutorials on reading and writing tabular data, selecting a subset of a DataFrame, creating new columns from existing ones, calculating summary statistics, combining tables, and handling time series data.' },
            ],
        },
        {
            id: 'l2', label: 'Core', title: 'Git, reproducibility, and SQL basics', hours: 4,
            outcomes: ['Create a repo, make small commits, and write a README.', 'Set up a separate environment for your project and list its dependencies.', 'Rewrite a simple pandas filter and group-by as a SQL query.'],
            resources: [
                { key: 'pytut', section: 'Section 12, "Virtual Environments and Packages".' },
                { key: 'pandasSql', section: 'The "comparison with SQL" page in the pandas docs. We haven\'t opened this page ourselves, so make sure it covers filtering and grouping before you lean on it.', alt: true },
            ],
            note: 'We didn\'t find a free Git tutorial we could vouch for. Honestly, the best way to learn is to use it from day one: start a repo, commit every time something works, and push it to a free GitHub account. The habit matters more than which tutorial you use.',
        },
        {
            id: 'l3', label: 'Core', title: 'Testing ideas without fooling yourself: leakage, overfitting, and time-ordered splits', hours: 6,
            outcomes: ['Explain look-ahead leakage and give an example.', 'Split time series data by date, and test with a rolling window.', 'Explain why trying lots of ideas makes a lucky result more likely, and how to correct for it.'],
            resources: [
                { key: 'fpp3', section: 'Chapter 5, sections 5.8 "Evaluating point forecast accuracy" and 5.10 "Time series cross-validation". The examples are in R, so redo them in pandas and NumPy.' },
                { key: 'islp', section: 'The chapters on resampling methods and multiple testing, with their Python labs.', alt: true },
            ],
            note: 'A more accurate forecast doesn\'t automatically make money. A forecast can beat a simple baseline on paper and still lose after trading costs, or lose to the baseline and still make money because of how you size and execute trades. FPP3 even points out that for stock prices, the naive "tomorrow looks like today" forecast is often hard to beat. Keep that in mind.',
            worked: {
                title: 'Try enough ideas and one will look good',
                prompt: 'You test 20 unrelated ideas, each at the 5% significance level. What\'s the chance at least one looks significant just by luck? What cutoff would a Bonferroni correction use? And a signal has a 0.10 correlation with next-day returns over 250 days. Is that significant?',
                steps: ['The chance none of them look significant is 0.95^20 = 0.3585, so the chance at least one does is 1 − 0.3585 = 0.6415.', 'Bonferroni cutoff = 0.05 / 20 = 0.0025.', 'The t statistic for a correlation r over n observations is r √(n − 2) / √(1 − r²) = 0.10 × √248 / √0.99 = 1.58.', 'The usual two-sided 5% cutoff is about 1.97, so 1.58 isn\'t significant.'],
                answer: '64.15%; 0.0025; t = 1.58, not significant',
            },
        },
        {
            id: 'l4', label: 'Core', title: 'Metrics: returns, volatility, how shaky a Sharpe ratio is, drawdown, and payoffs', hours: 4,
            outcomes: ['Work out annualized volatility, maximum drawdown, and a Sharpe ratio from a series of returns.', 'Say how much to trust a Sharpe ratio from a short stretch of data.', 'Explain why win rate alone tells you nothing about whether a strategy makes money.'],
            resources: [],
            note: 'No outside source for this one, since we didn\'t find one we could check. The worked example has what you need. Use the same calculations in your capstone report.',
            worked: {
                title: 'Volatility, Sharpe error, and win rate',
                prompt: 'Daily returns have a standard deviation of 1.2%. What\'s the annualized volatility? A strategy shows an annualized Sharpe ratio of 2.0 over 60 trading days. How much should you trust that? And a strategy wins 70% of the time for +1 and loses 30% of the time for −3. Does it make money?',
                steps: ['Annualized volatility = 0.012 × √252 = 0.1905, so about 19%.', 'A common rule of thumb (assuming returns are independent) is that the standard error of an annualized Sharpe ratio is √((1 + SR² / 2) / T), with T in years. Here T = 60 / 252 = 0.238 and SR = 2, so the standard error is √(3 / 0.238) = 3.55.', 'With an error that big, a Sharpe of 2 could easily really be 0, or 5. You can\'t tell them apart.', 'Expected value per trade = 0.7 × 1 − 0.3 × 3 = −0.2. It wins 70% of the time and still loses money, because the losses are three times bigger than the wins.'],
                answer: '19%; standard error around 3.5; −0.2 per trade',
            },
        },
        {
            id: 'l5', label: 'Core', title: 'Capstone: the Market-Making Simulator', hours: 22,
            outcomes: ['Build a fake market with informed and uninformed traders.', 'Compare a fixed-spread strategy with one that adjusts for inventory.', 'Test it properly (seeds, held-out runs, stress tests, error bars) and write it up.'],
            resources: [
                { key: 'dqMonteCarlo', section: 'The DevilQuant Monte Carlo simulator guide, for how to set up a seeded simulation.' },
            ],
            note: 'The full brief is right below the lesson list. This is the main project for the stage.',
        },
        {
            id: 'l6', label: 'Desk-specific', desk: 'sys', title: 'Systematic extension: an honest backtest of a simple signal', hours: 8,
            outcomes: ['Build a signal from fake or public data, training on earlier dates and testing on later ones.', 'Report results after an assumed trading cost, with error bars.'],
            resources: [
                { key: 'fpp3', section: 'Chapter 5, sections 5.8 and 5.10, applied to a forecasting question you pick.' },
                { key: 'islp', section: 'The chapters on resampling methods and multiple testing.', alt: true },
            ],
            note: 'Generate your own fake data first (say, a return series with a weak predictor you planted), so you know the right answer and can see whether your method finds it.',
        },
        {
            id: 'l7', label: 'Desk-specific', desk: 'mm', title: 'Options extension: hedging a simulated option book', hours: 7,
            outcomes: ['Add an option position to your capstone market and delta-hedge it every step.', 'Report how far off the hedge was, and what rebalancing cost you.'],
            resources: [
                { key: 'oic', section: 'The Delta and Gamma pages.' },
                { key: 'dqOptions', section: 'The DevilQuant options pricing engine guide.', alt: true },
            ],
        },
        {
            id: 'l8', label: 'Optional', title: 'Machine learning for prediction, plus a finance-focused Python book', hours: 6,
            outcomes: ['Fit a regression or tree model, training on earlier dates and testing on later ones, and compare it to a simple baseline.'],
            resources: [
                { key: 'islp', section: 'The regression, classification, and tree-based methods chapters, with their Python labs.' },
                { key: 'pyFinance', section: 'Optional, and it costs money. It was passed around the club as a firm recommendation, but we couldn\'t confirm that, and there may be a newer edition.', alt: true },
            ],
        },
        {
            id: 'l9', label: 'Optional', title: 'Project: paper-trade a strategy that fits the firm you want', hours: 10,
            outcomes: ['Pick a strategy style that fits the kind of firm you want, and explain why it fits.', 'Run it with fake money, a written plan, risk limits, and a trade log.', 'Report how it did, with error bars, and compare that to your plan.'],
            resources: [
                { key: 'acRoadmapVideo', section: 'The trader section starting at 10:18. The project idea is near the end of it, around 13:16.' },
                { key: 'fpp3', section: 'Chapter 5, sections 5.8 and 5.10, for testing the strategy honestly.', alt: true },
            ],
            note: 'Paper trading only. Use a broker\'s practice account or your own simulator, never real money. If you\'re after an options or market-making firm, build on your capstone, with real quote data if you can get it. If you\'re after a stat arb firm, test a pairs or mean-reversion idea on free daily data, split by date, with your rules written down before you start and trading costs included. Write the plan before your first fake trade, and log every trade with why you made it.',
        },
    ],
    capstone: {
        title: 'Market-Making Simulator',
        summary: 'Build a fake market, a market-making bot, and a fair test of how it does. You\'re not trying to find a strategy that makes money. You\'re showing that you can think about risk and check your own claims. A strategy that loses money, with a good explanation of why, is a great result.',
        time: [
            { part: 'Build the simulator and the accounting', hours: 6 },
            { part: 'The simple strategy, plus tests', hours: 4 },
            { part: 'The inventory-aware strategy, tuned on development seeds', hours: 4 },
            { part: 'Stress tests and the final held-out run', hours: 4 },
            { part: 'Report and README', hours: 4 },
        ],
        market: [
            'The real price is hidden. It\'s a random walk that starts at 100 and moves by a normally distributed step (standard deviation 0.05) each turn, for 2,000 turns per run.',
            'Each turn, one trader shows up and trades one unit if they like your price. Each trader has a π chance (default 0.2) of being informed. Otherwise they\'re uninformed.',
            'An uninformed trader thinks the asset is worth the public reference price plus some noise (standard deviation 0.10). They buy if that\'s above your ask, sell if it\'s below your bid, and otherwise walk away.',
            'An informed trader knows next turn\'s real price. They buy if it\'s above your ask and sell if it\'s below your bid. They never take a losing trade.',
            'Your bot never sees this turn\'s real price. All it gets is a public reference price, which is last turn\'s real price, plus its own inventory, cash, and the turn number. That one-turn delay is where adverse selection comes from.',
            'Your bot posts a bid and an ask. A trader who buys pays your ask, and a trader who sells gets your bid. Every fill costs a fee (default 0.005 per unit).',
            'For scoring only, value everything at the real price: equity = cash + inventory × real price. Your bot can\'t see this number.',
            'Risk limits are part of the bot. There\'s a max inventory (default 20 units either way; once you hit it, only quote the side that brings you back down) and a drawdown stop (default: stop quoting if equity falls 50 below its high).',
        ],
        strategies: [
            'Simple: quote the reference price minus and plus a fixed half-spread h.',
            'Inventory-aware: when you\'re long, shift both quotes down by k × inventory, and when you\'re short, shift them up. You can also widen the spread as you get close to your inventory limit.',
            'Use your Stage 4 break-even formula as the minimum for h, then tune h and k on the development seeds only. Quote too wide and you barely trade; quote too tight and informed traders pick you off. The sweet spot is somewhere in between.',
        ],
        scenarios: [
            'Development seeds 0 to 19: use these as much as you want while you build and tune.',
            'Evaluation seeds 1000 to 1099: don\'t touch these until your parameters are locked in and written in the README. Then run them once and report whatever you get.',
            'Stress tests, each on the evaluation seeds: 3 times the volatility, 60% informed traders, 4 times the fees, and a sudden 5-point drop in the real price halfway through.',
        ],
        reproducibility: [
            'Same seed and same settings should give exactly the same results. Write a test that runs a seed twice and checks that the final equity matches.',
            'For each strategy and scenario, report the mean, standard deviation, and 95% confidence interval of final equity across the evaluation seeds.',
            'Also report the worst drawdown and the biggest inventory you hit.',
        ],
        leakage: [
            'A test that changes the current and future real prices and checks that your quotes don\'t change.',
            'A check in your code that no tuning function ever uses the evaluation seeds.',
            'A short note in the README listing everything the bot can see each turn.',
        ],
        deliverables: [
            'A repo with the simulator, both strategies, tests, and one script that rebuilds every chart and table.',
            'A README covering how to run it, the choices you made, your locked-in parameters, a log of your tuning, and what it can\'t do.',
            'A one- to two-page report with a P&L distribution chart, one inventory path, a drawdown chart, a table comparing both strategies in every scenario, and your explanation.',
        ],
        acceptance: [
            'Accounting: after every turn, cash plus inventory times the real price matches the equity you track separately.',
            'Repeatable: the same seed gives the same final equity.',
            'Limits: inventory never goes past the max, and the drawdown stop kicks in when it should.',
            'Leakage: the test that changes the real prices passes.',
            'Separation: your tuning code never touches the evaluation seeds.',
        ],
        grading: [
            { name: 'Correctness', weight: 25, text: 'The simulator and accounting are right, the tests pass, and someone can get the same results from a fresh copy of your repo.' },
            { name: 'Reasoning', weight: 25, text: 'You explain why each strategy behaves the way it does, including how adverse selection and inventory play in, and what surprised you.' },
            { name: 'Risk', weight: 25, text: 'Your limits work, you ran and made sense of the stress tests, and you\'re upfront about where the strategy falls apart.' },
            { name: 'Experimental design', weight: 25, text: 'Your development and evaluation seeds stay separate, your results have error bars, you locked parameters before the final run, and you have leakage checks.' },
        ],
        gradingNote: 'P&L alone isn\'t what\'s graded. A strategy that loses money in the final run but comes with a clear explanation can score higher than a profitable one with no analysis.',
        extensions: [
            'Systematic: add a noisy hint about the next price move, and test it with a date-based split and trading costs.',
            'Options: add an option on the real price and delta-hedge it every turn.',
        ],
    },
    deliverable: {
        title: 'The Market-Making Simulator',
        text: 'The capstone repo, README, and report from the brief. This is the main thing you\'ll build on the whole path.',
        doneWhen: ['Every acceptance test in the brief passes.', 'The README lists your locked-in parameters, your tuning log, and what the simulator can\'t do.', 'The report compares both strategies across every scenario, with error bars.', 'Someone who\'s never seen your code can clone it and rebuild your charts.'],
    },
    checkpoint: {
        intro: 'Only check a box once you\'ve actually done it.',
        items: [
            { id: 'c1', text: 'Your capstone passes every acceptance test in the brief.' },
            { id: 'c2', text: 'Without notes, you can explain how you kept your development and evaluation seeds apart, and what you\'d do if the final run disappointed you.' },
            { id: 'c3', text: 'You can work out a t statistic for a correlation, a Bonferroni cutoff, and an annualized volatility by hand.' },
            { id: 'c4', text: 'A friend cloned your repo and rebuilt one of your charts using only the README.' },
        ],
    },
    mistakes: [
        { mistake: 'Peeking at the evaluation seeds "just to check."', fix: 'Lock your parameters in the README before you touch the evaluation seeds, and only run them once.' },
        { mistake: 'Letting the bot see the current real price.', fix: 'Only pass the public reference price and the bot\'s own state into your quote function, and keep the leakage test.' },
        { mistake: 'Reporting one run.', fix: 'Every number you report should have a mean, a spread, and a confidence interval across many seeds.' },
        { mistake: 'Hiding a result that lost money.', fix: 'Show it and explain it. Figuring out why a quote loses is the whole point.' },
        { mistake: 'Assuming a better forecast means a profitable strategy.', fix: 'Test the actual strategy, with costs and risk limits, not just how accurate the forecast was.' },
    ],
    skip: 'If you\'ve already built your own tested simulation project that someone else can rerun and that passes the acceptance tests, you can use it instead of the capstone. Walk a friend or mentor through the checkpoint first.',
    next: 'Start the repo, write the function that moves the market forward one turn, and add the accounting test before you write any strategy.',
};

export default stage;
