import getCurLoc from "../src/getCurLoc"

describe(getCurLoc, () => {
  test("returns string", async () =>
    expect(typeof (await getCurLoc())).toBe("string"))
})
