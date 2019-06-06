module.exports = {
	siteMetadata: {
    	title: `MoodBored`,
    	description: `Personal blog by Ethan Ling.`,
    	author: `@ethanling`,
  	},
  	plugins: [
		'gatsby-transformer-remark',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: `${__dirname}/src/pages`
			}
		}
  	],
}
