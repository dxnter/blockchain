import isNumber from 'lodash.isnumber';

export const validate = values => {
  const errors = {};
  const { recipient, amount } = values;
  if (!recipient || typeof recipient !== 'string')
    errors.recipient = 'Please enter a valid recipient key';
  if (!amount || !isNumber(Number(amount)))
    errors.amount = 'Please enter an amount (e.g. 5.67)';
  return errors;
};
