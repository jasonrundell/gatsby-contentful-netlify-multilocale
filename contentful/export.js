require('dotenv').config()
const contentfulExport = require('contentful-export') // core library that runs the export

// your Contentful configuration
const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  managementToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
  environmentId: process.env.CONTENTFUL_ENVIRONMENT_ID,
}

// contentfulExport documentation can be found at https://github.com/contentful/contentful-export
contentfulExport(contentfulConfig)
  .then(result => {
    console.log('Your space data:', result)
  })
  .catch(err => {
    console.log('Oh no! Some errors occurred!', err)
  })
