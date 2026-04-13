import gettingStartedWithQuant from './general/getting-started-with-quant.js';
import landingAnInternship from './general/landing-an-internship.js';
import landingAQuantInternship from './general/landing-a-quant-internship.js';

import pythonStockFetcher from './projects/python-stock-fetcher.js';
import smaTradingBot from './projects/sma-trading-bot.js';
import portfolioTracker from './projects/portfolio-tracker.js';
import gettingStartedWithProjects from './projects/getting-started-with-projects.js';
import monteCarloSimulator from './projects/monte-carlo-simulator.js';
import portfolioOptimizer from './projects/portfolio-optimizer.js';
import optionsPricingEngine from './projects/options-pricing-engine.js';
import sentimentTradingSignal from './projects/sentiment-trading-signal.js';

import volunteering from './beyond-quant/volunteering.js';

export const guideCategories = [
  {
    name: "General Guides",
    slug: "general",
    guides: [
      gettingStartedWithQuant,
      // landingAnInternship,  // Hidden — kept in codebase but not displayed
      landingAQuantInternship,
    ]
  },
  {
    name: "Projects",
    slug: "projects",
    guides: [
      gettingStartedWithProjects,
      monteCarloSimulator,
      portfolioOptimizer,
      optionsPricingEngine,
      sentimentTradingSignal,
      // pythonStockFetcher,
      // smaTradingBot,
      // portfolioTracker,
    ]
  },
  {
    name: "Beyond Quant",
    slug: "beyond-quant",
    guides: [
      volunteering,
    ]
  }
];

// Helper to get a flat list of guides for easy URL lookup
export const allGuides = guideCategories.flatMap(cat => cat.guides);

