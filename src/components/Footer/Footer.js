import React from 'react';

const Footer = ({count}) => (<div>
    <p>Осталь выполнить вот столько дел: {count}</p>
    <button style={{color: 'green'}}>All</button>
    <button>Active</button>
    <button>Completed</button>
</div>);

export default Footer;
