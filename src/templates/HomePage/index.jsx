import CollectionSection from "@components/Collections"
import HeroSection from "@components/Hero"
import Navigation from "@components/Navigation"
import React from "react"
import styled from "styled-components"
import Grid from "@mui/material/Grid"
import GoldenGuestSection from "@components/GoldenGuests"
import NewsLetterSection from "@components/NewsLetter"
import FooterSection from "@components/Footer"

function HomePageTemplate() {
	return (
		<>
			<Navigation />
			<HeroSection />
			<MainContainer container spacing={3}>
				<Grid item xs={12}>
					<CollectionSection />
				</Grid>
				<Grid item xs={12}>
					<GoldenGuestSection />
				</Grid>
				<Grid item xs={12}>
					<NewsLetterSection />
				</Grid>
			</MainContainer>
			<FooterSection />
		</>
	)
}

export default HomePageTemplate

const MainContainer = styled(Grid)`
	background-image: url("/assets/dots-right.png"), url("/assets/dots-left.png"), url("/assets/ellipse-main.png");
	background-position: top right, bottom left, center right;
	background-repeat: no-repeat, no-repeat, no-repeat;
`
