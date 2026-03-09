import "./allbranch.css"
import onephoto from "../../img/oneservice.avif"
import twophoto from "../../img/twoservice.avif"
import threephoto from "../../img/threeservice.avif"
import fourphoto from "../../img/fourservice.avif"
import fivephoto from "../../img/fiveservice.avif"
import Button from 'react-bootstrap/Button';
import Logo from "../../img/icon.webp"
import { Link } from "react-router-dom"
function Allbranch(){
   const hometop=()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }
    return(
        <>
        <div className="allbranch">
            <div className="continerr">
                <img src={Logo} alt="" />
     <h4>Our Services</h4>
<h5>Discover our distinguished range of services, carefully designed to meet your needs</h5>
            </div>
           
  
        </div>
        <div className="branshservice m-4">
            <div className="content">
<div className="row">
  <div className="col-md-4">
    <div className="card">
      <div className="image">
        <img src={onephoto} className="w-100" alt="Rebar Installation" />
      </div>
      <div className="text">
        <h3>Rebar Installation</h3>
        <h4>Service Description:</h4>
        <p>Professional rebar installation to ensure the safety and durability of structures.</p>
        <p>The service includes:</p>
        <ul>
          <li>Cutting and bending rebar according to engineering drawings</li>
          <li>Installation of beams, columns, and foundations</li>
          <li>Precise quality and dimension checks</li>
          <li>Site cleanup after installation</li>
        </ul>
        <Link to="/branchone" onClick={hometop}>
<Button variant="success"  className="w-100">Show Details</Button>
</Link>
      </div>
    </div>
  </div>

  <div className="col-md-4">
    <div className="card">
      <div className="image">
        <img src={twophoto} className="w-100" alt="Gas Installation" />
      </div>
      <div className="text">
        <h3>Gas Installation</h3>
        <h4>Service Description:</h4>
        <p>Safe and standard-compliant natural gas or central gas piping and installation.</p>
        <p>The service includes:</p>
        <ul>
          <li>Internal and external gas piping installation</li>
          <li>Meter and regulator setup</li>
          <li>Conversion of cooker and water heater to natural gas</li>
          <li>Leak testing and full safety inspection</li>
                    <li>Meter and regulator setup</li>

        </ul>
   <Link to="/branchtwo" onClick={hometop}>
<Button variant="success"  className="w-100">Show Details</Button>
</Link>      </div>
    </div>
  </div>

  <div className="col-md-4">
    <div className="card">
      <div className="image">
        <img src={threephoto} className="w-100" alt="Cooker & Water Heater Installation" />
      </div>
      <div className="text">
        <h3>Cooker & Water Heater Installation</h3>
        <h4>Service Description:</h4>
        <p>Expert installation and connection of gas cookers and water heaters with high efficiency.</p>
        <p>The service includes:</p>
        <ul>
          <li>Installation of built-in or freestanding cookers and ovens</li>
          <li>Gas water heater piping connection</li>
          <li>Burner and flame adjustment</li>
          <li>Safety check and leak prevention assurance</li>
        </ul>
   <Link to="/branchthree" onClick={hometop}>
<Button variant="success"  className="w-100">Show Details</Button>
</Link>      </div>
    </div>
  </div>

  <div className="col-md-4">
    <div className="card">
      <div className="image">
        <img src={fourphoto} className="w-100" alt="Utilities Installation" />
      </div>
      <div className="text">
        <h3>Utilities Installation</h3>
        <h4>Service Description:</h4>
        <p>Comprehensive installation of home utilities (plumbing, electricity, gas, drainage).</p>
        <p>The service includes:</p>
        <ul>
          <li>Water supply and sanitary drainage piping</li>
          <li>Electrical points and lighting installation</li>
          <li>Gas and air-conditioning connections (if applicable)</li>
          <li>Full system testing and pressure checks</li>
          <li>Water supply and sanitary drainage piping</li>

        </ul>
   <Link to="/branchfour" onClick={hometop}>
<Button variant="success"  className="w-100">Show Details</Button>
</Link>      </div>
    </div>
  </div>

  <div className="col-md-4">
    <div className="card">
      <div className="image">
        <img src={fivephoto} className="w-100" alt="Cooker & Water Heater Installation" />
      </div>
      <div className="text">
        <h3>Cooker & Water Heater Installation</h3>
        <h4>Service Description:</h4>
        <p>Specialized service for installation and maintenance of home gas appliances.</p>
        <p>The service includes:</p>
        <ul>
          <li>Modern gas water heater installation</li>
          <li>Multi-burner cooker connection</li>
          <li>Appliance cleaning and maintenance</li>
          <li>Quality & safety guarantee for a specified period</li>
        </ul>
   <Link to="/branchfive" onClick={hometop}>
<Button variant="success"  className="w-100">Show Details</Button>
</Link>      </div>
    </div>
  </div>
</div>
   
</div>
        </div>
        </>
    )

}
export default Allbranch