import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';
import { visionTool } from '@sanity/vision';
 

const config = defineConfig({
    projectId: "01l9ccux",
    dataset: "production",
    name: 'default',
    title: 'Emmas Studio ❤',
    apiVersion: "2023-05-15",
    basePath: "/admin",
    schema: { types: schemas },
    plugins: [deskTool(), visionTool()]
})

export default config;