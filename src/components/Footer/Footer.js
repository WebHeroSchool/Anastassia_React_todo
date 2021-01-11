import React from 'react';
import './Footer.css';

const Footer = ({count}) => (<div className="wrap">
    <p className="wrap__text">Осталось выполнить вот столько дел: {count}</p>
    <button>All</button>
    <button>Active</button>
    <button>Completed</button>
</div>);

export default Footer;
