import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from '../assets/styles/GlobalStyles';

const MainLayouts = ({ children }) => (
  <>
    <GlobalStyles />
    {children}
  </>
);
MainLayouts.propTypes = {
  children: PropTypes.object,
};

export default MainLayouts;
