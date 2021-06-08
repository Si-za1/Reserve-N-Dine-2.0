import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjTwo, homeObjThree } from './Data';

function Cart() {
  return (
    <>
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default Cart;