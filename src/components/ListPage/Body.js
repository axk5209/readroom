import React from 'react'
import { Container, Typography, Box, InputLabel, MenuItem, FormControl, Select, Grid, Button, Paper} from '@material-ui/core'
import {useParams} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import newsService from "../../services/news"
import ListItem from "./ListItem"

const Body = () => {
	const category = useParams().category
	const country = useParams().country
	const [cardsData, setCardsData] = React.useState(null);
	// const [singleCardData, setSingleCardData] = React.useState(null);
	React.useEffect(() => {
		async function initializeContent () {
			let results = await newsService.getTopHeadlines(category, country)
			setCardsData(results.articles)
		}
		initializeContent()
	}, [category, country])

	return (
		<Container maxWidth = "md">
			<Box p={6} />
			<Container align = "center">
				
			</Container>
			{
				cardsData && 
				cardsData.map(singleCardData => <ListItem data = {singleCardData} />)
			}
			<Box p={6} />
		</Container>
	)
}

export default Body