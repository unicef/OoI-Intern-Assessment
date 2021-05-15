const {lib,PBKDF2} =require( 'crypto-js')
  // generate a string by crypto pakage by takes string length
 module.exports.genRandomString =({stringLength})=>{
       return lib.WordArray.random(stringLength/2).toString()  /** return required number of characters */
  };  
// encrypt password with a random string 
  module.exports.encription = ({password,salt}) => {
    let hash = PBKDF2(password,salt).toString()
      return hash
  }
