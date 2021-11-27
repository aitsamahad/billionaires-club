import Avatar from "@mui/material/Avatar"
import Grid from "@mui/material/Grid"
import React from "react"
import styled from "styled-components"
import Image from "next/image"

function NFTCard({ item }) {
	return (
		<Container>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Grid container alignItems="center">
						<Grid item xs={2}>
							<Avatar sx={{ width: "43px", height: "43px" }} />
						</Grid>
						<Grid item xs={8}>
							<NFTUserHandle>{item?.handle}</NFTUserHandle>
						</Grid>
						<Grid item xs={2}>
							<StarContainer>
								<Image src="/assets/star.png" width="17px" height="17px" alt={`${item?.handle} stars`} />
								<span>{item?.stars}</span>
							</StarContainer>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<NFTImage image={item?.nft} />
				</Grid>
				<Grid item xs={6} textAlign="left">
					<NFTDetailTItle>Current Bid</NFTDetailTItle>
					<NFTDetailValue>{item?.currentBid} ETH</NFTDetailValue>
				</Grid>
				<Grid item xs={6} textAlign="right">
					<NFTDetailTItle>Ending in</NFTDetailTItle>
					<NFTDetailValue>{item?.endingIn}</NFTDetailValue>
				</Grid>
			</Grid>
		</Container>
	)
}

export default NFTCard

const Container = styled.div`
	height: 513px;
	width: 385px;
	box-sizing: border-box;
	background: url("/assets/rectangleBg.png");
	background-size: 385px 513px;
	background-repeat: no-repeat;
	padding: 13px 24px;
	margin: 0 auto;
	cursor: pointer;
	transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
	:hover {
		transform: scale(1.02);
	}
`

const NFTUserHandle = styled.span`
	font-family: "Poppins", sans-serif;
	font-size: 18px;
	font-weight: 500;
	line-height: 26px;
	letter-spacing: 0em;
	text-align: left;
	color: #fff;
`

const StarContainer = styled.span`
	font-family: "Poppins", sans-serif;
	font-size: 14px;
	font-weight: 600;
	line-height: 26px;
	letter-spacing: 0em;
	text-align: left;
	display: flex;
	align-items: center;
	span {
		margin-left: 9px;
		color: #fff;
	}
`

const NFTImage = styled.div`
	width: 336px;
	height: 336px;
	${({ image }) => image && 'background: url("' + image + '");'}

	background-repeat: no-repeat;
`

const NFTDetailTItle = styled.span`
	color: #a7a7a7;
	font-weight: 500;
	font-family: "Poppins", sans-serif;
	font-size: 15px;
	line-height: 26px;
	display: block;
`
const NFTDetailValue = styled.span`
	color: #fff;
	font-weight: 700;
	font-family: "Poppins", sans-serif;
	font-size: 22px;
	line-height: 26px;
	display: block;
`
