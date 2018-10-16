const utils = require('./utils')
const expect = require('expect')
it('should  add two numbers' , ()=>{
  const res = utils.add(33 , 11)
  expect(res).not.toBe(25)
  expect(res).toBe(44)
  expect(typeof res).toBe('number')

})

it('should square a number' , ()=>{
  const res = utils.square(5)
  expect(res).toBe(25)
  expect(typeof res).toBe('number')
})


it('should set firstname and lastname' , ()=>{
  let user = {location:'karachi' , age : 25}
  let res = utils.setName(user , "Hamza Khan")

  expect(res).toMatchObject({
    firstname : 'Hamza',
    lastname : 'Khan'
  })
})


it('should expect some values' , ()=>{
  expect({name:'hamza' , age:22}).toEqual({name:'hamza' , age : 22})
  expect({name:'Hamza'}).not.toEqual({name:'hamza'})
  expect([2,3,4]).toContain(3)
  expect([1,2,3]).not.toContain(8)
  expect({name:'hamza' , age : 25 , program:'bscs'}).toMatchObject({age:25})
})