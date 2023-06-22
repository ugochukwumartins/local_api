const Redis = require('redis');
require("dotenv").config();

const Connection_Url= process.env.REDIS;





class Cache {
    constructor() {
        this.redis = null;
    }

    async connect() {
        try {
            this.redis = await Redis.createClient({
                url: Connection_Url
            });

            this.redis.connect()

            this.redis.on('connect', () => {
                console.log('Redis connected')
            })

            this.redis.on('error', () => {
                console.log('Redis connection error')
            })

    
        } catch (error) {
            console.log(error)
        }

    }
}

const instance = new Cache();

module.exports = instance;