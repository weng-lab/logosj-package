import React from 'react';

import { xrange } from '../../common/utils';

class YAxis extends React.Component {

    render() {
	let ticks = xrange(this.props.bits + 1);
	return (
	    <g transform={this.props.transform}>
		<rect height={this.props.height} width={4} x={this.props.width - 4} y="0"
	          fill="#000000" />
		{ticks.map( i => (
		  <g key={i} transform={"translate(0," + (this.props.height - Math.floor(i * this.props.height / this.props.bits)) + ")"}>
		      <text x={this.props.width - 15} textAnchor="end" y="4">{i}</text>
		      <rect x={this.props.width - 10} width="10" height="4" y="-2" fill="#000000" />
		  </g>
		))}
	        <g transform="rotate(-90)">
		    <text y="12" x={-this.props.height / 2} textAnchor="middle">bits</text>
		</g>
	    </g>
	);
    }
    
};
export default YAxis;
