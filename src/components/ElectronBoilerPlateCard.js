import React from 'react';
import { IoLogoElectron } from 'react-icons/io5';
import { MdCopyAll } from 'react-icons/md';

import './BoilerplateCard.css';

const ElectronBoilerPlateCard = () => {
    return (
        <div className="col-sm-6">
            <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <IoLogoElectron fontSize="1.2em"/> MERN Electron.js Stack
                </div>
                <div className="card-body">
                    <p className="code-text">Clone the boiler plate</p>
                    <code>
                        <span className="dollar">$</span>https:// &lt;folder_name&gt;
                        <span class="icon"><MdCopyAll fontSize="1.2em"/></span>
                    </code>

                    <p className="code-text">Enter folder</p>
                    <code>
                        <span className="dollar">$</span>cd &lt;folder_name&gt;
                        <span class="icon"><MdCopyAll fontSize="1.2em"/></span>
                    </code>

                    <p className="code-text">Install dependencies</p>
                    <code>
                        <span className="dollar">$</span>npm install
                        <span class="icon"><MdCopyAll fontSize="1.2em"/></span>
                    </code>

                    <p className="code-text">You can now start your development server</p>
                    <code>
                        <span className="dollar">$</span>npm start
                        <span class="icon"><MdCopyAll fontSize="1.2em"/></span>
                    </code>

                    <div className="text-center pt-4">
                        <h5><span class="badge bg-secondary">Your desktop application will load automatically</span></h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ElectronBoilerPlateCard;
