import React from'react';
import './SideDrawer.css'
import OnlineLogo from '../../Icons/onlineIcon.png'
const SideDrawer = props =>{
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    let drawerClasses ='side-drawer'
    if(props.show){
        drawerClasses = 'side-drawer open'
    }
   return( <nav className={drawerClasses}>
       <h1>Online Participants</h1>
        <ul>
            {props.users.map((user,index)=>{
               return <li key={index}><img className='onlineLogo' src={OnlineLogo}/>{capitalizeFirstLetter(user)}</li>
            })}
        </ul>
    </nav>)
}
export default SideDrawer

