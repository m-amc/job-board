import styled from 'styled-components';
import { Field as FormikField } from 'formik';

export const Field = styled(FormikField)`
  display: ${p => p.display || 'block'};
  width: 25rem;
  height: 3rem;
  margin-top: ${p => p.marginTop };
  margin-right: ${p => p.marginRight};
  margin-bottom: ${p => p.marginBottom} ;
  margin-left: ${p => p.marginLeft };
`