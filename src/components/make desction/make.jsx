import "./make.css"
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Make(){
     const hometop=()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }
    return(
        <>
        <div className="make">
           <div className="container">
  <h4>It's Time to Decide!</h4>
  <h5>Choose the date and time that suits you and book now</h5>
  <Link to="/request" onClick={hometop}>
  <Button variant="success">Request Your Service Now</Button>
</Link>
</div>
        </div>
        </>
    )
}
export default  Make