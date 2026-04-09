const guide = {
  slug: "monte-carlo-simulator",
  title: "Monte Carlo Portfolio Simulator",
  description: "Simulate thousands of possible futures for a stock portfolio using randomized statistical modeling.",
  sections: [
    {
      id: "what-is-monte-carlo",
      title: "What is Monte Carlo Simulation?",
      content: `
        <p>Monte Carlo simulation is when you run a model thousands of times with random inputs to see the range of possible outcomes. In finance, this shows up all over the place. Pricing derivatives, stress-testing portfolios, risk modeling, you name it.</p>
        <p>The idea is straightforward: if you can model how a stock price moves on any given day, you can simulate that movement thousands of times into the future and get a probability distribution of where the price could realistically end up.</p>
      `,
    },
    {
      id: "the-math",
      title: "The Math Behind It",
      content: `
        <p>Stock prices are typically modeled using <strong>Geometric Brownian Motion (GBM)</strong>. The daily price change follows this formula:</p>

        <pre><code>S(t+1) = S(t) * exp((μ - σ²/2) * Δt + σ * √Δt * Z)</code></pre>

        <p>Breaking that down:</p>
        <ul>
          <li><strong>S(t)</strong> is the current stock price</li>
          <li><strong>μ</strong> is the expected annual return (you estimate this from historical data)</li>
          <li><strong>σ</strong> is the annual volatility (standard deviation of returns)</li>
          <li><strong>Z</strong> is a random sample from a standard normal distribution</li>
          <li><strong>Δt</strong> is the time step (1/252 for daily, since there are roughly 252 trading days per year)</li>
        </ul>
        <div class="guide-callout guide-callout-info">
          <strong>Why this matters:</strong> GBM is foundational to quantitative finance. It's the basis of the Black-Scholes options pricing model and comes up constantly in quant interviews.
        </div>
      `,
    },
    {
      id: "system-architecture",
      title: "System Architecture",
      content: `
        <p>You don't need a complex tech stack for this. The project breaks down into three clean modules:</p>
        <ul>
          <li><strong>Data Ingestion:</strong> Pull historical price data for your portfolio's tickers (using <code>yfinance</code> or any free API). Calculate the historical mean return (μ) and volatility (σ) for each asset.</li>
          <li><strong>Simulation Engine:</strong> Write a function that takes the calculated μ, σ, a starting portfolio value, and a time horizon, then runs N simulated price paths using the GBM formula. Each path is one possible "future" for the portfolio.</li>
          <li><strong>Analysis and Visualization:</strong> Aggregate the results. Plot all simulated paths on a single chart (the classic "fan chart"). Calculate key statistics like the median outcome, the 5th percentile (worst case), and the 95th percentile (best case).</li>
        </ul>
      `,
    },
    {
      id: "what-to-calculate",
      title: "Key Metrics to Calculate",
      content: `
        <p>Running the simulation is only half the project. The real value is in the analysis you pull from it. These are the metrics that make this project actually stand out:</p>
        <ul>
          <li><strong>Value at Risk (VaR):</strong> "With 95% confidence, the portfolio will not lose more than $X over the next Y days." This is exactly how risk desks at banks and hedge funds quantify downside exposure.</li>
          <li><strong>Expected Shortfall (CVaR):</strong> The average loss in the worst 5% of scenarios. It answers "when things go bad, how bad do they actually get?" Most people consider this a better measure than VaR on its own.</li>
          <li><strong>Probability of Ruin:</strong> What percentage of simulations result in the portfolio dropping below some threshold (e.g., losing more than 20%).</li>
        </ul>
        <div class="guide-callout guide-callout-warning">
          <strong>Interview tip:</strong> If you list VaR on your resume, expect to be asked about its limitations. The big one: VaR tells you nothing about the <em>magnitude</em> of losses beyond the threshold. That's exactly why CVaR exists.
        </div>
      `,
    },
    {
      id: "extensions",
      title: "Taking It Further",
      content: `
        <p>Once the base simulator works, here are some ways to push the complexity:</p>
        <ul>
          <li><strong>Correlated Assets:</strong> If your portfolio holds multiple stocks, their returns are correlated. Use a Cholesky Decomposition on the covariance matrix to generate correlated random samples instead of independent ones. This is a huge signal to recruiters that you understand the math.</li>
          <li><strong>Regime Detection:</strong> Markets behave differently in bull vs. bear environments. Estimate separate μ and σ parameters for each regime and let your simulation switch between them.</li>
          <li><strong>Interactive Dashboard:</strong> Wrap the whole thing in a Streamlit or Flask app where a user can input tickers, portfolio weights, and a time horizon, then see the fan chart and risk metrics update live.</li>
        </ul>
      `,
    }
  ],
};

export default guide;
