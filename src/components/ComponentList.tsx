import * as React from 'react';
import { Link } from 'react-router-dom'

const ComponentList = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/enthusiasm'>Enthusiasm</Link></li>
                <li><Link to='/template'>Template</Link></li>
            </ul>
        </nav>
    </header>
);

export default ComponentList
