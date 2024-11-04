import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import FormStep1 from './pages/FormStep1/index.tsx';
import FormStep2 from './pages/FormStep2/index.tsx';
import FormStep3 from './pages/FormStep3/index.tsx';
import FormStep4 from './pages/FormStep4/index.tsx';
import FormStep5 from './pages/FormStep5/index.tsx';
import FormStep6 from './pages/FormStep6/index.tsx';
import FormStep7 from './pages/FormStep7/index.tsx';
import FormStep8 from './pages/FormStep8/index.tsx';
import Login from './pages/Login';
import Home from './pages/Home/index'
import FormStepFinish from './pages/FormStepFinish';
import HomePageDashboard from './pages/dashboard/dashboard.tsx'
import StudentDetails from './pages/studentDatails/studentDatails';
import { useEffect } from 'react';

const Router = () => {

  useEffect(() => {
    const handleBeforeUnload = (e: { returnValue: string; }) => {
      const confirmationMessage = 'Você perderá os dados preenchidos. Deseja continuar?';
      e.returnValue = confirmationMessage;
      return confirmationMessage;
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/home" />} />
        <Route path="/step1" element={<FormStep1 />} />
        <Route path="/step2" element={<FormStep2 />} />
        <Route path="/step3" element={<FormStep3 />} />
        <Route path="/step4" element={<FormStep4 />} />
        {/* <Route path="/step5" element={<FormStep5 />} /> */}
        <Route path="/step6" element={<FormStep6 />} />
        <Route path="/step7" element={<FormStep7 />} />
        <Route path="/step8" element={<FormStep8 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/stepFinish" element={<FormStepFinish />} />
        <Route path="/dashboard" element={<HomePageDashboard />} />
        <Route path="/aluno/:id" element={<StudentDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
