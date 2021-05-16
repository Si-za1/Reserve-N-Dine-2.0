import React from 'react';
import {useHistory} from "react-router-dom";
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

function Login(){
    return(
        <div>
             <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjThree} />
        </div>
    );
}

export default Login;
