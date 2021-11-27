import React from "react"
import styled from "styled-components"
import Grid from "@mui/material/Grid"
import Divider from "@mui/material/Divider"
import Image from "next/image"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"

function FooterSection() {
	return (
		<Container>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Divider style={{ backgroundColor: "#818181" }} />
				</Grid>
				<Grid item xs={6}>
					<Grid container alignItems="center">
						<Grid item xs={4}>
							<Image src="/assets/footer-logo.png" width="178px" height="44px" alt="Billionaire club logo" />
						</Grid>
						<Grid item xs={4}>
							<FooterLink>Terms of Service</FooterLink>
						</Grid>
						<Grid item xs={4}>
							<FooterLink>Privacy Policy</FooterLink>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={6} alignSelf="flex-end" textAlign="right">
					<Image src="/assets/twitter.png" width="28px" height="24px" alt="twitter logo" />
					&nbsp; &nbsp;
					<Image src="/assets/discord.png" width="31px" height="22px" alt="discord logo" />
					&nbsp; &nbsp;
					<Image src="/assets/instagram.png" width="24px" height="24px" alt="instagram logo" />
				</Grid>
			</Grid>
		</Container>
	)
}

export default FooterSection

const Container = styled.div`
	padding: 23px 65px 66px;
`

const FooterLink = styled.span`
	font-family: Roboto;
	font-size: 18px;
	font-weight: 400;
	line-height: 21px;
	letter-spacing: 0em;
	color: #767676;
	cursor: pointer;
`
