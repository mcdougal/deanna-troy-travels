/* eslint-disable no-console */
import fs from 'fs';

const run = async (): Promise<void> => {
  console.log(`Generating RSS feed...`);

  const rssFeedXml = `
  <?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
  
  <channel>
    <title>W3Schools Home Page</title>
    <link>https://www.w3schools.com</link>
    <description>Free web building tutorials</description>
    <item>
      <title>RSS Tutorial</title>
      <link>https://www.w3schools.com/xml/xml_rss.asp</link>
      <description>New RSS tutorial on W3Schools</description>
    </item>
    <item>
      <title>XML Tutorial</title>
      <link>https://www.w3schools.com/xml</link>
      <description>New XML tutorial on W3Schools</description>
    </item>
  </channel>
  
  </rss>
  `.trim();

  console.log(`Writing RSS feed files to disk...`);

  fs.mkdirSync(`./public/rss`, { recursive: true });
  fs.writeFileSync(`./public/rss/feed.xml`, rssFeedXml);

  console.log(`Done generating RSS feed`);
};

if (require.main === module) {
  process.on(`unhandledRejection`, (error) => {
    throw error;
  });

  run();
}
