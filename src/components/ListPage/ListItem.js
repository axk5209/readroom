import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import newsService from "../../services/news"
let AlternateVisual = require('../../images/AlternateVisual.png')

const styles = {
	card: {
		minWidth: 275,
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		marginBottom: 16,
		fontSize: 12,
	},
	pos: {
		marginBottom: 12,
	},
	media: {
		height: 140,
	},
	img: {
		maxHeight: 140,
	},
};

function SimpleCard(props) {
	const { classes } = props;
	const [dataReceived, setDataReceived] = React.useState(false)
	const [source, setSource] = React.useState(null);
	const [title, setTitle] = React.useState(null);
	const [date, setDate] = React.useState(null);
	const [description, setDescription] = React.useState(null);
	const [imageSrc, setImageSrc] = React.useState(null);
	const [url, setUrl] = React.useState(null);
	const [hasPaywall, setHasPaywall] = React.useState(false)
	React.useEffect(() => {
		setDataReceived(props.data)
		setSource(props.data.source.name)
		setTitle(props.data.title.substr(0, props.data.title.lastIndexOf("-") - 1))
		setDate((new Date(props.data.publishedAt)).toDateString())
		setDescription(props.data.description ? `${props.data.description}` : "\n")
		setImageSrc(props.data.urlToImage ? props.data.urlToImage : AlternateVisual)
		setUrl(props.data.url)
		determinePaywall(props.data.url)
	}, [props.data])

	async function determinePaywall (url) {
		const urlHTMLText = await newsService.retrieveHTMLText(url)
		const urlHTML = document.createElement('html')
		urlHTML.innerHTML = urlHTMLText

		const JSONLDElement = urlHTML.querySelector('script[type="application/ld+json"]')
		if (!JSONLDElement) return;

		const JSONLD = JSON.parse(JSONLDElement.innerText)
		if (!JSONLDElement.hasOwnProperty('isAccessibleForFree')) return;

		const newHasPaywall = !JSONLD.isAccessibleForFree
		console.log(url)
		console.log(newHasPaywall)
		setHasPaywall(newHasPaywall)
	}

	return (
		<Box py={5}>
			{
				dataReceived &&
				<Card className={classes.card}>
					<Grid container>
						<Grid item md={8} sm={7}>
							<CardContent>
								<Typography className={classes.title} color="textSecondary"> {source} </Typography>
								<Typography variant="h6" style={{ fontWeight: "bold" }}> {title} </Typography>
								<Typography className={classes.pos} color="textSecondary" > {date}</Typography>
									<Typography component="p" style={{ textTransform: "italic" }}>
										<Box fontStyle="italic">
											{description}
										</Box>
									</Typography>
							</CardContent>
						</Grid>
						<Grid item md={4} sm={5} align="center">
							<Box py={4}>
								<img
									className={classes.img}
									alt="Article Visual"
									src={imageSrc}
								/>
							</Box>
						</Grid>
						<Grid item xs={12} align="center">
							<CardActions style={{ minWidth: "100%" }} >
								<Button size="large" href={url} fullWidth>Read More</Button>
								<Box py={4} />
							</CardActions>
						</Grid>
					</Grid>
				</Card>
			}

		</Box>
	);
}

SimpleCard.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
