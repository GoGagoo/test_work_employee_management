import { useParams } from 'react-router-dom'
import EmployeeForm from '../EmployeeForm/EmployeeForm'

const EmployeeDetails = () => {
	const { id } = useParams()
	return (
		<div>
			<h1>Редактирование сотрудника</h1>
			<EmployeeForm id={id} />
		</div>
	)
}

export default EmployeeDetails
