import * as prismic from '@prismicio/client';

export const repositoryName = 'https://carre.cdn.prismic.io/api/v2';

export const client = prismic.createClient(repositoryName, {});
