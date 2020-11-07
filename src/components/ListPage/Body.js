import React from 'react'
import { useParams } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles'
import { Container, Box, Grid, TextField, Button, Typography } from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination'
import SearchIcon from "@material-ui/icons/Search"
import newsService from "../../services/news"
import ListItem from "./ListItem"

/**
 * Body of ListPage
 * Gets user query params from URL, gets results from news service, displays paginated-view of article list in results, feeds each article to ListItem component to format article data.
 */

const devMode = false
const useStyles = makeStyles({
	paginationUL: {
		justifyContent: "center",
		color: "red"
	},
	outerBox: {
		backgroundColor: "#fdf7ff"
	},
})

const Body = () => {
	const classes = useStyles()
	const category = useParams().category
	const country = useParams().country
	const [cardsData, setCardsData] = React.useState(null)
	const [pageCount, setPageCount] = React.useState(0)
	const [currPage, setCurrPage] = React.useState(1)
	const [keywordsInput, setKeywordsInput] = React.useState("")
	const [keywordsToSearch, setKeywordsToSearch] = React.useState("")


	React.useEffect(() => {
		async function initializeContent() {
			let data = devMode ? { articles: [], totalResults: 0 } : await newsService.getTopHeadlines(category, country, keywordsToSearch, currPage)
			const newPageCount = Math.ceil(data.totalResults / 20)
			setPageCount(newPageCount)
			setCardsData(data.articles)
		}
		initializeContent()
	}, [category, country, currPage, keywordsToSearch])

	const handlePageChange = (_, newPage) => {
		setCurrPage(newPage)
	}
	const handleKeywordsChange = (event) => {
		let newKeywordsInput = event.target.value
		setKeywordsInput(newKeywordsInput)
	}
	const handleSearchButtonClick = () => {
		setKeywordsToSearch(keywordsInput)
		setKeywordsInput("")

	}

	return (
		<Box className={classes.outerBox}>
			<Container maxWidth="md">
				<Box p={6} />
				<Grid container direction="row" alignItems="center" justify="center">
					<Grid item>
						<TextField
							id="standard-read-only-input"
							label="Keywords:"
							variant="outlined"
							value = {keywordsInput}
							onChange={handleKeywordsChange}
						/>
					</Grid>
					<Box pr={4} />
					<Box pb={4} />
					<Grid item>
						<Button
							variant="contained"
							color="primary"
							className={classes.button}
							onClick={handleSearchButtonClick}
						>
							<SearchIcon />
						</Button>
					</Grid>
				</Grid>
				<Box p={6} />
				{
					pageCount > 0 && (
						<Pagination count={pageCount} color="primary" size="large" classes={{ ul: classes.paginationUL }} page={currPage} onChange={handlePageChange} />
					)
				}
				{
					cardsData &&
					(cardsData.length > 0 ?
						cardsData.map((singleCardData, index) => <ListItem data={singleCardData} key={index} />) :
						<Typography variant="h5" align="center">Sorry, there are no articles which match your criteria</Typography>)
				}
				{
					pageCount > 0 && (
						<Pagination count={pageCount} color="primary" size="large" classes={{ ul: classes.paginationUL }} page={currPage} onChange={handlePageChange} />
					)
				}
				<Box p={6} />
			</Container>
			<Box p = {10} />
		</Box >
	)
}

export default Body