import onephoto from "../../../img/fiveservice.avif"
import "./branch.css"
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Branchfive(){
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
      <h4>Service Five</h4>
    </Alert>

            </div>
<div className="contian">  {/* Suggested fix: rename to "container" */}
  <div className="row">
    {/* Sub-card 1: Multi-Appliance Shared Piping Setup */}
    <div className="col-md-4">
     
      <div className="text">
        <h3>Shared Piping for Cooker & Heater</h3>
        <h4>Service Description:</h4>
        <p>Expert setup of branched internal gas piping to supply both cooker and water heater (or multiple appliances) from a single safe connection point.</p>
        <p>The service includes:</p>
        <ul>
          <li>Installation of T-joints or manifolds for branching</li>
          <li>Individual shut-off valves for each appliance</li>
          <li>Pressure regulator and flexible hose connections</li>
          <li>Leak-proof testing on the full branch network</li>
        </ul>
      </div>
    </div>

    {/* Sub-card 2: Nozzle & Burner Upgrade/Conversion */}
    <div className="col-md-4">
      
      <div className="text">
        <h3>Nozzle & Burner Upgrade/Conversion</h3>
        <h4>Service Description:</h4>
        <p>Replacement and fine-tuning of nozzles/orifices and burners to optimize performance on natural gas (from cylinder to natural or vice versa).</p>
        <p>The service includes:</p>
        <ul>
          <li>Supply and installation of correct orifice sizes</li>
          <li>Burner cleaning, alignment, and flame optimization</li>
          <li>Adjustment for even blue flame (no yellow tips)</li>
          <li>Compatibility check with your cooker/heater model</li>
        </ul>
      </div>
    </div>

    {/* Sub-card 3: Advanced Chimney & Exhaust Systems */}
    <div className="col-md-4">
      
      <div className="text">
        <h3>Advanced Chimney & Exhaust Systems</h3>
        <h4>Service Description:</h4>
        <p>Professional installation or upgrade of extended chimneys, fans, or balanced flue systems for better draft and indoor air quality.</p>
        <p>The service includes:</p>
        <ul>
          <li>Extended stainless steel or aluminum chimney routing</li>
          <li>Installation of exhaust fans (if needed for poor draft)</li>
          <li>Sealed joints and wall/window penetration</li>
          <li>Carbon monoxide detector placement recommendation</li>
        </ul>
      </div>
    </div>

    {/* Sub-card 4: Maintenance Package & Safety Follow-up */}
    <div className="col-md-4">
      
      <div className="text">
        <h3>Maintenance Package & Safety Follow-up</h3>
        <h4>Service Description:</h4>
        <p>Ongoing maintenance, periodic checks, and warranty support for installed cookers and water heaters to ensure long-term safety and efficiency.</p>
        <p>The service includes:</p>
        <ul>
          <li>Annual cleaning, burner adjustment, and leak inspection</li>
          <li>Troubleshooting common issues (weak flame, ignition problems)</li>
          <li>Safety certification renewal and advice</li>
          <li>Priority support and spare parts sourcing</li>
        </ul>
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
export default Branchfive