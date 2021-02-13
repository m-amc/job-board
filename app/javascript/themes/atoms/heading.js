import styled, {css} from 'styled-components';

const HeadingCommonStyles = () => (
  css`
    padding: ${ p => p.padding || '0.5rem'};
    margin: ${ p => p.margin || '0'};
    margin-top: ${ p => p.marginTop };
    margin-right: ${ p => p.marginRight };
    margin-bottom: ${ p => p.marginBottom };
    margin-left: ${ p => p.marginLeft };
    color: ${ p => p.theme.blueDarkest};
    font-weight: ${ p => p.fontWeight || 'normal'};
  `
)

export const HeadingOne = styled.h1`
  font-size: 2rem;
  ${HeadingCommonStyles}
`

export const HeadingTwo = styled.h2`
  font-size: 1.6rem;
  ${HeadingCommonStyles}
`