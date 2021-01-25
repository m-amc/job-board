import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Button = styled.button`
  color: ${ p => p.theme.white};
  background: ${ p => p.secondary ? p.theme.secondaryColor : p.theme.primaryColor};
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.6rem;
  box-shadow: none;
  border: none;
  display: block;
`

Button.propTypes = {
  secondary: PropTypes.bool
}

Button.defaultProps = {
  secondary: false
}