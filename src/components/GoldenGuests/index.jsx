/* eslint-disable @next/next/no-img-element */
import React from "react"
import styled from "styled-components"
import Grid from "@mui/material/Grid"
import Image from "next/image"
import { Button } from "@common/Button"

function GoldenGuestSection() {
	return (
		<Container>
			<Grid container>
				<Grid item xs={7}>
					<Heading>The Golden Guests</Heading>
					<Text>
						The Golden Guests edition by the Billionaire Club are the rarest NFTs. They are all hand drawn and have no
						element in common with the regular collection.
					</Text>
					<PreSaleButton>Join us to register for the Presale</PreSaleButton>
				</Grid>
				<GoldenTicketPicDiv item xs={5}></GoldenTicketPicDiv>
			</Grid>
		</Container>
	)
}

export default GoldenGuestSection

const Container = styled.div`
	background: linear-gradient(90deg, #ac32e4 0%, #7918f2 48%, #4801ff 100%);
	width: 100%;
	height: 380px;
	box-sizing: border-box;
	padding: 59px 79px;
`

const GoldenTicketPicDiv = styled(Grid)`
	background-image: url("/assets/golden-ticket.png");
	background-size: 560px 500px;
	background-position: 50px -100px;
	background-repeat: no-repeat;
`

const Heading = styled.span`
	font-family: "Poppins", sans-serif;
	font-size: 52px;
	font-weight: 700;
	line-height: 78px;
	letter-spacing: 0em;
	text-align: left;
	color: #e2c668;
`

const Text = styled.p`
	color: #fff;
	font-family: "Roboto", sans-serif;
	font-size: 24px;
	font-weight: 400;
	line-height: 28px;
	letter-spacing: 0em;
	text-align: left;
`
const PreSaleButton = styled(Button)`
	border: 3px solid #000;
	background: linear-gradient(90deg, #7918f2 48%, #4801ff 100%);
	padding: 10px 38px;
	box-shadow: -7px -6px 0px 2px rgba(0, 0, 0, 1);
	-webkit-box-shadow: -7px -6px 0px 2px rgba(0, 0, 0, 1);
	-moz-box-shadow: -7px -6px 0px 2px rgba(0, 0, 0, 1);
	transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
	:hover {
		transform: scale(1.02);
	}
`
