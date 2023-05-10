import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const config = defineConfig({
    projectId: "01l9ccux",
    dataset: "production",
    title: "Emmas Blog",
    apiVersion: "2023-05-10",
    basePath: "/admin",
    plugins: [deskTool()]
})

export default config;