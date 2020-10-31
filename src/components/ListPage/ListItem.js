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
import CardMedia from '@material-ui/core/CardMedia';

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
	const [data, setData] = React.useState(null)
	React.useEffect(() => {
		setData(props.data)
	}, [props.data])
	return (
		<Box py = {5}>
			{
				data &&
				<Card className={classes.card}>
					<Grid container>
						<Grid container sm={8}>
							<CardContent>
								<Typography className={classes.title} color="textSecondary">
									{data.source.name}
								</Typography>
								<Typography variant="headline" component="h2">
									{data.title.substr(0, data.title.lastIndexOf("-")-1)}
								</Typography>
								<Typography className={classes.pos} color="textSecondary">
									{(new Date(data.publishedAt)).toDateString()}
								</Typography>
								<Typography component="p">
									{`"${data.description}"`}
								</Typography>
							</CardContent>
						</Grid>
						<Grid container sm={4} align="center"
							alignItems="center"
							justify="center">
							<img
								className={classes.img}
								alt="Article Visual"
								src={data.urlToImage}
							/>
						</Grid>
						<Grid container xs={12} align="center"
							alignItems="center"
							justify="center">
							<CardActions>
								<Box py={1}>
									<Button size="large" href={data.url} variant="contained" fullWidth style={{ minWidth: "300px" }}>Read More</Button>
								</Box>
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
