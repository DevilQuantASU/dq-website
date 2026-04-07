import gettingStartedWithQuant from './general/getting-started-with-quant.js';
import landingAnInternship from './general/landing-an-internship.js';
import campusResources from './general/campus-resources.js';

import pythonStockFetcher from './projects/python-stock-fetcher.js';
import smaTradingBot from './projects/sma-trading-bot.js';
import portfolioTracker from './projects/portfolio-tracker.js';

export const guideCategories = [
  {
    name: "General Guides",
    slug: "general",
    guides: [
      gettingStartedWithQuant,
      landingAnInternship,
      campusResources,
    ]
  },
  {
    name: "Projects",
    slug: "projects",
    guides: [
      pythonStockFetcher,
      smaTradingBot,
      portfolioTracker,
    ]
  }
];

// Helper to get a flat list of guides for easy URL lookup
export const allGuides = guideCategories.flatMap(cat => cat.guides);

