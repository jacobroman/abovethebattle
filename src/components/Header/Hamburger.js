import React, { Component } from 'react';

export default class Hamburger extends Component {
  render() {
    return (
      <svg width="28px" height="19px" viewBox="0 0 28 19">
        <g
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
        >
          <g
            transform="translate(-65.000000, -55.000000)"
            stroke="#333"
            strokeWidth="3"
          >
            <g transform="translate(66.000000, 54.000000)">
              <g transform="translate(0.000000, 1.000000)">
                <path d="M0.5,1.5 L20.0064092,1.5" />
                <path d="M0.5,9.5 L13.009996,9.5" />
                <path d="M0.5,17.5 L25.2386338,17.5" />
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  }
}
