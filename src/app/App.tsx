// import logo from './logo.svg';
import './App.css';
import { Main } from '../components/Layout/layout';
import { Header } from '../components/Header/header';
import { Info } from '../components/Info/info';

import { useState } from 'react';
function App() {
    const initialState = [
        {
            id: 1,
            name: 'Bertin Osborne',
            status: 'Alive',
            profession: 'Youtuber',
            twitter: '@osbourne',
            picture: '/img/bertin.jpg',
            alternativeText: 'Osbourne pointing at you',
            selected: false,
        },
        {
            name: 'The Farytale',
            status: 'RIP',
            profession: 'Influencer',
            twitter: 'pending',
            picture: '/img/fary.jpg',
            alternativeText: 'The Fary pointing at you',
            id: 2,
            selected: false,
        },
        {
            id: 3,
            name: 'Julius Churchs',
            status: 'Alive',
            profession: 'Java developer',
            twitter: '@julius_churchs',
            picture: '/img/julio.jpg',
            alternativeText: 'Churchs pointing at you',
            selected: false,
        },
    ];

    const [data, setData] = useState(initialState);

    return (
        <div className="App">
            <Header />
            <Main>
                <Info data={data} setData={setData}></Info>
            </Main>
        </div>
    );
}

export default App;
