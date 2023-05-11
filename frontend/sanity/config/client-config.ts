const config = {

    projectId: "01l9ccux",
    dataset: "production",
    apiVersion: "2023-05-10",
    useCdn: process.env.MODE === 'preview' ? false : true

};

export default config;