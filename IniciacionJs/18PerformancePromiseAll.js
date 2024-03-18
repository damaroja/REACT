

import fetch from "node-fetch";

const url1 = 'https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=wat';
const options1 = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
  }
};

const url2 = 'https://love-calculator.p.rapidapi.com/getPercentage?fname=John&sname=Alice';
const options2 = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
  }
};

const url3 = 'https://jgentes-crime-data-v1.p.rapidapi.com/crime?lat=37.757815&long=-122.5076392&enddate=9%2F25%2F2015&startdate=9%2F19%2F2015';
const options3 = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'jgentes-Crime-Data-v1.p.rapidapi.com'
  }
};

try {
    const t1 = performance.now();
	const response = await fetch(url1, options1);
	const response2 = await fetch(url2, options2);
	const response3 = await fetch(url3, options3);
	const result = await response.text();
	const result2 = await response2.text();
	const result3 = await response3.text();
	console.log(result);
    console.log(result2);
    console.log(result3);
    const t2 = performance.now();
    console.log(`Time: ${t2 - t1} ms`);
} catch (error) {
	console.error(error);
}

try {
    const t1 = performance.now();
    const [res1, res2, res3] = await Promise.all([
        fetch(url1, options1),
        fetch(url2, options2),
        fetch(url3, options3)
    ]);
    const result1 = await res1.text();
    const result2 = await res2.text();
    const result3 = await res3.text();
    console.log(result1);
    console.log(result2);
    console.log(result3);
    const t2 = performance.now();
    console.log(`Time: ${t2 - t1} ms`);
} catch (error) {
    console.error(error);
}
