import React from 'react';
import './Main.css';
import BoilerplateCard from './BoilerplateCard.js';
import ElectronBoilerPlateCard from './ElectronBoilerPlateCard.js';


function Main() {
    return (
        <main class="flex-shrink-0">
            <div class="container-fluid">
            <h2>Boilerplates</h2>
            <p>Easy setup for your React and Electron projects.</p>

                <div class="row">
                    <BoilerplateCard />
                    <ElectronBoilerPlateCard />
                </div>
            </div>
        </main>
    );
}

export default Main;
