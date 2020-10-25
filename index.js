const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, alert) {
      if (Array.isArray(collection) === true) {
        for(let i=0;i<collection.length;i++){
          alert(`This number is ${collection[i]}`)
          }
      }
      else {
        
      }
      return collection
    },

    map: function(collection,callback) {


    },

    reduce: function(collection, iterator, accumulator) {
     

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
