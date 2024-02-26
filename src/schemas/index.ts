import logo from './logo'

import navbar from './navbar'
import hero from './hero'
import { SchemaTypeDefinition } from 'sanity'
import blockContent from './blockContent'
import post from './post'
import eventsContent from './eventsContent'
import newsContent from './newsContent'

export const schemaTypes = [
  post,
  blockContent,
  eventsContent,
  newsContent,
  navbar,
  hero,
]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [logo, post, navbar, hero, blockContent, eventsContent, newsContent],
}
