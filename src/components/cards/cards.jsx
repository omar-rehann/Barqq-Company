import { useEffect, useState } from "react"
import "./cards.css"
function Cards(){
    console.log(window.scrollY)
    const [countone,setcountone]=useState(0);
    const [counttwo,setcounttwo]=useState(0);
    const [countthree,setcountthree]=useState(0);
    const [countfour,setcountfour]=useState(0);
    const [countfive,setcountfive]=useState(0);
    const [countsix,setcountsix]=useState(0);
    const [countseven,setcountseven]=useState(0);
    const [counteight,setcounteight]=useState(0);
    let targetone=200;
    let targettwo=400;
    let targetthree=300;
    let targetfour=250;
    let targetfive=280;
    let targetsix=320;
    let targetseven=140;
    let targeteight=190;
   
  useEffect(() => {
         let timerone = setInterval(() => {
 if(window.scrollY >= 280){
      setcountone(prev => prev >= targetone ? targetone : prev + 1);
      setcounttwo(prev => prev >= targettwo ? targettwo : prev + 1);
      setcountthree(prev => prev >= targetthree ? targetthree : prev + 1);
      setcountfour(prev => prev >= targetfour ? targetfour : prev + 1);
      setcountfive(prev => prev >= targetfive ? targetfive : prev + 1);
      setcountsix(prev => prev >= targetsix ? targetsix : prev + 1);
      setcountseven(prev => prev >= targetseven ? targetseven : prev + 1);
      setcounteight(prev => prev >= targeteight ? targeteight : prev + 1);
    }
    if (
      countone >= targetone &&
      counttwo >= targettwo &&
      countthree >= targetthree &&
      countfour >= targetfour &&
      countfive >= targetfive &&
      countsix >= targetsix &&
      countseven >= targetseven &&
      counteight >= targeteight
    ) {
      clearInterval(timerone);
    }
  }, 100);

  return () => clearInterval(timerone);

}, []); 




    return(
        <>
        <div className="cards"  id="about">
            <div className="container p-2 text-center mt-5">
    <h4>About Us</h4>
    <h3>Years of Experience in Home Services</h3>
    <h6>
        Barq Company is the first and trusted partner for more than 25,000 clients in home services. 
        We serve in 25 cities across the Kingdom, proud of our clients’ trust, and always striving to 
        provide a comprehensive experience that brings together our diverse home services.
    </h6>
</div>
<div className="content mt-5">
 <div className="row">
  <div className="col-md-3">
    <div className="box">
      <i className="fas fa-city"></i>
      <h5>{countone}+</h5>
      <h6>Served Cities</h6>
    </div>
  </div>

  <div className="col-md-3">
    <div className="box">
      <i className="fas fa-certificate"></i>
      <h5>{counttwo}+</h5>
      <h6>Certified Licenses</h6>
    </div>
  </div>

  <div className="col-md-3">
    <div className="box">
      <i className="fas fa-users"></i>
      <h5>{countthree}</h5>
      <h6>Qualified Staff</h6>
    </div>
  </div>

  <div className="col-md-3">
    <div className="box">
      <i className="fas fa-calendar-check"></i>
      <h5>{countfour}+</h5>
      <h6>Appointments</h6>
    </div>
  </div>

  {/* Extra 4 boxes */}
  <div className="col-md-3">
    <div className="box">
      <i className="fas fa-smile"></i>
      <h5>{countfive}+</h5>
      <h6>Happy Clients</h6>
    </div>
  </div>

  <div className="col-md-3">
    <div className="box">
      <i className="fas fa-tools"></i>
      <h5>{countsix}+</h5>
      <h6>Home Services</h6>
    </div>
  </div>

  <div className="col-md-3">
    <div className="box">
      <i className="fas fa-headset"></i>
      <h5>{countseven}+</h5>
      <h6>Customer Support</h6>
    </div>
  </div>

  <div className="col-md-3">
    <div className="box">
      <i className="fas fa-shield-alt"></i>
      <h5>{counteight}+</h5>
      <h6>Trusted & Secure</h6>
    </div>
  </div>
</div>


</div>

        </div>
        </>
    )
}
export default  Cards