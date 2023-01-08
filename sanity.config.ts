import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineConfig({
  basePath: '/studio', 
  name: 'PAPAFAM_CONTENT_STUDIO',
  title: 'PAPAFAM Content Studio',
  projectId: 'zp317s8w', //to change later env var
  dataset: 'production', //to change later
  plugins: [deskTool(), visionTool()],  //desktool permits to update info
  schema: {
    types: schemaTypes,
  },
})
