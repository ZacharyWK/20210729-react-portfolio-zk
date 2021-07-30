import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: "54k21uem",
    dataset: "production",
    apiVersion: "2021-03-25",
    useCdn: false, 
})

