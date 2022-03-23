import React, { useEffect } from 'react';
import UserProvider from './contexts/UserContext';
import TopNav from './components/TopNav';
import ActionNav from './components/ActionNav';
import Record from './components/Record';
const mqtt = require('mqtt/dist/mqtt');

const App = () => {
    useEffect(() => {
        const client = mqtt.connect('ws://broker.emqx.io/mqtt', { port: 8083 });

        client.on('connect', () => {
            console.log('teen fuck')
        })
    }, []);

    return (
        <UserProvider>
            <div className="max-w-[100vw] min-h-screen bg-slate-700 text-white">
                <TopNav />
                <ActionNav />
                <div className="overflow-x-scroll h-[calc(100vh-110px)]">
                    <Record />
                </div>
            </div>
        </UserProvider>
    );
}

export default App;