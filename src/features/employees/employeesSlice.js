import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	list: [],
}

const employeesSlice = createSlice({
	name: 'employees',
	initialState,
	reducers: {
		addEmployee: (state, action) => {
			state.list.push(action.payload)
		},
		updateEmployee: (state, action) => {
			const index = state.list.findIndex((emp) => emp.id === action.payload.id)
			if (index >= 0) {
				state.list[index] = action.payload
			}
		},
		filterEmployees: (state, action) => {
			// Implement filtering logic
		},
		sortEmployees: (state, action) => {
			// Implement sorting logic
		},
	},
})

export const { addEmployee, updateEmployee, filterEmployees, sortEmployees } =
	employeesSlice.actions

export default employeesSlice.reducer
