const stage = {
    id: 's2',
    title: 'Probability and expected value',
    type: 'Foundation',
    description: 'Learn to count outcomes, update beliefs with new information, and compute expected value, then check your answers by simulation.',
    purpose: 'Probability is the language of trading. This stage takes you from counting to the central limit theorem, and ends with a notebook where every answer is computed twice: once with math and once by simulation.',
    prerequisites: ['Stage 1 or the equivalent: percentages, averages, and basic Python functions.', 'Stat 110 states its own prerequisites as calculus (mainly single variable) and familiarity with matrices. If you do not have these yet, use OpenIntro Statistics and the MIT 18.05 notes as your main sources and treat Stat 110 as an optional second pass.'],
    alongside: 'Add one probability puzzle a week, solved out loud. Start with the Jane Street Probability Playing Cards, clubs and diamonds first.',
    lessons: [
        {
            id: 'l1', label: 'Core', title: 'Counting and basic probability', hours: 6,
            outcomes: ['Count arrangements and selections using products, permutations, and combinations.', 'Use inclusion-exclusion and complements to avoid double counting.'],
            resources: [
                { key: 'stat110', section: 'The Basics unit (sample spaces, naive definition of probability, counting).' },
                { key: 'stat110sp', section: 'Set 2, section "Inclusion-Exclusion" (practice problems and solutions).' },
                { key: 'openintro', section: 'Chapter 3, section 3.1 "Defining probability".', alt: true },
            ],
            worked: {
                title: 'Complements and counting',
                prompt: 'You roll a fair die four times. What is the probability of at least one six? How many ways can you choose a team of 3 from 8 people? What is the probability that 5 people all have different birthdays (ignore leap days and assume all days equally likely)?',
                steps: ['Use the complement. No six in one roll has probability 5/6, so no six in four rolls is (5/6)^4 = 0.4823.', 'At least one six: 1 − 0.4823 = 0.5177.', 'Teams: C(8,3) = 8! / (3! 5!) = 56.', 'Different birthdays: (365/365) × (364/365) × (363/365) × (362/365) × (361/365) = 0.9729.'],
                answer: '0.5177; 56; 0.9729 (so a 2.7% chance that two of five share a birthday)',
            },
        },
        {
            id: 'l2', label: 'Core', title: 'Conditional probability and Bayes\' rule', hours: 6,
            outcomes: ['Write P(A | B) in your own words and compute it from a table of counts.', 'Apply Bayes\' rule and say why the prior matters.'],
            resources: [
                { key: 'stat110sp', section: 'Set 2, sections "Independence" and "Thinking Conditionally".' },
                { key: 'openintro', section: 'Chapter 3, section 3.2 "Conditional probability".', alt: true },
            ],
            worked: {
                title: 'Updating with evidence',
                prompt: 'A signal fires on 90% of profitable days and 10% of unprofitable days. Only 1% of days are profitable. If the signal fires, what is the probability the day is profitable? Second: a machine A makes 60% of parts with a 2% defect rate, and machine B makes 40% with a 5% defect rate. A part is defective. What is the probability it came from A?',
                steps: ['Signal: P(profit and fires) = 0.01 × 0.90 = 0.009. P(no profit and fires) = 0.99 × 0.10 = 0.099.', 'P(profit | fires) = 0.009 / (0.009 + 0.099) = 0.0833, or 1/12.', 'Machines: P(A and defective) = 0.6 × 0.02 = 0.012. P(B and defective) = 0.4 × 0.05 = 0.020.', 'P(A | defective) = 0.012 / 0.032 = 0.375.'],
                answer: '1/12 (about 8.3%); 0.375. A rare event stays fairly unlikely even after a fairly reliable signal.',
            },
        },
        {
            id: 'l3', label: 'Core', title: 'Random variables, expected value, variance, and linearity', hours: 7,
            outcomes: ['Compute an expected value and a variance from a distribution.', 'Use linearity of expectation to solve problems without listing outcomes.', 'Use Var(aX + bY) with a covariance term.'],
            resources: [
                { key: 'stat110', section: 'Random variables and distributions unit (expectation, variance, covariance, correlation).' },
                { key: 'openintro', section: 'Chapter 3, section 3.4 "Random variables".', alt: true },
                { key: 'jsCards', section: 'Clubs suit (expectation and linearity). The site suggests the first 5 or 6 questions in clubs and diamonds for interview preparation.' },
            ],
            worked: {
                title: 'Variance and the maximum of two dice',
                prompt: 'Find the variance of one fair die. Then find the expected maximum of two fair dice. Then: if Var(X) = 4, Var(Y) = 9, and Cov(X, Y) = 3, what is Var(2X − 3Y)?',
                steps: ['E[X] = 3.5 and E[X squared] = 91/6 = 15.1667, so Var(X) = 15.1667 − 12.25 = 2.9167 = 35/12.', 'Maximum of two dice: each of the 36 outcomes is equally likely. Summing the maximum over all outcomes gives 161, so the expected maximum is 161/36 = 4.4722.', 'Var(2X − 3Y) = 4 Var(X) + 9 Var(Y) − 12 Cov(X, Y) = 16 + 81 − 36 = 61.'],
                answer: '35/12 ≈ 2.92; 161/36 ≈ 4.47; 61',
            },
        },
        {
            id: 'l4', label: 'Core', title: 'Distributions, the law of large numbers, and the central limit theorem', hours: 6,
            outcomes: ['Choose between a binomial, geometric, Poisson, and normal model for a situation.', 'Use the standard error to say how precise an average is.', 'State what the central limit theorem does and does not promise.'],
            resources: [
                { key: 'openintro', section: 'Chapter 4 (sections 4.1 Normal, 4.3 Binomial) and Chapter 5, section 5.1 "Point estimates and sampling variability".' },
                { key: 'stat110', section: 'Limit theorems unit (law of large numbers and central limit theorem).', alt: true },
            ],
            worked: {
                title: 'Binomial tail and standard error',
                prompt: 'A coin lands heads 55% of the time. In 10 flips, what is the probability of at least 7 heads? And if you average 400 observations with standard deviation 8, what is the standard error?',
                steps: ['Sum the binomial probabilities for 7, 8, 9, and 10 heads with p = 0.55 and n = 10.', 'The total is 0.2660.', 'Standard error of the mean = 8 / √400 = 8 / 20 = 0.4.', 'About 95% of normal values fall within 1.96 standard errors of the mean (the exact area between −1.96 and 1.96 is 0.9500).'],
                answer: '0.2660; 0.4',
            },
        },
        {
            id: 'l5', label: 'Core', title: 'Monte Carlo simulation in Python', hours: 6,
            outcomes: ['Estimate a probability or expected value by simulation with a fixed random seed.', 'Report a simulation answer with a margin of error, not a single number.'],
            resources: [
                { key: 'numpy', section: 'Section "Generating random numbers" (use np.random.default_rng with a seed) and "Basic array operations".' },
                { key: 'dqMonteCarlo', section: 'The DevilQuant Monte Carlo simulator guide.', alt: true },
            ],
        },
        {
            id: 'l6', label: 'Optional', title: 'Random walks and martingales', hours: 4,
            outcomes: ['Describe a random walk and why a fair game has no "system" that beats it.'],
            resources: [
                { key: 'jsCards', section: 'Spades suit (random walks and martingales). The site marks the hardest questions, so expect to get stuck.' },
                { key: 'mit1805', section: 'Course notes on random variables and distributions, for another angle.', alt: true },
            ],
        },
    ],
    deliverable: {
        title: 'Expected-value and Monte Carlo notebook',
        text: 'A notebook with five probability or expected-value problems of your choice. For each, give the analytic answer and a seeded simulation estimate with a margin of error, and say in a sentence whether they agree.',
        doneWhen: ['Five problems, each with a written analytic solution.', 'Each simulation uses a fixed seed and reports a standard error.', 'Every analytic answer falls within three standard errors of its simulation, or you explain why not.'],
    },
    checkpoint: {
        intro: 'Do this timed and without looking at solutions. Tick each item only when you have met it.',
        items: [
            { id: 'c1', text: 'A set of ten mixed counting, conditional probability, and expected-value problems in 60 minutes: at least 8 correct with a one-line explanation for each.' },
            { id: 'c2', text: 'Your notebook meets every item in its "done when" list.' },
            { id: 'c3', text: 'You have attempted the first five or six questions in the clubs and diamonds suits of the Jane Street Probability Playing Cards and can explain the ones you solved.' },
            { id: 'c4', text: 'You can state, in your own words, one thing the central limit theorem does not guarantee.' },
        ],
        target: 'These targets are our own benchmarks. They are not employer score cutoffs.',
    },
    mistakes: [
        { mistake: 'Forgetting that P(A | B) and P(B | A) are different.', fix: 'Write both out as a table of counts for a concrete example, such as the signal and profitable days.' },
        { mistake: 'Treating events as independent without checking.', fix: 'Say why independence holds, or compute the joint probability directly.' },
        { mistake: 'Trusting a simulation with too few trials.', fix: 'Always report the standard error and increase trials until the margin is small enough to settle the question.' },
        { mistake: 'Skipping the worked solutions to a problem you got right.', fix: 'Read the solution anyway. A shorter argument is worth learning even when your answer was correct.' },
    ],
    skip: 'If you can meet every item in the checkpoint cold, skip ahead to Stage 3. Keep the weekly puzzle going.',
    next: 'Open Stat 110 Strategic Practice Set 2 and attempt the Inclusion-Exclusion problems before reading any solution. Then start your notebook with the first problem.',
};

export default stage;
