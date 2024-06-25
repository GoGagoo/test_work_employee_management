import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addEmployee, updateEmployee } from './employeesSlice'

const EmployeeForm = () => {
	const { id } = useParams()
	const employee =
		useSelector((state) => state.employees.list.find((emp) => emp.id === id)) ||
		{}
	const [formState, setFormState] = useState({ ...employee })
	const dispatch = useDispatch()
	const history = useNavigate()

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormState({ ...formState, [name]: value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (id) {
			dispatch(updateEmployee(formState))
		} else {
			dispatch(addEmployee(formState))
		}
		history.push('/')
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Имя:
				<input
					type='text'
					name='name'
					value={formState.name || ''}
					onChange={handleChange}
					required
				/>
			</label>
			<label>
				Телефон:
				<input
					type='text'
					name='phone'
					value={formState.phone || ''}
					onChange={handleChange}
					required
				/>
			</label>
			<label>
				Дата рождения:
				<input
					type='text'
					name='dob'
					value={formState.dob || ''}
					onChange={handleChange}
					required
				/>
			</label>
			<label>
				Должность:
				<select
					name='position'
					value={formState.position || ''}
					onChange={handleChange}
					required
				>
					<option value='Повар'>Повар</option>
					<option value='Официант'>Официант</option>
					<option value='Водитель'>Водитель</option>
				</select>
			</label>
			<label>
				<input
					type='checkbox'
					name='archived'
					checked={formState.archived || false}
					onChange={(e) =>
						setFormState({ ...formState, archived: e.target.checked })
					}
				/>
				В архиве
			</label>
			<button type='submit'>Сохранить</button>
		</form>
	)
}

export default EmployeeForm
