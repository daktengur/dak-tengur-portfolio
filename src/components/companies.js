import React from "react";
import ShellLogo from "../assets/logo/logo-shell.svg";
import VoloLogo from "../assets/logo/logo-volo.svg";
import SalveLogo from "../assets/logo/logo-salve.svg";
import FWILogo from "../assets/logo/logo-fwi.svg";
import CiscoLogo from "../assets/logo/logo-cisco.svg";

const CompaniesWorkedWith = props => (
    <div className="companies-header">
        <div className="companies-intro">
            <h2>My Clients</h2>
            <p>
                I've been fortunate enough to work alongside some talented individuals and
                teams, within projects of different sizes, locations and setup. An open-mind and contextualised process are keys to success.

            </p>
        </div>
        <div className="companies-list" id="companies-list">
            <img src={ShellLogo} alt="The Shell logo"/>
            <img src={VoloLogo} alt="The Volo logo"/>
            <img src={SalveLogo} alt="The Salve logo"/>
            <img src={FWILogo} alt="The Farmers Weekly Interactive by RELX logo"/>
            <img src={CiscoLogo} alt="The Cisco logo"/>
        </div>
    </div>
);

export default CompaniesWorkedWith;
