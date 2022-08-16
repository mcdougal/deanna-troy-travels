import getDeannaTroyTravelsOrganization from './getDeannaTroyTravelsOrganization';
import { StructuredData } from './types';

export default (): StructuredData => {
  return {
    '@type': `Person`,

    // Thing
    name: `Deanna Troy Henry`,
    url: `https://www.youtube.com/deannatroytravels`,

    // Person
    affiliation: getDeannaTroyTravelsOrganization(),
  };
};
