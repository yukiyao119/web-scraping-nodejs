const axios = require('axios');
const cheerio = require('cheerio');
// const fs = require('fs');
// const writeStream = fs.createrWriteStream('bitcoinKnowledge.csv')

const getPostTitles = async () => {
	try {
		const { data } = await axios.get(
			'https://en.wikipedia.org/wiki/Bitcoin'
		);
    // console.log('data', data);
		const $ = cheerio.load(data);
    const creationSpan = $('span#Creation')
    // const creationH3 = $('h3 ~ span#Creation')
    // const creationP = $('h3 ~ span + p')
    // console.log('creationP', creationP);
		const postTitles = [];

		creationSpan.each((_idx, el) => {
			const postTitle = $(el).text()
			postTitles.push(postTitle)
		});

		return postTitles;
	} catch (error) {
		throw error;
	}
};

getPostTitles()
.then((postTitles) => console.log(postTitles));