import React, { Component } from 'react'
import BuildImg from '../Images/build1.png'


export default class Header extends Component {
    render() {
        return (
            <div>
                {/* Header */}
                <header className="w3-display-container w3-content w3-wide" style={{maxWidth: '1500px'}} id="home">
                    <img  src={BuildImg} alt="Architecture" height={600} width={1200} style={{height:"auto",width:"100%",maxHeight:"800px"}} />
                    <div className="w3-display-middle w3-margin-top w3-center">
                    <h1 className="w3-xxlarge w3-text-black"><span className="w3-padding w3-black w3-opacity-min"><b>Asai </b> <span style={{color:"#8CD3E6"}}>Architects</span></span> </h1>
                    </div>
                </header>
            </div>
        )
    }
}
