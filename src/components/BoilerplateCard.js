import React from 'react';
import ReactDOM from 'react-dom'
import { FaReact } from 'react-icons/fa';
import { MdCopyAll } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './BoilerplateCard.css';

const BoilerplateCard = () => {

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
                    <FaReact fontSize="1.2em"/> MERN Stack
                </div>
                <div className="card-body">

                    <p className="code-text">Clone the boiler plate</p>
                    <code>
                        <span className="dollar">$</span>
                        <span id="code_1">git clone https://github.com/heffman11/mean_stack.git &lt;folder_name&gt;</span>
                        <span class="icon" onClick={() => copyCode('code_1')}><MdCopyAll fontSize="1.2em"/></span>
                    </code>

                    <p className="code-text">Enter folder</p>
                    <code>
                        <span className="dollar">$</span>
                        <span id="code_2">cd &lt;folder_name&gt;</span>
                        <span class="icon" onClick={() => copyCode('code_2')}><MdCopyAll fontSize="1.2em"/></span>
                    </code>

                    <p className="code-text">Artesseum is split into frontend (React) and backend (Node.js).</p>
                    <code>
                        <span className="dollar">$</span>
                        <span id="code_3">cd frontend</span>
                        <span class="icon" onClick={() => copyCode('code_3')}><MdCopyAll fontSize="1.2em"/></span>
                    </code>

                    <p className="code-text">Install dependencies</p>
                    <code>
                        <span className="dollar">$</span>
                        <span id="code_4">npm install</span>
                        <span class="icon" onClick={() => copyCode('code_4')}><MdCopyAll fontSize="1.2em"/></span>
                    </code>

                    <p className="code-text">You can now start your front end app.</p>
                    <code>
                        <span className="dollar">$</span>
                        <span id="code_5">npm start</span>
                        <span class="icon" onClick={() => copyCode('code_5')}><MdCopyAll fontSize="1.2em"/></span>
                    </code>

                    <p className="code-text">Install backend dependencies</p>
                    <code>
                        <span className="dollar">$</span>
                        <span id="code_6">cd ..</span>
                        <span class="icon" onClick={() => copyCode('code_6')}><MdCopyAll fontSize="1.2em"/></span>
                    </code>
                    <br/>
                    <code>
                        <span className="dollar">$</span>
                        <span id="code_7">cd backend</span>
                        <span class="icon" onClick={() => copyCode('code_7')}><MdCopyAll fontSize="1.2em"/></span>
                    </code>

                    <p className="code-text">Install dependencies</p>
                    <code>
                        <span className="dollar">$</span>
                        <span id="code_8">npm install</span>
                        <span class="icon" onClick={() => copyCode('code_8')}><MdCopyAll fontSize="1.2em"/></span>
                    </code>

                    <p className="code-text">You can now start your node server.</p>
                    <code>
                        <span className="dollar">$</span>
                        <span id="code_9">npm start</span>
                        <span class="icon" onClick={() => copyCode('code_9')}><MdCopyAll fontSize="1.2em"/></span>
                    </code>

                    <div className="text-center pt-4">
                        <a href="localhost:3000" class="btn btn-secondary btn-sm" role="button">Open your app localhost:3000</a>
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

export default BoilerplateCard;
