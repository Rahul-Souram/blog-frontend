import React from 'react';
import { Helmet } from 'react-helmet';
import '../style/global.scss';

const Seo = ({seo}) => {
  return (
    <Helmet>
    <title>{seo.metaTitle || seo.title}</title>
    <meta name="description" content={seo.metaDescription || seo.description} />
 </Helmet>
  )
}

export default Seo