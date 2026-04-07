const guide = {
  slug: "getting-started-with-quant",
  title: "Getting Started with Quant",
  description: "A beginner's roadmap to quantitative finance from essential math to your first strategy.",
  sections: [
    {
      id: "what-is-quant-finance",
      title: "What is Quant Finance?",
      content: `
        <p>Quantitative finance applies mathematical models, statistical analysis, and computational techniques to financial markets. Quants work across a wide spectrum:</p>
        <ul>
          <li><strong>Quantitative Trading</strong> — developing and executing algorithmic trading strategies</li>
          <li><strong>Quantitative Research</strong> — building models to identify market inefficiencies and alpha signals</li>
          <li><strong>Risk Management</strong> — modeling portfolio risk, VaR, stress testing</li>
          <li><strong>Financial Engineering</strong> — pricing derivatives, structuring products</li>
        </ul>
        <p>DevilQuant is a community of hard-working individuals interested in breaking into tech, quantitative finance, and other high-octane, highly technical fields.</p>
      `,
    },
    {
      id: "essential-math-and-stats",
      title: "Essential Math & Stats",
      content: `
        <p>You don't need a PhD to get started, but a solid foundation helps. Here's what matters most:</p>

        <table>
          <thead>
            <tr>
              <th>Topic</th>
              <th>Why It Matters</th>
              <th>Where to Learn</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Linear Algebra</td>
              <td>Portfolio optimization, PCA, factor models</td>
              <td><a href="https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/" target="_blank" rel="noopener noreferrer">MIT 18.06 (Gilbert Strang)</a></td>
            </tr>
            <tr>
              <td>Probability & Statistics</td>
              <td>Everything — distributions, hypothesis testing, regression</td>
              <td><a href="https://www.khanacademy.org/math/statistics-probability" target="_blank" rel="noopener noreferrer">Khan Academy Stats</a></td>
            </tr>
            <tr>
              <td>Calculus</td>
              <td>Optimization, derivatives pricing (Black-Scholes)</td>
              <td>Your university courses (MAT 265–267)</td>
            </tr>
            <tr>
              <td>Time Series Analysis</td>
              <td>Forecasting, mean-reversion, ARIMA/GARCH models</td>
              <td><a href="https://otexts.com/fpp3/" target="_blank" rel="noopener noreferrer">Forecasting: Principles and Practice</a></td>
            </tr>
          </tbody>
        </table>
      `,
    },
    {
      id: "programming-skills",
      title: "Programming Skills",
      content: `
        <p>Python is the lingua franca of quant finance. Here's what you should be comfortable with:</p>
        <ul>
          <li><strong>Python fundamentals</strong> — data structures, OOP, writing clean code</li>
          <li><strong>NumPy & Pandas</strong> — data manipulation and numerical computing</li>
          <li><strong>Matplotlib / Plotly</strong> — visualizing data and strategy performance</li>
          <li><strong>Scikit-learn</strong> — basic ML models (regression, classification, clustering)</li>
          <li><strong>Jupyter Notebooks</strong> — rapid prototyping and research</li>
        </ul>

        <div class="guide-callout guide-callout-info">
          <strong>Bonus:</strong> Learning C++ or Rust will make you stand out for high-frequency trading roles, but is absolutely not required to get started.
        </div>
      `,
    },
    {
      id: "key-resources-and-books",
      title: "Key Resources & Books",
      content: `
        <p>These are some of the most recommended readings in the quant community:</p>
        <ul>
          <li><strong>"Quantitative Trading" by Ernie Chan</strong> — practical guide to building your own trading business, covers backtesting and strategy development</li>
          <li><strong>"Advances in Financial Machine Learning" by Marcos López de Prado</strong> — cutting-edge ML techniques applied to finance (more advanced)</li>
          <li><strong>"Options, Futures, and Other Derivatives" by John Hull</strong> — the classic derivatives textbook</li>
          <li><strong>"Python for Finance" by Yves Hilpisch</strong> — great bridge between Python programming and financial analysis</li>
        </ul>

        <div class="guide-callout guide-callout-good">
          <strong>Free alternative:</strong> <a href="https://www.quantstart.com/articles/" target="_blank" rel="noopener noreferrer">QuantStart articles</a> cover many of the same topics in blog format, completely free.
        </div>
      `,
    },
    {
      id: "the-little-green-book",
      title: "The Little Green Book",
      content: `
        <p>If there is one absolute must-have resource for breaking into the industry, it is <strong>"A Practical Guide to Quantitative Finance Interviews"</strong> by Xinfeng Zhou (often affectionately referred to as the <em>"Little Green Book"</em>).</p>
        <div class="guide-callout guide-callout-info">
          This book is arguably the most important resource for quantitative interviews. It covers the specific style of probability, calculus, linear algebra, and brainteaser questions that you will actually face during the interview process.
        </div>
      `,
    },
    {
      id: "practice-platforms",
      title: "Practice Platforms",
      content: `
        <p>Get hands-on experience with these platforms:</p>
        <table>
          <thead>
            <tr>
              <th>Platform</th>
              <th>What It's For</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="https://www.quantconnect.com/" target="_blank" rel="noopener noreferrer">QuantConnect</a></td>
              <td>Cloud-based algo trading & backtesting (Python/C#)</td>
              <td>Free tier available</td>
            </tr>
            <tr>
              <td><a href="https://quantable.io/" target="_blank" rel="noopener noreferrer">Quantable</a></td>
              <td>Quantitative analysis and strategy sharing</td>
              <td>Free</td>
            </tr>
            <tr>
              <td><a href="https://www.kaggle.com/" target="_blank" rel="noopener noreferrer">Kaggle</a></td>
              <td>Financial datasets and competitions</td>
              <td>Free</td>
            </tr>
            <tr>
              <td><a href="https://www.investopedia.com/simulator/" target="_blank" rel="noopener noreferrer">Investopedia Simulator</a></td>
              <td>Paper trading with virtual money</td>
              <td>Free</td>
            </tr>
          </tbody>
        </table>
      `,
    },
  ],
};

export default guide;
