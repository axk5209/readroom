import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
let AlternateVisual = require('../../images/AlternateVisual.png')

const useStyles = makeStyles({
	card: {
		minWidth: 275,
	},
	source: {
		marginBottom: 16,
		fontSize: 14,
	},
	title: {
		fontWeight: "bold" 
	},
	date: {
		marginBottom: 12,
	},

	img: {
		maxHeight: 140,
	},
	button: {
		minWidth: "100%",
		backgroundColor: "#bb8dff66"
	}
})


const SimpleCard = (props) => {
	const classes = useStyles()
	const [dataReceived, setDataReceived] = React.useState(false)
	const [source, setSource] = React.useState(null)
	const [title, setTitle] = React.useState(null)
	const [date, setDate] = React.useState(null)
	const [description, setDescription] = React.useState(null)
	const [imageSrc, setImageSrc] = React.useState(null)
	const [url, setUrl] = React.useState(null)
	React.useEffect(() => {
		setDataReceived(props.data)
		setSource(props.data.source.name)
		setTitle(props.data.title.substr(0, props.data.title.lastIndexOf("-") - 1))
		setDate((new Date(props.data.publishedAt)).toDateString())
		setDescription(props.data.description ? `${props.data.description}` : "\n")
		setImageSrc(props.data.urlToImage ? props.data.urlToImage : AlternateVisual)
		setUrl(props.data.url)
	}, [props.data])

	return (
		<Box py={5}>
			{
				dataReceived &&
				<Card className={classes.card}>
					<Grid container>
						<Grid item md={8} sm={7}>
							<CardContent>
								<Typography className={classes.source} color="textSecondary"> {source} </Typography>
								<Typography variant="h6" className = {classes.title}> {title} </Typography>
								<Typography className={classes.date} color="textSecondary" > {date}</Typography>
									<Typography component="span">
										<Box fontStyle="italic">
											{description}
										</Box>
									</Typography>
							</CardContent>
						</Grid>
						<Grid item container md={4} sm={5} align="center" justify = "center">
							<Box py={4}>
								<img
									className={classes.img}
									alt="Article Visual"
									src={imageSrc}
								/>
							</Box>
						</Grid>
						<Grid item xs={12} align="center">
							<CardActions>
								<Button size="large" href={url} fullWidth className = {classes.button}>Read More</Button>
							</CardActions>
						</Grid>
					</Grid>
				</Card>
			}

		</Box>
	)
}

export default SimpleCard
