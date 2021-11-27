/* eslint-disable @next/next/no-img-element */
import Grid from "@mui/material/Grid"
import React from "react"
import styled from "styled-components"

function NewsLetterSection() {
	return (
		<Container>
			<Grid container textAlign="center" alignItems="center">
				<Grid item xs={12}>
					<Heading>Get Aped with Us!</Heading>
				</Grid>
				<Grid item xs={12}>
					<SubHeading>Sign up for our newsletter</SubHeading>{" "}
					<img
						src="/assets/cursor.png"
						width="44px"
						height="44px"
						alt="sign up for newsletter"
						style={{ position: "relative", top: 22 }}
					/>
				</Grid>
			</Grid>
		</Container>
	)
}

export default NewsLetterSection

const Container = styled.div`
	padding: 113px;
`

const Heading = styled.span`
	background: -webkit-linear-gradient(0deg, #00dbde 0%, #fc00ff 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-family: "Poppins", sans-serif;
	font-size: 56px;
	font-weight: 600;
	line-height: 84px;
	letter-spacing: 0em;
`
const SubHeading = styled.span`
	font-family: "Roboto", sans-serif;
	font-size: 32px;
	font-weight: 400;
	line-height: 38px;
	letter-spacing: 0em;
	color: #fff;
	display: inline-block;
	position: relative;
	::after {
		content: "";
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 4px;
		bottom: -7px;
		left: 0px;
		background: linear-gradient(90deg, #ac32e4 0%, #7918f2 48%, #4801ff 100%);
		transform-origin: bottom right;
		transition: transform 0.25s ease-out;
	}
	:hover::after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}
	cursor: pointer;
`
