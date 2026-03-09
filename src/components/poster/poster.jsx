import Hero from "../../img/hero.webp"
import Button from 'react-bootstrap/Button';
import "./poster.css"
import { Link } from "react-router-dom";
function Poster(){
    return(
        <>
        <div className="poster">
            <div className="row  align-items-center  ">
                <div className="col-md-6">
    <div className="text">
  <h1>All Home Services</h1>
  <h2>Under One Roof</h2>

  <p>
    We provide everything your home needs with professional services from deep cleaning and furniture care, through maintenance and pest control, all the way to furniture moving using the latest equipment and techniques.
  </p>

  <p>
    Our expert team ensures high quality, reliability, and fast response times to make your life easier and your home more comfortable.
  </p>
  <Link to="/request">
  <Button variant="success">Request Your Service Now</Button>
</Link>

</div>

                </div>
                <div className="col-md-6">
                    <div className="image">
                        <img src={Hero}  alt="" />

                    </div>

                </div>
            </div>

        </div>
        </>
    )
}
export default Poster