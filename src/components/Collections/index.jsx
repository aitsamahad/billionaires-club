import NFTCard from "@common/NFTCard"
import Grid from "@mui/material/Grid"
import { NFTData } from "data"
import React from "react"
import styled from "styled-components"

function CollectionSection() {
	return (
		<Container>
			<Heading>Collections</Heading>
			<Text>
				With more than 180+ hand drawn traits, each NFT is unique and comes with a membership to an exclusive group of
				successful investors. Join an ambitious ever-growing community with multiple benefits and utilities.
			</Text>
			<br />
			<Grid container spacing={3}>
				{NFTData?.map((item, index) => (
					<Grid item xs={4} key={index}>
						<NFTCard item={item} />
					</Grid>
				))}
			</Grid>
		</Container>
	)
}

export default CollectionSection

const Container = styled.div`
	padding: 61px;
`

const Heading = styled.span`
	font-weight: 600;
	font-size: 96px;
	font-family: "Poppins", sans-serif;
	background: -webkit-linear-gradient(0deg, #ac32e4 0%, #7918f2 48%, #4801ff 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`
const Text = styled.p`
	font-family: "Roboto", sans-serif;
	font-size: 24px;
	color: #fff;
	max-width: 90%;
`
