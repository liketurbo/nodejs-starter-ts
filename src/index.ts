import cheerio from "cheerio"
import request from "request-promise-native"

const start = async () => {
  const html = await request("https://yandex.com")

  const $ = cheerio.load(html)
  const loc = $(".geolink__reg").text()

  // eslint-disable-next-line no-console
  console.log(`You in ${loc}`)
}

start()
