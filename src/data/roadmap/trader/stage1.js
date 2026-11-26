const stage = {
    id: 's1',
    title: 'Numerical reasoning and math foundations',
    type: 'Foundation',
    description: 'Build the fast, accurate number sense that every later stage depends on, and fill any gaps in the school math that trading uses.',
    purpose: 'Trading decisions are made with numbers you often have to produce in your head. This stage makes percentages, basis points, averages, and estimates automatic, and gets you writing small Python functions for the same calculations.',
    prerequisites: ['Comfort with high-school algebra. If that feels shaky, work through Khan Academy Algebra 1 first.', 'No finance or programming experience is required, though the diagnostic will tell you if you need the Python refresher.'],
    alongside: 'Start ten minutes of mental arithmetic on most days now and keep it going through the whole path.',
    lessons: [
        {
            id: 'l1', label: 'Core', title: 'Fast, accurate mental arithmetic', hours: 3,
            outcomes: ['Do two-digit and three-digit arithmetic in your head by splitting numbers.', 'Keep a practice log and watch your score trend over several sessions.'],
            resources: [
                { key: 'zetamac', section: 'Use the default settings for 120 seconds, then record the score. Keep the settings fixed so sessions are comparable.' },
            ],
            worked: {
                title: 'Splitting a multiplication',
                prompt: 'Compute 48 × 312 in your head.',
                steps: ['Split the larger number: 312 = 300 + 12.', '48 × 300 = 14,400.', '48 × 12 = 576.', 'Add: 14,400 + 576 = 14,976.'],
                answer: '14,976',
            },
        },
        {
            id: 'l2', label: 'Core', title: 'Percentages, basis points, and compounding', hours: 3,
            outcomes: ['Convert between percent, basis points (1 bp = 0.01%), and decimals without hesitation.', 'Explain why a 20% loss needs a 25% gain to recover.', 'Compound a repeated percentage change.'],
            resources: [
                { key: 'khan', section: 'Algebra 1 and Algebra 2 (percent and exponential growth topics) if you need a refresher.' },
                { key: 'openintro', section: 'Chapter 2, supplemental topic "Weighted mean: how and when to use weighting".', alt: true },
            ],
            worked: {
                title: 'Percentages and compounding',
                prompt: 'A price falls 20%. What gain restores it? Then: a stock rises 10%, falls 10%, rises 10%. What is the net change? And what does 2% a month compound to over 12 months? Finally, a rate moves from 4.25% to 4.75%: how many basis points, and what is that as a relative change?',
                steps: ['Fall of 20% leaves 0.8. To get back to 1 you need 1 / 0.8 = 1.25, a 25% gain.', '1.10 × 0.90 × 1.10 = 1.089, so the net change is +8.9%.', '1.02^12 = 1.2682, so 2% a month is about 26.8% over a year, more than 24%.', '4.75% − 4.25% = 0.50 percentage points = 50 basis points. Relative change: 0.50 / 4.25 = 11.8%.'],
                answer: '+25% to recover; +8.9% net; about 26.8% a year; 50 bp, an 11.8% relative increase',
            },
        },
        {
            id: 'l3', label: 'Core', title: 'Estimation and sanity checks', hours: 2,
            outcomes: ['Produce an answer to within about 10% in under a minute.', 'Spot an answer that is off by a factor of ten before you say it.'],
            resources: [
                { key: 'openintro', section: 'Chapter 2, section 2.1 "Examining numerical data", for reading summaries of numbers.' },
            ],
            note: 'There is no single free page that teaches estimation well, so this lesson is practice-based. Make up one estimation question a day, such as how many orders a busy exchange might handle in a second, write your reasoning, and then look the real figure up.',
            worked: {
                title: 'Rounding to estimate',
                prompt: 'Estimate 7.3% of 2,418.',
                steps: ['Round 2,418 to 2,400.', '7% of 2,400 = 168.', '0.3% of 2,400 = 7.2.', '168 + 7.2 ≈ 175. The exact value is 176.5.'],
                answer: 'About 175 (exact 176.5)',
            },
        },
        {
            id: 'l4', label: 'Core', title: 'Weighted averages and P&L arithmetic', hours: 3,
            outcomes: ['Compute a weighted average and an average fill price.', 'Compute profit and loss for a long or short position including fees.'],
            resources: [
                { key: 'openintro', section: 'Chapter 2, supplemental topic "Weighted mean: how and when to use weighting".' },
            ],
            worked: {
                title: 'Average fill and a short trade',
                prompt: 'You buy 200 shares at 50.10 and 300 shares at 50.30. What is your average price? Separately, you short 50 shares at 40.00 and buy them back at 38.50, paying a fee of 0.01 per share on each of the two trades. What is the profit?',
                steps: ['Cost: 200 × 50.10 = 10,020 and 300 × 50.30 = 15,090, total 25,110.', 'Average: 25,110 / 500 = 50.22.', 'Gross profit on the short: (40.00 − 38.50) × 50 = 75.00.', 'Fees: 0.01 × 50 × 2 = 1.00.', 'Net profit: 75.00 − 1.00 = 74.00.'],
                answer: 'Average fill 50.22; short profit 74.00',
            },
        },
        {
            id: 'l5', label: 'Core', title: 'Math bridges: functions, logarithms, derivatives, integrals, vectors, covariance', hours: 5,
            outcomes: ['Use a logarithm to turn a growth rate into an additive quantity.', 'Read a derivative as a rate of change and an integral as an accumulated total.', 'Treat a vector as a list of numbers with a dot product, and covariance as how two quantities move together.'],
            resources: [
                { key: 'khan', section: 'Algebra 2 (Logarithms unit), Precalculus (Vectors and Matrices), Differential Calculus, Integral Calculus, and Statistics and probability.' },
                { key: 'mit1806', section: 'Optional, for linear algebra beyond the basics. This link comes from the club\'s existing guide and has not been re-checked.', alt: true },
            ],
            note: 'You are aiming for working fluency, not proofs. A pass here means you can use each idea in a small calculation, not that you have a full calculus course behind you.',
            worked: {
                title: 'Why logs help with returns',
                prompt: 'A price rises 10%. What is the log return? Why do analysts add log returns across days?',
                steps: ['The log return is ln(1.10) = 0.0953, or about 9.53%.', 'For small moves the log return is close to the simple return. ln(1.05) is 0.0488 against a simple return of 5%.', 'Growth multiplies (1.10 × 1.05) but logarithms turn products into sums: ln(1.10 × 1.05) = ln(1.10) + ln(1.05).'],
                answer: 'ln(1.10) = 0.0953; log returns add across days',
            },
        },
        {
            id: 'l6', label: 'Core', title: 'Python functions for numerical work', hours: 6,
            outcomes: ['Write small, tested Python functions for the calculations in this stage.', 'Read an error message and fix the bug it points to.'],
            resources: [
                { key: 'cs50p', section: 'Weeks 0 to 3 (Functions and Variables, Conditionals, Loops, Exceptions) and week 5 (Unit Tests).' },
                { key: 'pytut', section: 'Section 3.1 "Using Python as a Calculator" and section 4.8 "Defining Functions". Written for people who already program, so pair it with CS50P if you are new.', alt: true },
            ],
        },
    ],
    practice: [
        {
            id: 'p1', title: 'Down then up',
            q: 'A stock falls 20% one day and rises 20% the next. What is the net change, and why is it not zero?',
            hints: ['Write each move as a multiplier on the price.', 'The first multiplier is 0.8. What is the second?', 'Multiply the two multipliers and compare to 1.'],
            solution: '0.8 × 1.2 = 0.96, a net loss of 4%. The 20% gain is taken on a smaller base than the 20% loss was, so a percentage gain does not undo a percentage loss of the same size.',
        },
        {
            id: 'p2', title: 'A fee in basis points',
            q: 'A fund charges a fee of 35 basis points a year on $2,000,000. How much is the fee in dollars?',
            hints: ['One basis point is 0.01%, which is 0.0001 as a decimal.', 'Convert 35 basis points to a decimal.'],
            solution: '35 bp = 0.0035. 0.0035 × 2,000,000 = $7,000.',
        },
        {
            id: 'p3', title: 'Average fill',
            q: 'You buy 200 shares at 50.10 and 300 at 50.30. Without a calculator, find the average price. Then say whether it is closer to 50.10 or 50.30 and why.',
            hints: ['Do not average 50.10 and 50.30. The two fills are different sizes.', 'Weight each price by its share count.', 'Work with the differences from 50.10 to keep the numbers small.'],
            solution: 'Weighted average = (200 × 50.10 + 300 × 50.30) / 500 = 50.22. It is closer to 50.30 because more shares were bought there. Shortcut: 50.10 + 0.20 × (300 / 500) = 50.10 + 0.12 = 50.22.',
        },
    ],
    deliverable: {
        title: 'Practice log and a tested function module',
        text: 'A practice log with at least ten dated mental-arithmetic sessions, and a small Python file with at least six functions (for example percent change, basis points to decimal, weighted average, compounding, average fill price, and short-sale profit) with tests that pass.',
        doneWhen: ['The practice log shows at least ten sessions with your score each time.', 'The Python module has at least six functions, each with at least one test.', 'All tests pass when you run them from a clean start.'],
    },
    checkpoint: {
        intro: 'Do this without notes. Tick each item only when you have met it.',
        items: [
            { id: 'c1', text: 'Zetamac default settings, 120 seconds: a score of at least 35 on your best of three tries.' },
            { id: 'c2', text: 'Ten mixed percentage, basis-point, and averaging problems in 15 minutes without a calculator: at least 8 correct.' },
            { id: 'c3', text: 'Your function module passes its own tests and each function has a one-line docstring.' },
            { id: 'c4', text: 'You can explain out loud why +25% restores a 20% loss.' },
        ],
        target: 'These targets are our own benchmarks. They are not employer score cutoffs.',
    },
    mistakes: [
        { mistake: 'Averaging two prices without weighting by size.', fix: 'Always ask how many were traded at each price, then weight.' },
        { mistake: 'Mixing up percent, percentage points, and basis points.', fix: 'Say the unit aloud every time. Write 0.50 points = 50 bp, then compute any relative change separately.' },
        { mistake: 'Skipping the log or calculus bridges because they feel abstract.', fix: 'Do one tiny calculation per idea (ln(1.10), the slope of x squared at 3). Fluency, not proof, is the goal.' },
        { mistake: 'Practising mental arithmetic in long, rare sessions.', fix: 'Ten minutes on most days beats one long session a week. Keep the same settings so your log is comparable.' },
    ],
    skip: 'If you can meet every item in the checkpoint cold, skip the lessons and go straight to Stage 2. Keep up the daily arithmetic either way.',
    next: 'Open the Zetamac page, run your first 120-second session, and write the score in your log. Then start with whichever lesson below feels least familiar.',
};

export default stage;
