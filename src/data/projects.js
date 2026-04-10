const projects = [
  {
    title: "Algorithmic Trading Platform",
    type: "Engineering",
    description:
      "A shared backtesting and paper-trading platform for club members to prototype and evaluate strategies. Supports event-driven and vectorized backtests with built-in risk metrics.",
    tags: ["Python", "Backtrader", "REST APIs"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
  },
  {
    title: "Factor Model Research",
    type: "Research",
    description:
      "Building and backtesting multi-factor equity models using Fama-French and custom factors. Evaluating factor exposures across sectors and testing out-of-sample performance.",
    tags: ["Python", "Pandas", "Statistics"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    title: "Options Volatility Dashboard",
    type: "Engineering",
    description:
      "A web dashboard for visualizing implied volatility surfaces, term structure, and skew across equity options chains. Pulls live data and renders interactive 3D vol surfaces.",
    tags: ["React", "D3.js", "Options Data"],
    image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80",
  },
];

export default projects;
