import {useEffect, useState} from "react";
import twitter from "../assets/imgs/twitter.png"
import instagram from "../assets/imgs/instagram.png"
import whatsapp from "../assets/imgs/whatsapp.png"
import facebook from "../assets/imgs/facebook.png"

const Header = () => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {

      const timerID = setInterval(
            () => tick(),
            1000
        );

      return () => {
          clearInterval(timerID);
      }

    }, []);

    function tick() {
        setDate(new Date());
    }

    return (
        <div className="Header p-3 fs-4 row justify-content-center align-items-center">
            <div className="col-12 col-sm text-center date">
               <span style={{color: "#ff5555"}}>
                   {date.toLocaleTimeString()}
               </span>
                {"  "}
                {date.getFullYear()}
                {" /  "}
                {date.getDate()}
                {" /  "}
                {date.getMonth()}
            </div>
            <nav className="d-flex ms-4 col-12 col-sm justify-content-center mt-2 imgs">
                <a href="https://www.instagram.com" className="me-2"><img className="bg-white rounded-pill" src={instagram} alt="not found" /></a>
                <a href="https://www.twitter.com" className="me-2"><img className="bg-white rounded-pill" src={twitter} alt="not found" /></a>
                <a href="https://www.whatsapp.com" className="me-2"><img className="bg-white rounded-pill" src={whatsapp} alt="not found" /></a>
                <a href="https://www.facebook.com" className="me-2"><img className="bg-white rounded-pill" src={facebook} alt="not found" /></a>
            </nav>
        </div>
    );
}

export default Header;
