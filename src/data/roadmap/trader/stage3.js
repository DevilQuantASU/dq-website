const stage = {
    id: 's3',
    title: 'Decisions under uncertainty and risk',
    type: 'Core',
    description: 'Turn probabilities into decisions: when to take a bet, how big to make it, how wrong your estimate might be, and when to stop.',
    purpose: 'Knowing the odds is not the same as knowing what to do. This stage covers risk, diversification, position sizing, and calibration, and ends with a simulated experiment where you test a sizing rule against a limit you set in advance.',
    prerequisites: ['Stage 2 or the equivalent: expected value, variance, standard error, and seeded simulation in Python.'],
    alongside: 'Start a decision journal now and keep it for the rest of the path. Write the decision, your probability estimate, and what you would do if you were wrong.',
    lessons: [
        {
            id: 'l1', label: 'Core', title: 'Decision frameworks: expected value, risk of ruin, and when EV is not enough', hours: 5,
            outcomes: ['Decide whether to take a bet using expected value, and say when expected value alone is not enough.', 'Explain risk of ruin with a small example.'],
            resources: [
                { key: 'openintro', section: 'Chapter 3, the video "Would you take this bet? Thinking through probability and risk".' },
            ],
            note: 'A positive expected value bet can still be a bad idea if the downside would end the game for you. The practice problems below make this concrete.',
        },
        {
            id: 'l2', label: 'Core', title: 'Variance, diversification, and drawdown', hours: 5,
            outcomes: ['Compute the standard deviation of a two-asset mix from variances and a correlation.', 'Compute maximum drawdown from a path of values.'],
            resources: [
                { key: 'openintro', section: 'Chapter 2, section 2.1 "Examining numerical data", for standard deviation.' },
                { key: 'stat110', section: 'Random variables and distributions unit, the sections on covariance and correlation.', alt: true },
            ],
            worked: {
                title: 'Diversification and drawdown',
                prompt: 'Two assets each have a standard deviation of 10. They have correlation 0.5. What is the standard deviation of a 50/50 mix? Separately, an account moves through 100, 110, 105, 90, 95, 120. What is the maximum drawdown?',
                steps: ['Variance of the mix = 0.25 × 100 + 0.25 × 100 + 2 × 0.25 × 0.5 × 100 = 25 + 25 + 25 = 75.', 'Standard deviation = √75 = 8.66, lower than 10 because the assets are not perfectly correlated.', 'Track the running peak: 100, 110, 110, 110, 110, 120.', 'The largest fall from a peak is 110 to 90, which is 20 / 110 = 18.18%.'],
                answer: '8.66; maximum drawdown 18.18%',
            },
        },
        {
            id: 'l3', label: 'Core', title: 'Position sizing and the Kelly criterion, with caveats', hours: 5,
            outcomes: ['Derive and use the Kelly fraction for a simple repeated bet.', 'Explain three reasons practitioners bet less than full Kelly.'],
            resources: [],
            note: 'We are not citing an outside source here because none was checked. The derivation below is self-contained. Work through it on paper.',
            worked: {
                title: 'Kelly for an even-money bet',
                prompt: 'You can repeatedly bet a fraction f of your wealth on an even-money bet that wins with probability p = 0.6. The long-run growth rate per bet is g(f) = p ln(1 + f) + (1 − p) ln(1 − f). Find the best f, then compare 0.2, 0.4, and 0.1, and see what happens if the true win probability is only 0.52.',
                steps: ['Set the derivative to zero: p / (1 + f) = (1 − p) / (1 − f). That gives f* = 2p − 1 = 0.2.', 'g(0.2) = 0.6 ln(1.2) + 0.4 ln(0.8) = 0.02014 per bet.', 'g(0.4) = 0.6 ln(1.4) + 0.4 ln(0.6) = −0.00245. Betting double Kelly gives negative growth.', 'g(0.1) = 0.01504, about 75% of the best growth rate with far less risk.', 'If the true p is 0.52 and you bet f = 0.2, then g = 0.52 ln(1.2) + 0.48 ln(0.8) = −0.01230. An overestimated edge turns a good bet into a losing one.'],
                answer: 'f* = 0.2; g = 0.02014; double Kelly loses; half Kelly keeps about 75% of the growth; a wrong edge can flip the sign',
            },
        },
        {
            id: 'l4', label: 'Core', title: 'Calibration, confidence intervals, and estimation error', hours: 5,
            outcomes: ['Build and read a 95% confidence interval for a proportion.', 'Score probability forecasts with the Brier score.', 'Explain why estimated edges are noisy.'],
            resources: [
                { key: 'openintro', section: 'Chapter 5, section 5.1 "Point estimates and sampling variability" and section 5.2 "Confidence intervals".' },
            ],
            worked: {
                title: 'Interval and calibration',
                prompt: 'A strategy wins 56% of 200 trades. Give a 95% confidence interval for its true win rate. Separately, three forecasts said 0.8, 0.6, and 0.3 for events that turned out 1, 0, and 0. What is the Brier score?',
                steps: ['Standard error = √(0.56 × 0.44 / 200) = 0.0351.', 'Interval: 0.56 ± 1.96 × 0.0351 = (0.491, 0.629).', 'The interval includes 0.50, so 56% on 200 trades does not rule out a coin flip.', 'Brier = ((0.8 − 1)² + (0.6 − 0)² + (0.3 − 0)²) / 3 = (0.04 + 0.36 + 0.09) / 3 = 0.1633. Lower is better, and always forecasting 0.5 scores 0.25.'],
                answer: '(0.491, 0.629); 0.1633',
            },
        },
        {
            id: 'l5', label: 'Core', title: 'Decision journal and a simulated risk experiment', hours: 4,
            outcomes: ['Write a decision journal entry that separates the decision from the outcome.', 'Run a seeded simulation that compares sizing rules against a pre-set drawdown limit.'],
            resources: [
                { key: 'numpy', section: 'Section "Generating random numbers" for a seeded generator.' },
                { key: 'dqMonteCarlo', section: 'The DevilQuant Monte Carlo simulator guide.', alt: true },
            ],
        },
    ],
    practice: [
        {
            id: 'p1', title: 'Which fraction to bet',
            q: 'An even-money bet wins with probability 0.6. What fraction of your wealth maximises long-run growth? Compute the growth rate per bet at that fraction and at double that fraction.',
            hints: ['Write the growth rate g(f) = p ln(1 + f) + (1 − p) ln(1 − f).', 'Differentiate and set to zero.', 'Plug in f = 0.2 and f = 0.4 and compare.'],
            solution: 'f* = 2 × 0.6 − 1 = 0.2. g(0.2) = 0.02014 per bet. g(0.4) = −0.00245. Betting twice the optimal fraction has negative long-run growth despite a positive edge.',
        },
        {
            id: 'p2', title: 'Is this strategy better than a coin?',
            q: 'A strategy wins 130 of 200 trades. Build a 95% confidence interval for its win rate and say whether you can rule out a 50% win rate. How many trades would you need to make the interval half as wide?',
            hints: ['The sample proportion is 130 / 200.', 'Standard error = √(p(1 − p) / n).', 'Compare 0.5 with the interval. For the last part, ask how the standard error changes when n is multiplied by 4.'],
            solution: 'p = 0.65 and the standard error is 0.0337. The interval is about (0.584, 0.716), which excludes 0.50, so a coin flip is ruled out at the 95% level (compare the 56% on 200 trades example, whose interval included 0.50). The standard error shrinks with the square root of n, so you need about four times as many trades, around 800, to halve the width.',
        },
        {
            id: 'p3', title: 'Drawdown from a path',
            q: 'An account moves through 100, 110, 105, 90, 95, 120. Find the maximum drawdown and the date range over which it occurred. Then say what drawdown limit you would have chosen in advance and whether the path breaches it.',
            hints: ['Track the highest value seen so far.', 'At each point compute the fall from that running high as a percentage of the high.', 'Take the largest.'],
            solution: 'The running high is 110 when the value hits 90, so the drawdown is 20 / 110 = 18.18%. Any limit tighter than 18% would have been breached. The point is that the limit is set before the path is seen.',
        },
    ],
    deliverable: {
        title: 'Decision journal and a simulated risk experiment',
        text: 'A decision journal with at least ten entries, and a notebook that simulates a repeated bet with a known edge, compares at least three sizing rules (including a fixed small fraction and Kelly), and reports how often each breaches a drawdown limit you set before running the simulation.',
        doneWhen: ['Ten dated journal entries, each stating the decision, your probability estimate, and what would change your mind.', 'The drawdown limit is written down before the simulation is run.', 'The notebook uses a fixed seed and reports the proportion of simulated paths that breach the limit for each rule.', 'It includes a version where the true edge is smaller than the estimated edge.'],
    },
    checkpoint: {
        intro: 'Tick each item only when you have met it.',
        items: [
            { id: 'c1', text: 'You can compute a Kelly fraction and a confidence interval for a win rate by hand, in under ten minutes each.' },
            { id: 'c2', text: 'Your decision journal has at least ten entries, and at least two say "my estimate was wrong, here is what I will change".' },
            { id: 'c3', text: 'Your risk experiment shows at least one rule that grows faster but breaches the drawdown limit more often, and you explain the tradeoff in a paragraph.' },
            { id: 'c4', text: 'You can explain out loud three reasons to bet less than full Kelly.' },
        ],
        target: 'These targets are our own benchmarks. They are not employer score cutoffs.',
    },
    mistakes: [
        { mistake: 'Judging a decision by its outcome alone.', fix: 'In the journal, write the reasoning before you see the result, and review reasoning and outcome separately.' },
        { mistake: 'Treating an estimated edge as known.', fix: 'Always attach an interval to the edge and rerun your sizing with the lower end.' },
        { mistake: 'Setting the risk limit after seeing the path.', fix: 'Write the limit in the notebook before running anything, and keep it fixed.' },
        { mistake: 'Confusing a higher expected value with a better bet.', fix: 'Ask what the worst realistic path looks like and whether you could survive it.' },
    ],
    skip: 'If you can meet every checkpoint item cold, skip to Stage 4. Keep the journal going either way.',
    next: 'Write your first journal entry about any real decision you made this week, then run the Kelly calculation for p = 0.6 on paper.',
};

export default stage;
