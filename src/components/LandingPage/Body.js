import React from 'react'
import { Container, Typography, Box, InputLabel, MenuItem, FormControl, Select, Grid, Button } from '@material-ui/core'
import {Link} from "react-router-dom"
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles';
let ISO2Options = require('./ISO2Options.json')
let ISO2ToName = require('./ISO2ToName.json')

const useStyles = makeStyles((theme) => ({
	message: {
		flexGrow: 1,
		fontWeight: "bold",
		color: "indigo"
	},
	subheading: {
		flexGrow: 1,
		color: "indigo",
	},
	buttons: {
		color: "indigo",
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));


const Body = () => {
	console.log(ISO2Options)
	console.log(ISO2ToName)
	const classes = useStyles();
	const [category, setCategory] = React.useState('entertainment');
	const handleCategoryChange = (_, newCategory) => {
		setCategory(newCategory);
	};
	const [country, setCountry] = React.useState("us");

	const handleCountryChange = (event) => {
		setCountry(event.target.value);
	};

	return (
		<Container align="center">
			<Box p={6} />

			<Typography variant="h4" className={classes.message}>I would like to read about... </Typography>
			<Box p={3} />
			<ToggleButtonGroup orientation="vertical" value={category} exclusive onChange={handleCategoryChange} size="large">
				<ToggleButton value="entertainment" aria-label="entertainment" className={classes.buttons}>
					Entertainment
				</ToggleButton>
				<ToggleButton value="sports" aria-label="sports" className={classes.buttons}>
					Sports
				</ToggleButton>
				<ToggleButton value="technology" aria-label="technology" className={classes.buttons}>
					Technology
				</ToggleButton>
			</ToggleButtonGroup>
			<Box p={3} />
			<Grid container direction="row" alignItems="center" justify="center">
				<Grid item>
					<Typography variant="h4" className={classes.message}>
						...in the country of
					</Typography>
				</Grid>
				<Box pr={4} />
				<Box pb={4} />
				<Grid item>
					<FormControl variant="outlined" className={classes.formControl} >
						<InputLabel id="demo-simple-select-outlined-label">Country</InputLabel>
						<Select
							labelId="demo-simple-select-outlined-label"
							id="demo-simple-select-outlined"
							value={country}
							onChange={handleCountryChange}
							label="Country"
						>
							
						{
							ISO2Options.map((ISO2Option) => 
								<MenuItem value={ISO2Option}>{ISO2ToName[ISO2Option.toUpperCase()]}</MenuItem>
							)
						}
						</Select>
					</FormControl>
				</Grid>
			</Grid>
			<Box p={3} />
			<Button component = {Link} to = {`/list/${category}/${country}`} variant= "outlined" color = "primary" size ="large" style={{textTransform: "none", fontSize: "30px", minWidth: '30%', minHeight: '10%'}}>Make Room!</Button>
		</Container>
	)
}

export default Body