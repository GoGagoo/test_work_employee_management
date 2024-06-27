import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addEmployee, updateEmployee } from '../employeesSlice'
import './EmployeeForm.scss'

const EmployeeForm = () => {
  const { id } = useParams()
  const employee = useSelector((state) =>
    state.employees.list.find((emp) => emp.id === id)
  ) || {
    name: '',
    phone: '',
    dob: '',
    position: '',
    archived: false,
  }
  const [formState, setFormState] = useState({ ...employee })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState({ ...formState, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!id) {
      dispatch(addEmployee(formState))
    } else {
      dispatch(updateEmployee(formState))
    }
    navigate('/')
}

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h1 className='form_title'>Создание сотрудника</h1>
      <label className='from_label'>
        Имя:
        <input
          type='text'
          name='name'
          className='form_input'
          value={formState.name || ''}
          onChange={handleChange}
          required
        />
      </label>
      <label className='from_label'>
        Телефон:
        <input
          type='text'
          name='phone'
          className='form_input'
          value={formState.phone || ''}
          onChange={handleChange}
          required
        />
      </label>
      <label className='from_label'>
        Дата рождения:
        <input
          type='text'
          name='dob'
          className='form_input'
          value={formState.dob || ''}
          onChange={handleChange}
          required
        />
      </label>
      <label className='from_label'>
        Должность:
        <select
          name='position'
          className='form_input'
          value={formState.position || ''}
          onChange={handleChange}
          required
        >
          <option value=''>Не указана</option>
          <option value='Повар'>Повар</option>
          <option value='Официант'>Официант</option>
          <option value='Водитель'>Водитель</option>
        </select>
      </label>
      <label className='from_label'>
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
      <button className='form_btn' type='submit'>Сохранить</button>
    </form>
  )
}

export default EmployeeForm