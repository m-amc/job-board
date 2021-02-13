import styled from 'styled-components';

export const Label = styled.label`
  display: ${ p => p.display || 'block'};
  color: ${ p => p.color || p.theme.blueDarkest };
  margin-bottom: ${ p => p.marginBottom}
`