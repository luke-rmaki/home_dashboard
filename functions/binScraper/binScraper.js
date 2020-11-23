const fetch = require("node-fetch");
const cheerio = require("cheerio");

const handler = async (event) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const url =
    "https://www.maroondah.vic.gov.au/Residents-property/Waste-rubbish/Weekly-rubbish-collection/Waste-collection-map-and-schedule/Area-B-collection-schedule-accessible";
  try {
    const markup = await fetch(url).then((res) => res.text());
    const $ = cheerio.load(markup);

    const currentMonth = months[new Date().getMonth()];
    const currentMonthDay = new Date().getDate();

    const year = $(
      "#readableContent > div > div.body-content.general-page-body-content"
    );

    const monthData = year
      .children()
      .filter(function () {
        return $(this).text().trim() === currentMonth;
      })
      .next()
      .text();

    let binType;

    monthData.split(" ").forEach((data, index, array) => {
      if (!Number.isNaN(parseInt(data))) {
        if (
          currentMonthDay >= parseInt(data) &&
          currentMonthDay < parseInt(data) + 7
        ) {
          binType = array[index + 3];
        }
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        binType,
        date: `${currentMonthDay} ${currentMonth}`,
      }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };

const isInRange = (num, min, max) => {};
