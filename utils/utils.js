module.exports.add = (a ,b)=> a + b

module.exports.asyncAdd = (a , b , cb)=>{
  setTimeout(() =>{
    cb(a + b)
  }, 1000)
}

module.exports.square = (x) => x*x

module.exports.setName = (user , fullname)=>{
  const names = fullname.split(' ');
  user.firstname = names[0];
  user.lastname = names[1];
  return user
}