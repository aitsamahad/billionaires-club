import Grid from "@mui/material/Grid"
import React from "react"
import styled from "styled-components"
import Image from "next/image"
import { Button } from "@common/Button"

export default function Navigation() {
	return (
		<Container>
			<Grid container>
				<Grid item xs={6}>
					<Image src="/assets/logo.svg" width="231px" height="57px" alt="billionaire club logo" />
				</Grid>
				<Grid item xs={6}>
					<Grid container spacing={3} alignItems="center">
						<Grid item xs={2}>
							<MenuLink active="true">Home</MenuLink>
						</Grid>
						<Grid item xs={2}>
							<MenuLink>Features</MenuLink>
						</Grid>
						<Grid item xs={2}>
							<MenuLink>Roadmap</MenuLink>
						</Grid>
						<Grid item xs={2}>
							<MenuLink>Team</MenuLink>
						</Grid>
						<Grid item xs>
							<JoinButton>Join Our Discord</JoinButton>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	)
}

const Container = styled.div`
	position: fixed;
	width: 100%;
	height: 94px;
	top: 0px;
	left: 0px;
	background-color: #000;
	padding: 25px 79px 12px;
	z-index: 22;
`

const MenuLink = styled.span`
	font-size: 18px;
	font-family: "Poppins", sans-serif;
	font-weight: ${({ active }) => (active ? 600 : 400)};
	color: ${({ active }) => (active ? "#7918F2" : "#fff")};
	cursor: pointer;
	position: relative;
	${({ active }) =>
		active &&
		"::after {content: '';border-left: 9px solid transparent;border-right: 9px solid transparent;border-bottom: 9px solid #7918F2;position: absolute; top:30px; left: 35%;}"}
`

const JoinButton = styled(Button)`
	font-size: 15px;
	font-weight: 700;
`
