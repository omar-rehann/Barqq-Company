import onephoto from "../../../img/threeservice.avif"
import "./branch.css"
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Branchthree(){
   const hometop=()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }
    return(
        <>
        <div className="branchone">
            <div className="image">
                <img src={onephoto} alt="" />
            </div>
            <div className="message">
                <Alert variant="success">
      <h4>Service Three</h4>
    </Alert>

            </div>
<div className="contian">  {/* Suggested fix: rename to "container" */}
  <div className="row">
    {/* Sub-card 1: Cooker Installation & Connection */}
    <div className="col-md-4">
      <div className="card">
        
        <div className="text">
          <h3>Gas Cooker Installation & Connection</h3>
          <h4>Service Description:</h4>
          <p>Professional installation of freestanding, built-in, or flat gas cookers with secure piping and connections.</p>
          <p>The service includes:</p>
          <ul>
            <li>Positioning and leveling the cooker</li>
            <li>Connecting to internal gas piping with approved fittings</li>
            <li>Installation of shut-off valve near the appliance</li>
            <li>Initial burner ignition and basic flame check</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Sub-card 2: Gas Water Heater Installation */}
    <div className="col-md-4">
      <div className="card">
       
        <div className="text">
          <h3>Gas Water Heater Installation</h3>
          <h4>Service Description:</h4>
          <p>Expert setup of instant or storage gas water heaters (6L, 10L, etc.) with proper mounting and gas/water connections.</p>
          <p>The service includes:</p>
          <ul>
            <li>Wall mounting and secure fixing</li>
            <li>Gas inlet and cold/hot water piping connections</li>
            <li>Installation of safety valve and drain</li>
            <li>Electrical ignition setup (if applicable)</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Sub-card 3: Chimney & Ventilation Setup */}
    <div className="col-md-4">
      <div className="card">
        
        <div className="text">
          <h3>Chimney & Ventilation Setup</h3>
          <h4>Service Description:</h4>
          <p>Installation of exhaust chimneys (مداخن) and proper ventilation to safely remove combustion gases outdoors.</p>
          <p>The service includes:</p>
          <ul>
            <li>Selection and fitting of aluminum or stainless steel chimney pipes</li>
            <li>Routing through wall or window with sealed joints</li>
            <li>Ensuring correct length and slope for efficient draft</li>
            <li>Weatherproof termination cap outside</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Sub-card 4: Conversion, Adjustment & Safety Testing */}
    <div className="col-md-4">
      <div className="card">
       
        <div className="text">
          <h3>Conversion, Adjustment & Safety Testing</h3>
          <h4>Service Description:</h4>
          <p>Converting appliances from cylinder gas to natural gas, fine-tuning burners, and full safety inspections.</p>
          <p>The service includes:</p>
          <ul>
            <li>Nozzle/orifice replacement for natural gas pressure</li>
            <li>Burner flame adjustment and color optimization</li>
            <li>Leak detection with soap solution or detector</li>
            <li>Final pressure test and safety certification</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-12">
      <Link to="/request" onClick={hometop}>
<Button variant="success" className="mt-4 w-100">Request Service</Button>
</Link>
    </div>
  </div>
</div>
        </div>
        </>
    )
}
export default Branchthree