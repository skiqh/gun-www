module.exports = {
	assetPrefix: "/main",
	siteMetadata: {
		title: `GUN — the database for freedom fighters`,
		description: `GUN is a distributed, offline-first, realtime graph database engine with built-in encryption.`,
		author: `@marknadal`,
		image: "/og-image.png", // Path to your image you placed in the 'static' folder
		siteUrl: `https://gun.eco`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sitemap`,
		{
			resolve: "gatsby-plugin-asset-path",
			options: {
				removeMapFiles: true,
				additionalPaths: ["manifest.webmanifest", "sitemap.xml"],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `GUN — the database for freedom fighters`,
				short_name: `GUN`,
				start_url: `/`,
				background_color: `#FF003D`,
				theme_color: `#FF003D`,
				display: `minimal-ui`,
				icon: `src/images/gun-white-red-sq.png`, // This path is relative to the root of the site.
			},
		},
		// {
		//   resolve: `gatsby-plugin-postcss`,
		//   options: {
		//     postCssPlugins: [],
		//   },
		// },
		{
			resolve: `gatsby-plugin-postcss`,
			options: {
				postCssPlugins: [require("postcss-mixins"), require("tailwindcss")],
			},
		},
		{
			resolve: `gatsby-plugin-webfonts`,
			options: {
				fonts: {
					google: [
						{
							family: `Raleway`,
							subsets: [`latin`],
							variants: [`500`, `700`],
						},
						{
							family: `Share Tech Mono`,
							subsets: [`latin`],
						},
					],
				},
				// fonts: [
				// 	`Raleway:500,700`,
				// 	`Share Tech Mono`,
				// 	// you can also specify font weights and styles
				// ],
				display: "swap",
			},
		},
		// `gatsby-plugin-postcss`,
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: /\.svg$/, // See below to configure properly
				},
			},
		},
		`gatsby-plugin-smoothscroll`,
		// {
		//   resolve: "prismjs",
		//   options: {
		//     languages: ["javascript", "css", "markup"],
		//     theme: "funky",
		//     css: true,
		//   },
		// },
	],
}
