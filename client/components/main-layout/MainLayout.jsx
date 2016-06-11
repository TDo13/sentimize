import React from 'react';
import ReactDom from 'react-dom';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import RouteTransition from './RouteTransition.jsx';

export default class MainLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-layout">
        <NavBar />
          
            {this.props.children}
          
        <Footer />
      </div>
    )
  }
}