import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StudentDetails from './pages/studentDatails';

const AlunoRoutes = () => {
  return (
    <Routes>
      <Route path="/aluno/:id" element={<StudentDetails />} />
    </Routes>
  );
};

export default AlunoRoutes;
