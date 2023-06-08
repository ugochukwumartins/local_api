const request = require('supertest')
const userservice= require('../app')

describe('user service', ()=>{
    test('succes on signup',async () =>{
const response = await request(userservice).post("/signUp").send(

    {
        "email":"uokorocha732@gmail.com",
         "password": "Pasword",
         "user_name": "ugo2"
      }
)
expect(response.message).toBe( "E11000 duplicate key error collection: test.users index: email_1 dup key: { email: \"uokorocha732@gmail.com\" }")

    })
})