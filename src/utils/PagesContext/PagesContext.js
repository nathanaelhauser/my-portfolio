import { createContext } from 'react';

const PagesContext = createContext({
  homeVisited: false,
  aboutVisited: false,
  portfolioVisited: false,
  toggleHome: () => {},
  toggleAbout: () => {},
  togglePortfolio: () => {}
});

export default PagesContext;