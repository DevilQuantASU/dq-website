const stage = {
    id: 's3',
    title: 'Decisions under uncertainty and risk',
    type: 'Core',
    description: 'Turn probabilities into decisions: when to take a bet, how much to put on it, how wrong your estimate could be, and when to walk away.',
    purpose: 'Knowing the odds doesn\'t tell you what to do with them. This stage covers risk, diversification, bet sizing, and calibration. You finish by running a simulation that tests a sizing rule against a loss limit you picked ahead of time.',
    prerequisites: ['Stage 2, or you already know expected value, variance, standard error, and how to run a seeded simulation in Python.'],
    alongside: 'Start a decision journal now and keep it going for the rest of the path. For each entry, write the decision, how likely you thought it was to work out, and what you\'d do if you were wrong.',
    lessons: [
        {
            id: 'l1', label: 'Core', title: 'Making decisions: expected value, risk of ruin, and when EV isn\'t enough', hours: 5,
            outcomes: ['Use expected value to decide whether to take a bet, and spot when expected value alone isn\'t enough.', 'Explain risk of ruin with a small example.'],
            resources: [
                { key: 'openintro', section: 'Chapter 3, the video "Would you take this bet? Thinking through probability and risk".' },
            ],
            note: 'A bet with positive expected value can still be a bad idea if losing it would knock you out of the game. The Kelly example in lesson 3 shows exactly how.',
        },
        {
            id: 'l2', label: 'Core', title: 'Variance, diversification, and drawdown', hours: 5,
            outcomes: ['Work out the standard deviation of a two-asset mix from their variances and correlation.', 'Find the maximum drawdown in a series of account values.'],
            resources: [
                { key: 'openintro', section: 'Chapter 2, section 2.1 "Examining numerical data", for standard deviation.' },
                { key: 'stat110', section: 'The Random variables and distributions unit, the parts on covariance and correlation.', alt: true },
            ],
            worked: {
                title: 'Diversification and drawdown',
                prompt: 'Two assets each have a standard deviation of 10, and their correlation is 0.5. What\'s the standard deviation of a 50/50 mix? Separately, an account goes 100, 110, 105, 90, 95, 120. What\'s the maximum drawdown?',
                steps: ['Variance of the mix = 0.25 × 100 + 0.25 × 100 + 2 × 0.25 × 0.5 × 100 = 25 + 25 + 25 = 75.', 'Standard deviation = √75 = 8.66. It\'s under 10 because the two assets don\'t move in perfect lockstep.', 'Keep track of the highest value so far: 100, 110, 110, 110, 110, 120.', 'The biggest drop from a high is 110 down to 90, which is 20 / 110 = 18.18%.'],
                answer: '8.66; maximum drawdown 18.18%',
            },
        },
        {
            id: 'l3', label: 'Core', title: 'Bet sizing and the Kelly criterion (and why people bet less)', hours: 5,
            outcomes: ['Derive the Kelly fraction for a simple repeated bet and use it.', 'Give three reasons real traders bet less than full Kelly.'],
            resources: [],
            note: 'There\'s no outside source here because we didn\'t find one we could check. The derivation below covers everything you need. Work through it on paper.',
            worked: {
                title: 'Kelly for an even-money bet',
                prompt: 'You can keep betting a fraction f of your money on an even-money bet that wins 60% of the time (p = 0.6). Your long-run growth per bet is g(f) = p ln(1 + f) + (1 − p) ln(1 − f). Find the best f, compare betting 0.2, 0.4, and 0.1, and see what happens if your real win rate is only 0.52.',
                steps: ['Set the derivative to zero: p / (1 + f) = (1 − p) / (1 − f). That gives f* = 2p − 1 = 0.2.', 'g(0.2) = 0.6 ln(1.2) + 0.4 ln(0.8) = 0.02014 per bet.', 'g(0.4) = 0.6 ln(1.4) + 0.4 ln(0.6) = −0.00245. Bet twice the Kelly amount and you shrink over time.', 'g(0.1) = 0.01504. Half Kelly keeps about 75% of the best growth with a lot less risk.', 'If your real win rate is 0.52 and you still bet 0.2, then g = 0.52 ln(1.2) + 0.48 ln(0.8) = −0.01230. Overestimate your edge and a good bet turns into a losing one.'],
                answer: 'f* = 0.2; g = 0.02014; double Kelly loses money; half Kelly keeps about 75% of the growth; misjudging your edge can flip you to losing',
            },
        },
        {
            id: 'l4', label: 'Core', title: 'Calibration, confidence intervals, and estimation error', hours: 5,
            outcomes: ['Build and read a 95% confidence interval for a win rate.', 'Score your probability forecasts with a Brier score.', 'Explain why your estimate of an edge is always noisy.'],
            resources: [
                { key: 'openintro', section: 'Chapter 5, section 5.1 "Point estimates and sampling variability" and section 5.2 "Confidence intervals".' },
            ],
            worked: {
                title: 'A confidence interval and a Brier score',
                prompt: 'A strategy wins 56% of 200 trades. What\'s a 95% confidence interval for its real win rate? Separately, you forecast 0.8, 0.6, and 0.3 for three events, and they turn out yes, no, no (1, 0, 0). What\'s your Brier score?',
                steps: ['Standard error = √(0.56 × 0.44 / 200) = 0.0351.', 'Interval: 0.56 ± 1.96 × 0.0351 = (0.491, 0.629).', 'That interval includes 0.50, so winning 56% of 200 trades doesn\'t prove you\'re better than a coin flip.', 'Brier = ((0.8 − 1)² + (0.6 − 0)² + (0.3 − 0)²) / 3 = (0.04 + 0.36 + 0.09) / 3 = 0.1633. Lower is better. Always guessing 0.5 would score 0.25.'],
                answer: '(0.491, 0.629); 0.1633',
            },
        },
        {
            id: 'l5', label: 'Core', title: 'Decision journal and a simulated risk experiment', hours: 4,
            outcomes: ['Write journal entries that judge the decision separately from how it turned out.', 'Run a seeded simulation that compares bet-sizing rules against a loss limit you set beforehand.'],
            resources: [
                { key: 'numpy', section: 'The "Generating random numbers" section, for a seeded generator.' },
                { key: 'dqMonteCarlo', section: 'The DevilQuant Monte Carlo simulator guide.', alt: true },
            ],
        },
    ],
    checkpoint: {
        intro: 'Only check a box once you\'ve actually done it.',
        items: [
            { id: 'c1', text: 'You can work out a Kelly fraction and a confidence interval for a win rate by hand, in under ten minutes each.' },
            { id: 'c2', text: 'Your journal has at least ten entries, and at least two of them say "I got this wrong, here\'s what I\'ll change."' },
            { id: 'c3', text: 'Your experiment shows at least one rule that grows faster but hits the drawdown limit more often, and you explain the tradeoff in a paragraph.' },
            { id: 'c4', text: 'You can give three reasons, out loud, to bet less than full Kelly.' },
        ],
    },
    mistakes: [
        { mistake: 'Judging a decision only by how it turned out.', fix: 'Write your reasoning in the journal before you see the result, then review the reasoning and the result separately.' },
        { mistake: 'Treating your estimated edge like a known fact.', fix: 'Always put a range on it, and redo your sizing using the low end.' },
        { mistake: 'Picking your loss limit after you\'ve seen the results.', fix: 'Write the limit down before you run anything, and don\'t change it.' },
        { mistake: 'Assuming a higher expected value means a better bet.', fix: 'Ask what a realistic worst case looks like, and whether you\'d survive it.' },
    ],
    skip: 'If you can pass the whole checkpoint cold, skip to Stage 4. Keep your journal going either way.',
    next: 'Write your first journal entry about a real decision you made this week, then work out the Kelly fraction for p = 0.6 on paper.',
};

export default stage;
