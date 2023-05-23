const blog = {
  name: "blog",
  title: "Blogs",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Titel",
      type: "string",
/*       validation: Rule => [
        Rule.required().min(10).error('A title of min. 10 characters is likely good'),
        Rule.max(50).warning('The name should not exceed 70 characters.')
      ] */
    },
    {
      name: "slug",
      title: "Slug = Te.x min-slug blir i websidan https://diyemma.com/blogs/min-slug",
      type: "slug",
      options: { source: "name" }
    },
    {
      name: 'topic',
      title: 'Topic = För att organisera.',
      type: 'reference',
      to: [{ type: 'topic' }],
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt (Image Text) VIKTIGT!",
          type: "string"
        }
      ]
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
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
              title: "Alt (Image Text) Viktigt!",
              type: "string"
            }
          ]
        }
      ]
    }
  ]
}

export default blog;