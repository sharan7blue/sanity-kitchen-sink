export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ebdb6f90210293ff6007a97',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-q898zp3u',
                  apiId: '93a6f224-1392-4499-baa1-100576f89590'
                },
                {
                  buildHookId: '5ebdb6f9ed34be9120e3006c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-uyogrf8w',
                  apiId: 'bc8b43d4-3459-420f-b9a0-c7b1732902fa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sharan7blue/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-uyogrf8w.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
