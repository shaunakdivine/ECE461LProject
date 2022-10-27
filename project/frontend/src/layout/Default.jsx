import React from 'react';
import styles from './defaultLayout.module.scss';
import { Sidebar } from '../components/navigation';
import { Route, Routes } from 'react-router-dom';
import {
  HardwarePage,
  HomePage,
  ProjectsPage,
  SettingsPage
} from '../pages/default';

function DefaultLayout() {
  return (
    <>
      <nav className={styles.nav}>
        <Sidebar />
      </nav>
      <main className={styles.main}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/hardware' element={<HardwarePage />} />
          <Route path='/settings' element={<SettingsPage />} />
        </Routes>
      </main>
    </>
  )
}

export { DefaultLayout };
