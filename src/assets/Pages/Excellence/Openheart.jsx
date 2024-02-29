import React from "react";
import Contactus from "../Contact/Contactus";
import "./Excel.css";


function Openheart() {
 
  return (
    <>
      
        <h1 className="text-center pt-5 exhd pb-5">OPEN HEART SURGERY</h1>
        <div className="container pt-5">
          <div className="row">
            <div className="col-7">
              <h5 className="text-secondary ">
                Open-heart surgery involves cutting open and performing surgery
                on the muscles, valves, or arteries of the heart. You can help
                minimize some risks through caring for yourself and your
                incision after surgery.
              </h5>
              <h5 className="text-secondary pt-4 ">
                According to the National Heart, Lung, and Blood Institute
                (NHLBI)Trusted Source, coronary artery bypass grafting (CABG) is
                the most common type of heart surgery done on adults. During
                this surgery, a healthy artery or vein is grafted (attached) to
                a blocked coronary artery. This allows the grafted artery to
                “bypass” the blocked artery and bring fresh blood to the heart.
              </h5>
              <h5 className="text-secondary pt-4">
                Open-heart surgery is sometimes called traditional heart
                surgery. Today, many new heart procedures can be performed with
                only small incisions, not wide openings. Therefore, the term
                “open-heart surgery” can be misleading.
              </h5>
            </div>

            <div className="col-4">
              <img
                src="https://ucarecdn.com/cd8b241c-ed6a-44a1-b74c-34461b4572db/iy.jpg"
                height="auto"
                width="100%"
              />
            </div>
          </div>
        </div>
     
      <Contactus />
    </>
  );
}

export default Openheart;
