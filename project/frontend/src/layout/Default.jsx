import React from 'react';
import styles from './defaultLayout.module.scss';
import { Sidebar } from '../components/navigation';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/default/home';
import { ProjectsDetailPage, ProjectsPage } from '../pages/default/project';
import { HardwareDetailPage, HardwarePage } from '../pages/default/hardware';
import { SettingsPage } from '../pages/default/settings';
import { AboutPage } from '../pages/default/about';

function DefaultLayout() {
  return (
    <>
      <nav className={styles.nav}>
        <Sidebar />
      </nav>
      <main className={styles.main}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/projects/:projectId' element={<ProjectsDetailPage />} />
          <Route path='/hardware' element={<HardwarePage />} />
          <Route path='/hardware/:hwId' element={<HardwareDetailPage />} />
          <Route path='/settings' element={<SettingsPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </main>
    </>
  )
}

export { DefaultLayout };
