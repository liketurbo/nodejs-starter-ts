import getCurLoc from "./getCurLoc"

getCurLoc().then(loc => process.stdout.write(`You are in ${loc}`))
