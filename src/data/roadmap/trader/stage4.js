const stage = {
    id: 's4',
    title: 'Market mechanics, pricing, and derivatives',
    type: 'Core',
    description: 'Learn how orders turn into trades, how market makers make (and lose) money, and how futures and options get priced and hedged.',
    purpose: 'You\'ve got the probability and the risk thinking down. Now add the market itself: order books, spreads, futures, and enough options to read a payoff, use put-call parity, and hedge delta. The deeper pricing theory is there if you want it, as a desk-specific or optional extra.',
    prerequisites: ['Stage 3, or you already know expected value, standard error, and how to run a seeded simulation.', 'Comfort with exponentials and logs from Stage 1.'],
    alongside: 'Sometime during this stage, read one firm\'s recruiting page and write down, in your own words, how their process works and when it happens.',
    lessons: [
        {
            id: 'l1', label: 'Core', title: 'Order books, spreads, and liquidity', hours: 6,
            outcomes: ['Read a limit order book and say what a market order will end up paying.', 'Explain bid, ask, spread, mid price, and slippage.', 'Explain why the spread is what you pay for being able to trade right now.'],
            resources: [
                { key: 'harris', section: 'Optional, and it costs money (or check your library). We didn\'t check the chapter titles, so use the index to find order types and market structure.', alt: true },
            ],
            note: 'We couldn\'t find a free source we trust that explains order books well, so this lesson is built around the example below. Make up a few order books of your own and walk through them the same way. The Stage 5 capstone gives you a fake market to play with too.',
            worked: {
                title: 'Walking the book',
                prompt: 'The book has bids for 300 shares at 100.00 and 200 at 99.99, and asks of 200 at 100.02 and 300 at 100.03. You send a market order to buy 500. What\'s your average price, and how much worse is that than the mid price?',
                steps: ['The best bid is 100.00 and the best ask is 100.02, so the mid is 100.01 and the spread is 0.02.', 'Your order takes 200 at 100.02 (20,004) and 300 at 100.03 (30,009), for 50,013 total.', 'Average price = 50,013 / 500 = 100.026.', 'That\'s 100.026 − 100.01 = 0.016 per share worse than the mid, or 0.016 × 500 = $8.00 total.'],
                answer: 'Average 100.026; $8.00 worse than the mid',
            },
        },
        {
            id: 'l2', label: 'Core', title: 'Market making: quotes, inventory, and adverse selection', hours: 6,
            outcomes: ['Explain how a market maker earns the spread, and what risk comes with it.', 'Work out expected profit per trade when some of the people trading with you know more than you do.', 'Explain how your quotes should shift as you pile up inventory.'],
            resources: [
                { key: 'optiver', section: 'Their trading page, for how one firm talks about pricing and managing risk. Good background, but it\'s not a tutorial.' },
            ],
            note: 'Everything you need is in this lesson. Do the worked example, then redo it with a different mix of informed and uninformed traders before you move on.',
            worked: {
                title: 'Adverse selection',
                prompt: 'You quote 0.02 on either side of fair value. 70% of the people who trade with you don\'t know anything special. The other 30% do, and after they trade the true value moves 0.10 against you. What do you make per trade on average, and how wide do you need to quote to break even?',
                steps: ['Against someone who doesn\'t know anything, you pocket the 0.02.', 'Against someone who does, you pocket the 0.02 but lose the 0.10 move: 0.02 − 0.10 = −0.08.', 'On average: 0.7 × 0.02 + 0.3 × (−0.08) = 0.014 − 0.024 = −0.010 per trade.', 'For a half-spread h: 0.7h + 0.3(h − 0.10) = h − 0.03. You break even at h = 0.03.'],
                answer: 'You lose 0.01 per trade at 0.02; you break even at 0.03',
            },
        },
        {
            id: 'l3', label: 'Core', title: 'Futures and forwards', hours: 5,
            outcomes: ['Work out profit and loss on a futures position from a price change and the contract multiplier.', 'Explain margin, mark to market, and settlement.', 'Work out a forward price with continuous compounding.'],
            resources: [
                { key: 'cme', section: 'The modules "Definition of a futures contract", "Tick movements", "About contract notional value", "Mark to market", "Margin", and "Calculating futures contract profit or loss".' },
            ],
            worked: {
                title: 'Futures P&L and a forward price',
                prompt: 'A futures contract pays $50 per point. You\'re long two contracts and the price goes up 3.25 points. How much did you make? Separately, something trades at 100 and the interest rate is 5% (continuously compounded). What\'s the six-month forward price, ignoring dividends and storage?',
                steps: ['Profit = 2 contracts × $50 × 3.25 points = $325.', 'Forward price = 100 × e^(0.05 × 0.5) = 100 × e^0.025 = 102.53.'],
                answer: '$325; 102.53',
            },
        },
        {
            id: 'l4', label: 'Core', title: 'Options basics: payoffs, put-call parity, and the Greeks', hours: 7,
            outcomes: ['Draw the payoff for a call, a put, and a simple spread.', 'Use put-call parity to price a put from a call.', 'Say what delta, gamma, theta, and vega each measure, and work out a delta hedge.'],
            resources: [
                { key: 'oic', section: 'The Greeks and Volatility pages: Understanding Options Greeks, Delta, Gamma, Theta, Vega, and Rho. Also "What is an Option?" and "Put/Call Parity" on the same site.' },
                { key: 'dqOptions', section: 'The DevilQuant options pricing engine guide, if you want to build something hands-on.', alt: true },
            ],
            worked: {
                title: 'Parity and a delta hedge',
                prompt: 'A stock is at 100. A 6-month call with a 100 strike costs 7.50, and the interest rate is 4% (continuous). What should the matching put cost? Separately, you\'re long 10 call contracts (100 shares each) with a delta of 0.55. How many shares do you trade to be delta neutral?',
                steps: ['Put-call parity: C − P = S − K e^(−rT).', 'K e^(−rT) = 100 × e^(−0.02) = 98.02, so C − P = 100 − 98.02 = 1.98.', 'P = 7.50 − 1.98 = 5.52.', 'Your delta = 10 contracts × 100 shares × 0.55 = 550 shares\' worth.', 'Short 550 shares to get to delta neutral.'],
                answer: 'Put = 5.52; short 550 shares',
            },
        },
        {
            id: 'l5', label: 'Desk-specific', desk: 'mm', title: 'Binomial pricing, Black-Scholes, and implied volatility', hours: 6,
            outcomes: ['Price a one-step option by building a portfolio that copies it.', 'Explain each input to Black-Scholes, and what implied volatility means.', 'Write a simple pricing function, with tests.'],
            resources: [
                { key: 'oic', section: 'The "Black-Scholes Formula", "Historical and Implied Volatility Calculator", and "Volatility and the Greeks" pages.' },
                { key: 'dqOptions', section: 'The DevilQuant options pricing engine guide.', alt: true },
                { key: 'natenberg', section: 'Optional, and it costs money. We didn\'t check the chapter titles.', alt: true },
            ],
            worked: {
                title: 'Copying an option in one step',
                prompt: 'A stock at 100 will go to either 110 or 90. Interest rates are zero. A call has a 100 strike. What\'s it worth, and what hedge copies it?',
                steps: ['The call pays 10 if the stock goes up and 0 if it goes down.', 'Delta = (10 − 0) / (110 − 90) = 0.5 shares.', 'Hold 0.5 shares and borrow enough to match. If it goes up: 55 − 10 = 45. If it goes down: 45 − 0 = 45. You owe 45 either way, so that\'s the riskless borrowing.', 'Price = 0.5 × 100 − 45 = 5.00.'],
                answer: 'Worth 5.00; hedge with 0.5 shares',
            },
        },
        {
            id: 'l6', label: 'Optional', title: 'Deeper derivatives theory and stochastic calculus', hours: 5,
            outcomes: ['Follow a derivation of the Black-Scholes equation, if you\'re curious where the formula comes from.'],
            resources: [
                { key: 'natenberg', section: 'Optional, and it costs money. We didn\'t check the chapter titles.' },
            ],
            note: 'You don\'t need this to finish the path. Come back after the capstone if it sounds interesting.',
        },
    ],
    mistakes: [
        { mistake: 'Forgetting contract multipliers and share counts.', fix: 'Write the unit next to every number: points, dollars per point, contracts, shares.' },
        { mistake: 'Leaving out the discounting in put-call parity.', fix: 'Write C − P = S − K e^(−rT) at the top of the page before you plug anything in.' },
        { mistake: 'Setting a hedge once and forgetting about it.', fix: 'Delta changes as the stock moves, so redo the hedge each time and keep track of what rebalancing costs you.' },
        { mistake: 'Assuming everyone trading with you knows the same amount.', fix: 'Split your example into informed and uninformed traders and watch how the break-even spread moves.' },
    ],
    skip: 'If you can already walk through an order book, price a put from a call, and work out a delta hedge, skip to Stage 5. The OIC Greeks pages are still worth a quick read.',
    next: 'Open CME\'s "Introduction to Futures" course and start with the module that defines a futures contract. Then try walking through an order book on paper like the example in lesson 1.',
};

export default stage;
