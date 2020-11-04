import axios from 'axios'
const proxyOn = false;
const proxyURL = proxyOn ? "https://cors-anywhere.herokuapp.com/" : ""
const apiKey = "78b9d599c4f94f8fa3afb1a5458928d6" //need to make this more secure as an environment variable

const getTopHeadlines = async (category, country, page) => {
	let topHeadlinesUrl = "https://newsapi.org/v2/top-headlines?"
	let categoryParam = `category=${category}&`
	let countryParam = `country=${country}&`
	let pageParam = `page=${page}&`
	let apiKeyParam = `apiKey=${apiKey}`
	let query = proxyURL + topHeadlinesUrl + countryParam + categoryParam +pageParam+ apiKeyParam;

	const response = await axios.get(query)	
	return response.data
}
export default {getTopHeadlines}