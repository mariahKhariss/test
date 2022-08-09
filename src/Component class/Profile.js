import insta from "../assests/insta.png"
import flower from "../assests/P2.png"
import { useParams } from "react-router";
const Profile = () => {
  const {username} = useParams()
    return ( 
        <div className="Profile">
            <div id="heading">
        <img src={insta} alt="" id="insta" />
        <input type="text" placeholder="search" id="input" />
        <div id="iconss">
      <ion-icon name="home-sharp"></ion-icon>
      <ion-icon name="paper-plane-outline"></ion-icon> <div id="numberPop"><p 
      className="text-center">2</p></div>
      <ion-icon name="compass-outline"></ion-icon>
      <ion-icon name="add-circle-outline"></ion-icon>
      <ion-icon name="heart-outline"></ion-icon> <div id="redDot"></div>
        </div>
            </div>
            <div id="realProfile">
                <div id="profilePictures">
                  <img src={flower} alt="" />
                </div>
                <div id="profileNameArea">
                  <h4>{username}</h4>
                  <div id="btn">
                   <button>edit profile</button>
                   </div>
                   <div id="settings">
                   <ion-icon name="aperture-outline"></ion-icon>
                   </div>
                   
                   
                </div>
                <div id="followers">
                  <div id="postNumbers">
                    <h6>245 post</h6>
                  </div>
                  <div id="postNumberss">
                    <h6>67.3k followers</h6>
                  </div>
                  <div id="postNumbersss">
                    <h6>10 following</h6> 
                  </div>

                </div>
                <div id="postName">
                  <h6>mariahkhariss</h6>
                </div>
                
                
            </div>
            <div id="belowRealProfile">

            </div>
            <div id="taggedArea">
                  <div id="postNumbers">
                    <p>POSTS</p>
                  </div>
                  <div id="postNumbers">
                    <p className="text-primary">SAVED</p>
                  </div>
                  <div id="postNumbers">
                    <p className="text-primary">TAGGED</p>
                  </div>

                </div>
                <div id="belowPost">
                    <div id="mainPost">

                    </div>
                    <div id="mainPost">

                    </div>
                    <div id="mainPost">

                    </div>
                </div>

            
        </div>
     );
}
 
export default Profile;