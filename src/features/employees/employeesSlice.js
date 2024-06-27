import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	list: [],
	originalList: [],
}

const employeesSlice = createSlice({
	name: 'employees',
	initialState,
	reducers: {
		addEmployee: (state, action) => {
			state.list.push(action.payload)
			state.originalList.push(action.payload)
		},
		updateEmployee: (state, action) => {
			const index = state.list.findIndex((emp) => emp.id === action.payload.id)
			if (index >= 0) {
				state.list[index] = action.payload
				state.originalList[index] = action.payload
			}
		},
		filterEmployees: (state, action) => {
			let filteredList = state.originalList

			if (action.payload.archived !== undefined) {
				if (action.payload.archived) {
					filteredList = filteredList.filter((emp) => emp.archived)
				}
			}

			if (action.payload.position) {
				filteredList = filteredList.filter(
					(emp) => emp.position === action.payload.position
				)
			}

			state.list = filteredList
		},
		sortEmployees: (state, action) => {
			if (action.payload === 'name') {
        state.list.sort((a, b) => a.name.localeCompare(b.name))
      } else if (action.payload === 'dob') {
        state.list.sort((a, b) => new Date(a.dob).getTime() - new Date(b.dob).getTime())
      }
		},
	},
})

export const { addEmployee, updateEmployee, filterEmployees, sortEmployees } =
	employeesSlice.actions

export default employeesSlice.reducer
