import React from "react"
import styled from "styled-components"

function PageWrapper({ children }) {
	return <Container>{children}</Container>
}

export default PageWrapper

const Container = styled.div`
	background-color: #121212;
	position: relative;
	width: 100%;
	height: 100%;
`
