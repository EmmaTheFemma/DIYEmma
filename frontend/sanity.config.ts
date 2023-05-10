import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
    projectId: "01l9ccux",
    dataset: "production",
    title: "Emmas Blog",
    apiVersion: "2023-05-10",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas }
})

export default config;