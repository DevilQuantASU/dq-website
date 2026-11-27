// Resource registry for the Quant Trader path.
// verified: 'verified' = page opened and checked; 'partial' = only part checked (see note); 'unverified' = could not be checked.
// `checked` is the date the check was made. Re-verify before launch and whenever a link fails.
const CHECKED = '2026-11-24';

const resources = {
    zetamac: {
        title: 'Arithmetic Game', provider: 'Zetamac', url: 'https://arithmetic.zetamac.com/',
        format: 'Web drill', access: 'Free, no account', difficulty: 'Intro',
        skills: ['Numerical reasoning'], verified: 'verified', checked: CHECKED,
        note: 'Operations, number ranges, and duration (30 to 600 seconds) are adjustable. Keep settings fixed when comparing sessions.',
    },
    cs50p: {
        title: "CS50's Introduction to Programming with Python", provider: 'Harvard CS50', url: 'https://cs50.harvard.edu/python/',
        format: 'Video course with problem sets', access: 'Free; a free edX account is needed to submit problem sets; certificate is optional and paid', difficulty: 'Intro',
        skills: ['Python'], verified: 'verified', checked: CHECKED,
        note: 'Weeks: 0 Functions and Variables, 1 Conditionals, 2 Loops, 3 Exceptions, 4 Libraries, 5 Unit Tests, 6 File I/O, 7 Regular Expressions, 8 Object-Oriented Programming, 9 Et Cetera.',
    },
    pytut: {
        title: 'The Python Tutorial', provider: 'Python Software Foundation', url: 'https://docs.python.org/3/tutorial/',
        format: 'Documentation', access: 'Free', difficulty: 'Intro',
        skills: ['Python'], verified: 'verified', checked: CHECKED,
        note: 'Written for programmers who are new to Python, not for first-time programmers. Pair with CS50P if you are new to programming.',
    },
    numpy: {
        title: 'NumPy: the absolute basics for beginners', provider: 'NumPy project', url: 'https://numpy.org/doc/stable/user/absolute_beginners.html',
        format: 'Documentation', access: 'Free', difficulty: 'Intro',
        skills: ['Python', 'Data analysis'], verified: 'verified', checked: CHECKED,
    },
    pandas: {
        title: 'pandas getting started tutorials', provider: 'pandas project', url: 'https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html',
        format: 'Documentation', access: 'Free', difficulty: 'Intro',
        skills: ['Python', 'Data analysis'], verified: 'verified', checked: CHECKED,
    },
    pandasSql: {
        title: 'pandas comparison with SQL', provider: 'pandas project', url: 'https://pandas.pydata.org/docs/getting_started/comparison/comparison_with_sql.html',
        format: 'Documentation', access: 'Free', difficulty: 'Intro',
        skills: ['Data analysis'], verified: 'partial', checked: CHECKED,
        note: 'It\'s in the pandas docs menu, but we haven\'t opened the page itself.',
    },
    stat110: {
        title: 'Stat 110: Probability', provider: 'Harvard University', url: 'https://stat110.hsites.harvard.edu/',
        format: 'Video lectures and free textbook', access: 'Free (the textbook is free online; the edX version needs a free account)', difficulty: 'Intermediate',
        skills: ['Probability'], verified: 'verified', checked: CHECKED,
        note: 'Prerequisites stated on the course page: calculus (mainly single variable) and familiarity with matrices.',
    },
    stat110sp: {
        title: 'Stat 110 Strategic Practice and Homework', provider: 'Harvard University', url: 'https://stat110.hsites.harvard.edu/strategic-practice-problems',
        format: 'Problem sets with solutions', access: 'Free', difficulty: 'Intermediate',
        skills: ['Probability'], verified: 'verified', checked: CHECKED,
        note: 'Eleven sets, each with practice problems, homework, and solutions. Only Set 2 (Inclusion-Exclusion, Independence, Thinking Conditionally) was checked in detail; match other sets to topics by their section headings.',
    },
    mit1805: {
        title: '18.05 Introduction to Probability and Statistics (Spring 2022)', provider: 'MIT OpenCourseWare', url: 'https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/',
        format: 'Course notes, problem sets, and solutions', access: 'Free', difficulty: 'Intermediate',
        skills: ['Probability', 'Statistics'], verified: 'verified', checked: CHECKED,
        note: 'Computing examples use R, not Python. Use the notes and problems; translate computing exercises to Python.',
    },
    openintro: {
        title: 'OpenIntro Statistics', provider: 'OpenIntro', url: 'https://openintro.org/book/os/',
        format: 'Textbook, videos, slides, and labs', access: 'Free PDF (set the price to $0); paperback is optional and paid', difficulty: 'Intro',
        skills: ['Statistics', 'Probability'], verified: 'verified', checked: CHECKED,
        note: 'Section videos and slides are free. Labs exist in Python for chapters 2 to 9.',
    },
    jsGuide: {
        title: 'Jane Street Probability & Markets Guide', provider: 'Jane Street', url: 'https://www.janestreet.com/probability-markets/',
        format: 'PDF guide', access: 'Free', difficulty: 'Intro',
        skills: ['Probability', 'Markets'], verified: 'partial', checked: CHECKED,
        note: 'We checked the landing page, which says the guide covers probability, expected value, and making markets. We couldn\'t open the PDF, so we haven\'t seen what\'s inside.',
    },
    jsCards: {
        title: 'Jane Street Probability Playing Cards', provider: 'Jane Street', url: 'https://www.janestreet.com/probability-playing-cards/',
        format: 'Problem collection', access: 'Free', difficulty: 'Intermediate to advanced',
        skills: ['Probability', 'Interview practice'], verified: 'verified', checked: CHECKED,
        note: 'Suits: clubs cover expectation and linearity; diamonds, classical and conditional probability; hearts, geometric probability; spades, random walks and martingales. The page recommends the first five or six clubs and diamonds problems for interview preparation and calls the rest far harder than needed.',
    },
    jsInterviews: {
        title: 'Jane Street Trading Interviews', provider: 'Jane Street', url: 'https://www.janestreet.com/trading-interviews/',
        format: 'Web page with a sample interview video', access: 'Free', difficulty: 'Intro',
        skills: ['Interview practice', 'Communication'], verified: 'verified', checked: CHECKED,
        note: 'Describes one firm\'s process. The page says no prior finance knowledge is required and advises approaching problems methodically, communicating clearly, correcting mistakes, and asking why.',
    },
    cme: {
        title: 'Introduction to Futures', provider: 'CME Group', url: 'https://www.cmegroup.com/education/courses/introduction-to-futures',
        format: 'Short online course', access: 'Free', difficulty: 'Intro',
        skills: ['Markets'], verified: 'verified', checked: CHECKED,
        note: 'Modules include contract specifications, expiration and settlement, tick movements, notional value, mark to market, margin, contract roll, and calculating profit or loss.',
    },
    oic: {
        title: 'Greeks and Volatility', provider: 'Options Industry Council', url: 'https://www.optionseducation.org/theoptionseducationcenter/learning-resources-by-topic/greeks-and-volatility',
        format: 'Articles, videos, calculators', access: 'Free', difficulty: 'Intro',
        skills: ['Derivatives'], verified: 'verified', checked: CHECKED,
        note: 'Pages: Understanding Options Greeks, Delta, Gamma, Theta, Vega, Rho, Putting It All Together, Volatility and the Greeks, Black-Scholes Formula. The site also has a Put/Call Parity page and a virtual trading simulator. OIC states that completing its content does not guarantee skill.',
    },
    harris: {
        title: 'Trading and Exchanges: Market Microstructure for Practitioners', provider: 'Larry Harris, Oxford University Press', url: 'https://academic.oup.com/book/52292',
        format: 'Book', access: 'Paid or institutional access', difficulty: 'Intermediate',
        skills: ['Markets'], verified: 'partial', checked: CHECKED,
        note: 'We checked the book\'s page but not its chapters. You don\'t need it: the free CME and OIC material covers the basics.',
    },
    natenberg: {
        title: 'Option Volatility and Pricing, 2nd Edition', provider: 'Sheldon Natenberg, McGraw Hill', url: 'https://www.mheducation.com/highered/mhp/product/option-volatility-pricing-advanced-trading-strategies-techniques-2nd-edition.html',
        format: 'Book', access: 'Paid (publisher listing: eBook from $101, print from $112 on the check date)', difficulty: 'Intermediate to advanced',
        skills: ['Derivatives'], verified: 'partial', checked: CHECKED,
        note: 'We checked the publisher\'s page but not the chapters. You don\'t need it. The publisher says it covers option theory, dynamic hedging, volatility strategies, and risk.',
    },
    islp: {
        title: 'An Introduction to Statistical Learning with Python', provider: 'James, Witten, Hastie, Tibshirani, Taylor', url: 'https://www.statlearning.com/',
        format: 'Textbook with Python labs', access: 'Free PDF; print is paid', difficulty: 'Intermediate',
        skills: ['Statistics', 'Data analysis'], verified: 'verified', checked: CHECKED,
        note: 'Optional extension. Topics include regression, classification, resampling, model selection, and multiple testing.',
    },
    fpp3: {
        title: 'Forecasting: Principles and Practice, Chapter 5 (The forecaster\'s toolbox)', provider: 'Hyndman and Athanasopoulos', url: 'https://otexts.com/fpp3/toolbox.html',
        format: 'Online textbook chapter', access: 'Free', difficulty: 'Intermediate',
        skills: ['Statistics', 'Evaluation'], verified: 'verified', checked: CHECKED,
        note: 'All code examples use R. Use the concepts (benchmarks, training and test sets, rolling-origin evaluation) and write the equivalents in Python.',
    },
    imc: {
        title: 'IMC US Recruitment Process', provider: 'IMC Trading', url: 'https://www.imc.com/us/careers/recruitment-process',
        format: 'Employer web page', access: 'Free', difficulty: 'Intro',
        skills: ['Recruiting'], verified: 'verified', checked: CHECKED,
        note: 'Describes one firm\'s process as of the check date. Always confirm current details on the official listing.',
    },
    optiver: {
        title: 'Optiver: Trading and Market Making', provider: 'Optiver', url: 'https://www.optiver.com/what-we-do/trading/',
        format: 'Employer web page', access: 'Free', difficulty: 'Intro',
        skills: ['Markets', 'Recruiting'], verified: 'verified', checked: CHECKED,
        note: 'Describes how one firm frames trading work. Treat it as one example, not a universal definition.',
    },
    khan: {
        title: 'Khan Academy Math (algebra, logarithms, calculus, linear algebra, statistics)', provider: 'Khan Academy', url: 'https://www.khanacademy.org/math',
        format: 'Videos and practice exercises', access: 'Free; a free account is optional for progress tracking', difficulty: 'Intro',
        skills: ['Mathematics'], verified: 'verified', checked: CHECKED,
        note: 'Course list confirmed on Khan Academy\'s own site: Algebra 1, Algebra 2 (including a Logarithms unit), Precalculus (including Vectors, Matrices, and Probability and combinatorics), Differential Calculus, Integral Calculus, Linear Algebra, Statistics and probability.',
    },
    mit1806: {
        title: '18.06 Linear Algebra (Spring 2010)', provider: 'MIT OpenCourseWare', url: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/',
        format: 'Video lectures and notes', access: 'Free', difficulty: 'Intermediate',
        skills: ['Mathematics'], verified: 'unverified', checked: CHECKED,
        note: 'This link comes from the DevilQuant Getting Started guide. We haven\'t re-checked it.',
    },
    myntbit: {
        title: 'MyntBit', provider: 'MyntBit', url: 'https://myntbit.com/',
        format: 'Interview practice platform', access: 'Free tier; paid plans', difficulty: 'Intro to advanced',
        skills: ['Interview practice'], verified: 'partial', checked: CHECKED,
        note: 'We checked the homepage. There\'s a trader track too, but we haven\'t opened that page.',
    },
    pyFinance: {
        title: 'Python for Finance (1st edition)', provider: 'Yves Hilpisch, O\'Reilly', url: 'https://www.amazon.com/dp/1491945281',
        format: 'Book', access: 'Paid', difficulty: 'Intermediate',
        skills: ['Python', 'Data analysis'], verified: 'unverified', checked: CHECKED,
        note: 'Club members say Citadel recommends this book, but we haven\'t been able to confirm that. You don\'t need it, and there may be a newer edition.',
    },
    greenBook: {
        title: 'A Practical Guide to Quantitative Finance Interviews (the "Little Green Book")', provider: 'Xinfeng Zhou. Linked through our Getting Started with Quant guide', url: '/resources?guide=getting-started-with-quant',
        format: 'Book', access: 'Paid book', difficulty: 'Intermediate',
        skills: ['Probability', 'Brain teasers', 'Interview prep'], verified: 'verified', checked: '2026-11-26',
    },
    mathOgenius: {
        title: 'Learn lightning Fast Mental Maths', provider: 'mathOgenius (YouTube)', url: 'https://www.youtube.com/playlist?list=PLQCYtYck4nKzDCdcKCNyZa_TV_5lhoyEk',
        format: 'Video playlist, 31 short videos', access: 'Free', difficulty: 'Intro',
        skills: ['Mental arithmetic', 'Percentages'], verified: 'verified', checked: '2026-11-26',
    },
    acRoadmapVideo: {
        title: '2026 Quant Roadmap | Projects Skills and Tips to become a Developer Trader or Researcher', provider: 'Algebraic Continuation (YouTube)', url: 'https://www.youtube.com/watch?v=xPxmMFPbfFU',
        format: 'Video, about 20 minutes', access: 'Free', difficulty: 'Intro',
        skills: ['Career planning', 'Recruiting', 'Project ideas'], verified: 'verified', checked: '2026-11-26',
        note: 'One creator\'s opinions, which he says he checked with a few people in the industry. Treat it as advice, not a rule.',
    },
    dqInternship: {
        title: 'Landing a quant internship', provider: 'DevilQuant', url: '/resources?guide=landing-a-quant-internship',
        format: 'DevilQuant guide', access: 'Free', difficulty: 'Intro',
        skills: ['Recruiting'], verified: 'verified', checked: CHECKED,
    },
    dqMonteCarlo: {
        title: 'Monte Carlo simulator guide', provider: 'DevilQuant', url: '/resources?guide=monte-carlo-simulator',
        format: 'DevilQuant guide', access: 'Free', difficulty: 'Intermediate',
        skills: ['Python', 'Simulation'], verified: 'verified', checked: CHECKED,
    },
    dqOptions: {
        title: 'Options pricing engine guide', provider: 'DevilQuant', url: '/resources?guide=options-pricing-engine',
        format: 'DevilQuant guide', access: 'Free', difficulty: 'Intermediate',
        skills: ['Derivatives', 'Python'], verified: 'verified', checked: CHECKED,
    },
};

export default resources;
