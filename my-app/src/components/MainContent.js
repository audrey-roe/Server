import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowRestore, faMinus, faFolder, faImage, faLock, faHdd, faCloud, faServer, faMagic, faPlug, faDatabase, faGlobe, faCodeBranch, faClone, faExchangeAlt, faWrench, faEdit } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faShare, faEnvelopeOpen, faReply, faInbox, faUsers, faShippingFast, faFilter, faFileAlt, faUserShield, faEnvelopeOpenText, faShieldAlt, faCogs } from '@fortawesome/free-solid-svg-icons';

const MainContent = () => {
  const handleInputChange = () => {
    // Handle  event handler to trigger search
  };

  const [isDatabasesCollapsed, setIsDatabasesCollapsed] = useState(false);
  const [isDomainsCollapsed, setIsDomainsCollapsed] = useState(false);
  const [isFilesCollapsed, setIsFilesCollapsed] = useState(false);
  const [isEmailsCollapsed, setIsEmailsCollapsed] = useState(false);
  const [isMetricsCollapsed, setIsMetricsCollapsed] = useState(false);

  const toggleFilesCollapse = () => {
    setIsFilesCollapsed(!isFilesCollapsed);
  };

  const toggleDatabasesCollapse = () => {
    setIsDatabasesCollapsed(!isDatabasesCollapsed);
  };

  const toggleDomainsCollapse = () => {
    setIsDomainsCollapsed(!isDomainsCollapsed);
  };

  const toggleEmailsCollapse = () => {
    setIsEmailsCollapsed(!isEmailsCollapsed);
  };

  const toggleMetricsCollapse = () => {
    setIsMetricsCollapsed(!isMetricsCollapsed);
  };

 
  return (
    <main>
      <section className="searchMain">
        <form>
            <input 
            type="text"
            placeholder="Find functions quickly by typing here."
            className="search-maincontent"
            onChange={handleInputChange} 
            />
        </form>
      </section>

      <section>
        <h2 className="header2-main">FILES
         <button onClick={toggleFilesCollapse} className="collapse-button">
          <FontAwesomeIcon icon={faMinus} />
        </button>
        </h2>
        {!isFilesCollapsed && (
        <ul className="section1-main">
          <li><a href="/file-manager"><FontAwesomeIcon icon={faFolder}  className="icon"/> File Manager</a></li>
          <li><a href="/images"><FontAwesomeIcon icon={faImage} className="icon" /> Images</a></li>
          <li><a href="/directory-privacy"><FontAwesomeIcon icon={faLock} className="icon"/> Directory Privacy</a></li>
          <li><a href="/disk-usage"><FontAwesomeIcon icon={faHdd} className="icon"/> Disk Usage</a></li>
          <li><a href="/web-disk"><FontAwesomeIcon icon={faCloud} className="icon"/> Web Disk</a></li>
          <li><a href="/ftp-accounts"><FontAwesomeIcon icon={faServer} className="icon"/> FTP Accounts</a></li>
          <li><a href="/connections"><FontAwesomeIcon icon={faPlug} className="icon"/> FTP Connections</a></li>
          <li><a href="/backup"><FontAwesomeIcon icon={faDatabase} className="icon"/> Backup</a></li>
          <li><a href="/backup-wizard"><FontAwesomeIcon icon={faMagic} className="icon"/> Backup Wizard</a></li>
        </ul>
        )}
      </section>

      <section>
        <h2 className="header2-main">DATABASES  
        <button onClick={toggleDatabasesCollapse} className="collapse-button">
          <FontAwesomeIcon icon={faMinus} />
        </button>
        </h2>
        {!isDatabasesCollapsed && (
        <ul className="section1-main">
          <li><a href="/phpmyadmin"><FontAwesomeIcon icon={faWindowRestore} className="icon"/> phpMyAdmin</a></li>
          <li><a href="/mysql-databases"><FontAwesomeIcon icon={faDatabase}  className="icon" />MySQL® Databases</a></li>
          <li><a href="/mysql-databases-wizard"> <FontAwesomeIcon icon={faMagic} className="icon"/>MySQL® Databases Wizard</a></li>
          <li><a href="/remote-mysql"><FontAwesomeIcon icon={faServer} className="icon"/> Remote MySQL®</a></li>
        </ul>
         )}
      </section>

      <section>
        <h2 className="header2-main">DOMAINS 
        <button onClick={toggleDomainsCollapse} className="collapse-button">
          <FontAwesomeIcon icon={faMinus} />
        </button>
        </h2>
        {!isDomainsCollapsed && (
        <ul className="section1-main">
          <li><a href="/site-publisher"><FontAwesomeIcon icon={faGlobe} className="icon"/>  Site Publisher</a></li>
          <li><a href="/addon-domains"><FontAwesomeIcon icon={faEdit} className="icon"/> Addon Domains</a></li>
          <li><a href="/subdomains"><FontAwesomeIcon icon={faCodeBranch} className="icon"/> Subdomains</a></li>
          <li><a href="/aliases"><FontAwesomeIcon icon={faClone} className="icon"/> Aliases</a></li>
          <li><a href="/redirects"><FontAwesomeIcon icon={faExchangeAlt} className="icon"/> Redirects</a></li>
          <li><a href="/simple-zone-editor"><FontAwesomeIcon icon={faWrench} className="icon"/> Simple Zone Editor</a></li>
          <li><a href="/zone-editor"><FontAwesomeIcon icon={faEdit} className="icon"/> Zone Editor</a></li>
        </ul>
        )}
      </section>

      <section>
        <h2 className="header2-main">EMAIL
        <button onClick={toggleEmailsCollapse} className="collapse-button">
          <FontAwesomeIcon icon={faMinus} />
        </button>
        </h2>
        {!isEmailsCollapsed && (
        <ul className="section1-main">
          <li><a href="/email-accounts"><FontAwesomeIcon icon={faEnvelope} className="icon"/> Email Accounts</a></li>
          <li><a href="/forwarders"><FontAwesomeIcon icon={faShare} className="icon"/> Forwarders</a></li>
          <li><a href="/email-routing"><FontAwesomeIcon icon={faEnvelopeOpen} className="icon"/> Email Routing</a></li>
          <li><a href="/autoresponders"><FontAwesomeIcon icon={faReply} className="icon"/> Autoresponders</a></li>
          <li><a href="/default-address"><FontAwesomeIcon icon={faInbox} className="icon"/> Default Address</a></li>
          <li><a href="/mailing-list"><FontAwesomeIcon icon={faUsers} className="icon"/> Mailing List</a></li>
          <li><a href="/track-delivery"><FontAwesomeIcon icon={faShippingFast} className="icon"/> Track Delivery</a></li>
          <li><a href="/global-email-filters"><FontAwesomeIcon icon={faFilter} className="icon"/> Global Email Filters</a></li>
          <li><a href="/email-filters"><FontAwesomeIcon icon={faGlobe} className="icon"/> Email Filters</a></li>
          <li><a href="/authentication"><FontAwesomeIcon icon={faFileAlt} className="icon"/> Authentication</a></li>
          <li><a href="/address-importer"><FontAwesomeIcon icon={faUserShield} className="icon"/> Address Importer</a></li>
          <li><a href="/apache-spamassassin"><FontAwesomeIcon icon={faEnvelopeOpenText} className="icon"/> Apache SpamAssassin™</a></li>
          <li><a href="/encryption"><FontAwesomeIcon icon={faShieldAlt} className="icon"/> Encryption</a></li>
          <li><a href="/boxtrapper"><FontAwesomeIcon icon={faCogs} className="icon"/> BoxTrapper</a></li>
          <li><a href="/email-disk-usage"><FontAwesomeIcon icon={faHdd} className="icon"/> Email Disk Usage</a></li>
        </ul>
         )}
      </section>

      <section>
        <h2 className="header2-main">METRICS 
        <button onClick={toggleMetricsCollapse} className="collapse-button">
          <FontAwesomeIcon icon={faMinus} />
        </button>
        </h2>
        {!isMetricsCollapsed && (
        <ul className="section1-main">
        <li><a href=""> </a></li>
        <li><a href=""> </a></li>
        <li><a href=""> </a></li>
        <li><a href=""> </a></li>
        <li><a href=""> </a></li>
        <li><a href=""> </a></li>
        </ul>
        )}
      </section>
      {/* Additional sections can be added as needed */}
    </main>
  );
};

export default MainContent;
