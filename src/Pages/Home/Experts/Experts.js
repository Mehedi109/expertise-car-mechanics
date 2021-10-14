import React from 'react';
import Expert from '../Expert/Expert';

const experts = [
    {
        img: 'https://i.ibb.co/vLZDmgJ /Happy-African-American-mechanic-working-in-auto-repair-shop-and-looking-at-camera.jpg',
        name: 'Andrew Smith',
        expertize: '-Engine Expert-'
    },
    {
        img: 'https://i.ibb.co/w07yLDx/Happy-mechanic-holding-tools-at-a-car-garage.jpg',
        name: 'John Anderson',
        expertize: '-Polish Expert-'
    },
    {
        img: 'https://i.ibb.co/jT8bKBm/mechanic-3.jpg',
        name: 'Zakaria Smith',
        expertize: '-Coloring Expert-'
    },
    {
        img: 'https://i.ibb.co/MpP0Gv9/mechanic-4.jpg',
        name: 'Sakib Anderson',
        expertize: '-Alrounder Expert-'
    },
]


const Experts = () => {
    return (
        <div id="experts" className="container">
            <h2 className="text-primary mt-5">Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;