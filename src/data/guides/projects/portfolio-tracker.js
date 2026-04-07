const guide = {
  slug: "portfolio-tracker-app",
  title: "Personal Portfolio Tracker",
  description: "Build a web application or CLI tool that tracks the real-time value of simulated stock holdings.",
  sections: [
    {
      id: "project-overview",
      title: "Project Overview",
      content: `
        <p>This project bridges the gap between software engineering and finance. Instead of just analyzing past data, you'll build an application that tracks a simulated portfolio of stocks and updates their value based on live (or slightly delayed) market prices.</p>
        <p><strong>Goal:</strong> Create a tool where a user can "buy" shares of a stock, and the system tracks their total portfolio value and PnL (Profit and Loss).</p>
      `,
    },
    {
      id: "architecture",
      title: "System Architecture",
      content: `
        <p>You can build this as a Node.js web app, a simple React frontend, or a Python Command Line Interface (CLI). Regardless of the platform, the core components are the same:</p>
        <ul>
          <li><strong>Data Storage (Database & State):</strong> A place to store the user's holdings (e.g., "10 shares of MSFT at $300 avg cost"). A simple JSON file or SQLite database works perfectly.</li>
          <li><strong>Market Data API:</strong> A service to fetch current stock prices. <em>Alpha Vantage</em>, <em>Finnhub</em>, or <em>Yahoo Finance</em> are great free options.</li>
          <li><strong>The Application Logic:</strong> Code that calculates the current value of the holdings by multiplying the quantity of shares by the live price retrieved from the API.</li>
        </ul>
      `,
    },
    {
      id: "core-pnl-logic",
      title: "The Core PnL Math",
      content: `
        <p>The core logic of your application will calculate the Unrealized Profit and Loss (PnL).</p>
        
        <pre><code class="language-javascript">// Example in JavaScript
const holdings = [
  { ticker: "AAPL", quantity: 10, averageCost: 150.00 },
  { ticker: "TSLA", quantity: 5, averageCost: 200.00 }
];

async function calculatePortfolioValue() {
  let totalValue = 0;
  let totalCost = 0;

  for (const position of holdings) {
    // Fetch live price from your API of choice
    const livePrice = await fetchLivePrice(position.ticker); 
    
    const positionValue = livePrice * position.quantity;
    const positionCost = position.averageCost * position.quantity;
    
    totalValue += positionValue;
    totalCost += positionCost;
    
    console.log(\`\${position.ticker}: Valued at $\${positionValue.toFixed(2)} (PnL: $\${(positionValue - positionCost).toFixed(2)})\`);
  }

  console.log(\`Total Portfolio Value: $\${totalValue.toFixed(2)}\`);
  console.log(\`Total Return: \${(((totalValue - totalCost) / totalCost) * 100).toFixed(2)}%\`);
}
</code></pre>
      `,
    },
    {
      id: "resume-extensions",
      title: "Making it Resume-Worthy",
      content: `
        <p>This project is highly modular. Here is how you can level it up to impress recruiters:</p>
        
        <div class="guide-callout guide-callout-good">
          <strong>Project Enhancements:</strong>
          <ul>
            <li><strong>Build a UI:</strong> Wrap this logic in a React or Next.js frontend with TailwindCSS to make a beautiful dashboard.</li>
            <li><strong>Persist Data:</strong> Connect the app to a real database (like PostgreSQL or MongoDB) to support multiple users with secure logins.</li>
            <li><strong>Sector Allocation Chart:</strong> Add logic to determine the sector of each stock (e.g., Tech, Healthcare) and use a library like Chart.js to display a pie chart of the portfolio's diversification.</li>
          </ul>
        </div>
      `,
    }
  ],
};

export default guide;
