import React from "react";
import "./App.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import NavBar from "./components/NavBar";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import WorkSpace from "./Pages/WorkSpace";
import FolderSection from "./Pages/FolderSection";
import FormCreate from "./Pages/FormCreate";
import Settings from "./Pages/Settings";
import FormBot from "./Pages/FormBot";
import { ThemeProvider } from "./Contexts/ThemeProvider";


const App = () => {
  return (
    <ThemeProvider>
      <ToastContainer position="bottom-right" theme="colored" closeButton={false} />
      <Router>
        <Routes>
          <Route path='/' element={<>
                <NavBar />
                <LandingPage />
              </>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/workspace' element={<WorkSpace />}/>
          <Route path='/settings/:userId' element={<Settings />}/>
          <Route path='/workspace/:id' element={<FolderSection />}/>
          <Route path='/form-create/:folderid' element={<FormCreate />}/>
          <Route path='/form-create/workspace' element={<FormCreate />}/>
          <Route path='/form-get/:formid' element={<FormCreate />}/>
          <Route path='/form-bot/:formid' element={<FormBot />}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
