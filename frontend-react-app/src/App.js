import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInForm from './components/signin';
import SignUpForm from './components/signup';
import Homepage from './components/Hompage';
import Splash from './components/splash';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<SignInForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route
            path="/*"
            element={
              <>
                <Splash />
                <div className="content">
                  <Routes>
                    <Route index element={<Homepage />} />
                    {/* Add other routes as needed */}
                  </Routes>
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
