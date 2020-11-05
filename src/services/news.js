import axios from 'axios'
const apiKey = "78b9d599c4f94f8fa3afb1a5458928d6" //need to make this more secure as an environment variable

const getTopHeadlines = async (category, country, page) => {
	let topHeadlinesUrl = "https://newsapi.org/v2/top-headlines?"
	let categoryParam = `category=${category}&`
	let countryParam = `country=${country}&`
	let pageParam = `page=${page}&`
	let apiKeyParam = `apiKey=${apiKey}`
	let query = topHeadlinesUrl + countryParam + categoryParam +pageParam+ apiKeyParam;

	const response = await axios.get(query)	
	return response.data
}

const retrieveHTMLText = async (url) => {
	const proxyOn = true;
	const proxyURL = proxyOn ? "https://cors-anywhere.herokuapp.com/" : ""
	const query = proxyURL + url
	const response = await axios.get(query)	
	return response.data
}
export default {getTopHeadlines, retrieveHTMLText}