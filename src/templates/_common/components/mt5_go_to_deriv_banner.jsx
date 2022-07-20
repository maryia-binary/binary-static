import React from 'react';
import PropTypes from 'prop-types';

const Mt5GoToDerivBanner = ({ has_margin }) => {
    const classname = 'mt5_go_to_deriv_banner';
    return (
        <div id={`${classname}_container`} className={`invisible ui-helper-clearfix ${has_margin ? 'has_margin' : ''}`}>
            <a id={`${classname}-link`} target='_blank' rel='noopener noreferrer' href='#'>
                <img className={`${classname}_icons`} src={it.url_for('images/mt5_banner/mt5_go_to_deriv_banner_icons.svg')} />
                <div>
                    <h3>{it.L('Go to Deriv to add an MT5 account')}</h3>
                    <p>{it.L('You\'ll be able to log in to Deriv using your Binary.com credentials.')}</p>
                </div>
                <div>
                    <div className={`${classname}_btn`}>{it.L('Go to Deriv')}</div>
                </div>
            </a>
        </div>
    );
};

Mt5GoToDerivBanner.propTypes = {
    has_margin: PropTypes.bool,
};

export default Mt5GoToDerivBanner;
