import React from 'react'
import usersLogo from '../../Icons/conference-32.png'
import './DrawerToggleButton.css'

const drawerToggleButton = props =>(
    
        <img onClick={props.click} className="toggle_button" width="10%" src={usersLogo} alt ="See Participants"/>
)

export default drawerToggleButton;