const guide = {
  slug: "portfolio-optimizer",
  title: "Portfolio Optimizer",
  description: "Build a tool that finds the mathematically optimal way to allocate capital across a set of assets.",
  sections: [
    {
      id: "the-idea",
      title: "The Idea",
      content: `
        <p>Say you have $10,000 and want to invest in 5 different stocks. How much do you put in each one? Most people just eyeball it or split it evenly. But there's an entire branch of math dedicated to answering this question optimally.</p>
        <p>The goal of this project is to build a tool that takes in a set of tickers and spits out the best allocation weights based on historical data. "Best" here means the allocation that maximizes return for a given level of risk, or minimizes risk for a given target return.</p>
      `,
    },
    {
      id: "the-theory",
      title: "The Theory (Markowitz)",
      content: `
        <p>This project is built on <strong>Modern Portfolio Theory (MPT)</strong>, introduced by Harry Markowitz in 1952. The core insight is that you shouldn't evaluate assets in isolation. What matters is how they move <em>relative to each other</em>.</p>
        <p>Two stocks that are both volatile on their own can actually reduce your overall portfolio risk if they tend to move in opposite directions. That's diversification, but quantified.</p>
        <p>The key inputs you need:</p>
        <ul>
          <li><strong>Expected Returns (μ):</strong> The mean historical return for each asset. Usually estimated from daily log returns.</li>
          <li><strong>Covariance Matrix (Σ):</strong> A matrix that captures how every pair of assets moves together. This is the core of the whole optimization.</li>
        </ul>
        <div class="guide-callout guide-callout-info">
          <strong>Why this matters:</strong> Mean-variance optimization is one of the most fundamental concepts in quantitative finance. It comes up in interviews, it comes up on the job, and it's the foundation that more advanced models build on top of.
        </div>
      `,
    },
    {
      id: "what-to-build",
      title: "What to Build",
      content: `
        <p>The project has three main pieces:</p>
        <ul>
          <li><strong>Data Layer:</strong> Pull historical price data for a user-provided list of tickers. Calculate daily returns, the mean return vector, and the covariance matrix. <code>yfinance</code> and <code>numpy</code> handle all of this.</li>
          <li><strong>Optimizer:</strong> Use <code>scipy.optimize.minimize</code> to find the set of portfolio weights that minimizes portfolio variance for a given target return. You'll need to set up constraints (weights sum to 1, no negative weights unless you allow shorting).</li>
          <li><strong>Efficient Frontier:</strong> Run the optimizer across a range of target returns and plot the resulting curve. This is the efficient frontier, and it's one of the most recognizable charts in finance. Every point on that curve is an "optimal" portfolio for its level of risk.</li>
        </ul>
      `,
    },
    {
      id: "key-outputs",
      title: "Key Outputs",
      content: `
        <p>A good version of this project should produce:</p>
        <ul>
          <li><strong>Efficient Frontier Plot:</strong> Risk (std dev) on the x-axis, return on the y-axis. Plot the curve and highlight the tangency portfolio (maximum Sharpe ratio) and the minimum variance portfolio.</li>
          <li><strong>Optimal Weights:</strong> For any point on the frontier, show the exact percentage allocation to each asset.</li>
          <li><strong>Sharpe Ratio:</strong> The risk-adjusted return metric. The tangency portfolio is the one that maximizes this.</li>
          <li><strong>Comparison:</strong> Show how the optimized portfolio stacks up against an equal-weight portfolio or the S&P 500 over the same period. This makes the value of the optimization immediately obvious.</li>
        </ul>
      `,
    },
    {
      id: "extensions",
      title: "Taking It Further",
      content: `
        <p>The base version of this project uses vanilla Markowitz, which has some well-known problems (it's extremely sensitive to the estimated inputs). Here are ways to make it more robust and more impressive:</p>
        <ul>
          <li><strong>Black-Litterman Model:</strong> Instead of relying purely on historical returns, Black-Litterman lets you blend market equilibrium returns with your own views (e.g., "I think AAPL will outperform by 2%"). This produces much more stable and intuitive allocations.</li>
          <li><strong>Risk Parity:</strong> Instead of optimizing for return, allocate so that each asset contributes equally to total portfolio risk. This is how a lot of big institutional funds actually operate (Bridgewater's All Weather is the famous example).</li>
          <li><strong>Transaction Costs:</strong> Add realistic constraints like trading fees and minimum position sizes. Rebalancing a portfolio isn't free, and accounting for that is a nice touch.</li>
        </ul>
      `,
    }
  ],
};

export default guide;
