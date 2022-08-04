import getDeannaTroyTravelsOrganization from './getDeannaTroyTravelsOrganization';
import { StructuredData } from './types';

export default (): StructuredData => {
  return {
    '@type': `Person`,

    // Thing
    name: `Deanna Troy Henry`,

    // Person
    affiliation: getDeannaTroyTravelsOrganization(),
  };
};
