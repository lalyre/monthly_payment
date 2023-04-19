'use strict';

function monthly_payment(capital, credit_repayment_rate, years_count) {
	const a = capital * credit_repayment_rate / 12;
	const b = (1 + credit_repayment_rate/12)**(-12*years_count);
	const c = 1 - b;
	const d = a/c;
	return d;
}

module.exports = {
	monthly_payment,
}
