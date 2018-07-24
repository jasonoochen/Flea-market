import React from 'react' 
import logo from './fleaMarketLogo.png' 
import './logo.less'

export default function Logo(){
    return(
        <div className="logo-container"> 
            <img src={logo} alt="logo" className='logo-img'/> 
        </div>
    )
}

// export default class Logo extends Component { 
//     render () { 
//         return ( 
//         <div className="logo-container"> 
//          <img src={logo} alt="logo" className='logo-img'/> 
//         </div> 
//         ) 
//     } 
// }
