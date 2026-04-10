const projectCategories = [
  {
    name: "Research",
    description: "Quantitative research initiatives exploring market dynamics and financial theory.",
    projects: [
      {
        title: "Factor Model Analysis",
        status: "In Progress",
        description:
          "Building and backtesting multi-factor equity models using Fama-French and custom factors. The team is evaluating factor exposures across sectors and testing out-of-sample performance on historical data.",
        tags: ["Python", "Pandas", "Statistics"],
        members: ["Research Team"],
      },
      {
        title: "Crypto Market Microstructure",
        status: "In Progress",
        description:
          "Studying order book dynamics and liquidity patterns across major crypto exchanges. Analyzing bid-ask spreads, order flow toxicity, and price impact in decentralized vs. centralized venues.",
        tags: ["Python", "Data Analysis", "Market Data"],
        members: ["Research Team"],
      },
    ],
  },
  {
    name: "Trading Systems",
    description: "Hands-on strategy development, backtesting infrastructure, and live execution.",
    projects: [
      {
        title: "Algorithmic Trading Platform",
        status: "In Progress",
        description:
          "Developing a shared backtesting and paper-trading platform that club members can use to prototype and evaluate strategies. Supports event-driven and vectorized backtests with built-in risk metrics.",
        tags: ["Python", "Backtrader", "REST APIs"],
        members: ["Engineering Team"],
      },
      {
        title: "Options Volatility Dashboard",
        status: "Planning",
        description:
          "A web dashboard for visualizing implied volatility surfaces, term structure, and skew across equity options chains. Will pull live data and display interactive 3D vol surfaces.",
        tags: ["React", "D3.js", "Options Data"],
        members: ["Engineering Team", "Research Team"],
      },
    ],
  },
  {
    name: "Education & Community",
    description: "Internal tools and resources to help members learn and grow.",
    projects: [
      {
        title: "Quant Interview Prep Bank",
        status: "In Progress",
        description:
          "Curating a problem bank of probability, statistics, and brainteaser questions commonly asked in quant interviews. Includes worked solutions and difficulty ratings contributed by members.",
        tags: ["Probability", "Statistics", "Brainteasers"],
        members: ["Education Committee"],
      },
    ],
  },
];

export default projectCategories;
