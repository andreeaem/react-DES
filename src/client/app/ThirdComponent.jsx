import React from 'react';

export default class Button extends React.Component{
  render(){
    return(
      <button type={this.props.behavior}>{this.props.children}</button>
    );
  }
}
