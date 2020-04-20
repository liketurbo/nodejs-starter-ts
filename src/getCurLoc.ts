import cheerio from "cheerio"
import request from "request-promise-native"

const getCurLoc = async () => {
  const html = await request("https://yandex.com")

  const $ = cheerio.load(html)
  const loc = $(".geolink__reg").text()

  return loc
}

export default getCurLoc
