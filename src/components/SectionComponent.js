'use strict';

import React from 'react';

import 'styles//Section.less';

class SectionComponent extends React.Component {
  render() {
    return (
      <section className="section-component">
        <div className="container">
          <h2 className="center">{ this.props.header }</h2>
          <hr />
          { this.props.children }
        </div>
      </section>
    );
  }
}

SectionComponent.displayName = 'SectionComponent';

// Uncomment properties you need
SectionComponent.propTypes = {
  header: React.PropTypes.any,
  children: React.PropTypes.any
};
// SectionComponent.defaultProps = {};

export default SectionComponent;
