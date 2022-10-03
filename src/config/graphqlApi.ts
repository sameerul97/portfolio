export const graphqlApi = {
  endpoint: 'https://portfolio-headless-cms-production.up.railway.app/graphql',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  projectCategoriesQuery: JSON.stringify({
    query: `
        query {
            categories {
                data {
                    id
                    attributes {
                        name
                    }
                }
            }
        }
    `,
  }),
  projectQuery: JSON.stringify({
    query: ` 
        query {
            projects {
                data {
                    id
                    attributes {
                        name
                        tags {
                            id
                            name
                        }
                        categories {
                            data {
                                id
                                attributes {
                                    name
                                }
                            }
                        }
                    }
                }
            }
        }
      `,
  }),
  aboutmeSectionQuery: JSON.stringify({
    query: `
        query {
            aboutmeSection {
                data {
                    attributes {
                        header,
                        description
                    }
                }
            }
        }
      `,
  }),
  aboutMeTopiAndContent: JSON.stringify({
    query: `
        query {
            topicV2S {
                data {
                    id
                    attributes {
                        name,
                        topic_content_v_2s{
                            data{
                                id,
                                attributes{
                                    name,
                                    data,
                                    isList,
                                    tags {
                                        id,name
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
      `,
  }),
}
