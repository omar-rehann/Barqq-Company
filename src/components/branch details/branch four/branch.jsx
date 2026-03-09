import onephoto from "../../../img/fourservice.avif"
import "./branch.css"
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Branchfour(){
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
      <h4>Service Four</h4>
    </Alert>

            </div>
<div className="contian">  {/* Suggested fix: rename to "container" */}
  <div className="row">
    {/* Sub-card 1: Plumbing & Water Supply Installation */}
    <div className="col-md-4">
      <div className="card">
        
        <div className="text">
          <h3>Plumbing & Water Supply Installation</h3>
          <h4>Service Description:</h4>
          <p>Complete installation of cold/hot water supply piping, fittings, and fixtures for kitchens, bathrooms, and the entire home.</p>
          <p>The service includes:</p>
          <ul>
            <li>PPR/UPVC/CPVC piping for hot & cold water lines</li>
            <li>Installation of valves, faucets, showers, and sinks</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Sub-card 2: Sanitary Drainage & Sewerage Systems */}
    <div className="col-md-4">
      <div className="card">
        
        <div className="text">
          <h3>Sanitary Drainage & Sewerage Systems</h3>
          <h4>Service Description:</h4>
          <p>Professional setup of drainage pipes, floor traps, manholes, and connection to main sewer or septic system.</p>
          <p>The service includes:</p>
          <ul>
            <li>UPVC drainage piping and fittings installation</li>
            <li>Floor drains, gullies, and vent pipes</li>
            <li>Connection to external sewer network or septic tank</li>
            <li>Slope alignment and blockage prevention measures</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Sub-card 3: Electrical Wiring & Points Installation */}
    <div className="col-md-4">
      <div className="card">
        
        <div className="text">
          <h3>Electrical Wiring & Points Installation</h3>
          <h4>Service Description:</h4>
          <p>Full home electrical system wiring, distribution board, lighting points, power sockets, and safety features.</p>
          <p>The service includes:</p>
          <ul>
            <li>Main panel/board and sub-distribution installation</li>
            <li>Wiring for lights, sockets, AC units, and appliances</li>
            <li>Grounding/earthing system and circuit breakers</li>
            <li>Switching, dimmers, and smart points (if requested)</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Sub-card 4: Final Testing, Commissioning & Handover */}
    <div className="col-md-4">
      <div className="card">
       
        <div className="text">
          <h3>Final Testing, Commissioning & Handover</h3>
          <h4>Service Description:</h4>
          <p>Comprehensive testing of all utilities systems, pressure/leak checks, electrical safety, and client training/handover.</p>
          <p>The service includes:</p>
          <ul>
            <li>Hydrostatic pressure testing for plumbing</li>
            <li>Continuity, insulation, and load testing for electrical</li>
            <li>Full system flushing and cleaning</li>
            <li>Documentation, certificates, and client walkthrough</li>
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
export default Branchfour