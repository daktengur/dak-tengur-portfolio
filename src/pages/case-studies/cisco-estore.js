import React from "react"
import Layout from "../../components/layout"
import {graphql} from 'gatsby';
import Img from 'gatsby-image';

const CaseStudyCiscoStore = (props) => {
    return <Layout>
        <div className="portfolioItem">
            <div className="portfolioItem__title --cisco">
                <h1>Cisco eStore</h1>
                <p>Improving the desktop and mobile experience for self-service ordering of IT
                    services</p>
            </div>
            <div className="portfolioItem__description">
                <div className="portfolioItem__description --item">
                    <h4>Overview</h4>
                    <span>eStore is a web enterprise store available to Cisco employees. Home to
                        70,000+ monthly users, it allows employees to request any type of IT service,
                        ranging from hardware, software to account setup or provisioning and to the more
                        technical end of the spectrum - requesting and managing of a virtual machines or
                        data centers.</span>
                    <span>It has a mobile app (eStore Apps) which allows users to view all apps made
                        by Cisco teams, and download these to their personal or enterprise devices.</span>
                </div>
                <div className="portfolioItem__description --item">
                    <h4>Goals</h4>
                    <ul>
                        <li>Turn the eStore platform responsive to allow future-proofing of requirements</li>
                        <li>Apply the new Atlantic Cisco UI design system</li>
                        <li>Improve store areas and reduce user confusion between eStore and eStore Apps</li>
                    </ul>
                </div>
            </div>
            <div className="portfolioItem__context">
                <div className="portfolioItem__context --item">
                    <h4>My Role</h4>
                    <span>Result</span>
                </div>
                <div className="portfolioItem__context --item">
                    <h4>My Team</h4>
                    <span>Result</span>
                </div>
                <div className="portfolioItem__context --item">
                    <h4>Deliverables</h4>
                    <span>Result</span>
                </div>
            </div>
            <div className="portfolioItem__content">
                <p>xxx Cisco eStore - content xxx</p>
                <p>xxx Cisco eStore - content xxx</p>
                <ul className="portfolioItem__content --bullet">
                    <li>List Item 1</li>
                    <li>List Item 2</li>
                    <li>List Item 3</li>
                    <li>List Item 4</li>
                </ul>
                <p className="portfolioItem__content --italics">xxx Cisco eStore - content xxx</p>
                <p className="portfolioItem__content --italics">xxx Cisco eStore - content xxx</p>
                <p className="portfolioItem__content --italics">xxx Cisco eStore - content xxx</p>
                <p className="portfolioItem__content --italics">xxx Cisco eStore - content xxx</p>
                <p className="portfolioItem__content --italics">xxx Cisco eStore - content xxx</p>
                {/* <img className="portfolioItem-content __image" src={eStoreArtwork}></img> */}
                <p>xxx Cisco eStore - content xxx</p>
                <p>xxx Cisco eStore - content xxx</p>
                <p>xxx Cisco eStore - content xxx</p>
                <quote className="portfolioItem-content __quote">
                    I'm a quote bro</quote>
                <p>xxx Cisco eStore - content xxx</p>
                <Img fluid={props.data.artworkeStore.childImageSharp.fluid} />
                <p>xxx Cisco eStore - content xxx</p>
            </div>
        </div>
    </Layout>
}
export default CaseStudyCiscoStore

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

export const pageQuery = graphql `
query {
  artworkeStore: file(relativePath: { eq: "artwork-estore.png" }) {
    childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
  }
}
`;