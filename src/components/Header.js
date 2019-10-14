import React from 'react';

const Header = (props) => 
    (
        <div className='header'>
            <div className='container'>
                <h1 className='header__title'>{props.tittle }</h1>
                <h2>{props.subTittle && <p className='header__subtitle'>{props.subTittle}</p>}</h2>
            </div>
        </div>
    );


Header.defaultProps = {
    tittle:'Indecision'
};

export default Header;
