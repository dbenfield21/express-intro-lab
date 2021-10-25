const grades = [
  {name: 'Susanna', grade: "A", pass: true},
  {name: "Jared", grade: "C", pass: false}, 
  {name: "Josh", grade: "F", pass: false}, 
  {name: "Dawson", grade:"B", pass: true},
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, grades)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

export { 
	find
}