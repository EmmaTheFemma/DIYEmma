const blog = {
  name: "blog",
  title: "Blogs",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
/*       validation: Rule => [
        Rule.required().min(10).error('A title of min. 10 characters is likely good'),
        Rule.max(50).warning('The name should not exceed 70 characters.')
      ] */
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" }
    },
    {
      name: "keywords",
      title: "Keywords (separated by ,)",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'lastUpdate',
      title: 'Date updated',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today'
      }
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt (Image Text)",
          type: "string"
        }
      ]
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block",
          marks: {
/*             options: {
              heading1: ""
            }, */
          },
      },
        {
          type: "image",
          fields: [
            {
              name: "caption",
              title: "Caption",
              type: "string"
            },
            {
              name: "alt",
              title: "Alt",
              type: "string"
            }
          ]
        }
      ]
    }
  ]
}

export default blog;