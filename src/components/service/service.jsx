import "./service.css"
import onephoto from "../../img/oneservice.avif"
import twophoto from "../../img/twoservice.avif"
import threephoto from "../../img/threeservice.avif"
import fourphoto from "../../img/fourservice.avif"
import fivephoto from "../../img/fiveservice.avif"
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom"




function Service(){
     const hometop=()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }
    return(
        <>
        <div className="service mt-5">
            <div className="continer text-center">
    <h3>Our Services</h3>
    <h4>Diverse services to meet all your home needs</h4>
    <p>
        We provide you with a complete range of high-quality and professional services, designed to cover all your household requirements.
    </p>
</div>
<div className="content">
    <div className="row">
        <div className="col-md-4">
            <div className="card">
                <div className="image">
                    <img src={onephoto} className="w-100" alt="" />
                </div>
                <div className="text">
                    <h3>Service One</h3>
 <Link to="/branchone" onClick={hometop}>
<Button variant="success"  className="w-100">Show Details</Button>
</Link>

                </div>
            </div>

        </div>
         <div className="col-md-4">
            <div className="card">
                <div className="image">
                    <img src={twophoto} className="w-100" alt="" />
                </div>
                <div className="text">
                    <h3>Service Two</h3>
 <Link to="/branchtwo" onClick={hometop}>
<Button variant="success"  className="w-100">Show Details</Button>
</Link>                </div>
            </div>

        </div>
         <div className="col-md-4">
            <div className="card">
                <div className="image">
                    <img src={threephoto} className="w-100" alt="" />
                </div>
                <div className="text">
                    <h3>Service Three</h3>
 <Link to="/branchthree" onClick={hometop}>
<Button variant="success"  className="w-100">Show Details</Button>
</Link>                </div>
            </div>

        </div>
        <div className="col-md-4">
            <div className="card">
                <div className="image">
                    <img src={fourphoto} className="w-100" alt="" />
                </div>
                <div className="text">
                    <h3>Service Four</h3>
 <Link to="/branchfour" onClick={hometop}>
<Button variant="success"  className="w-100">Show Details</Button>
</Link>                </div>
            </div>

        </div>
         <div className="col-md-4">
            <div className="card">
                <div className="image">
                    <img src={fivephoto} className="w-100" alt="" />
                </div>
                <div className="text">
                    <h3>Service Five</h3>
 <Link to="/branchfive" onClick={hometop}>
<Button variant="success"  className="w-100">Show Details</Button>
</Link>                </div>
            </div>

        </div>
    </div>
    <div className="row mx-auto">
        <div className="col-md-12">
                    <Link to="/service" className='nav-link' onClick={hometop}>
                                          <Button variant="success" className="w-100 mt-4">More Detials</Button>

</Link> 

        </div>
     
       
    </div>
</div>
        </div>
        </>
    )
}
export default Service