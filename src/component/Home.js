import React from "react";
import photographer from "./photographer.jpg";
import princess from "./princess.jpg"
import { Button } from "react-bootstrap";
import {Link,useNavigate} from 'react-router-dom';
import VMC from "./VMC";
// import Cards from "./Cards";
// import Details from "./Details";
import Slider from './Slider';

function Home(){
    const navigate = useNavigate();
    return(
        <div>
            <img src={photographer} alt="madhav" style={{border:"1px solid white",height:'80%',width:'100%  '}} />

            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Our Company</h3>
                            <div className="underline mx-auto"></div>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                            </p>
                            <Button onClick={()=>navigate("/about")} className="btn btn-warning shadow" >Read More</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Vision and Mission and Values*/}
            <VMC/>

             {/* Our Services */}
             <section className="section  border-top">
        <div className="container">
            <div className="row">
                <div className="col-md-12 mb-5 text-center ">
                    <h3 className="main-heading">Vission Mission and Values</h3>
                    <div className="underline mx-auto"></div>    
                </div>
                <div className="col-md-4 ">
                    <div className="card shadow">
                    <img src={princess} alt="madhav"className="w-100 border-bottom"/>
                        <div className="card-body">
                            <h6>Service1</h6>
                            <div className="underline"></div>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.   
                            </p>
                            <Link to="./cards"  className="btn btn-link">read More</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 ">
                    <div className="card shadow">
                    <img src={princess} alt="madhav"className="w-100 border-bottom"/>
                        <div className="card-body">
                            <h6>Service1</h6>
                            <div className="underline"></div>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.   
                            </p>
                            <Link to="./cards"  className="btn btn-link">read More</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 ">
                    <div className="card shadow">
                    <img src={princess} alt="madhav"className="w-100 border-bottom"/>
                        <div className="card-body">
                            <h6>Service1</h6>
                            <div className="underline"></div>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.   
                            </p>
                            <Link to="./cards" className="btn btn-link">read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Slider/>
    
   
        </div>
    );
}

export default Home