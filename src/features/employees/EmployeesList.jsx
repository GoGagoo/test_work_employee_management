import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { filterEmployees, sortEmployees } from './employeesSlice'

const EmployeesList = () => {
	const dispatch = useDispatch()
	const employees = useSelector((state) => state.employees.list)
	const [filter, setFilter] = useState({ position: '', archived: false })

	const handleFilterChange = (e) => {
		setFilter({ ...filter, [e.target.name]: e.target.value })
		dispatch(filterEmployees(filter))
	}

	const handleSortChange = (e) => {
		dispatch(sortEmployees(e.target.value))
	}

	return (
		<div>
			<h1>Список сотрудников</h1>
			<div>
				<select name='position' onChange={handleFilterChange}>
					<option value=''>Все должности</option>
					<option value='Повар'>Повар</option>
					<option value='Официант'>Официант</option>
					<option value='Водитель'>Водитель</option>
				</select>
				<label>
					<input
						type='checkbox'
						name='archived'
						checked={filter.archived}
						onChange={(e) =>
							setFilter({ ...filter, archived: e.target.checked })
						}
					/>
					В архиве
				</label>
				<select onChange={handleSortChange}>
					<option value='name'>Сортировка по имени</option>
					<option value='dob'>Сортировка по дате рождения</option>
				</select>
			</div>
			<ul>
				{employees.map((emp) => (
					<li key={emp.id}>
						<Link to={`/employee/${emp.id}`}>{emp.name}</Link> - {emp.position}{' '}
						- {emp.phone}
					</li>
				))}
			</ul>
			<Link to='/add'>Добавить сотрудника</Link>
		</div>
	)
}

export default EmployeesList
