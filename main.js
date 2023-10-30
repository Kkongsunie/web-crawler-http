const { log } = require("console");
const { crawlPage } = require("./crawl.js");
async function main() {
  if (process.argv.length < 3) {
    log("no website provided");
    process.exit(1);
  }
  if (process.argv.length > 3) {
    log("too many command line args");
    process.exit(1);
  }

  const baseURL = process.argv[2];

  log(`starting crawl of ${baseURL}`);
  const pages = await crawlPage(baseURL, baseURL, {});

  for (const page of Object.entries(pages)) {
    log(page);
  }
}

main();
