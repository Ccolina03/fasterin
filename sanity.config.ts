import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myTheme } from './theme'

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
