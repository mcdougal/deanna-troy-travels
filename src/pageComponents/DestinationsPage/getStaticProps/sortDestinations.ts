import { Destination } from './fetchDestinations';

export default (destinations: Array<Destination>): Array<Destination> => {
  return [...destinations].sort((destinationA, destinationB) => {
    const totalA = destinationA.linkedFrom.blogPostCollection.total;
    const totalB = destinationB.linkedFrom.blogPostCollection.total;

    return totalB - totalA;
  });
};
