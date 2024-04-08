import React from 'react'

function File() {
    console.log(`First`);
    console.log(`Last`);
  return (
    <>
    <div>File</div>
    <form>
       <input type="text" name="" value="First" placeholder="First Name"/>
       <input type="text" name=""  value="Last" placeholder="Last Name"/><br/>
       <button>Submit</button>
       

    </form>
    </>
    
  )
}

export default File