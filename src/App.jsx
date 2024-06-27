import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import EmployeesList from './features/employees/EmployeesList/EmployeesList'
import EmployeeDetails from './features/employees/EmployeeDetails/EmployeeDetails'
import EmployeeForm from './features/employees/EmployeeForm/EmployeeForm'

const App = () => (
	<Router>
		<Routes>
			<Route path='/' element={<EmployeesList />} />
			<Route path='/employee/:id' element={<EmployeeDetails />} />
			<Route path='/add' element={<EmployeeForm />} />
		</Routes>
	</Router>
)

export default App
