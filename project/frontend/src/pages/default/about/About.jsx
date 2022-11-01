import React from 'react';
import { StaffContainer } from '../../../components/about/StaffContainer';
import { BasePage } from '../../../components/utility';

const STAFFS = {
  frontend: [
    {
      name: 'Han-Hsuan Lin',
      imgurl: process.env.PUBLIC_URL + '/about/han.jpg',
      desc: "UT School of Information '23",
    },
    {
      name: 'Stephen Young',
      imgurl: 'https://via.placeholder.com/500',
      desc: 'Some Description',
    },
    {
      name: 'Shaunak Divine',
      imgurl: 'https://via.placeholder.com/500',
      desc: 'Some Description',
    },
  ],
  backend: [
    {
      name: 'David Gross',
      imgurl: process.env.PUBLIC_URL + '/about/david.jpg',
      desc: "UT School of Engineering '24",
    },
    {
      name: 'Nafeezur Chowdhury',
      imgurl: 'https://via.placeholder.com/500',
      desc: 'Some Description',
    },
    {
      name: 'Carlos Trevino',
      imgurl: 'https://via.placeholder.com/500',
      desc: 'Some Description',
    },
  ],
}

function AboutPage() {
  return (
    <BasePage title='About'>
      <StaffContainer className='mb-4' groupTitle='Front-end Development' staffs={STAFFS.frontend} />
      <StaffContainer groupTitle='Back-end Development' staffs={STAFFS.backend} />
    </BasePage>
  )
}

export { AboutPage }
