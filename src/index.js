import cheerio from "cheerio"
import request from "request-promise-native"

request("https://yandex.com").then(html => {
  const $ = cheerio.load(html)
  const loc = $(".geolink__reg").text()

  // eslint-disable-next-line no-console
  console.log(`You in ${loc}`)
})
