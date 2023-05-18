
const topic = {
    name: 'topic',
    title: 'Topic',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 200,
        },
      },
    ],
  };

  export default topic;