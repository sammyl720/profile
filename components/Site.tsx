import React from 'react'

export interface SiteProps {
    name: string;
    url: string;
    description: string;
}
export default function Site( { name, url, description }: SiteProps ) {
  return (
    <div className='site'>
      <h3><a href={url} target='_blank'>
        {name}
        </a></h3>
      <p>
        {description}
      </p>
    </div>
  )
}
