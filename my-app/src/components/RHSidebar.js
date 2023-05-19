import React from 'react';

const RHSidebar = () => {

  const getProgressClass = (percentage) => {
    if (percentage >= 80) {
      return 'progress-red';
    } else if (percentage >= 60) {
      return 'progress-amber';
    } else if (percentage >= 20) {
      return 'progress-blue';
    } else {
      return 'progress-green';
    }
  };

  const updateProgressBar = (progressBar, percentage) => {
    const progressElement = progressBar.querySelector('.progress');
    progressElement.style.width = percentage + '%';
  };

  const setProgressBarClass = (progressBar, percentage) => {
    const progressElement = progressBar.querySelector('.progress');
    const progressClass = getProgressClass(percentage);
    progressElement.classList.add(progressClass);
  };

  const setProgressValues = () => {
    const progressBars = document.querySelectorAll('.progress-bar');
    const progressValues = [70, 40, 90, 60, 35, 22, 10];

    progressBars.forEach((progressBar, index) => {
      const progressValue = progressValues[index];
      updateProgressBar(progressBar, progressValue);
      setProgressBarClass(progressBar, progressValue);
    });
  };

  // Call the function to set the progress values
  setProgressValues();
  // const getProgressClass = (percentage) => {
  //   if (percentage >= 80) {
  //     return 'progress-red';
  //   } else if (percentage >= 60) {
  //     return 'progress-amber';
  //   } else if (percentage >= 20) {
  //     return 'progress-blue';
  //   } else {
  //     return 'progress-green';
  //   }
  // };
  // // Get the progress bar elements
  // const progressBars = document.querySelectorAll('.progress-bar');

  // // Simulated progress values (replace with actual data)
  // const progressValues = [70, 40, 90]; // Add progress values for each progress bar

  // // Function to update the progress bar width
  // function updateProgressBar(progressBar, progressValue) {
  //   const progressElement = progressBar.querySelector('.progress');
  //   progressElement.style.width = progressValue + '%';
  // }

  // // Update the progress bars
  // progressBars.forEach((progressBar, index) => {
  //   const progressValue = progressValues[index];
  //   updateProgressBar(progressBar, progressValue);
  // });

  return (
    <aside class="sidebar-dashboard">
      <section className='rhsSection'>
        <h2 className='sidebar-header1'>GENERAL INFORMATION</h2>
        <div>
          <h3>Current User</h3>
          <p>John Doe</p>
        </div>
        <div>
          <h3>Primary Domain</h3>
          <p>example.com</p>
        </div>
        <div>
          <h3>Home Directory</h3>
          <p>/home/johndoe</p>
        </div>
        <div>
          <h3>Last Login</h3>
          <p>May 10, 2023</p>
        </div>
        <div>
          <h3>Theme</h3>
          <select>
            <option value="theme1">Theme 1</option>
            <option value="theme2">Theme 2</option>
            <option value="theme3">Theme 3</option>
          </select>
        </div>
        <p><a href="/server-info" className='server-info'>Server Information</a></p>

      </section>

      <section className='rhsSection2'>
        <h2 className='sidebar-header2'>STATISTICS</h2>
        <section className='sidebar-section2' >
          <div className='sidebar-div'>
            <p>Disk Usage</p>
            {/* <p className='progressTotalVal'></p> */}
            <div class="progress-bar">
              <div class="progress"></div>
            </div>
          </div>
          <div className='sidebar-div'>
            <p>Bandwidth Usage</p>
            <div class="progress-bar">
              <div class="progress"></div>
            </div>
          </div>
          <div className='sidebar-div'>
            <p>FTP Accounts</p>
            <div class="progress-bar">
              <div class="progress"></div>
            </div>
          </div>
          <div className='sidebar-div'>
            <p>MySQL Databases</p>
            <div class="progress-bar">
              <div class="progress"></div>
            </div>
          </div>
          <div className='sidebar-div'>
            <p>Parked Domains</p>
            <div class="progress-bar">
              <div class="progress"></div>
            </div>
          </div>
          <div className='sidebar-div'>
            <p>Addon Domains</p>
            <div class="progress-bar">
              <div class="progress"></div>
            </div>
          </div>
          <div className='sidebar-div'>
            <p>Subdomains</p>
            <div class="progress-bar">
              <div class="progress"></div>
            </div>
          </div>
          <div className='sidebar-div'>
            <p>Email Accounts</p>
            <div class="progress-bar">
              <div class="progress"></div>
            </div>
          </div>
          <div className='sidebar-div'>
            <p>Autoresponders</p>
            <div class="progress-bar">
              <div class="progress"></div>
            </div>
          </div>
          <div className='sidebar-div'>
            <p>Mailing Lists</p>
            <div class="progress-bar">
              <div class="progress"></div>
            </div>
          </div>
          <div className='sidebar-div'>
            <p>Forwarders</p>
            <div class="progress-bar">
              <div class="progress"></div>
            </div>
          </div>
          <div className='sidebar-div'>
            <p>Email Filters</p>
            <div class="progress-bar">
              <div class="progress"></div>
            </div>
          </div>
          <div className='sidebar-div'>
            <p>File Manager</p>
            <div class="progress-bar">
              <div class="progress"></div>
            </div>
          </div>
        </section>
      </section>
    </aside>
  );
};

export default RHSidebar;
