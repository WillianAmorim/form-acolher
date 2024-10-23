import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import FormStep1 from './pages/FormStep1';
import FormStep2 from './pages/FormStep2';
import FormStep3 from './pages/FormStep3';
import FormStep4 from './pages/FormStep4';
import FormStep5 from './pages/FormStep5';
import FormStep6 from './pages/FormStep6';
import FormStep7 from './pages/FormStep7';
import Home from './pages/Home/index'
import FormStepFinish from './pages/FormStepFinish';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/home" />} />
        <Route path="/step1" element={<FormStep1 />} />
        <Route path="/step2" element={<FormStep2 />} />
        <Route path="/step3" element={<FormStep3 />} />
        <Route path="/step4" element={<FormStep4 />} />
        <Route path="/step5" element={<FormStep5 />} />
        <Route path="/step6" element={<FormStep6 />} />
        <Route path="/step7" element={<FormStep7 />} />
        <Route path="/stepFinish" element={<FormStepFinish />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
