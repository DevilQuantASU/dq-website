// Guide registry — import all guides and export as an ordered array.
// To add a new guide, import it and add it to the `guides` array.
//
// Architecture note: This currently loads guides from local JS files.
// To switch to server-fetched guides in the future, replace this module
// with an async loader (e.g., fetch('/api/guides')) and update the
// Resources page to await the data. The guide shape stays the same:
//   { slug, title, description, sections: [{ id, title, content }] }

import gettingStartedWithQuant from './getting-started-with-quant.js';
import landingAnInternship from './landing-an-internship.js';
import campusResources from './campus-resources.js';

const guides = [
  gettingStartedWithQuant,
  landingAnInternship,
  campusResources,
];

export default guides;
