import React from 'react';
import HWPopUp from '../components/HWPopUp/HWPopUp';
import { BasePage } from '../components/utility';
import { Button } from 'bootstrap';


function HardwarePage(props) {

  return (
    
    <BasePage title='Hardware'>
      <HWPopUp></HWPopUp>
    </BasePage>
  )
}

export { HardwarePage }
