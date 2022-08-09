import insta from "../assests/insta.png"
import Ptea from "../assests/pst tea 1.png"
import Skay from "../assests/sis kenny 1.png"
import muyii from "../assests/W3.png"
import photo from "../assests/istockphoto.jpg"
import photos from "../assests/yellowImage.jpeg"
import suzie from "../assests/W1.png"
import cake from "../assests/W4.png"
import debby from "../assests/W2.png"
import girl from "../assests/M4.png"
import girls from "../assests/M3.png"
import girlss from "../assests/M8.png"
import girll from "../assests/M9.png"
import girlie from "../assests/M10.png"
import Spic from "../assests/P3.png"
import { useParams } from "react-router";
const HomePage = () => {
    const {username} = useParams()
    return ( 
       <div className="HomePage">
          {/* <nav id="navbar">
  <div class="container-fluid">
    <img src={insta} alt="" id="instagram" />
    <form class="d-flex" role="search">
      <input class="form-control me-5" id="inp" type="search" placeholder="Search" aria-label="Search"/>
      
      <div id="icons">
      <ion-icon name="home-sharp"></ion-icon>
      <ion-icon name="paper-plane-outline"></ion-icon> <div id="numberPop"><p 
      className="text-center">2</p></div>
      <ion-icon name="add-circle-outline"></ion-icon>
      <ion-icon name="heart-outline"></ion-icon> <div id="redDot"></div>
  </div>
    </form>
  </div>
</nav> */}
       <div id="headings">
        <img src={insta} alt="" id="insta" />
        <input type="text" placeholder="search" id="input" />
        <div id="iconss">
      <ion-icon name="home-sharp"></ion-icon>
      <ion-icon name="paper-plane-outline"></ion-icon> <div id="numberPop"><p 
      className="text-center">2</p></div>
      <ion-icon name="compass-outline"></ion-icon>
      <ion-icon name="add-circle-outline"></ion-icon>
      <ion-icon name="heart-outline"></ion-icon> <div id="redDot"></div>
      <img src={girl} alt="" /> 
        </div>
            </div>
        <section id="downBody">
        {/* <div className="col-sm col-3 m-auto mt-lg-3">
                <div className="card shadow  ">
                    <div className="card-body" id="pictures">
                    <img src={Ptea} alt="p_tea"  />
                    <img src={Skay} alt="" />
                    </div>
                </div>
            </div> */}
            <div id="topImages">
            <img src={Ptea} alt="p_tea" id="realImage"/>
            <img src={Skay} alt="" id="realImage"/>
            <img src={muyii} alt="" id="realImage"/>
            <img src={suzie} alt="" id="realImage"/>
            <img src={cake} alt="" id="realImage" />
            <img src={debby} alt="" id="realImage" />
            <div id="userNames">
                <div id="userName">
                    <p>the_ptea</p>
                </div>
                <div id="userName">
                    <p>zoe_w..</p>
                </div>
                <div id="userName">
                    <p>star_b..</p>
                </div>
                <div id="userName">
                    <p>suzie..</p>
                </div>
                <div id="userName">
                    <p>giltcak..</p>
                </div>
                <div id="userName">
                    <p>teddy..</p>
                </div>
            </div>
            <div id="forwardBox">
            <ion-icon name="chevron-forward-circle" id="forward"></ion-icon>
            </div>
            </div>
            
        <div id="profilePicture">
            <p>fashion_assistant <ion-icon name="ellipsis-horizontal-sharp" id="dot"></ion-icon></p> 
       </div>
       <div id="pictureFrame">
            <img src={photos} alt="" id="download" />
       </div>
       <div id="likeButtons">
       <ion-icon name="heart-outline" id="likesClicks"></ion-icon>
       <ion-icon name="chatbubble-outline" id="likesClicks"></ion-icon>
       <ion-icon name="paper-plane-outline" id="likesClicks"></ion-icon> 
       <ion-icon name="bookmarks-outline" id="bookmark"></ion-icon>   
        <div id="numberOfLikes">
        <p id="cap">5,678 likes</p>
        </div>
        <div id="caption">
         <span id="cap">mariah khariss:</span> <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, velit ex provident consectetur.</span>
        </div>
        <div id="viewsComment">
            <p>view all 89 comments</p>
        </div>
        <div id="firstComment">
        <span id="cap">suzie </span> <span>Lorem ipsum dolor sit amet.</span>
        </div>
        <div id="secondComment">
        <span id="cap">dat_blaq_girl </span> <span> Lorem ipsum dolor sit amet.</span>
        </div>
        <div id="days">
            <p>5 DAYS AGO</p>
        </div>
        <div id="comments">
                <p className="mx-5">Add a comment...</p>
            </div>
            <div id="side">
            <div id="first">
                <div id="sideImgg">
                    <img src={Spic} alt="" id="spic" />
                </div>
                <div id="name1">
                  <h6>mariah</h6>
                </div>
                <div id="belowName">
                    <p>mariah </p>
                </div>
                <div id="blue">
                    <p className="text-primary">switch</p>
                </div>
            </div>
            <div id="suggestDiv">
                <p>suggestion for you</p>
                <div id="seeAllDiv">
                    <p className="">see all</p>
                </div>
            </div>
            <div id="second">
                <div id="sideImg">
             <img src={girl} alt="" /> 
                </div>
                <div id="name2">
                <h6>temmy_meghan</h6>
                </div>
                <div id="belowName1">
                <p>New to instagram</p>
                </div>
                 <div id="blue">
                    <p className="text-primary">follow</p>
                </div> 
            </div>
            <div id="second">
            <div id="sideImg">
             <img src={girls} alt="" /> 
                </div>
                <div id="name2">
                <h6>itz mabel</h6>
                </div>
                <div id="belowName1">
                <p>New to instagram</p>
                </div>
                <div id="blue">
                 <p className="text-primary">follow</p>
                </div>
            </div>
            <div id="second">
                 <div id="sideImg">
             <img src={girlss} alt="" /> 
                </div>
                <div id="name2">
                <h6>kassy mile</h6>
                </div>
                <div id="belowName1">
                <p>followed by tomdexa</p>
                </div>
                <div id="blue">
                    <p className="text-primary">follow</p>
                </div>
            </div>
            <div id="second">
            <div id="sideImg">
             <img src={girll} alt="" /> 
                </div>
                <div id="name2">
                <h6>Ray_OX</h6>
                </div>
                <div id="belowName1">
                <p>suggested for you</p>
                </div>
                <div id="blue">
                    <p className="text-primary">follow</p>
                </div>
            </div>
            <div id="second">
            <div id="sideImg">
             <img src={girlie} alt="" /> 
                </div>
                <div id="name2">
                <h6>jenny_may</h6>
                </div>
                <div id="belowName1">
                <p>followed by kyle</p>
                </div>
                <div id="blue">
                    <p className="text-primary">follow</p>
                </div>
            </div>
            <div id="thrid">
                <p>About.Help.Press.API.Jobs.Privacy.Terms.Location. <br />.Language</p>
            </div>
            <div id="thrid">
             <p>@2022 INSTAGRAM FROM META</p>
            </div>
            </div>
            
       

        {/* another page */}
        
       </div>
        {/* another section */}
        <div id="downBodyA">
        <div id="profilePicture">
            <p>fashion_assistant <ion-icon name="ellipsis-horizontal-sharp" id="dot"></ion-icon></p> 
       </div>
       <div id="pictureFrame">
            <img src={photo} alt="" id="download" />
       </div>
       <div id="likeButtons">
       <ion-icon name="heart-outline" id="likesClicks"></ion-icon>
      <ion-icon name="chatbubble-outline" id="likesClicks"></ion-icon>
      <ion-icon name="paper-plane-outline" id="likesClicks"></ion-icon>    
        <div id="numberOfLikes">
        <p id="cap">5,678 likes</p>
        </div>
        <div id="caption">
         <span id="cap">mariah khariss:</span> <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, velit ex provident consectetur.</span>
        </div>
        <div id="viewsComment">
            <p>view all 89 comments</p>
        </div>
        <div id="firstComment">
        <span id="cap">suzie </span> <span>Lorem ipsum dolor sit amet.</span>
        </div>
        <div id="secondComment">
        <span id="cap">dat_blaq_girl </span> <span> Lorem ipsum dolor sit amet.</span>
        </div>
        <div id="days">
            <p>5 DAYS AGO</p>
        </div>
        <div id="comments">
             
            </div>

        {/* another page */}
        
       </div>
        </div>
        </section>

       </div> 
     );
}
 
export default HomePage;