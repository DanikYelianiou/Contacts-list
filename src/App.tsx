import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { AuthPage } from "./pages";
import { ContactListPage } from "./pages"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth/" element={<AuthPage />}/> :
        <Route path="/" element={<ContactListPage />}/>
      </Routes>
    </Router>
  );
}

export default App;