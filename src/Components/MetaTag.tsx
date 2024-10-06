import React, { FC } from 'react'
import { Helmet } from 'react-helmet-async'

export interface MetaTagProps {
  title: string
  ogDescription?: string
}

const MetaTag: FC<MetaTagProps> = (props) => {
  const { title, ogDescription } = props
  return (
    <Helmet>
      <title>{title}</title>
      <meta
        name="description"
        content={ogDescription || 'Rainbow Powder Coatings'}
      />
      <meta property="og:title" content={title || 'Rainbow Powder Coatings'} />
      <meta name="twitter:title" content={title || 'Rainbow Powder Coatings'} />
      <meta
        property="og:description"
        content={ogDescription || 'Rainbow Powder Coatings'}
      />
      <meta property="og:type" content="website" />
    </Helmet>
  )
}

export default MetaTag
