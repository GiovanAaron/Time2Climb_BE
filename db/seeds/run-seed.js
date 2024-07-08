const devData = require("../data/test-data/index")
const seed = require('./seed')
const db = require('../connection')

const runSeed = ()=>{
    return seed(devData)
    // return seed()
    .then(()=>db.end())
}

runSeed()

