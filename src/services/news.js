import axios from 'axios'
const apiKey = "78b9d599c4f94f8fa3afb1a5458928d6" //need to make this more secure as an environment variable

const getTopHeadlines = async (category, country, keywords, page) => {
	let topHeadlinesUrl = "https://newsapi.org/v2/top-headlines?"
	let categoryParam = `category=${category}&`
	let countryParam = `country=${country}&`
	let keywordsParam = keywords ? `q=${encodeURI(keywords)}&` : ""
	let pageParam = `page=${page}&`
	let apiKeyParam = `apiKey=${apiKey}`
	let query = topHeadlinesUrl + countryParam + categoryParam + keywordsParam + pageParam+ apiKeyParam
	try {
		const response = await axios.get(query)	
		return response.data
	}
	catch (error) {
		return null
	}
}

const retrieveHTMLText = async (url) => {
	const config = {
		headers: {"Access-Control-Allow-Origin": "*"}
	}
	const proxyOn = true
	const proxyURL = proxyOn ? "https://cors-anywhere.herokuapp.com/" : ""
	const query = proxyURL + url
	try {
		const response = await axios.get(query, config)	
		// console.log(response.data)
		return response.data
	}
	catch (error) {
		return null
	}
}
export default {getTopHeadlines, retrieveHTMLText}