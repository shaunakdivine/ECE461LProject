import React from 'react';
import HWPopUp from '../../../components/HWPopUp/HWPopUp';
import { Link } from 'react-router-dom';
import { BasePage } from '../../../components/utility';

function HardwarePage() {
  return (
    <BasePage title='Hardware'>
      <div>put all the components here</div>
      <Link to='./9527'>Hardware Detail Page with ID #9527</Link>
      <HWPopUp></HWPopUp>
    </BasePage>
  )
}

export { HardwarePage }
