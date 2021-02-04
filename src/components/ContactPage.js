import React from 'react';



const ContactPage = () => {
    return(
     
        <form> 
        <div className="contactBox">

      
         <div className="form"> 
            <h1 className="title">Feedback</h1>
           <label for="name">Name:</label>
           <input type="text" id="name" name="name" required /> 
           </div>
           <br />
          
           <div className="form"> <label for="email"> Email: </label>
          <input type="email" id="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
          </div>
          <br />
         
           <div className="form"> <label for="textarea"> Drop Some Words</label> <br />
        <textarea id="textarea" rows="10" cols="45"></textarea></div> <br /> 
          
          <div className="form"> <input className="submit_button" type="submit" />
           </div>
            </div> 
        </form>
    );
}

export default ContactPage;