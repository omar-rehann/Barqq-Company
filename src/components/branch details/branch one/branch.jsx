import onephoto from "../../../img/oneservice.avif"
import "./branch.css"
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';


function Branchone(){
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
      <h4>Service One</h4>
    </Alert>

            </div>
            <div className="contian"> 
  <div className="row">
    <div className="col-md-4">
      <div className="card">
        
        <div className="text">
          <h3>Rebar in Foundations & Footings</h3>
          <h4>Service Description:</h4>
          <p>Installation of reinforcement steel in isolated footings, raft foundations, and strip footings for strong base support.</p>
          <p>The service includes:</p>
          <ul>
            <li>Placement of bottom and top rebar layers</li>
            <li>Installation of distribution bars and stirrups</li>
            <li>Precise cover block placement for concrete protection</li>
            <li>Quality check and tying before concrete pour</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Sub-card 2: Columns & Pedestals */}
    <div className="col-md-4">
      <div className="card">
        
        <div className="text">
          <h3>Rebar in Columns & Pedestals</h3>
          <h4>Service Description:</h4>
          <p>Professional reinforcement installation in columns, pedestals, and starter bars for vertical load transfer.</p>
          <p>The service includes:</p>
          <ul>
            <li>Main longitudinal bars placement</li>
            <li>Stirrups / ties at required spacing</li>
            <li>Alignment and plumb check</li>
            <li>Connection to foundation dowels</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Sub-card 3: Beams & Slabs */}
    <div className="col-md-4">
      <div className="card">
       
        <div className="text">
          <h3>Rebar in Beams & Slabs</h3>
          <h4>Service Description:</h4>
          <p>Accurate rebar placement in beams, solid slabs, and flat slabs to resist bending and shear forces.</p>
          <p>The service includes:</p>
          <ul>
            <li>Top & bottom reinforcement in beams</li>
            <li>Shear stirrups and hangers</li>
            <li>Distribution bars in slabs</li>
            <li>Chair supports and spacers installation</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Sub-card 4: Cutting, Bending & Splicing */}
    <div className="col-md-4">
      <div className="card">
        
        <div className="text">
          <h3>Cutting, Bending & Splicing</h3>
          <h4>Service Description:</h4>
          <p>Precision cutting, bending, and mechanical/overlap splicing of rebar according to shop drawings.</p>
          <p>The service includes:</p>
          <ul>
            <li>Cutting and bending using bending machines</li>
            <li>Mechanical couplers or welding (if approved)</li>
            <li>Overlap splicing with proper length</li>
            <li>Labeling and organization on site</li>
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
export default Branchone