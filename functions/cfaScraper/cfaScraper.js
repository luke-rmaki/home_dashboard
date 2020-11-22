const fetch = require("node-fetch");
const cheerio = require("cheerio");

const handler = async (event) => {
  const url =
    "http://cfaonline.cfa.vic.gov.au/mycfa/Show?pageId=CFALocalList&lat=-37.799883&lng=145.226877&sharedType=&address=Ringwood+North&radius=5";
  try {
    const markup = await fetch(url).then((res) => res.text());
    const $ = cheerio.load(markup);
    const data = $(
      '#mainMobile > div:nth-child(2) > div[style*="display: block"]'
    );
    const days = [];
    data.each(function (i, elem) {
      days.push($(this).text().trim().replace(/\s\s+/g, " "));
    });

    const returnObject = {
      data: days,
    };

    return {
      statusCode: 200,
      body: JSON.stringify(returnObject),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
