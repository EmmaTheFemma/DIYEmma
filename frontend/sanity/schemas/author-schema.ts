const author = {
    name: "author",
    title: "Author",
    type: "document",
    fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
        },
        {
          name: 'email',
          title: 'Email',
          type: 'string',
        },
        {
          name: 'bio',
          title: 'Bio',
          type: 'text',
        },
        {
            name: 'webpage',
            title: 'Webpage',
            type: 'url',
          },
        {
          name: 'profileImage',
          title: 'Profile Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
  }
  
  export default author;