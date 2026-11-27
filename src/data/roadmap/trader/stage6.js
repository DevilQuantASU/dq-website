const stage = {
    id: 's6',
    title: 'Interviews, recruiting, and communicating results',
    type: 'Career preparation',
    description: 'Practice thinking out loud under time pressure, get your recruiting stuff together, and learn to explain your work to someone who\'s never seen it.',
    purpose: 'Interviewing is mostly everything from the earlier stages, done live, with someone watching. This stage adds the parts you can\'t learn from a book: talking while you solve, keeping track of recruiting, and explaining a result along with its weak spots. It runs alongside the other stages, so don\'t wait until the end to start the recruiting pieces.',
    prerequisites: ['At least Stages 1 to 3. Stage 5 helps a lot, since your capstone is the main thing you\'ll talk about.', 'You can start the mental math and probability practice here whenever you want, and earlier is better.'],
    alongside: 'Recruiting doesn\'t wait until you finish the path. Check each firm\'s own page for timelines as you go, and add them to your tracker.',
    lessons: [
        {
            id: 'l1', label: 'Core', title: 'Mental math and estimation under time pressure', hours: 4,
            outcomes: ['Keep your Stage 1 score up even with someone watching.', 'Estimate an answer out loud and say how sure you are.'],
            resources: [
                { key: 'zetamac', section: 'Longer rounds (300 or 600 seconds) on the same settings, with a friend listening in.' },
                { key: 'mathOgenius', section: 'Rewatch any trick you\'re still slow at, especially #4 (multiplication), #5 (division), and #15 (percentages).', alt: true },
                { key: 'myntbit', section: 'The homepage covers interview practice for quants. We couldn\'t check the trader-specific page, so find it from the homepage.', alt: true },
            ],
            worked: {
                title: 'Estimating out loud',
                prompt: 'A price is 125.40 and moves 0.8%. How many dollars is that? Talk through it as you go.',
                steps: ['1% of 125.40 is about 1.25.', '0.8% is a bit less, about four fifths of that: 1.25 × 0.8 = 1.00.', 'Say it: "About a dollar. Exactly, it\'s 1.003."'],
                answer: 'About $1.00 (exactly 1.003)',
            },
        },
        {
            id: 'l2', label: 'Core', title: 'Probability and market interview questions', hours: 8,
            outcomes: ['Solve and explain the early clubs and diamonds questions in the Jane Street Probability Playing Cards.', 'Spot which tool a problem needs: the complement, linearity, conditioning, or symmetry.'],
            resources: [
                { key: 'jsCards', section: 'Clubs (expectation and linearity) and diamonds (classical and conditional probability), the first five or six in each. The site itself says most of the questions are way harder than you need.' },
                { key: 'greenBook', section: 'Open the guide and scroll to "The Little Green Book." We call it the one must-have book for quant interviews. Work through its probability and brain teaser questions out loud, as if someone were interviewing you.' },
                { key: 'acRoadmapVideo', section: 'The trader section starting at 10:18, on why brain teasers and quick thinking matter in trading interviews.', alt: true },
                { key: 'jsGuide', section: 'Jane Street\'s Probability and Markets Guide covers probability, expected value, and making markets. We could only check the landing page (the guide is a PDF we couldn\'t open), so we can\'t point you to specific sections. The page says it\'s not required reading.', alt: true },
            ],
            worked: {
                title: 'Two practice questions we wrote',
                prompt: 'We made these two up for practice. No firm asked them. (1) You roll a fair die and can reroll once, but you have to keep the second roll. With the best strategy, what\'s the expected value? (2) You deal cards from a shuffled 52-card deck. On average, how many cards do you deal up to and including the first ace?',
                steps: ['(1) A reroll averages 3.5. So keep a 4, 5, or 6, and reroll a 1, 2, or 3.', 'Expected value = (4 + 5 + 6) / 6 + 0.5 × 3.5 = 2.5 + 1.75 = 4.25.', '(2) The four aces split the other 48 cards into five groups. Each non-ace has a 1 in 5 chance of landing before all four aces, so on average 48/5 = 9.6 non-aces come first.', 'Add the ace itself: 9.6 + 1 = 10.6, which is 53 / 5.'],
                answer: '4.25; 10.6',
            },
        },
        {
            id: 'l3', label: 'Core', title: 'Thinking out loud and mock interviews', hours: 6,
            outcomes: ['Say the problem, how you\'ll attack it, and the answer, in that order.', 'Fix your own mistakes calmly when you catch them.', 'Ask a clarifying question instead of guessing what the setup is.'],
            resources: [
                { key: 'jsInterviews', section: 'The page on how their interviews work, with tips (be methodical, communicate clearly, fix your mistakes, ask why), plus the roughly 23-minute mock interview video in three parts.' },
            ],
            note: 'Do at least three mock interviews with a friend or mentor. Score yourself afterward with the six-row rubric in this stage\'s checkpoint section. Record one and watch it back. It\'s painful, but it helps a lot.',
        },
        {
            id: 'l4', label: 'Core', title: 'Recruiting: your resume, timelines, and researching firms', hours: 4,
            outcomes: ['Have a one-page resume that leads with your capstone and other projects.', 'Keep a tracker of each firm, the role, how they say their process works, and when, straight from the firm\'s own site.', 'Know what to do when you get an offer with a deadline.', 'Start building a network early through firm events, club meetings, professors, and research groups.'],
            resources: [
                { key: 'dqInternship', section: 'The DevilQuant guide to landing a quant internship.' },
                { key: 'imc', section: 'Their US recruitment page. It says the process is an application, an assessment for some roles, and interviews, and that it varies by role. It also says to look into the roles, apply to the one that fits you best, and tell your recruiter about any offer deadlines you already have. Processes change, so check the page again for the latest.' },
                { key: 'optiver', section: 'Their trading page, to see how they describe the job before you apply.', alt: true },
                { key: 'acRoadmapVideo', section: 'The "General Advice (All Roles)" chapter at 3:24 and the trader section at 10:18, on networking and getting internships early.', alt: true },
            ],
            note: 'Every firm runs on its own timeline, and some only take interns from certain years. We left dates and deadlines off on purpose because they change all the time. Check each firm\'s own page, and log what you find in your tracker along with the date you checked. The video above recommends networking and applying starting your first year, and applying every summer, since internships are basically a long job interview. DevilQuant meetings and the Discord are an easy place to start.',
        },
        {
            id: 'l5', label: 'Core', title: 'Explaining your results', hours: 4,
            outcomes: ['Explain your capstone to someone in five minutes.', 'Cover the question, what you did, what you found, how sure you are, and what it can\'t tell you, in that order.'],
            resources: [],
            note: 'Nothing to read for this one. Put together a five-minute talk on your capstone, with about one slide or chart per minute, and give it to someone who hasn\'t seen the project.',
        },
        {
            id: 'l6', label: 'Desk-specific', desk: 'mm', title: 'Market-making games and options questions', hours: 4,
            outcomes: ['Quote a two-sided market on something uncertain, and adjust it as you learn more.', 'Explain why you\'d widen or move your quote after someone trades with you.'],
            resources: [
                { key: 'oic', section: 'The Greeks and Volatility pages, as a refresher before options questions.' },
            ],
            worked: {
                title: 'Making a market on two dice (a practice question we wrote)',
                prompt: 'Make a market on the sum of two fair dice. What\'s it worth, and what do you make per trade on average if you quote 6.5 bid, 7.5 offer, to someone who knows nothing?',
                steps: ['The expected sum is 3.5 + 3.5 = 7.', 'If someone buys at your 7.5 offer, you make 0.5 on average. If someone sells at your 6.5 bid, you also make 0.5 on average.', 'If everyone keeps buying and nobody sells, move your quote up or widen it. They might know something you don\'t.'],
                answer: 'Worth 7; you make 0.5 per trade against someone who knows nothing',
            },
        },
        {
            id: 'l7', label: 'Desk-specific', desk: 'sys', title: 'Presenting a research result', hours: 4,
            outcomes: ['Present a backtest along with its costs, how uncertain it is, and how many ideas you tried before this one.'],
            resources: [
                { key: 'fpp3', section: 'Chapter 5, section 5.8, for how to report forecast accuracy honestly.' },
            ],
        },
    ],
    showRubric: true,
    checkpoint: {
        intro: 'This is the last checkpoint. Only check a box once you\'ve actually done it.',
        items: [
            { id: 'c1', text: 'You scored Solid or Strong on every row of the final rubric, either on your own or from a friend or mentor.' },
            { id: 'c2', text: 'You\'ve done three mock interviews and recorded and rewatched at least one.' },
            { id: 'c3', text: 'You can solve the first five or six clubs and diamonds questions in the Jane Street Probability Playing Cards and explain them out loud.' },
            { id: 'c4', text: 'Everything in your firm tracker came from official pages, with dates.' },
        ],
    },
    mistakes: [
        { mistake: 'Going quiet while you think.', fix: 'Say what you\'re trying, even if it\'s just "Not sure yet, let me start with a simple case."' },
        { mistake: 'Rushing to an answer and not checking it.', fix: 'Take ten seconds to sanity-check the size and the sign before you say your final number.' },
        { mistake: 'Memorizing interview questions other people posted online.', fix: 'Practice the methods, not specific questions. Firms change their questions and their process.' },
        { mistake: 'Putting off recruiting until the end.', fix: 'Look up timelines early, put them in your tracker, and plan your learning around them.' },
    ],
    skip: 'If you\'ve already done real mock interviews and have a resume, you can skip lessons 3 and 4. You still need to pass every checkpoint item.',
    next: 'Set up your first mock interview with a friend, and start a tracker with the first firm you want to look into.',
};

export default stage;
