import Head from "next/head"
import HomePageTemplate from "src/templates/HomePage"

export default function Home() {
	return (
		<div>
			<Head>
				<title>Billionaire Club - Landing Page</title>
				<meta name="description" content="Some meta description" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<HomePageTemplate />
		</div>
	)
}
