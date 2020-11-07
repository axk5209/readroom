import React from 'react'
import { Link } from "react-router-dom"
import {
	Container, Typography, Box, InputLabel, MenuItem, FormControl, Select, Grid, Button
} from '@material-ui/core'
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles'

const ISO2Options = require('../../data/ISO2Options.json')
const ISO2ToName = require('../../data/ISO2ToName.json')

const useStyles = makeStyles((theme) => ({
	outerBox: {
		backgroundColor: "#fdf7ff"
		// border: "4px dotted blue",
		// padding: "15px",
		// borderStyle: "outset"
		// backgroundImage: "url(https://i.dlpng.com/static/png/6929579_preview.png)",
		// backgroundSize: "1300px 1300px"
	},
	innerBox: {
		borderColor: "blue",
		borderStyle: "outset",
		borderWidth: "4px",
		borderRadius: "20px"
		// minWidth: "500px"
		// backgroundImage: "url(https://i.dlpng.com/static/png/6929579_preview.png)",
		// backgroundSize: "1300px 1300px"
	},
	selectionText: {
		flexGrow: 1,
		fontWeight: "bold",
		color: "indigo"
	},
	toggleButtons: {
		color: "indigo",
	},

	countrySelection: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	startReadingButton: {
		textTransform: "none",
		fontSize: "30px",
		minWidth: '30%',
		minHeight: '10%'
	},
}))


const Body = () => {
	const classes = useStyles()
	const [category, setCategory] = React.useState('entertainment')

	const [country, setCountry] = React.useState("us")

	React.useEffect(() => {
		const storedCategory = JSON.parse(window.localStorage.getItem('category'))
		const storedCountry = JSON.parse(window.localStorage.getItem('country'))
		storedCategory && setCategory(storedCategory)
		storedCountry && setCountry(storedCountry)
	}, [])



	const handleCategoryChange = (_, newCategory) => {
		if (newCategory !== null) setCategory(newCategory)
		window.localStorage.setItem("category", JSON.stringify(newCategory))
	}

	const handleCountryChange = (event) => {
		let newCountry = event.target.value
		setCountry(newCountry)
		window.localStorage.setItem("country", JSON.stringify(newCountry))
	}

	return (
		<Box className={classes.outerBox}>
			<Box p={10} />
			<Container align="center" className={classes.innerBox}>
				<Box p={6} />
				<Typography variant="h4" className={classes.selectionText}>I would like to read about:</Typography>
				<Box p={3} />
				<ToggleButtonGroup value={category} onChange={handleCategoryChange} orientation="vertical" exclusive size="large">
					<ToggleButton value="entertainment" className={classes.toggleButtons}>
						Entertainment
				</ToggleButton>
					<ToggleButton value="sports" className={classes.toggleButtons}>
						Sports
				</ToggleButton>
					<ToggleButton value="technology" className={classes.toggleButtons}>
						Technology
					</ToggleButton>
				</ToggleButtonGroup>
				<Box p={3} />
				<Grid container direction="row" alignItems="center" justify="center">
					<Grid item>
						<Box p={1} />
						<Typography variant="h4" className={classes.selectionText}>
							in the country of: &nbsp; &nbsp;
						</Typography>
						<Box p={1} />
					</Grid>
					<Grid item>
						<FormControl variant="outlined" className={classes.formControl} >
							<InputLabel id="demo-simple-select-outlined-label">Country</InputLabel>
							<Select
								value={country}
								onChange={handleCountryChange}
								label="Country"
							>
								{
									ISO2Options.map((ISO2Option, index) =>
										<MenuItem key={index} value={ISO2Option}>{ISO2ToName[ISO2Option.toUpperCase()]}</MenuItem>
									)
								}
							</Select>
						</FormControl>
					</Grid>
				</Grid>
				<Box p={3} />
				<Button component={Link} to={`/list/${category}/${country}`} variant="outlined" color="primary" size="large" className={classes.startReadingButton}>
					Start Reading!
					</Button>
				<Box p={5} />
			</Container>
			<Box p={10} />

		</Box>
	)
}

export default Body