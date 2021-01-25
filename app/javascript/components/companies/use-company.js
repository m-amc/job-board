import * as Yup from 'yup';
import { useSelector } from 'react-redux';

const REQUIRED = 'Required';

export const useCompanyDetails = () => {
  const companyDetails = useSelector(state => {
    return state.companyDetails.companyData
  });

  const initialValues = {
    name: companyDetails.name ?? '',
    address: companyDetails.address ?? '',
    city: companyDetails.city ?? '',
    state: companyDetails.state ?? '',
    country_code: companyDetails.country_code ?? '',
    contact_number: companyDetails.contact_number ?? '',
    email: companyDetails.email ?? '',
    website: companyDetails.website ?? '',
    about: companyDetails.about ?? '',
    password: companyDetails.password ?? '',
  }

  const validationSchema = Yup.object({
    name: Yup.string().required(REQUIRED),
    address: Yup.string().required(REQUIRED),
    city: Yup.string().required(REQUIRED),
    country_code: Yup.string().required(REQUIRED),
    contact_number: Yup.string().required(REQUIRED),
    email: Yup.string().email('Invalid email format').required(REQUIRED),
  })

  return {
    initialValues,
    validationSchema
  };
}