import React from 'react';
import { useSelector } from 'react-redux';
import PageDescriptionComponent from './PageDescriptionComponent';
import { PAGE_DESCRIPTION_COMPONENT } from '../../../constants';

const PageDescription = () => {
  const configuration = useSelector((state) => state.configuration);
  const data = configuration.content.components.find(x => x.id === PAGE_DESCRIPTION_COMPONENT);

  return(data && 
    <PageDescriptionComponent data={data} />
  )
}

export default PageDescription;