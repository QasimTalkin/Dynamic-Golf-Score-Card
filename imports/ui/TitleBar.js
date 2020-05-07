import React from 'react';
import PropTypes from 'prop-types';

// props coming from argument on the title bar 
export default class TitleBar extends React.Component {
  renderSubtitle () {
    if(this.props.subtitle){
      return <h3><a href={this.props.link}>{this.props.subtitle}</a></h3>;
    }
  }
  render () {
    return (
      <div className="title-bar"> 
        <div className="wrapper">
          <h1>{this.props.title}</h1>
            <h2 className="title-bar__subtitle">{this.renderSubtitle()}</h2>
        </div>
      </div>
    );
  }
}


TitleBar.propTypes = {
  title:  PropTypes.string.isRequired,
  subtitle:  PropTypes.string,
};

TitleBar.defaultProps = {
  title : '(Title goes here)'
};