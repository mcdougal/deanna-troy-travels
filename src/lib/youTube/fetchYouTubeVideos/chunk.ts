export default <T>(
  array: Array<T>,
  options: { chunkSize: number },
): Array<Array<T>> => {
  const { chunkSize } = options;

  const chunks: Array<Array<T>> = [];

  let currentChunkNumber = 0;
  let lastChunkLength: number | null = null;

  while (lastChunkLength !== 0) {
    const startIndex = chunkSize * currentChunkNumber;
    const endIndex = startIndex + chunkSize;

    const chunk = array.slice(startIndex, endIndex);

    chunks.push(chunk);

    currentChunkNumber += 1;
    lastChunkLength = chunk.length;
  }

  return chunks;
};
