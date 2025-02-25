import PropTypes from 'prop-types';
import CONST from '../../../CONST';

/** Assigned Card props */
const assignedCardPropTypes = PropTypes.shape({
    cardID: PropTypes.number,
    state: PropTypes.number,
    bank: PropTypes.string,
    availableSpend: PropTypes.number,
    domainName: PropTypes.string,
    lastFourPAN: PropTypes.string,
    cardName: PropTypes.string,
    isVirtual: PropTypes.bool,
    fraud: PropTypes.oneOf([CONST.EXPENSIFY_CARD.FRAUD_TYPES.DOMAIN, CONST.EXPENSIFY_CARD.FRAUD_TYPES.USER, CONST.EXPENSIFY_CARD.FRAUD_TYPES.NONE]),
    cardholderFirstName: PropTypes.string,
    cardholderLastName: PropTypes.string,
    errors: PropTypes.objectOf(PropTypes.string),
    isLoading: PropTypes.bool,
});

export default assignedCardPropTypes;
