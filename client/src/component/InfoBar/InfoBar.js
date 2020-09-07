import React from 'react'
import './InfoBar.css'
import closeIcon from '../../Icons/closeIcon.png'
import onlineIcon from '../../Icons/onlineIcon.png'
import '../SideDrawer/DrawerToggleButton'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const InfoBar = ({ room ,drawerClickHandler}) => {
    return(
    <header className="infoBar">
           
           
        <div className="leftInnerContainer">
            <img className="onlineIcon" alt="online" src={onlineIcon} />
            <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer">
        <div className="button-container"><DrawerToggleButton click={drawerClickHandler}/></div>
            <a href="/"><img src={closeIcon} alt="close" /></a>
        </div>
       
        
    </header>
    )
}

export default InfoBar