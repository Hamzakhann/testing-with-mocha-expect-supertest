const request = require('supertest')
const expect = require('expect')
const app = require('./server')


describe('Server tests' , () =>{
  describe('GET hello world' , () =>{
    it('should return hello world response' , (done) =>{
      request(app)
      .get('/')
      .expect(200)
      .expect((res) =>{
        expect(res.body).toMatchObject({name:"hamza"})
      })
      .end(done)
    })
    
  })

  describe('GET all users' , () =>{
    it('should return a users data ' , (done) =>{
      request(app)
        .get('/users')
        .expect(200)
        .expect(res =>{
          expect(res.body).toContainEqual({
            name: "hamza",
            age : 22
          })
        })
        .end(done)
    })
  })

})
