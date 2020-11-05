import React from 'react'
import { Container, Box} from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination';
import {useParams} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import newsService from "../../services/news"
import ListItem from "./ListItem"
import Options from "./Options"

const devMode = false
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
	React.useEffect(() => {
		async function initializeContent () {
			let data = devMode ? {articles: [], totalResults: 0} : await newsService.getTopHeadlines(category, country, currPage)
			const newPageCount = Math.ceil(data.totalResults / 20)
			setPageCount(newPageCount)
			setCardsData(data.articles)
		}
		initializeContent()
	}, [category, country, currPage])

	const handlePageChange = (_, newPage) => {
		setCurrPage(newPage)
		document.body.scrollTop = 0; 
  		document.documentElement.scrollTop = 0
	}
	
	return (
		<Container maxWidth = "md">
			<Box p={6} />
			<Options />
			<Box p={6} />
			{
				pageCount > 0 && (
					<Pagination count={pageCount} color="primary" size = "large" classes = {{ul: classes.paginationUL }} page = {currPage} onChange = {handlePageChange}/>
				)
			}
			{
				cardsData && cardsData.map(singleCardData => <ListItem data = {singleCardData} />)
			}
			{
				pageCount > 0 && (
						<Pagination count={pageCount} color="primary" size = "large" classes = {{ul: classes.paginationUL }}  page = {currPage} onChange = {handlePageChange}/>
				)
			}
			<Box p={6} />
		</Container>
	)
}

export default Body