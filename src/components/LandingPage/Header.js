import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {
	Link
} from "react-router-dom"
import LinkTag from '@material-ui/core/Link'

let HeaderLogo = require('../../images/HeaderLogo.png')

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
	},
	title: {
		flexGrow: 1,
		fontWeight: "bold"
	},
}))

export default function Header() {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<AppBar position="static" >
				<Toolbar>
					<LinkTag component={Link} to="/home">
						<img src={HeaderLogo} style ={{maxWidth: "60px"}} alt = "logo"/>
					</LinkTag>
					<Typography variant="h4" className={classes.title}>
						ead Room
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	)
}