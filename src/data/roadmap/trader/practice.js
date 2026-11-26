// Practice problems written for the Trader path, kept for a future quiz feature.
// They are not shown on the roadmap page. Keyed by stage id.

const practice = {
    s1: [
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
    s2: [
            {
                id: 'p1', title: 'A simple dice game',
                q: 'You roll a fair die. If the roll is even you win that many dollars. If it is odd you lose $3. What is the expected value of one play?',
                hints: ['List the six outcomes and the payoff for each.', 'Each outcome has probability 1/6.', 'Sum payoff times probability.'],
                solution: 'Even rolls pay 2, 4, 6, total 12. Odd rolls cost 3 each, three of them, total −9. Expected value = (12 − 9) / 6 = +$0.50 per play.',
            },
            {
                id: 'p2', title: 'Which coin is it?',
                q: 'One of two coins is chosen at random. Coin A is fair. Coin B lands heads 70% of the time. You flip the chosen coin once and see heads. What is the probability it was coin B?',
                hints: ['Compute the probability of heads from each coin, weighted by the chance of picking that coin.', 'Bayes: P(B | heads) = P(B and heads) / P(heads).'],
                solution: 'P(B and heads) = 0.5 × 0.7 = 0.35. P(A and heads) = 0.5 × 0.5 = 0.25. P(B | heads) = 0.35 / 0.60 = 7/12 ≈ 0.583.',
            },
            {
                id: 'p3', title: 'Maximum by linearity',
                q: 'Find the expected maximum of two fair dice without listing all 36 outcomes. Then confirm your answer with a simulation of one million trials.',
                hints: ['Use E[max] = sum over k of P(max ≥ k).', 'P(max ≥ k) = 1 − ((k − 1)/6)^2.', 'For the simulation use a seeded generator and report the standard error.'],
                solution: 'P(max ≥ k) for k = 1 to 6 is 1, 35/36, 32/36, 27/36, 20/36, 11/36. Sum = (36 + 35 + 32 + 27 + 20 + 11) / 36 = 161/36 ≈ 4.4722. A million-trial simulation should land within about 0.005 of this, and your reported standard error should be near 0.0014.',
            },
    ],
    s3: [
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
    s4: [
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
    s5: [
            {
                id: 'p1', title: 'Twenty tests',
                q: 'You try 20 unrelated trading ideas and test each at the 5% level. What is the probability that at least one passes by luck? What per-test threshold would keep the overall chance at 5%?',
                hints: ['Find the probability that none passes first.', 'Use 0.95 raised to the number of tests.', 'For the threshold, divide 0.05 by the number of tests.'],
                solution: '0.95^20 = 0.3585, so at least one passes with probability 0.6415. A Bonferroni threshold is 0.05 / 20 = 0.0025 per test.',
            },
            {
                id: 'p2', title: 'Is a correlation of 0.10 real?',
                q: 'A signal has a correlation of 0.10 with next-day returns across 250 days. Compute the t statistic and say whether it is significant at the 5% level.',
                hints: ['The statistic is r √(n − 2) / √(1 − r²).', 'The two-sided 5% cutoff is about 1.97 for this many observations.'],
                solution: 't = 0.10 × √248 / √0.99 = 1.58. That is below 1.97, so it is not significant. A correlation of 0.10 sounds small but can be economically useful, which is why you need far more data to be sure.',
            },
            {
                id: 'p3', title: 'A short-sample Sharpe ratio',
                q: 'A strategy has an annualised Sharpe ratio of 2.0 over 60 trading days. Using the approximation SE = √((1 + SR² / 2) / T) with T in years, how uncertain is the estimate? Would you trust it?',
                hints: ['T is 60 divided by 252 years.', 'Plug SR = 2 into the formula.', 'Compare the standard error with the estimate itself.'],
                solution: 'T = 0.238 and SE = √(3 / 0.238) = 3.55. The standard error (3.55) is larger than the estimate (2.0). An approximate 95% interval is 2 ± 1.96 × 3.55, roughly −5 to 9, which includes zero. With so little data, you could not trust it.',
            },
            {
                id: 'p4', title: 'Win rate versus payoff',
                q: 'A strategy wins 70% of the time for +1 and loses 30% of the time for −3. A second wins 40% for +3 and loses 60% for −1. Compare their expected value per trade.',
                hints: ['Expected value is probability times payoff, summed.', 'Compute each strategy separately.'],
                solution: 'First: 0.7 × 1 − 0.3 × 3 = −0.2. Second: 0.4 × 3 − 0.6 × 1 = +0.6. The strategy that wins less often is the profitable one.',
            },
    ],
    s6: [
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
};

export default practice;
