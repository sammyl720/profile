import Certificate from '../components/Certificate'
import certificates from '../data/certificates'
import sites from '../data/sites';
import Site from '../components/Site'
export default function Home() {
  return (
    <div className='page'>
      <header className='header' id='portfolio'>
        <div className="flex-box profile">
          <h1>Shmuel Leider</h1>
          <small>Software Developer</small>
        </div>
        <div className="flex-box content">
          <h3>Portfolio</h3>
          <p>
            I am a fullstack developer with over 5 years of experience working in the javacript-based web application development space. My experience spans a wide range of programming languages and frameworks, including: Javascript, TypeScript, Python, and more.
          </p>
          <p>
            I am currently working on <a href='https://github.com/sammyl720/graphql-social-app' target='_blank'>a graphql api</a> as a backend to  a web application that lets you stay connected to your family, friends and peers.
          </p>
          <p>
            I am also working on <a href='https://github.com/sammyl720/graphql-social-client' target='_blank'> a next.js application</a> which serves as the frontend for the aforementioned graphql api.
          </p>
        </div>
      </header>
      <section className='section' id="certificates">
        <div className="flex-box">
          <h2>Certificates</h2>
          <div className='cert-list'>
            { certificates.map(cert => (
              <Certificate key={cert.name} {...cert} />
             ))}
          </div>
        </div>
      </section>
      <section className='section' id="sites">
        <div className="flex-box">
          <h2>Sites &amp; Applications</h2>
          <div className='cert-list'>
            { sites.map(site => (
              <Site key={site.name} {...site} />
             ))}
          </div>
        </div>
      </section>
    </div>
  )
}
