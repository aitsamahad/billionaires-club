import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"
import React from "react"
import styled from "styled-components"
import { Button } from "@common/Button"

function HeroSection() {
	return (
		<Container>
			<Grid container>
				<Grid item xs={12} sm={6}>
					<HeroMonkey />
				</Grid>
				<Grid item xs={12} sm={6}>
					<ExclusiveContainer>
						<Heading>EXCLUSIVE</Heading>
						<SubHeading>newest NFT release</SubHeading>
						<Text>
							The <span>BILLIONAIRE CLUB</span> is a private collection of 10 000 billionaire apes NFTs—unique digital
							collectibles. The apes are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS. <br />{" "}
							<a href="#">Reveal on October 20th.</a>
						</Text>
						<Grid container spacing={1}>
							<Grid item xs={8}>
								<RegisterField fullWidth variant="outlined" placeholder="your@email.com" />
							</Grid>
							<Grid item xs={4}>
								<Button fullWidth>Register</Button>
							</Grid>
						</Grid>
					</ExclusiveContainer>
				</Grid>
			</Grid>
		</Container>
	)
}

export default HeroSection

const Container = styled.div`
	height: 100vh;
	width: 100%;
`
const ExclusiveContainer = styled.div`
	padding: 206px 210px 82px 15px;
	text-align: right;
	background-image: url("/assets/ellipse-right.png");
	background-position: top right;
	background-repeat: no-repeat;
`

const HeroMonkey = styled.div`
	background-image: url("/assets/hero-monkey.png"), url("/assets/monkey-back-circle.png"),
		url("/assets/ellipse-left.png");
	background-position: center, center, center left;
	background-repeat: no-repeat, no-repeat, no-repeat;
	height: 100vh;
`
const Heading = styled.span`
	font-family: "Poppins", sans-serif;
	font-weight: 700;
	font-size: 96px;
	color: #fff;
	display: block;
	position: relative;
	::after {
		content: "";
		width: 80px;
		height: 90px;
		top: 20px;
		background-image: url("/assets/line1.png"), url("/assets/line2.png"), url("/assets/line3.png");
		background-position: 0px 0px, 15px 25px, 25px 65px;
		background-repeat: no-repeat, no-repeat, no-repeat;
		top: -20px;
		right: -70px;
		position: absolute;
		display: inline-block;
	}
`
const SubHeading = styled.span`
	font-family: "Roboto", sans-serif;
	font-weight: 400;
	font-size: 48px;
	background: -webkit-linear-gradient(0deg, #00dbde 0%, #fc00ff 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	line-height: 0px;
`

const Text = styled.p`
	font-size: 20px;
	font-family: "Roboto", sans-serif;
	font-weight: 500;
	color: #fff;
	a {
		font-weight: 400;
		color: #7918f2;
		text-decoration: none;
	}
	span {
		font-weight: 800;
		font-family: "Poppins", sans-serif;
	}
`

const RegisterField = styled(TextField)`
	border: 2px solid #7918f2;
	box-sizing: border-box;
	font-size: 24px;
	text-align: center;
	border-radius: 0px;
	input {
		color: #fff;
		border: 0px;
	}
`
