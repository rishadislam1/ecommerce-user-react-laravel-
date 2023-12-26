import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const MegaMenu = () => {
    const [toggle, setToggle] = useState(false);
    useEffect(()=>{
        megaMenu();
    },[])

    const megaMenu=()=>{
       setToggle(!toggle);
        
    }

    return (
        <div className="accordionMenuDiv">
            <div className="accordionMenuDivInside">
                <button className={`accordion ${toggle?'active':'no'}` } onClick={megaMenu}>
                    <img className="accordionMenuIcon" src="" alt="" />
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Man's Clothing
                </button>
                <div className={`panel ${toggle?'mh-100':'mh-0'} `}>
                    <ul>
                        <li><Link className="accordionItem" to='/'>Mans TShirt</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MegaMenu;