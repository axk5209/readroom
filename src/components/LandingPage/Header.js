import React from 'react'
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles'
import {AppBar, Toolbar, Typography, Link as LinkTag } from  '@material-ui/core'

let HeaderLogo = require('../../images/HeaderLogo.png')

/**
 * Header of LandingPage
 * AppBar which displays icon and name of application.
 */


const useStyles = makeStyles({
	title: {
		flexGrow: 1,
		fontWeight: "bold"
	},
	logo: {
		maxWidth: "60px"
	}
})

const Header = () => {
	const classes = useStyles()
	return (
		<AppBar position="static" >
			<Toolbar>
				<LinkTag component={Link} to="/home">
					<img src={HeaderLogo} className ={classes.logo} alt = "logo"/>
				</LinkTag>
				<Typography variant="h4" className={classes.title}>
					ead World
				</Typography>
			</Toolbar>
		</AppBar>
	)
}
export default Header