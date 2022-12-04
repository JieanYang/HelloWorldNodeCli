import axios from 'axios';

export const callChucknorris = async () => {
	const res = await axios.get('https://api.chucknorris.io/jokes/random');

	return res.data;
};
