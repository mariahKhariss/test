import insta from "../assests/insta.png"
import download from "../assests/download (5).jfif"
import picture from "../assests/picture.jpg"
const Home = () => {
    return ( 
        <div className="">
        <nav class="navbar my-3">
    <div class="container-fluid">
    <form class="d-flex" role="search">
            <img src={insta} alt=""className="instagram" /> 
            
  <input  class="form-control"  type="search-"  id="inputFirst" placeholder=" Search "  aria-label="Search"/> 
  {/* <ion-icon name="search-outline"></ion-icon> */}
  <div id="icons">
  <ion-icon name="home-sharp"></ion-icon>
  <ion-icon name="paper-plane-outline"></ion-icon>
  <ion-icon name="add-circle-outline"></ion-icon>
  <ion-icon name="heart-outline"></ion-icon>
  </div>
</form>
</div>
</nav>
{/* <div style={{maxWidth:"35rem"}} className="card-header " id="">fashion_assistant  <ion-icon name="ellipsis-horizontal-sharp" id="ion"></ion-icon></div> */}
 <div style={{maxWidth:"35rem"}} id="cardBody" className="card border-light  mx-5" >
  <div className="card-header ">fashion_assistant  <ion-icon name="ellipsis-horizontal-sharp" id="ion"></ion-icon></div>
  <div className="card-body " >
    {/* <img src={download} alt=""className="d-block m-auto mb-3" />*/}
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active m-0">
      <img  src={picture} class="d-block w-100 " alt="..."/>
  <ion-icon name="heart-outline"></ion-icon>
  <ion-icon name="chatbubble-outline"></ion-icon>
  <ion-icon name="paper-plane-outline"></ion-icon>
    </div>
    <div class="carousel-item">
      <img src={picture} class="d-block w-100 " alt="..."/>
  <ion-icon name="heart-outline"></ion-icon>

    </div>
    <div class="carousel-item">
      <img src={picture} class="d-block w-100" alt="..."/>
  <ion-icon name="heart-outline"></ion-icon>

    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  </div>
</div> 
 {/* <div className=" card border-light mb-3 col-lg col-sm-3 m-auto mt-sm-5">
        <div className="card shadow  "> 
        <div className="card-body"></div>
        </div>
        </div> */}
         <div style={{maxWidth:"35rem"}} id="cardBody" className="card border-light  mx-5" >
  <div className="card-header ">fashion_assistant  <ion-icon name="ellipsis-horizontal-sharp" id="ion"></ion-icon></div>
  <div className="card-body text-primary" >
    {/* <img src={download} alt=""className="d-block m-auto mb-3" />*/}
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active m-0">
      <img  src={picture} class="d-block w-100 " alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={picture} class="d-block w-100 " alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={picture} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  </div>
</div> 


    </div>
     );
}
 
export default Home;