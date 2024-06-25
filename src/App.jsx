import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeesList from './features/employees/EmployeesList';
import EmployeeDetails from './features/employees/EmployeeDetails';
import EmployeeForm from './features/employees/EmployeeForm';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<EmployeesList />} />
      <Route path="/employee/:id" element={<EmployeeDetails />} />
      <Route path="/add" element={<EmployeeForm />} />
    </Routes>
  </Router>
);

export default App