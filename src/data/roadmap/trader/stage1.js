const stage = {
    id: 's1',
    title: 'Numerical reasoning and math foundations',
    type: 'Foundation',
    description: 'Get quick and accurate with numbers, and patch any holes in the school math that trading leans on.',
    purpose: 'A lot of trading math happens in your head, fast. By the end of this stage, percentages, basis points, averages, and quick estimates should feel automatic, and you\'ll have written a few small Python functions that do the same calculations.',
    prerequisites: ['High-school algebra. If it feels rusty, go through Khan Academy Algebra 1 first.', 'No finance or coding background needed. If you\'ve never written Python, do CS50P weeks 0 to 3 alongside this stage.'],
    alongside: 'Start doing about ten minutes of mental math most days, and keep it up for the rest of the path.',
    lessons: [
        {
            id: 'l1', label: 'Core', title: 'Fast, accurate mental arithmetic', hours: 3,
            outcomes: ['Do two- and three-digit arithmetic in your head by breaking numbers into easier pieces.', 'Keep a practice log and watch your score go up over a few weeks.'],
            resources: [
                { key: 'mathOgenius', section: 'Start with Mental Maths #1, #2 (addition and subtraction), #4 (multiplication), #5 (division), #14 (squaring any two-digit number), and #15 (percentage tricks). The rest, like memorizing pi, calendar tricks, and soroban, is fun but you don\'t need it for trading.' },
                { key: 'zetamac', section: 'Use the default settings for 120 seconds and write down your score. Keep the settings the same every time so your scores are comparable.' },
            ],
            lead: 'You don\'t need to be a genius to get fast at this. Mental math comes down to a handful of patterns: break numbers into friendly pieces, round and then fix the difference, and learn a few shortcuts, like squaring numbers that end in 5. The people who look like human calculators just practiced those patterns until they stopped thinking about them. Learn one trick from the playlist, drill it on Zetamac for a few days, then add another. Your score will go up, and your log will show it.',
            worked: {
                title: 'Breaking up a multiplication',
                prompt: 'Work out 48 × 312 in your head.',
                steps: ['Break the bigger number up: 312 = 300 + 12.', '48 × 300 = 14,400.', '48 × 12 = 576.', 'Add them: 14,400 + 576 = 14,976.'],
                answer: '14,976',
            },
        },
        {
            id: 'l2', label: 'Core', title: 'Percentages, basis points, and compounding', hours: 3,
            outcomes: ['Switch between percent, basis points (1 bp = 0.01%), and decimals without stopping to think.', 'Explain why you need a 25% gain to make up for a 20% loss.', 'Compound a percentage change that repeats.'],
            resources: [
                { key: 'khan', section: 'Algebra 1 and Algebra 2 (the percent and exponential growth topics) if you need a refresher.' },
                { key: 'openintro', section: 'Chapter 2, the extra topic "Weighted mean: how and when to use weighting".', alt: true },
                { key: 'mathOgenius', section: 'Mental Maths #15, "Percentage Tricks", for doing percentages in your head.', alt: true },
            ],
            worked: {
                title: 'Percentages and compounding',
                prompt: 'A price drops 20%. What gain gets it back? A stock goes up 10%, down 10%, then up 10%. What\'s the total change? What does 2% a month add up to over a year? And if a rate goes from 4.25% to 4.75%, how many basis points is that, and how big is the change in relative terms?',
                steps: ['A 20% drop leaves you at 0.8. Getting back to 1 takes 1 / 0.8 = 1.25, so a 25% gain.', '1.10 × 0.90 × 1.10 = 1.089, so you\'re up 8.9% overall.', '1.02^12 = 1.2682, so 2% a month is about 26.8% a year, not 24%.', '4.75% − 4.25% = 0.50 percentage points, which is 50 basis points. In relative terms that\'s 0.50 / 4.25 = 11.8%.'],
                answer: '+25% to get back; +8.9% overall; about 26.8% a year; 50 bp, an 11.8% relative increase',
            },
        },
        {
            id: 'l3', label: 'Core', title: 'Estimation and sanity checks', hours: 2,
            outcomes: ['Get within about 10% of the answer in under a minute.', 'Catch an answer that\'s off by a factor of ten before you say it out loud.'],
            resources: [
                { key: 'openintro', section: 'Chapter 2, section 2.1 "Examining numerical data", for reading summaries of numbers.' },
            ],
            note: 'We couldn\'t find one free page that teaches estimation well, so this one is mostly practice. Make up one estimation question a day (say, how many orders a busy exchange handles per second), write down how you got your number, then look up the real one.',
            worked: {
                title: 'Rounding to estimate',
                prompt: 'Estimate 7.3% of 2,418.',
                steps: ['Round 2,418 to 2,400.', '7% of 2,400 = 168.', '0.3% of 2,400 = 7.2.', '168 + 7.2 ≈ 175. The exact answer is 176.5.'],
                answer: 'About 175 (exactly 176.5)',
            },
        },
        {
            id: 'l4', label: 'Core', title: 'Weighted averages and P&L arithmetic', hours: 3,
            outcomes: ['Work out a weighted average and an average fill price.', 'Work out profit and loss on a long or short position, fees included.'],
            resources: [
                { key: 'openintro', section: 'Chapter 2, the extra topic "Weighted mean: how and when to use weighting".' },
            ],
            worked: {
                title: 'Average fill and a short trade',
                prompt: 'You buy 200 shares at 50.10 and 300 at 50.30. What\'s your average price? Separately, you short 50 shares at 40.00 and buy them back at 38.50, paying 0.01 per share on each trade. How much did you make?',
                steps: ['Cost: 200 × 50.10 = 10,020 and 300 × 50.30 = 15,090, so 25,110 total.', 'Average: 25,110 / 500 = 50.22.', 'Profit on the short before fees: (40.00 − 38.50) × 50 = 75.00.', 'Fees: 0.01 × 50 × 2 = 1.00.', 'After fees: 75.00 − 1.00 = 74.00.'],
                answer: 'Average fill 50.22; you made 74.00 on the short',
            },
        },
        {
            id: 'l5', label: 'Core', title: 'Math refreshers: functions, logs, derivatives, integrals, vectors, covariance', hours: 5,
            outcomes: ['Use a log to turn a growth rate into something you can add up.', 'Think of a derivative as a rate of change and an integral as a running total.', 'Think of a vector as a list of numbers you can take a dot product of, and covariance as how two things move together.'],
            resources: [
                { key: 'khan', section: 'Algebra 2 (Logarithms unit), Precalculus (Vectors and Matrices), Differential Calculus, Integral Calculus, and Statistics and probability.' },
                { key: 'mit1806', section: 'Optional, if you want more linear algebra. This link comes from the club\'s existing guide and we haven\'t re-checked it.', alt: true },
            ],
            note: 'You\'re going for "I can use this," not "I can prove this." If you can use each idea in a small calculation, you\'re good. You don\'t need a full calculus course behind you.',
            worked: {
                title: 'Why logs are handy for returns',
                prompt: 'A price goes up 10%. What\'s the log return? And why do people add up log returns across days?',
                steps: ['The log return is ln(1.10) = 0.0953, or about 9.53%.', 'For small moves, the log return is close to the regular return. ln(1.05) is 0.0488, next to a regular return of 5%.', 'Growth multiplies (1.10 × 1.05), but logs turn multiplying into adding: ln(1.10 × 1.05) = ln(1.10) + ln(1.05).'],
                answer: 'ln(1.10) = 0.0953; log returns add up across days',
            },
        },
        {
            id: 'l6', label: 'Core', title: 'Python functions for number crunching', hours: 6,
            outcomes: ['Write small Python functions, with tests, for the calculations in this stage.', 'Read an error message and fix the bug it\'s pointing at.'],
            resources: [
                { key: 'cs50p', section: 'Weeks 0 to 3 (Functions and Variables, Conditionals, Loops, Exceptions) and week 5 (Unit Tests).' },
                { key: 'pytut', section: 'Section 3.1 "Using Python as a Calculator" and section 4.8 "Defining Functions". It\'s written for people who already code, so use it with CS50P if you\'re new.', alt: true },
            ],
        },
    ],
    mistakes: [
        { mistake: 'Thinking fast mental math is something you\'re either born with or not.', fix: 'It\'s a handful of patterns you practice until they\'re automatic. Learn one trick at a time and let your log show you\'re improving.' },
        { mistake: 'Averaging two prices without accounting for size.', fix: 'Always ask how many shares traded at each price, then weight by that.' },
        { mistake: 'Mixing up percent, percentage points, and basis points.', fix: 'Say the unit out loud every time. Write 0.50 points = 50 bp, and work out the relative change as a separate step.' },
        { mistake: 'Skipping the log and calculus refreshers because they feel abstract.', fix: 'Do one tiny calculation for each idea (ln(1.10), the slope of x squared at 3). You just need to be able to use them.' },
        { mistake: 'Doing mental math in long sessions once in a while.', fix: 'Ten minutes most days beats one long session a week. Keep the same settings so your log means something.' },
    ],
    skip: 'If you\'re already quick at mental math and comfortable with percentages, basis points, and averages, skip to Stage 2. Keep doing the daily mental math either way.',
    next: 'Open Zetamac, do one 120-second round, and write your score down. Then start with whichever lesson below feels least familiar.',
};

export default stage;
