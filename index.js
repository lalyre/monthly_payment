'use strict';

function yearly_payment(capital, credit_repayment_rate, years_count) {
	const a = capital * credit_repayment_rate;
	const b = (1 + credit_repayment_rate/12)**(-12*years_count);
	const c = 1 - b;
	const d = a/c;
	return d;
};


function monthly_payment(capital, credit_repayment_rate, years_count) {
	const a = yearly_payment(capital, credit_repayment_rate, years_count) / 12;
	return a;
};


/*
module.exports  {
	yearly_payment,
	monthly_payment,
};
*/
