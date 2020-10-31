import axios from 'axios'
const apiKey = "16770041dc3b4280a6a9b8439aee6c50" //need to make this more secure as an environment variable

const getTopHeadlines = async (category, country) => {
	let topHeadlinesUrl = "http://newsapi.org/v2/top-headlines?"
	let categoryParam = `category=${category}&`
	let countryParam = `country=${country}&`
	let apiKeyParam = `apiKey=${apiKey}`
	let query = topHeadlinesUrl + countryParam + categoryParam + apiKeyParam;

	const response = await axios.get(query)	
	return response.data
}
export default {getTopHeadlines}