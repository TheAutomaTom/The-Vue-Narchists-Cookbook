export default{
const options = {
	method: 'GET',
	headers: {
		Authorization: 'Token token=yd8WzkWNEEzGtqMSgiZBrwtt',
		'X-RapidAPI-Host': 'juanroldan1989-moviequotes-v1.p.rapidapi.com',
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY'
	}
};

fetch('https://juanroldan1989-moviequotes-v1.p.rapidapi.com/api/v1/quotes?actor=Al%20Pacino', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));}