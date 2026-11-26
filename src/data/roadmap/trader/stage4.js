const stage = {
    id: 's4',
    title: 'Market mechanics, pricing, and derivatives',
    type: 'Core',
    description: 'Learn how orders become trades, how a market maker earns and loses money, and how futures and options are priced and hedged.',
    purpose: 'You have the probability and the risk thinking. This stage adds the market: order books, spreads, futures, and enough options to read a payoff, apply put-call parity, and hedge delta. Deeper pricing theory is a desk-specific or optional extension.',
    prerequisites: ['Stage 3 or the equivalent: expected value, standard error, and a seeded simulation.', 'Comfort with exponentials and logarithms from Stage 1.'],
    alongside: 'Read one firm\'s recruiting page this stage and write down its stated process and timing in your own words.',
    lessons: [
        {
            id: 'l1', label: 'Core', title: 'Order books, spreads, and liquidity', hours: 6,
            outcomes: ['Read a limit order book and say what a market order will pay.', 'Define bid, ask, spread, mid price, and slippage.', 'Explain why a wider spread is the price of providing liquidity.'],
            resources: [
                { key: 'harris', section: 'Optional and paid, through publisher or library access. Chapter titles were not checked, so use the book index to find order types and market structure.', alt: true },
            ],
            note: 'We did not find a free, checked source that covers order books well. This lesson is built around the example below and a practice notebook you write yourself. The Stage 5 capstone gives you a synthetic market to experiment with.',
            worked: {
                title: 'Walking the book',
                prompt: 'The book shows bids of 300 shares at 100.00 and 200 at 99.99, and asks of 200 at 100.02 and 300 at 100.03. You send a market order to buy 500. What is your average price, and how much worse is it than the mid price?',
                steps: ['The best bid is 100.00 and the best ask is 100.02, so the mid price is 100.01 and the spread is 0.02.', 'Your order takes 200 at 100.02 (20,004) and 300 at 100.03 (30,009), total 50,013.', 'Average price = 50,013 / 500 = 100.026.', 'Slippage against the mid = 100.026 − 100.01 = 0.016 per share, or 0.016 × 500 = $8.00 in total.'],
                answer: 'Average 100.026; slippage $8.00 versus the mid',
            },
        },
        {
            id: 'l2', label: 'Core', title: 'Market making: quotes, inventory, and adverse selection', hours: 6,
            outcomes: ['Explain how a market maker earns the spread and what risk it takes.', 'Compute the expected profit per trade given a mix of informed and uninformed counterparties.', 'Describe how quotes should move when inventory builds up.'],
            resources: [
                { key: 'optiver', section: 'The trading page, for how one firm describes pricing and managing risk. Read it for context, not as a teaching text.' },
            ],
            note: 'This lesson is self-contained. Do the worked example, then try the practice problem on adverse selection before moving on.',
            worked: {
                title: 'Adverse selection',
                prompt: 'You quote a half-spread of 0.02 around a fair value. 70% of the trades against you are uninformed and 30% are informed. After an informed trade the true value moves 0.10 against you. What is your expected profit per trade, and what half-spread breaks even?',
                steps: ['Against an uninformed trader you earn the half-spread: +0.02.', 'Against an informed trader you earn the half-spread but lose the 0.10 move: 0.02 − 0.10 = −0.08.', 'Expected profit = 0.7 × 0.02 + 0.3 × (−0.08) = 0.014 − 0.024 = −0.010 per trade.', 'For half-spread h: 0.7h + 0.3(h − 0.10) = h − 0.03. Break even at h = 0.03.'],
                answer: '−0.01 per trade at a half-spread of 0.02; break-even half-spread 0.03',
            },
        },
        {
            id: 'l3', label: 'Core', title: 'Futures and forwards', hours: 5,
            outcomes: ['Compute profit and loss on a futures position from a price change and a contract multiplier.', 'Explain margin, mark to market, and settlement.', 'Compute a forward price with continuous compounding.'],
            resources: [
                { key: 'cme', section: 'Modules "Definition of a futures contract", "Tick movements", "About contract notional value", "Mark to market", "Margin", and "Calculating futures contract profit or loss".' },
            ],
            worked: {
                title: 'Futures P&L and a forward price',
                prompt: 'A futures contract has a multiplier of $50 per point. You are long two contracts and the price rises 3.25 points. What is your profit? Separately, an asset trades at 100 and the continuously compounded interest rate is 5%. What is the six-month forward price, ignoring dividends and storage?',
                steps: ['Profit = 2 contracts × $50 × 3.25 points = $325.', 'Forward price = 100 × e^(0.05 × 0.5) = 100 × e^0.025 = 102.53.'],
                answer: '$325; 102.53',
            },
        },
        {
            id: 'l4', label: 'Core', title: 'Options literacy: payoffs, put-call parity, and the Greeks', hours: 7,
            outcomes: ['Draw the payoff of a call, a put, and a simple spread.', 'Use put-call parity to price a put from a call.', 'Say what delta, gamma, theta, and vega each measure, and compute a delta hedge.'],
            resources: [
                { key: 'oic', section: 'The Greeks and Volatility pages: Understanding Options Greeks, Delta, Gamma, Theta, Vega, and Rho. Also the "What is an Option?" and "Put/Call Parity" pages on the same site.' },
                { key: 'dqOptions', section: 'The DevilQuant options pricing engine guide, for a hands-on version.', alt: true },
            ],
            worked: {
                title: 'Parity and a delta hedge',
                prompt: 'A stock is at 100. A 6-month call with strike 100 costs 7.50 and the interest rate is 4% (continuous). What does the matching put cost? Separately, you are long 10 call option contracts of 100 shares each, with a delta of 0.55. How many shares do you trade to be delta neutral?',
                steps: ['Put-call parity: C − P = S − K e^(−rT).', 'K e^(−rT) = 100 × e^(−0.02) = 98.02, so C − P = 100 − 98.02 = 1.98.', 'P = 7.50 − 1.98 = 5.52.', 'Delta exposure = 10 contracts × 100 shares × 0.55 = 550 share-equivalents.', 'Sell short 550 shares to be delta neutral.'],
                answer: 'Put = 5.52; short 550 shares',
            },
        },
        {
            id: 'l5', label: 'Desk-specific', desk: 'mm', title: 'Binomial pricing, Black-Scholes, and implied volatility', hours: 6,
            outcomes: ['Price a one-step option by replication.', 'State what each input to Black-Scholes means and what implied volatility is.', 'Implement a simple pricing function with tests.'],
            resources: [
                { key: 'oic', section: 'Pages "Black-Scholes Formula", "Historical and Implied Volatility Calculator", and "Volatility and the Greeks".' },
                { key: 'dqOptions', section: 'The DevilQuant options pricing engine guide.', alt: true },
                { key: 'natenberg', section: 'Optional and paid. Chapter titles were not checked.', alt: true },
            ],
            worked: {
                title: 'One-step replication',
                prompt: 'A stock at 100 can go to 110 or 90. The interest rate is zero. A call has strike 100. What is its price, and what hedge replicates it?',
                steps: ['Payoffs: 10 if the stock goes up, 0 if down.', 'Delta = (10 − 0) / (110 − 90) = 0.5 shares.', 'Hold 0.5 shares and borrow to match. Up: 55 − 10 = 45. Down: 45 − 0 = 45. Both cases leave 45, so 45 is the riskless borrowing.', 'Price = 0.5 × 100 − 45 = 5.00.'],
                answer: 'Price 5.00; hedge ratio 0.5',
            },
        },
        {
            id: 'l6', label: 'Optional', title: 'Deeper derivatives theory and stochastic calculus', hours: 5,
            outcomes: ['Read a derivation of the Black-Scholes equation if you are curious about where the formula comes from.'],
            resources: [
                { key: 'natenberg', section: 'Optional and paid. Chapter titles were not checked.' },
            ],
            note: 'Not needed to finish the path. Come back to this after the capstone if it interests you.',
        },
    ],
    practice: [
        {
            id: 'p1', title: 'Walk the book',
            q: 'Asks: 200 shares at 100.02 and 300 at 100.03. You buy 500 at market. Find the average price. If the mid price is 100.01, what is the total cost of crossing the spread compared to the mid?',
            hints: ['Compute the dollar cost of each fill separately.', 'Divide the total by 500.', 'Subtract the mid and multiply by the share count.'],
            solution: 'Cost = 200 × 100.02 + 300 × 100.03 = 50,013. Average = 100.026. Slippage versus the mid is 0.016 × 500 = $8.00.',
        },
        {
            id: 'p2', title: 'A put from a call',
            q: 'A stock is at 100 and the interest rate is 4% continuously compounded. A 6-month call with strike 100 costs 7.50. What should the 6-month put with strike 100 cost? What would you do if it traded at 6.50?',
            hints: ['Use C − P = S − K e^(−rT).', 'Work out K e^(−rT) first.', 'Compare the model value with 6.50 and think about which side is cheap.'],
            solution: 'Parity gives P = 7.50 − 100 + 98.02 = 5.52. If the put trades at 6.50 it is rich by about 0.98, so you would sell the put, buy the call, and short the stock with the cash invested at the rate. Check the sign of each leg by drawing the payoffs.',
        },
        {
            id: 'p3', title: 'Break-even spread',
            q: 'A quote has a half-spread h. 80% of trades are uninformed and 20% are informed. After an informed trade the value moves 0.15 against you. What half-spread breaks even?',
            hints: ['Expected profit per trade = h − (share informed × move).', 'Set that equal to zero.'],
            solution: 'The informed share times the move is 0.2 × 0.15 = 0.03. Expected profit = h − 0.03, so break even at h = 0.03. A quote tighter than this loses money on average, however busy the market is.',
        },
        {
            id: 'p4', title: 'Hedge a position',
            q: 'You are long 12 call contracts of 100 shares each with a delta of 0.40. How many shares do you trade to be delta neutral? If the stock then rises by 1 and delta rises to 0.45, how many additional shares do you trade?',
            hints: ['Delta exposure = contracts × shares per contract × delta.', 'Neutral means the hedge offsets exposure.', 'Compute exposure again at the new delta.'],
            solution: 'Initial exposure = 12 × 100 × 0.40 = 480, so sell 480 shares. After the move exposure is 12 × 100 × 0.45 = 540, so sell another 60 shares. Rebalancing like this is the practice of delta hedging.',
        },
        {
            id: 'p5', title: 'Annualising volatility',
            q: 'Daily returns have a standard deviation of 1.13%. What is the annualised volatility using 252 trading days?',
            hints: ['Volatility scales with the square root of time.', 'Multiply by √252.'],
            solution: '0.0113 × √252 = 0.0113 × 15.87 = 0.1794, or about 17.9% a year.',
        },
    ],
    deliverable: {
        title: 'Market-mechanics notebook',
        text: 'A notebook that includes: an order-book walk with average price and slippage, a quote and P&L simulation for a market maker facing informed and uninformed traders, payoff diagrams for a call, a put, and a spread, a put-call parity check, and a delta hedge of a small option position.',
        doneWhen: ['Each of the five items is present and runs from a clean start.', 'Every formula you use is stated in a comment with its units.', 'You compare at least one result against a hand calculation.'],
    },
    checkpoint: {
        intro: 'Tick each item only when you have met it.',
        items: [
            { id: 'c1', text: 'Five mixed order-book, futures, parity, and hedging problems in 45 minutes: at least 4 correct.' },
            { id: 'c2', text: 'Your notebook meets every "done when" item.' },
            { id: 'c3', text: 'You can explain out loud, in under two minutes, why a market maker widens the spread when informed trading is more likely.' },
            { id: 'c4', text: 'You have completed the CME modules on mark to market, margin, and calculating profit or loss, and can do each calculation by hand.' },
        ],
        target: 'These targets are our own benchmarks. They are not employer score cutoffs.',
    },
    mistakes: [
        { mistake: 'Ignoring contract multipliers and share counts.', fix: 'Write the units next to every number: points, dollars per point, contracts, shares.' },
        { mistake: 'Forgetting the discount factor in put-call parity.', fix: 'Write the identity C − P = S − K e^(−rT) at the top of the page before substituting.' },
        { mistake: 'Treating a hedge as permanent.', fix: 'Delta changes as the stock moves, so recompute the hedge each time and write down the cost of rebalancing.' },
        { mistake: 'Assuming every counterparty is equally informed.', fix: 'Split flow into informed and uninformed in your example, and see how the break-even spread changes.' },
    ],
    skip: 'If you can meet every checkpoint item cold, skip to Stage 5. You may still want to read the OIC Greeks pages once.',
    next: 'Open the CME "Introduction to Futures" course and start with the module on the definition of a futures contract. Then start your notebook with the order-book walk.',
};

export default stage;
