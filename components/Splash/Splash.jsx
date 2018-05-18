import React from 'react';

const Splash = () => {
    return (
        <div className='splash-container'>
            <div className='splash'>
                <h1 className='splash-head'>JS WALLET APP v2</h1>
                <p className='splash-subhead'>
                    By Maxim Efimov
                </p>
                <p>
                    <a
                        href='https://github.com/maxefi'
                        target='_blank'
                        className='pure-button pure-button-primary'>A bit of me</a>
                </p>
            </div>
        </div>
    );
}

export default Splash;
