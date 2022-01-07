import React from 'react';
import { IoLogoElectron } from 'react-icons/io5';
import { MdCopyAll } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './BoilerplateCard.css';

const ElectronBoilerPlateCard = () => {

    const copyCode = (id) => {
        const title = document.getElementById(id).textContent
        console.log(title)
        navigator.clipboard.writeText(title).then(
            () => {
                toast("Copied!");
            },
            () => {
                toast("Oops!");
            }
        );
    }

    return (
        <div className="col-sm-6">
            <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <IoLogoElectron fontSize="1.2em"/> MERN Electron.js Stack
                </div>
                <div className="card-body">
                    <p className="code-text">Clone the boiler plate</p>
                    <code>
                        <span className="dollar">$</span>
                        <span id="code_1">git clone https:// &lt;folder_name&gt;</span>
                        <span class="icon" onClick={() => copyCode('code_1')}><MdCopyAll fontSize="1.2em"/></span>
                    </code>

                    <p className="code-text">Enter folder</p>
                    <code>
                        <span className="dollar">$</span>
                        <span id="code_2">cd &lt;folder_name&gt;</span>
                        <span class="icon" onClick={() => copyCode('code_2')}><MdCopyAll fontSize="1.2em"/></span>
                    </code>

                    <p className="code-text">Install dependencies</p>
                    <code>
                        <span className="dollar">$</span>
                        <span id="code_3">npm install</span>
                        <span class="icon" onClick={() => copyCode('code_3')}><MdCopyAll fontSize="1.2em"/></span>
                    </code>

                    <p className="code-text">You can now start your development server</p>
                    <code>
                        <span className="dollar">$</span>
                        <span id="code_4">npm start</span>
                        <span class="icon" onClick={() => copyCode('code_4')}><MdCopyAll fontSize="1.2em"/></span>
                    </code>

                    <div className="text-center pt-4">
                        <h5><span class="badge bg-secondary">Your desktop application will load automatically</span></h5>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
                {/* Same as */}
            <ToastContainer />
        </div>
    );
}

export default ElectronBoilerPlateCard;
