const SPROUTS_AND_SPILL_DESTINATION_SLUG = `sprouts-and-spill`;

const customDestinationPageSlugs = new Set([
  SPROUTS_AND_SPILL_DESTINATION_SLUG,
]);

const isCustomDestinationPage = (slug: string): boolean => {
  return customDestinationPageSlugs.has(slug);
};

export { isCustomDestinationPage, SPROUTS_AND_SPILL_DESTINATION_SLUG };
