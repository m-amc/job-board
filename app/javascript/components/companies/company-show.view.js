import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompany} from '../../actions'

export const CompanyShow = ({ match }) => {
  const slug = match.params.slug;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompany(slug))
  }, [])

  const companyInfo = useSelector(state => state.companyInfo.companyInfo)

  return <div>This is the Companies#show view</div>
}