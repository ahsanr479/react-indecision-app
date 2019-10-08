import React from 'react';

const Header = (props) => {
    return (
        <div>
            <h1>{props.tittle }</h1>
            <h2>{props.subTittle && <p>{props.subTittle}</p>}</h2>
        </div>
        );
}

Header.defaultProps = {
    tittle:'Indecision'
};

export default Header;
