const getElementById = require('../../_common/common_functions').getElementById;
const getLanguage    = require('../../_common/language').get;

const Mt5GoToDerivBanner = (() => {
    const classname = 'mt5_go_to_deriv_banner';

    const onLoad = () => {
        getElementById(`${classname}_link`).href = `https://app.deriv.com/mt5?lang=${getLanguage()}`;
        const mt5_banner_container = getElementById(`${classname}_container`);
        mt5_banner_container.classList.remove('invisible');
    };

    return { onLoad };
})();

module.exports = Mt5GoToDerivBanner;
