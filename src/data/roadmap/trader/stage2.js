const stage = {
    id: 's2',
    title: 'Probability and expected value',
    type: 'Foundation',
    description: 'Count outcomes, update your beliefs when new information comes in, work out expected value, and then check yourself with a simulation.',
    purpose: 'Probability is the language traders think in. This stage goes from basic counting up to the central limit theorem. Get in the habit of solving problems twice: once with math, once with a simulation, and checking that they agree.',
    prerequisites: ['Stage 1, or you\'re already comfortable with percentages, averages, and simple Python functions.', 'Stat 110 lists calculus (mostly single variable) and some comfort with matrices as prerequisites. If you don\'t have those yet, use OpenIntro Statistics and the MIT 18.05 notes as your main sources, and come back to Stat 110 later if you want.'],
    alongside: 'Do one probability puzzle a week and talk through it out loud. The Jane Street Probability Playing Cards are a good place to start: clubs and diamonds first.',
    lessons: [
        {
            id: 'l1', label: 'Core', title: 'Counting and basic probability', hours: 6,
            outcomes: ['Count arrangements and selections with multiplication, permutations, and combinations.', 'Use inclusion-exclusion and complements so you don\'t double count.'],
            resources: [
                { key: 'stat110', section: 'The Basics unit (sample spaces, the naive definition of probability, counting).' },
                { key: 'stat110sp', section: 'Set 2, the "Inclusion-Exclusion" section (problems and solutions).' },
                { key: 'openintro', section: 'Chapter 3, section 3.1 "Defining probability".', alt: true },
                { key: 'greenBook', section: 'The "Little Green Book" section of our guide. Once the basics click, its probability questions show you how this material comes up in interviews.', alt: true },
            ],
            worked: {
                title: 'Complements and counting',
                prompt: 'You roll a fair die four times. What are the odds of getting at least one six? How many ways can you pick a team of 3 from 8 people? And what\'s the chance that 5 people all have different birthdays (ignore leap years and treat every day as equally likely)?',
                steps: ['Flip it around. The chance of no six on one roll is 5/6, so no six in four rolls is (5/6)^4 = 0.4823.', 'At least one six: 1 − 0.4823 = 0.5177.', 'Teams: C(8,3) = 8! / (3! 5!) = 56.', 'Different birthdays: (365/365) × (364/365) × (363/365) × (362/365) × (361/365) = 0.9729.'],
                answer: '0.5177; 56; 0.9729 (so about a 2.7% chance two of the five share a birthday)',
            },
        },
        {
            id: 'l2', label: 'Core', title: 'Conditional probability and Bayes\' rule', hours: 6,
            outcomes: ['Explain P(A | B) in plain words and work it out from a table of counts.', 'Use Bayes\' rule and explain why the starting probability (the prior) matters so much.'],
            resources: [
                { key: 'stat110sp', section: 'Set 2, the "Independence" and "Thinking Conditionally" sections.' },
                { key: 'openintro', section: 'Chapter 3, section 3.2 "Conditional probability".', alt: true },
            ],
            worked: {
                title: 'Updating on new evidence',
                prompt: 'A signal goes off on 90% of profitable days and 10% of unprofitable days. Only 1% of days are profitable. If the signal goes off, what are the odds the day is profitable? Second one: machine A makes 60% of the parts and 2% of its parts are defective. Machine B makes the other 40%, with a 5% defect rate. You find a defective part. What\'s the chance it came from A?',
                steps: ['Signal: P(profitable and signal) = 0.01 × 0.90 = 0.009. P(not profitable and signal) = 0.99 × 0.10 = 0.099.', 'P(profitable | signal) = 0.009 / (0.009 + 0.099) = 0.0833, or 1 in 12.', 'Machines: P(A and defective) = 0.6 × 0.02 = 0.012. P(B and defective) = 0.4 × 0.05 = 0.020.', 'P(A | defective) = 0.012 / 0.032 = 0.375.'],
                answer: '1/12 (about 8.3%); 0.375. A rare event is still pretty unlikely even after a decent signal says yes.',
            },
        },
        {
            id: 'l3', label: 'Core', title: 'Random variables, expected value, variance, and linearity', hours: 7,
            outcomes: ['Work out the expected value and variance of a distribution.', 'Use linearity of expectation to skip listing every outcome.', 'Work out Var(aX + bY), covariance term included.'],
            resources: [
                { key: 'stat110', section: 'The Random variables and distributions unit (expectation, variance, covariance, correlation).' },
                { key: 'openintro', section: 'Chapter 3, section 3.4 "Random variables".', alt: true },
                { key: 'jsCards', section: 'The clubs suit (expectation and linearity). The site says the first 5 or 6 questions in clubs and diamonds are enough for interview prep.' },
            ],
            worked: {
                title: 'Variance, and the higher of two dice',
                prompt: 'What\'s the variance of one fair die? What\'s the expected value of the higher of two dice? And if Var(X) = 4, Var(Y) = 9, and Cov(X, Y) = 3, what\'s Var(2X − 3Y)?',
                steps: ['E[X] = 3.5 and E[X squared] = 91/6 = 15.1667, so Var(X) = 15.1667 − 12.25 = 2.9167 = 35/12.', 'Higher of two dice: all 36 outcomes are equally likely. Add up the higher roll across all of them and you get 161, so the expected value is 161/36 = 4.4722.', 'Var(2X − 3Y) = 4 Var(X) + 9 Var(Y) − 12 Cov(X, Y) = 16 + 81 − 36 = 61.'],
                answer: '35/12 ≈ 2.92; 161/36 ≈ 4.47; 61',
            },
        },
        {
            id: 'l4', label: 'Core', title: 'Distributions, the law of large numbers, and the central limit theorem', hours: 6,
            outcomes: ['Decide whether a binomial, geometric, Poisson, or normal model fits a situation.', 'Use the standard error to say how much you can trust an average.', 'Say what the central limit theorem gives you, and what it doesn\'t.'],
            resources: [
                { key: 'openintro', section: 'Chapter 4 (sections 4.1 Normal and 4.3 Binomial) and Chapter 5, section 5.1 "Point estimates and sampling variability".' },
                { key: 'stat110', section: 'The Limit theorems unit (law of large numbers and central limit theorem).', alt: true },
            ],
            worked: {
                title: 'A binomial tail and a standard error',
                prompt: 'A coin lands heads 55% of the time. Flip it 10 times. What\'s the chance of 7 or more heads? And if you average 400 observations with a standard deviation of 8, what\'s the standard error?',
                steps: ['Add up the binomial probabilities for 7, 8, 9, and 10 heads with p = 0.55 and n = 10.', 'That comes to 0.2660.', 'Standard error of the mean = 8 / √400 = 8 / 20 = 0.4.', 'About 95% of a normal distribution sits within 1.96 standard errors of the mean (the exact area between −1.96 and 1.96 is 0.9500).'],
                answer: '0.2660; 0.4',
            },
        },
        {
            id: 'l5', label: 'Core', title: 'Monte Carlo simulation in Python', hours: 6,
            outcomes: ['Estimate a probability or expected value with a simulation that uses a fixed random seed.', 'Report a simulated answer with a margin of error, not just one number.'],
            resources: [
                { key: 'numpy', section: 'The "Generating random numbers" section (use np.random.default_rng with a seed) and "Basic array operations".' },
                { key: 'dqMonteCarlo', section: 'The DevilQuant Monte Carlo simulator guide.', alt: true },
            ],
        },
        {
            id: 'l6', label: 'Optional', title: 'Random walks and martingales', hours: 4,
            outcomes: ['Explain what a random walk is, and why no betting "system" can beat a fair game.'],
            resources: [
                { key: 'jsCards', section: 'The spades suit (random walks and martingales). The site marks the hardest questions, so expect to get stuck sometimes.' },
                { key: 'mit1805', section: 'The course notes on random variables and distributions, if you want another explanation.', alt: true },
            ],
        },
    ],
    checkpoint: {
        intro: 'Time yourself and don\'t look at solutions. Only check a box once you\'ve actually done it.',
        items: [
            { id: 'c1', text: 'Ten mixed counting, conditional probability, and expected value problems in 60 minutes: at least 8 right, with a one-line explanation for each.' },
            { id: 'c2', text: 'For a problem you\'ve solved with math, you can write a seeded simulation that lands within three standard errors of your answer.' },
            { id: 'c3', text: 'You\'ve tried the first five or six clubs and diamonds questions in the Jane Street Probability Playing Cards, and you can explain the ones you solved.' },
            { id: 'c4', text: 'You can name, in your own words, one thing the central limit theorem doesn\'t guarantee.' },
        ],
    },
    mistakes: [
        { mistake: 'Mixing up P(A | B) and P(B | A).', fix: 'Write both out as a table of counts for a real example, like the signal and the profitable days.' },
        { mistake: 'Assuming two events are independent without checking.', fix: 'Say why they\'re independent, or just work out the joint probability directly.' },
        { mistake: 'Trusting a simulation that ran too few trials.', fix: 'Always report the standard error, and add trials until the margin is small enough to actually answer the question.' },
        { mistake: 'Skipping the solution when you got the answer right.', fix: 'Read it anyway. There\'s often a shorter way to get there, and it\'s worth knowing.' },
    ],
    skip: 'If you can pass the whole checkpoint cold, skip ahead to Stage 3. Keep doing the weekly puzzle.',
    next: 'Open Stat 110 Strategic Practice Set 2 and try the Inclusion-Exclusion problems before you look at any solutions. Then pick one of them and check your answer with a quick simulation.',
};

export default stage;
