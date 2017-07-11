const _defaultState = {
	threeSchools: [],
}

const resultReducer = (state = _defaultState, action) => {
	switch(action.type){
		case "ADD_SCHOOL" :
			return Object.assign({}, state, {
				threeSchools: [...state.threeSchools,
					action.school]
			})
		default:
			return state;
	}
}

export default resultReducer;
