import "./fetures.css"
import fetureslogo from "../../img/features.webp"
function Fetures(){
    return(
        <>
        <div className="fetures " id="features">
            <div className="row">
                <div className="col-md-6">
                    <div className="image">
                        <img src={fetureslogo} className="w-100" alt="" />
                                      <div className="box one">
  <i className="fas fa-star"></i>
  <p>Professional Skills</p>
</div>
  <div className="box two">
  <i className="fas fa-tools"></i>
  <p>Special Tools</p>
</div>

<div className="box three">
  <i className="fas fa-leaf"></i>
  <p>Safe Cleaners</p>
</div>

<div className="box four">
  <i className="fas fa-users-cog"></i>
  <p>Trained Staff</p>
</div>
                    </div>
     

                </div>
                <div className="col-md-6">
<div className="text">
  <h4>Our Advantages</h4>
  <h5>Not just a service... an exceptional experience tailored for you</h5>
  <p>
    <i className="fas fa-check-circle"></i> 
    We are proud to have earned the trust of more than 25,000 clients, thanks to 
    the unique benefits we provide that ensure precise and professional service.
  </p>
  <p>
    <i className="fas fa-tools"></i> 
    Exclusive tools and modern equipment designed to deliver outstanding results.
  </p>
  <p>
    <i className="fas fa-leaf"></i> 
    Eco-friendly and safe cleaning products that protect your health and the environment.
  </p>
  <p>
    <i className="fas fa-users-cog"></i> 
    A highly trained team committed to professionalism and attention to detail.
  </p>
  <p>
    <i className="fas fa-award"></i> 
    Consistent quality standards that guarantee your satisfaction every time.
  </p>
  <p>
    <i className="fas fa-bolt"></i> 
    Fast and reliable service tailored to meet your schedule and needs.
  </p>
  <p>
    <i className="fas fa-headset"></i> 
    Dedicated customer support ready to assist you at every step.
  </p>
  <p>
    <i className="fas fa-tags"></i> 
    Competitive pricing that ensures great value without compromising quality.
  </p>
</div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Fetures