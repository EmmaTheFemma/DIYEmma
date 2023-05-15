import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';
import { visionTool } from '@sanity/vision';

const config = defineConfig({
    projectId: "01l9ccux",
    dataset: "production",
    title: "Emmas Blog",
    apiVersion: "2023-05-15",
    basePath: "/admin",
    plugins: [deskTool(), visionTool()],
    schema: { types: schemas }
})

export default config;