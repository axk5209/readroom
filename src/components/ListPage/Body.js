import React from 'react'
import { Container, Typography, Box, InputLabel, MenuItem, FormControl, Select, Grid, Button, Paper} from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination';
import {useParams} from "react-router-dom"
import { makeStyles, withStyles } from '@material-ui/core/styles';
import newsService from "../../services/news"
import ListItem from "./ListItem"
const useStyles = makeStyles((theme) => ({
	root: {
	  '& > *': {
		marginTop: theme.spacing(2),
	  },
	},
	paginationUL: {
		justifyContent: "center",
		color: "red"
	  }
  }));

const Body = () => {
	const  classes = useStyles()
	const category = useParams().category
	const country = useParams().country
	const [cardsData, setCardsData] = React.useState(null);
	const [pageCount, setPageCount] = React.useState(0)
	const [currPage, setCurrPage] = React.useState(1)
	// const [singleCardData, setSingleCardData] = React.useState(null);
	React.useEffect(() => {
		async function initializeContent () {
			let data = await newsService.getTopHeadlines(category, country)
			console.log(data)
			const newPageCount = Math.ceil(data.totalResults / data.articles.length)
			console.log(data.totalResults)
			console.log(data.articles.length)
			console.log(newPageCount)
			setPageCount(newPageCount)
			setCardsData(data.articles)
		}
		initializeContent()
	}, [category, country])

	return (
		<Container maxWidth = "md">
			<Box p={6} />
			{
				pageCount > 0 && (
					<Pagination count={pageCount} color="primary" size = "large" classes = {{ul: classes.paginationUL }}/>
				)
			}
			{
				cardsData && cardsData.map(singleCardData => <ListItem data = {singleCardData} />)
			}
			{
				pageCount > 0 && (
						<Pagination count={pageCount} color="primary" size = "large" classes = {{ul: classes.paginationUL }}/>
				)
			}
			<Box p={6} />
		</Container>
	)
}

export default Body