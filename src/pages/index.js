import React from "react"
import Helmet from 'react-helmet';
import Layout from "../components/layout"
import HeroHeader from "../components/heroHeader"
import CompaniesWorkedWith from "../components/companies";
import {Link} from "gatsby";
import fwiArtwork from "../assets/case-studies/test/fwi-artwork.png";

const IndexPage = () => {
  return <Layout>
    <div>
      <Helmet>
        <h1>
          Hi, I'm Dak.
        </h1>
        <h2>Description</h2>
      </Helmet>
    </div>
    <HeroHeader/>
    <CompaniesWorkedWith/>
    <div className="caseStudies-header">
      <h2>Case Studies</h2>
      <div class="caseStudies-list">
        <div className="caseStudy">
          <Link to="/case-studies/fwi" className="card-thumbnail">
            <img src={fwiArtwork}/>
          </Link>
          <h3 className="post-title">Risk Reporting</h3>
          <h4 className="post-meta">Product Designer</h4>
        </div>
        <div className="caseStudy">
          <Link to="/case-studies/fwi" className="card-thumbnail">
            <img src={fwiArtwork}/>
          </Link>
          <h3 className="post-title">Environmental Products Trading Analytics</h3>
          <h4 className="post-meta">Product Designer</h4>
        </div>
        <div className="caseStudy">
          <Link to="/case-studies/fwi" className="card-thumbnail">
            <img src={fwiArtwork}/>
          </Link>
          <h3 className="post-title">Volo 2</h3>
          <h4 className="post-meta">Product Designer</h4>
        </div>
        <div className="caseStudy">
          <Link to="/case-studies/fwi" className="card-thumbnail">
            <img src={fwiArtwork}/>
          </Link>
          <h3 className="post-title">Salve - App</h3>
          <h4 className="post-meta">UI/UX Designer</h4>
        </div>
        <div className="caseStudy">
          <Link to="/case-studies/fwi" className="card-thumbnail">
            <img src={fwiArtwork}/>
          </Link>
          <h3 className="post-title">Farmers Weekly</h3>
          <h4 className="post-meta">Product Designer</h4>
        </div>
        <div className="caseStudy">
          <Link to="/case-studies/fwi" className="card-thumbnail">
            <img src={fwiArtwork}/>
          </Link>
          <h3 className="post-title">Salve</h3>
          <h4 className="post-meta">UI/UX Designer</h4>
        </div>
        <div className="caseStudy">
          <Link to="/case-studies/fwi" className="card-thumbnail">
            <img src={fwiArtwork}/>
          </Link>
          <h3 className="post-title">Cisco eStore</h3>
          <h4 className="post-meta">UI/UX Designer</h4>
        </div>
      </div>
    </div>
  </Layout>
}

export default IndexPage