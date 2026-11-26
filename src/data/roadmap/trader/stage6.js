const stage = {
    id: 's6',
    title: 'Interviews, recruiting, and communicating results',
    type: 'Career preparation',
    description: 'Practise thinking out loud under time pressure, get your recruiting materials ready, and learn to explain your work clearly to someone who has not seen it.',
    purpose: 'Interview skill is mostly the earlier stages performed live. This stage adds the practice of speaking while you solve, the logistics of recruiting, and the habit of explaining a result with its caveats. It runs beside the other stages, so start the recruiting tasks early.',
    prerequisites: ['Stages 1 to 3 at least. Stage 5 and the capstone are ideal, since the capstone report is your main talking point.', 'You can start the mental-arithmetic and probability practice here at any time, and you are encouraged to.'],
    alongside: 'Recruiting does not wait for the end of the path. Check timelines on each firm\'s own page while you learn, and note them in your tracker.',
    lessons: [
        {
            id: 'l1', label: 'Core', title: 'Mental arithmetic and estimation under time pressure', hours: 4,
            outcomes: ['Keep your Stage 1 score steady while someone watches.', 'Estimate a result aloud and say how confident you are.'],
            resources: [
                { key: 'zetamac', section: 'Longer sessions (300 or 600 seconds) at the same settings, done with a friend listening.' },
                { key: 'myntbit', section: 'The homepage describes interview practice for quants. The trader-specific page was not checked, so look for it from the homepage.', alt: true },
            ],
            worked: {
                title: 'Estimating aloud',
                prompt: 'A price is 125.40 and moves 0.8%. How big is the move in dollars? Say your steps out loud as you go.',
                steps: ['1% of 125.40 is about 1.25.', '0.8% is a bit less, about four fifths of that: 1.25 × 0.8 = 1.00.', 'Say it: "About a dollar. The exact figure is 1.003."'],
                answer: 'About $1.00 (exact 1.003)',
            },
        },
        {
            id: 'l2', label: 'Core', title: 'Probability and market interview problems', hours: 8,
            outcomes: ['Solve and explain the early Jane Street Probability Playing Cards in clubs and diamonds.', 'Recognise which tool applies: complement, linearity, conditioning, or symmetry.'],
            resources: [
                { key: 'jsCards', section: 'Clubs (expectation and linearity) and Diamonds (classical and conditional probability), first five or six questions in each. The site says most of the questions are far harder than you need.' },
                { key: 'jsGuide', section: 'The Jane Street Probability and Markets Guide covers probability, expected value, and making markets. Only the landing page was checked; the guide itself is a PDF we could not open, so we cannot point to specific sections. The page says it is not required reading.', alt: true },
            ],
            worked: {
                title: 'Two original practice questions',
                prompt: 'These two are curriculum practice questions we wrote. They are not questions any company has asked. (1) You roll a fair die and may reroll once, but must keep the second roll. What is the expected value with the best strategy? (2) You deal cards from a shuffled 52-card deck. What is the expected number of cards you deal up to and including the first ace?',
                steps: ['(1) Rerolling gives an average of 3.5. Keep a first roll of 4, 5, or 6 and reroll 1, 2, or 3.', 'Expected value = (4 + 5 + 6) / 6 + 0.5 × 3.5 = 2.5 + 1.75 = 4.25.', '(2) The four aces split the other 48 cards into five groups, and each non-ace card is before all four aces with probability 1/5, so about 48/5 = 9.6 non-aces come first.', 'Add the ace itself: 9.6 + 1 = 10.6, which equals 53 / 5.'],
                answer: '4.25; 10.6',
            },
        },
        {
            id: 'l3', label: 'Core', title: 'Thinking out loud and mock interviews', hours: 6,
            outcomes: ['State the problem, your approach, and the answer in that order.', 'Correct yourself calmly when you spot a mistake.', 'Ask a clarifying question instead of guessing at the setup.'],
            resources: [
                { key: 'jsInterviews', section: 'The page describing the interview process and tips (approach methodically, communicate clearly, correct your mistakes, ask why), and the roughly 23-minute mock interview video with three parts.' },
            ],
            note: 'Do at least three mock interviews with a peer or mentor. Use the six-row rubric at the bottom of the page and score yourself afterwards. Record one and watch it back.',
        },
        {
            id: 'l4', label: 'Core', title: 'Recruiting: materials, timelines, and firm research', hours: 4,
            outcomes: ['Have a one-page resume that leads with your capstone and other projects.', 'Keep a tracker with each firm, role, stated process, and stated timing, taken from the firm\'s own pages.', 'Know what to do when you receive an offer with a deadline.'],
            resources: [
                { key: 'dqInternship', section: 'The DevilQuant guide on landing a quant internship.' },
                { key: 'imc', section: 'The US recruitment process page. It says the process has an application, an assessment for some roles, and interviews, and that the process varies by role. It also says to research the roles, apply to the one that fits, and share any existing offer deadlines with your recruiter. Check the page again for current details, since processes change.' },
                { key: 'optiver', section: 'The trading page, to read how the firm describes the work before you apply.', alt: true },
            ],
            note: 'Different firms run different timelines, and some limit internships to certain years of study. We deliberately do not list dates or deadlines here because they change. Read each firm\'s own page, and put what you find in your tracker with the date you checked.',
        },
        {
            id: 'l5', label: 'Core', title: 'Communicating results', hours: 4,
            outcomes: ['Explain your capstone to a listener in five minutes.', 'State the question, method, result, uncertainty, and limitation in that order.'],
            resources: [],
            note: 'No outside source is cited. Prepare a five-minute talk on the capstone with one slide or figure per minute, and give it to someone who has not seen the work.',
        },
        {
            id: 'l6', label: 'Desk-specific', desk: 'mm', title: 'Market-making games and options questions', hours: 4,
            outcomes: ['Quote a two-sided market on an uncertain quantity and adjust it as you learn.', 'Explain why you would widen or move your quote after a trade.'],
            resources: [
                { key: 'oic', section: 'The Greeks and Volatility pages, as a refresher before options questions.' },
            ],
            worked: {
                title: 'Making a market on a dice sum (original practice)',
                prompt: 'Make a market on the sum of two fair dice. What is the fair value, and what is the expected profit per trade if you quote 6.5 bid and 7.5 offer against a counterparty who knows nothing?',
                steps: ['The expected sum is 3.5 + 3.5 = 7.', 'If someone buys at your offer of 7.5, you gain 0.5 on average. If someone sells at your bid of 6.5, you also gain 0.5 on average.', 'If you notice that people only ever buy, widen your quote or move it up, because they may know something.'],
                answer: 'Fair value 7; expected profit 0.5 per trade against an uninformed counterparty',
            },
        },
        {
            id: 'l7', label: 'Desk-specific', desk: 'sys', title: 'Presenting a research result', hours: 4,
            outcomes: ['Present a backtest with its costs, its uncertainty, and the number of ideas you tried.'],
            resources: [
                { key: 'fpp3', section: 'Chapter 5, section 5.8, for how to report forecast accuracy honestly.' },
            ],
        },
    ],
    practice: [
        {
            id: 'p1', title: 'Reroll once',
            q: 'You roll a fair die and may reroll once, keeping the second roll. What strategy maximises your expected value, and what is it?',
            hints: ['What is the average of a fresh roll?', 'Reroll whenever your current roll is below that average.', 'Compute the expected value by splitting on keep and reroll.'],
            solution: 'A fresh roll averages 3.5, so reroll on 1, 2, or 3 and keep 4, 5, or 6. Expected value = (4 + 5 + 6) / 6 + (1/2) × 3.5 = 4.25.',
        },
        {
            id: 'p2', title: 'First ace',
            q: 'You deal cards from a shuffled 52-card deck. What is the expected number of cards dealt up to and including the first ace? Check with a quick simulation.',
            hints: ['The four aces divide the remaining 48 cards into five gaps.', 'By symmetry each gap has the same expected size.', 'Add one for the ace itself.'],
            solution: 'Each of the five gaps holds 48/5 = 9.6 cards on average, and the first ace comes after the first gap, so the expected count is 9.6 + 1 = 10.6 = 53/5. A simulation of 100,000 shuffles should come within about 0.05.',
        },
        {
            id: 'p3', title: 'Quote a market',
            q: 'Make a two-sided market on the sum of two fair dice. Justify the fair value, your bid and offer, and what you do after someone buys five times in a row.',
            hints: ['Find the expected sum.', 'Choose a spread wide enough to cover the risk of an informed counterparty.', 'Repeated buying is information.'],
            solution: 'Fair value is 7. A quote such as 6.5 at 7.5 earns an expected 0.5 per fill against an uninformed counterparty. Five buys in a row suggest the other side may know the outcome, so you raise both quotes and widen the spread, and you say that out loud.',
        },
        {
            id: 'p4', title: 'Estimate aloud',
            q: 'A 15% tip on 84 dollars. Say the steps out loud and give the answer to the nearest ten cents.',
            hints: ['Split 15% into 10% plus 5%.', '5% is half of 10%.'],
            solution: '10% of 84 is 8.40. Half of that, 5%, is 4.20. The sum is 12.60.',
        },
    ],
    deliverable: {
        title: 'Recruiting packet and mock interview record',
        text: 'A one-page resume that includes your capstone, a firm tracker with stated processes and the dates you checked them, a five-minute talk on your capstone, and a record of at least three scored mock interviews.',
        doneWhen: ['The resume is one page and links to your capstone repository.', 'The tracker lists at least five firms with the official page you read and the date you checked it.', 'You gave the five-minute talk to someone who had not seen the capstone and noted their questions.', 'Three mock interviews are scored with the final rubric.'],
    },
    checkpoint: {
        intro: 'This is the final checkpoint. Tick each item only when you have met it.',
        items: [
            { id: 'c1', text: 'You have scored Solid or Strong on every row of the final rubric, either on your own or from a peer or mentor.' },
            { id: 'c2', text: 'You have completed three mock interviews, one of which you recorded and watched back.' },
            { id: 'c3', text: 'You can solve the first five or six Jane Street Probability Playing Cards questions in clubs and diamonds and explain them aloud.' },
            { id: 'c4', text: 'Your firm tracker contains only information you took from official pages, with dates.' },
        ],
        target: 'These targets are our own benchmarks. They are not employer score cutoffs, and meeting them does not guarantee an interview or an offer.',
    },
    mistakes: [
        { mistake: 'Staying silent while thinking.', fix: 'Narrate what you are trying, even if it is "I am not sure yet, I will start with a simple case".' },
        { mistake: 'Racing to an answer and not checking it.', fix: 'Pause for ten seconds and sanity-check the magnitude and the sign before you say the final number.' },
        { mistake: 'Treating other people\'s reported interview questions as a script.', fix: 'Practise methods, not specific questions. Firms change their questions and processes.' },
        { mistake: 'Leaving recruiting until the end.', fix: 'Check timelines early and put them in your tracker, then plan learning around them.' },
    ],
    skip: 'If you have already done real mock interviews and have a resume, you can skip lessons 3 and 4. You still need to meet every checkpoint item.',
    next: 'Book your first mock interview with a peer, and open a blank tracker with the first firm you want to research.',
};

export default stage;
