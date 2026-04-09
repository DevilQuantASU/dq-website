const guide = {
  slug: "options-pricing-engine",
  title: "Options Pricing Engine",
  description: "Build an engine that prices options contracts and calculates their risk sensitivities from scratch.",
  sections: [
    {
      id: "the-idea",
      title: "The Idea",
      content: `
        <p>Options are derivatives. Their value is derived from an underlying asset (usually a stock). The question every options trader needs answered is: <strong>"What is this contract actually worth right now?"</strong></p>
        <p>The goal of this project is to implement the models that answer that question. You'll build an engine that takes in a stock price, strike price, time to expiration, volatility, and risk-free rate, then outputs the theoretical price of the option along with its risk sensitivities (the Greeks).</p>
      `,
    },
    {
      id: "black-scholes",
      title: "Black-Scholes Model",
      content: `
        <p>The Black-Scholes model is the starting point for pretty much all options pricing. It gives you a closed-form formula for European call and put prices. The key assumptions are that the stock follows Geometric Brownian Motion, there are no dividends, and you can trade continuously with no transaction costs.</p>
        <p>The inputs:</p>
        <ul>
          <li><strong>S:</strong> Current stock price</li>
          <li><strong>K:</strong> Strike price of the option</li>
          <li><strong>T:</strong> Time to expiration (in years)</li>
          <li><strong>r:</strong> Risk-free interest rate</li>
          <li><strong>σ:</strong> Volatility of the underlying stock</li>
        </ul>
        <div class="guide-callout guide-callout-warning">
          <strong>Heads up:</strong> Black-Scholes assumptions don't hold in real markets. Volatility isn't constant, stocks can jump, and you definitely can't trade continuously for free. But understanding the model and <em>why</em> it breaks down is exactly what interviewers want to hear you talk about.
        </div>
      `,
    },
    {
      id: "the-greeks",
      title: "The Greeks",
      content: `
        <p>The Greeks measure how sensitive an option's price is to changes in different inputs. This is where the project gets interesting, because these are the numbers traders actually use to manage risk in real time.</p>
        <ul>
          <li><strong>Delta (Δ):</strong> How much the option price changes per $1 move in the stock. A delta of 0.5 means the option moves ~$0.50 for every $1 the stock moves.</li>
          <li><strong>Gamma (Γ):</strong> How fast delta itself changes. High gamma means your risk profile shifts quickly.</li>
          <li><strong>Theta (Θ):</strong> How much value the option loses per day just from time passing. Options are decaying assets.</li>
          <li><strong>Vega (ν):</strong> How much the option price changes per 1% change in implied volatility. This is huge because vol is the one input to Black-Scholes that isn't directly observable.</li>
          <li><strong>Rho (ρ):</strong> Sensitivity to interest rate changes. Usually the least important Greek, but still worth implementing.</li>
        </ul>
        <div class="guide-callout guide-callout-info">
          <strong>Interview note:</strong> You will almost certainly be asked about the Greeks in any derivatives-related interview. Being able to explain what they mean intuitively (not just the formulas) is critical.
        </div>
      `,
    },
    {
      id: "what-to-build",
      title: "What to Build",
      content: `
        <p>The project breaks down into a few pieces:</p>
        <ul>
          <li><strong>Black-Scholes Pricer:</strong> Implement the closed-form formulas for European calls and puts. Calculate all five Greeks analytically (the formulas are well-documented, just make sure you actually understand the derivation).</li>
          <li><strong>Binomial Tree Pricer:</strong> Implement a Cox-Ross-Rubinstein binomial tree as a second pricing method. This handles American options (which can be exercised early) that Black-Scholes can't price. It's also way more intuitive to visualize.</li>
          <li><strong>Visualization:</strong> Plot how the option price and each Greek change as you vary the inputs. For example, plot delta vs. stock price for different expirations on the same chart. These "Greek surfaces" are great for building intuition.</li>
        </ul>
      `,
    },
    {
      id: "extensions",
      title: "Taking It Further",
      content: `
        <p>Once you have the base engine working, there are some really strong extensions:</p>
        <ul>
          <li><strong>Implied Volatility Solver:</strong> Given a real market price for an option, back out what volatility the market is implying. This requires a numerical root-finding method (Newton-Raphson works well here, and vega is conveniently the derivative you need).</li>
          <li><strong>Volatility Surface:</strong> Pull real options chain data (from <code>yfinance</code> or an API), calculate implied vol for each strike and expiration, and plot the resulting 3D surface. The fact that this surface isn't flat is called the "volatility smile" and it directly contradicts a core Black-Scholes assumption.</li>
          <li><strong>Monte Carlo Pricer:</strong> Add a third pricing method using Monte Carlo simulation. This is especially useful for exotic options (barrier options, Asian options) where no closed-form solution exists.</li>
        </ul>
      `,
    }
  ],
};

export default guide;
