import React from "react"
import Helmet from 'react-helmet';
import Layout from "../components/layout"
import HeroHeader from "../components/heroHeader"
import CompaniesWorkedWith from "../components/companies";
import {Link} from "gatsby";
// Logos
import FWILogo from "../assets/logo/logo-fwi-colored.svg";
import ShellLogo from "../assets/logo/logo-shell-colored.svg";
import VoloLogo from "../assets/logo/logo-volo-colored.svg";
import SalveLogo from "../assets/logo/logo-salve-colored.svg";
import CiscoLogo from "../assets/logo/logo-cisco-colored.svg";
// Artwork
import shellRiskArtwork from "../assets/case-studies/shell-risk/artwork-risk.png";
import shellStratosArtwork from "../assets/case-studies/shell-stratos/artwork-stratos.png";
import salveArtwork from "../assets/case-studies/salve/artwork-salve.png";
import fwiArtwork from "../assets/case-studies/fwi/artwork-fwi.png";
import voloArtwork from "../assets/case-studies/volo/artwork-volo.png";
import ciscoEstoreArtwork from "../assets/case-studies/cisco/artwork-estore.png";

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
      <div className="caseStudies-list">
        {/* Shell Risk */}
        <div className="caseStudy">
          <Link to="/case-studies/shell-risk-reporting" className="caseStudy-thumbnail">
            <img src={shellRiskArtwork} alt="A screenshot illustrating a market risk analytics platform"/>
          </Link>
          <div className="caseStudy-wrapper">
            <div className="caseStudy-details">
              <h3 className="caseStudy-title">Risk Reporting</h3>
              <p className="caseStudy-description">Automating manual sign-off processes and
                surfacing Profit and Loss information to traders and Market Risk users</p>
                <a href='/case-studies/shell-risk-reporting' className="button -transparent -sm">View Case &rarr;</a>
            </div>
            <div className="caseStudy-history">
              <img
                className="caseStudy-company"
                src={ShellLogo}
                height={24}
                height={24}
                alt="The Royal Dutch Shell logo"/>
              <span className="caseStudy-role">Product Designer • Case Study</span>
            </div>
          </div>
        </div>
        {/* Shell Stratos */}
        <div className="caseStudy -flipped">
          <Link to="/case-studies/shell-stratos" className="caseStudy-thumbnail">
            <img src={shellStratosArtwork}/>
          </Link>
          <div className="caseStudy-wrapper">
            <div className="caseStudy-details">
              <h3 className="caseStudy-title">Ingestion Portal</h3>
              <p className="caseStudy-description">Creating a data catalog and democratising data access</p>
              <a href='/case-studies/shell-stratos' className="button -transparent -sm">View Case &rarr;</a>
            </div>
            <div className="caseStudy-history">
              <img
                className="caseStudy-company"
                src={ShellLogo}
                height={24}
                height={24}
                alt="The Royal Dutch Shell logo"/>
              <span className="caseStudy-role">Product Designer • Case Study</span>
            </div>
          </div>
        </div>
        {/* Salve App */}
        <div className="caseStudy">
          <Link to="/case-studies/salve-app" className="caseStudy-thumbnail">
            <img src={salveArtwork}/>
          </Link>
          <div className="caseStudy-wrapper">
            <div className="caseStudy-details">
              <h3 className="caseStudy-title">Salve App</h3>
              <p className="caseStudy-description">Improving patient wellbeing and clinic transparency of patient medication adherence</p>
              <a href='/case-studies/salve-app' className="button -transparent -sm">View Case &rarr;</a>
            </div>
            <div className="caseStudy-history">
              <img
                className="caseStudy-company"
                src={SalveLogo}
                height={24}
                height={24}
                alt="The Salve logo"/>
              <span className="caseStudy-role">UI/UX Designer • Case Study</span>
            </div>
          </div>
        </div>
        {/* Farmers Weekly */}
        <div className="caseStudy -flipped">
          <Link to="/case-studies/fwi" className="caseStudy-thumbnail">
            <img src={fwiArtwork}/>
          </Link>
          <div className="caseStudy-wrapper">
            <div className="caseStudy-details">
              <h3 className="caseStudy-title">Farmers Weekly</h3>
              <p className="caseStudy-description">Helping UK's leading farming publication improve content discovery</p>
              <a href='/case-studies/fwi' className="button -transparent -sm">View Case &rarr;</a>
            </div>
            <div className="caseStudy-history">
              <img
                className="caseStudy-company"
                src={FWILogo}
                height={24}
                height={24}
                alt="The Farmers Weekly logo"/>
              <span className="caseStudy-role">Product Designer • Case Study</span>
            </div>
          </div>
        </div>
        {/* Volo */}
        <div className="caseStudy">
          <Link to="/case-studies/volo" className="caseStudy-thumbnail">
            <img src={voloArtwork}/>
          </Link>
          <div className="caseStudy-wrapper">
            <div className="caseStudy-details">
              <h3 className="caseStudy-title">Volo 2</h3>
              <p className="caseStudy-description">Driving efficiencies in product listing to e-commerce marketplaces</p>
              <a href='/case-studies/volo' className="button -transparent -sm">View Case &rarr;</a>
            </div>
            <div className="caseStudy-history">
              <img
                className="caseStudy-company"
                src={VoloLogo}
                height={24}
                height={24}
                alt="The Volo logo"/>
              <span className="caseStudy-role">Product Designer • Case Study</span>
            </div>
          </div>
        </div>
        {/* Cisco eStore */}
        <div className="caseStudy -flipped">
          <Link to="/case-studies/cisco-estore" className="caseStudy-thumbnail">
            <img src={ciscoEstoreArtwork}/>
          </Link>
          <div className="caseStudy-wrapper">
            <div className="caseStudy-details">
              <h3 className="caseStudy-title">Cisco eStore</h3>
              <p className="caseStudy-description">Improving the desktop and mobile experience for self-service ordering of IT services</p>
              <a href='/case-studies/cisco-estore' className="button -transparent -sm">View Case &rarr;</a>
            </div>
            <div className="caseStudy-history">
              <img
                className="caseStudy-company"
                src={CiscoLogo}
                height={24}
                height={24}
                alt="The Cisco eStore logo"/>
              <span className="caseStudy-role">UI/UX Designer • Case Study</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
}

export default IndexPage