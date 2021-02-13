import styled from 'styled-components';

export const Box = styled.div`
  padding: ${ p => p.padding || '0.5rem'};
  border: ${ p => p.border};
  display: ${ p => p.display || 'inline-block'};
  width: ${ p => p.width || '100%'};
  height: ${ p => p.height };
  border-radius: ${ p => p.borderRadius};
  justify-content: ${ p => p.justifyContent};
  align-items: ${ p => p.alignItems};
`