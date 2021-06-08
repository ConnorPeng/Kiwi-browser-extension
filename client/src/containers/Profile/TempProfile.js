import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./TempProfile.css";

/*
const TempProfile =()=>{
  return(
    <div>
      <div>
        <div className="first_row">
          <div>
            <img style={{width:"80px", height:"80px", borderRadius:"40px"}}
            src="https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_2560%2Cc_limit/phonepicutres-TA.jpg"
            />
          </div>
          <div className = "Username">Jinghong</div>
        </div>
        <div> 
          <div className = "menu">
            <h6>132 Followers</h6>
            <h6>523 Likes</h6>
            <h6>67 Following</h6>
          </div>
        </div>
      </div>
      
      <div className="gallery">
        <img className="item" src="https://cdn.cliqueinc.com/posts/253416/balenciaga-sneakers-253416-1522190508034-main.700x0c.jpg" />
        <img className="item" src="https://i.pinimg.com/originals/51/e2/16/51e2162bbc279f313bc57abc3ce29bb9.jpg" />
        <img className="item" src="https://i.pinimg.com/originals/6c/10/bc/6c10bc313eb9c25d191cf4ebfb6de12d.jpg" />
        <img className="item" src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" />
      </div>

    </div>
  )
}

export default TempProfile;
*/

class TempProfile extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return  (
      <div>
      <div>
        <div className="first_row">
          <div>
            <img style={{width:"80px", height:"80px", borderRadius:"40px"}}
            src="https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_2560%2Cc_limit/phonepicutres-TA.jpg"
            />
          </div>
          <div className = "Username">Jinghong</div>
        </div>
        <div> 
          <div className = "menu">
            <h6>132 Followers</h6>
            <h6>523 Likes</h6>
            <h6>67 Following</h6>
          </div>
        </div>
      </div>
      
      <div className="gallery">
        <img className="item" src="https://cdn.cliqueinc.com/posts/253416/balenciaga-sneakers-253416-1522190508034-main.700x0c.jpg" />
        <img className="item" src="https://i.pinimg.com/originals/51/e2/16/51e2162bbc279f313bc57abc3ce29bb9.jpg" />
        <img className="item" src="https://i.pinimg.com/originals/6c/10/bc/6c10bc313eb9c25d191cf4ebfb6de12d.jpg" />
        <img className="item" src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" />
      </div>

    </div>
    )
  }
}

export default TempProfile;
