import React from 'react';

class Output extends React.Component {
	render() {
		return <div id="display" className="outputScreen">{this.props.currentValue}</div>
	}
};

export default Output;
