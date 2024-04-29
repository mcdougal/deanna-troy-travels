import { Destination } from './fetchDestinations';

export default (destinations: Array<Destination>): Array<Destination> => {
  return [...destinations].sort((destinationA, destinationB) => {
    const orderA = destinationA.order;
    const orderB = destinationB.order;

    if (
      orderA !== null &&
      orderA !== undefined &&
      orderB !== null &&
      orderB !== undefined
    ) {
      return orderA - orderB;
    }

    if (orderA !== null && orderA !== undefined) {
      return -1;
    }

    if (orderB !== null && orderB !== undefined) {
      return 1;
    }

    const totalA = destinationA.linkedFrom.blogPostCollection.total;
    const totalB = destinationB.linkedFrom.blogPostCollection.total;

    return totalB - totalA;
  });
};
