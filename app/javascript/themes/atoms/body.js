import styled, { css } from 'styled-components';

const BodyCommonStyles = () => (
  css`
    padding: ${p => p.padding };
    margin: ${p => p.margin || '0'};
    margin-top: ${p => p.marginTop};
    margin-right: ${p => p.marginRight};
    margin-bottom: ${p => p.marginBottom};
    margin-left: ${p => p.marginLeft};
    color: ${p => p.color || p.theme.blueDarkest};
    font-weight: ${p => p.fontWeight || 'normal'};
  `
)

export const BodyOne = styled.p`
  font-size: 1.6rem;
  
  ${ BodyCommonStyles }
`

export const BodyTwo = styled.p`
  font-size: 1.4rem;
  
  ${ BodyCommonStyles }
`