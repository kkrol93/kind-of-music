import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from '../assets/styles/GlobalStyles';
import Navigation from '../components/navigation';

const MainLayouts = ({ children }) => (
  <>
    <GlobalStyles />
    <Navigation />
    {children}
  </>
);
MainLayouts.propTypes = {
  children: PropTypes.object,
};

export default MainLayouts;
