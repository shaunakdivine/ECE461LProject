import React from 'react';
import { StaffContainer } from '../../../components/about/StaffContainer';
import { BasePage } from '../../../components/utility';

const STAFFS = {
  frontend: [
    {
      name: 'Han-Hsuan Lin',
      imgurl: process.env.PUBLIC_URL + '/about/han.jpg',
      desc: "School of Information",
    },
    {
      name: 'Stephen Young',
      imgurl: 'https://via.placeholder.com/500',
      desc: 'School of Engineering',
    },
    {
      name: 'Shaunak Divine',
      imgurl: 'https://via.placeholder.com/500',
      desc: 'School of Engineering',
    },
  ],
  backend: [
    {
      name: 'David Gross',
      imgurl: process.env.PUBLIC_URL + '/about/david.jpg',
      desc: "School of Engineering",
    },
    {
      name: 'Nafeezur Chowdhury',
      imgurl: 'https://via.placeholder.com/500',
      desc: 'School of Engineering',
    },
    {
      name: 'Carlos Trevino',
      imgurl: process.env.PUBLIC_URL + '/about/carlos.jpg',
      desc: 'School of Engineering',
    },
  ],
}

function AboutPage() {
  return (
    <BasePage title='Team 626'>
      <StaffContainer className='mb-4' groupTitle='Front-end Development' staffs={STAFFS.frontend} />
      <StaffContainer groupTitle='Back-end Development' staffs={STAFFS.backend} />
    </BasePage>
  )
}

export { AboutPage }
