'use strict';


function monthly_payment(capital, annual_rate, years_count) {
	const monthly_rate = annual_rate / 12;
	const months_count = years_count * 12;

	const numerator = capital * monthly_rate;
	const denominator = 1 - Math.pow(1 + monthly_rate, -months_count);

	const monthly = numerator / denominator;
	return monthly;
}


function yearly_payment(capital, annual_rate, years_count) {
	return monthly_payment(capital, annual_rate, years_count) * 12;
}


function amortization_schedule(capital, annual_rate, years) {
	const monthly_rate = annual_rate / 12;
	const months = years * 12;
	const monthly = monthly_payment(capital, annual_rate, years);

	let schedule = [];
	let remaining = capital;

	for (let i = 1; i <= months; i++) {
		const interest = remaining * monthly_rate;
		const principal = monthly - interest;
		remaining -= principal;

		schedule.push({
			month: i,
			interest: interest,
			principal: principal,
			remaining: Math.max(remaining, 0)
		});
	}

	return schedule;
}



// Exemple d'utilisation :
//console.log(monthly_payment(100000, 0.05, 20)); 


/*
module.exports  {
	yearly_payment,
	monthly_payment,
};
*/
