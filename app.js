const url = 'https://sneaker-database-stockx.p.rapidapi.com/stockxonly?search=Yeezy';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '578fb0a357msh8c5f1992a57b946p19f1adjsn1e70c2af045e',
		'X-RapidAPI-Host': 'sneaker-database-stockx.p.rapidapi.com'
	}
};

async function sneaker(){
	try {
		const response = await fetch(url, options);
		const result = await response.text();
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}
sneaker();

