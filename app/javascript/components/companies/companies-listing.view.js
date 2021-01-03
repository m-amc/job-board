import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanies } from '../../actions'

export const CompaniesListing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompanies())
  }, [])

  // Get the companies data object from the companies reducer state (state.companies) and return the companies object (state.companies.companies).  Note that the reducer companies object is the "data" object (see companies.handler.saga)
  const companies = useSelector(state => state.companies.companies);

  const list = companies.map(company => {
    const companyAttributes = company.attributes
    return (
      <li key={company.id}>
        <Link to={`/companies/${companyAttributes.slug}`} >{companyAttributes.name}</Link>
      </li>
    )
  })

  return (
    <>
      <div>This is the Companies#index view</div>
      <ul>{list}</ul>
    </>
  )
}

// connect will "connect" our component to the Provider so we can get data from the store. connect will pass the data to our component to render.
// export default connect()(CompaniesListing);

