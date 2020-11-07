import axios from 'axios'
const apiKey = "78b9d599c4f94f8fa3afb1a5458928d6" 

/**
 * news service
 * Provides abstractions for API calls - here there is just one: getting top headlines based on category, country, keywords, and page
 */

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

export default {getTopHeadlines}