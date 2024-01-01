import {requests , gql} from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getPosts = async () => {
    const query = gql`
        query Assets {
            assets {
            createdAt
            id
            publishedAt
            fileName
            url
            updatedAt
            }
            postsConnection {
            edges {
                node {
                    author {
                        bio
                        name
                        id
                        photo {
                        url
                        }
                    }
                    createdAt
                    slug
                    title
                    exerpt
                    featuredImage {
                        url
                    }
                    categories {
                        name
                        slug
                }
                }
            }
            }
        }
      
    `
    const results = await requests(graphqlAPI, query);

    return results.postsConnection.edges;
}