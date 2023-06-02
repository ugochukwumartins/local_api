const Redis = require('redis');


const REDIS_USERNAME = 'default';
const REDIS_PORT =  6379;
const REDIS_HOST = '127.0.0.1';
const REDIS_PASSWORD =  null;

class Cache {
    constructor() {
        this.redis = null;
    }

    async connect() {
        try {
            this.redis = await Redis.createClient({
                url: `redis://${REDIS_USERNAME}:${REDIS_PASSWORD}@${REDIS_HOST}:${REDIS_PORT}`
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