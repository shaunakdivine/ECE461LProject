import React from 'react';
import './defaultLayout.scss';
import { Sidebar } from '../components/navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  HardwarePage,
  HomePage,
  ProjectsPage,
  SettingsPage
} from '../pages';

function DefaultLayout() {
  return (
    <BrowserRouter>
      <nav>
        <Sidebar />
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/hardware' element={<HardwarePage />} />
          <Route path='/settings' element={<SettingsPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export { DefaultLayout };
