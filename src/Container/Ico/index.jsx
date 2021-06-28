import React, { Component } from 'react';
import HeaderIco from "../../Components/IcoCompo/HeaderIco";
import ScaleIco from "../../Components/IcoCompo/icoScale";
import Participate from "../../Components/IcoCompo/Participate";
import Price from "../../Components/price";
import Footer from "../../Components/footer";
import IcoSkill from "../../Components/IcoCompo/icoSkill";
class Ico extends Component {
    render() {
        return (
            <>
               <HeaderIco/> 
               <ScaleIco/>
               <Price/>
               <IcoSkill/>
               <Participate/>
               <Footer/>
            </>
        );
    }
}

export default Ico;