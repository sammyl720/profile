import React from 'react'

interface CertificateProps {
    name: string;
    link: string;
    image: string;
    date: string;
}

export default function Certificate( props: CertificateProps) {
  return (
    <a href={props.link} target='_blank'>
      <article className='cert-item'>
        <h4>{props.name}</h4>
        <img src={props.image} alt={props.name} />
      </article>
    </a>
  )
}
