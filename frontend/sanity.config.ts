import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';
import { visionTool } from '@sanity/vision';
/* import { dashboardTool } from "@sanity/dashboard";
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify"; */


const config = defineConfig({
    projectId: "01l9ccux",
    dataset: "production",
    name: 'default',
    title: 'magenta-kouprey',
    apiVersion: "2023-05-15",
    basePath: "/admin",
    schema: { types: schemas },
    plugins: [deskTool(), visionTool()/* ,
        dashboardTool({
            widgets: [
              netlifyWidget({
                  title: 'My Netlify deploys',
                  sites: [
                    {
                      title: 'Sanity Studio',
                      apiId: 'xxxxx-yyyy-zzzz-xxxx-yyyyyyyy',
                      buildHookId: 'xxxyyyxxxyyyyxxxyyy',
                      name: 'sanity-gatsby-blog-20-studio',
                    },
                    {
                      title: 'Website',
                      apiId: 'yyyyy-xxxxx-zzzz-xxxx-yyyyyyyy',
                      buildHookId: 'yyyyxxxxxyyyxxdxxx',
                      name: 'sanity-gatsby-blog-20-web',
                      url: 'https://diyemma.netlify.app',
                    }
                  ]
              })
            ]
          }) */
    ]
})

export default config;