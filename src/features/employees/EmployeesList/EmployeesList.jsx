import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { filterEmployees, sortEmployees } from '../employeesSlice'
import './EmployeesList.css'

const EmployeesList = () => {
  const dispatch = useDispatch()
  const employees = useSelector((state) => state.employees.list)
  const [filter, setFilter] = useState({ position: '', archived: false })

  const handleFilterChange = (e) => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value
    const newFilter = { ...filter, [e.target.name]: value }
    setFilter(newFilter)
    dispatch(filterEmployees(newFilter))
  }

  const handleSortChange = (e) => {
    dispatch(sortEmployees(e.target.value))
  }

  return (
    <div className=''>
      <div className='breadcrumb'>
        <h1 className='breadcrumb_main_title'>Список сотрудников</h1>
        <Link to='/add'>
          <button className='breadcrumb_btn'>Добавить сотрудника</button>
        </Link>
      </div>
      <div className='tabs'>
        <div className='prof'>
          <select
            className='prof_select'
            name='position'
            onChange={handleFilterChange}
          >
            <option value=''>Все должности</option>
            <option value='Повар'>Повар</option>
            <option value='Официант'>Официант</option>
            <option value='Водитель'>Водитель</option>
          </select>
        </div>

        <div className='archive_item'>
          <label>
            <input
              type='checkbox'
              name='archived'
              checked={filter.archived}
              onChange={handleFilterChange}
            />
            В архиве
          </label>
        </div>

        <div className='sort'>
          <select className='sort_select' onChange={handleSortChange}>
            <option value='name'>Сортировка по имени</option>
            <option value='dob'>Сортировка по дате рождения</option>
          </select>
        </div>
      </div>

      <div className='table'>
        <div className='table-row header'>
          <div className='table-cell'>Имя</div>
          <div className='table-cell'>Профессия</div>
          <div className='table-cell'>Номер телефона</div>
        </div>
        {employees.map((emp, index) => (
          <div className='table-row' key={emp.id || index}>
            <div className='table-cell'>
              <Link to={`/employee/${emp.id}`}>{emp.name}</Link>
            </div>
            <div className='table-cell'>{emp.position}</div>
            <div className='table-cell'>{emp.phone}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EmployeesList