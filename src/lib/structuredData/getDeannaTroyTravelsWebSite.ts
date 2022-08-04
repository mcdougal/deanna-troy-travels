import { StructuredData } from './types';

export default (): StructuredData => {
  return {
    // Thing > CreativeWork > WebSite
    '@type': `WebSite`,

    // Thing
    name: `Deanna Troy Travels`,
    url: `https://www.deannatroytravels.com`,

    // WebSite
    keywords: `travel,vlog,blog,southeast asia,budget travel`,
  };
};
