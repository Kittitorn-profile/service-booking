const breakpoints = {
  sm: '480px',
  md: '768px',
  lg: '1200px',
};

const device = {
  sm: `(min-width: 0px) and (max-width:  ${breakpoints.md})`,
  md: `only screen and (min-width: ${breakpoints.md})`,
  lg: `only screen and (min-width: ${breakpoints.lg})`,
  xl: `only screen and (min-width: ${breakpoints.xl})`,
};

export { device as default };
