import onephoto from "../../../img/twoservice.avif"
import "./branch.css"
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Branchtwo(){
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
      <h4>Service Two</h4>
    </Alert>

            </div>
  <div className="contian">  
  <div className="row">
    <div className="col-md-4">
      <div className="card">
        
        <div className="text">
          <h3>External Piping & Service Line</h3>
          <h4>Service Description:</h4>
          <p>Installation of the external gas service line from the main street network to the building entry point, ensuring compliance with safety standards.</p>
          <p>The service includes:</p>
          <ul>
            <li>Excavation and trenching for service line</li>
            <li>Installation of durable piping (steel/PE) from main to property</li>
            <li>Placement of isolation valve and entry sleeve</li>
            <li>Backfill and surface restoration</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Sub-card 2: Meter & Regulator Installation */}
    <div className="col-md-4">
      <div className="card">
      
        <div className="text">
          <h3>Meter & Regulator Installation</h3>
          <h4>Service Description:</h4>
          <p>Setup of the gas meter and pressure regulator at the building entry for accurate measurement and safe pressure control.</p>
          <p>The service includes:</p>
          <ul>
            <li>Mounting the gas meter securely</li>
            <li>Installation of pressure regulator and relief valve</li>
            <li>Connection to external service line</li>
            <li>Initial calibration and leak check</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Sub-card 3: Internal Household Piping */}
    <div className="col-md-4">
      <div className="card">
       
        <div className="text">
          <h3>Internal Household Piping</h3>
          <h4>Service Description:</h4>
          <p>Routing and installation of internal gas pipes throughout the home to supply appliances safely and efficiently.</p>
          <p>The service includes:</p>
          <ul>
            <li>Design and sizing of internal piping network</li>
            <li>Installation of black steel or approved flexible tubing</li>
            <li>Shut-off valves at each branch and appliance</li>
            <li>Support brackets and protective sleeving where needed</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Sub-card 4: Appliance Conversion & Safety Testing */}
    <div className="col-md-4">
      <div className="card">
        
        <div className="text">
          <h3>Appliance Conversion & Safety Testing</h3>
          <h4>Service Description:</h4>
          <p>Converting cookers, water heaters, etc., to natural gas and performing full system safety inspections and pressure tests.</p>
          <p>The service includes:</p>
          <ul>
            <li>Conversion nozzles and burners adjustment</li>
            <li>Connection of appliances to internal piping</li>
            <li>Comprehensive leak detection and pressure testing</li>
            <li>Final safety certification and client handover</li>
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
export default Branchtwo