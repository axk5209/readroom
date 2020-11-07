
## Problem Statement

We would like you to build a web application using News API that will help users find their desired news. We want to see your creativity in action! Just make sure your solutions include these requirements:

Submit a deployed web application and include both your website URL and the supporting Github repository.

The app must use News API as the exclusive data source.

Your app should limit searches to the following three categories: entertainment, sports, and technology. Any news not belonging to one of the approved categories should be filtered accordingly.

Your app should display search results in a user-friendly format that provides information about the news article (headline, source, date, etc). Be sure to include a link to the article that opens in a new tab/window.

  

## Deployment

You can view the live deployed version of this application at [axk5209.github.io/readroom](https://axk5209.github.io/readroom/)

  
## Application Flow

There are two primary views in the application: the Landing Page and the List Page. The Landing Page allows the user to enter a category and country and the List Page displays a paginated list of articles matching the user's query, which include keywords they want to search by.

## Solution Structure
- `/public`: Contains favicon images and index.html file (entry point of site)

- `/src`: Contains JavaScript files and utilities for dynamic content rendering

	-  `/components`: Contains component files to represent different views in the application

		-  	`/Entry`: Contains component for Entry point to application - renders either LandingPage or ListPage based on route in URL
	
		-  	`/LandingPage`: Contains components to render the Landing Page of the site (provides user input space for country and category)

		- 	`/ListPage`: Contains components to render the List Page of the site (paginated list of articles that match user's query and allows user to search articles by keyword)

	-  `/data`: contains JSON data files to store country options in ISO2 format and conversion info from ISO2 to normal names

	-  `/images`: contains images to be rendered by the React components

	-  `/services`: contains helper services to make API calls

	-  `App.js`: Renders the Entry component, the entry point to the application

	-  `index.js`: renders the App component in the root element of index.html


## Design Decisions

-  **React:** I used React to build this application because it allows for good code reusability. The Virtual DOM also allows for clean DOM manipulation. 
  
-  **Invalid URL  Extensions or No Articles Matching Keyword:** I handle invalid URL extensions and searches that have no results by displaying a message that states that there are no article's matching the user's criteria. This allows for an elegant handling of query errors and empty query results.

-  **General UI Philosophy:** I strove to make the UI as simple so that users do not have to think while using the application.


## Dependencies

- Please ensure you have `node`  and  `npm`  installed globally on your machine.
  
  
## Local Execution

Execute the following commands on your local machine to run this application locally

1. `git clone https://github.com/axk5209/readroom.git` (clone down this repository)

2. `npm install` (install npm dependencies)

3. `npm start` (start server to serve the application locally)

4. Visit `http://localhost:3000` to visit the application

## Authorship

Application and README written by **Arham Kothari** 