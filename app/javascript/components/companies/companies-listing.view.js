import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanies } from '../../actions'

export const CompaniesListing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompanies())
  }, [])

  // Get the companies data object from the companies reducer state (state.companies) and return the companies object (state.companies.companies).  We want to get the actual array so state.companies.companies.data
  const companies = useSelector(state => state.companies.companies);

  return (
    <>
      <div>This is the Companies#index view</div>
      <ul>
        {companies.map(company => {
          const companyAttributes = company.attributes
          return <li key={company.id}>{companyAttributes.name}</li>
        })}
      </ul>
    </>
  )
}

// connect will "connect" our component to the Provider so we can get data from the store. connect will pass the data to our component to render.
// export default connect()(CompaniesListing);

