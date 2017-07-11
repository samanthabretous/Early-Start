const _defaultState = {
	age: "3-5",
	address: [],
	city: [],
	zipcode: [],
	schooldata: []
}

const userReducer = (state = _defaultState, action) => {
	switch(action.type){
		case "ADD_AGE" :
			return Object.assign({}, state, {
				age: action.age
			})
		case "ADD_ADDRESS" :
			return Object.assign({}, state, {
				address: [action.address]
			})
		case "ADD_CITY" :
			return Object.assign({}, state, {
				city: [action.city]
			})
		case "ADD_ZIPCODE" :
			return Object.assign({}, state, {
				zipcode: [action.zipcode]
			})
		default:
			return state;
	}
}

export default userReducer;
