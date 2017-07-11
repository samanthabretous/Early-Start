import React from 'react';
import {addAge} from '../actions/userActions';
import {connect} from 'react-redux';

class Age extends React.Component {
	constructor() {
		super();
		this.state = {
			ageRange: ''
		};
		this.selectedAge = this.selectedAge.bind(this);
		this.goToLocation = this.goToLocation.bind(this);
	}

	selectedAge(event){
		addAge(event.target.value)
	}

	goToLocation() {
		this.props.parent.welcome.resume();
	}

	render(){
		return(
			<div className="age" >
				
					<select 
						onChange={this.selectedAge}
						className="ageForm"
					>
						<option value="3-5">3-5</option>
						<option value="5-10">5-10</option>
						<option value="10-13">10-13</option>
					</select>
					<button className="ageButton" onClick={this.goToLocation}>ENTER</button>		
			</div>
			
		)
	}
};

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreator({addAge}, dispatch)
// }

export default connect(null, {addAge})(Age);