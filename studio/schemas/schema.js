// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import page from './documents/page'
import recipe from './documents/recipe'
import ingredient from './documents/ingredient'
import route from './documents/route'
import siteConfig from './documents/siteConfig'

// Object types
import cta from './objects/cta'
import embedHTML from './objects/embedHTML'
import figure from './objects/figure'
import internalLink from './objects/internalLink'
import link from './objects/link'
import portableText from './objects/portableText'
import simplePortableText from './objects/simplePortableText'

// Custom Object
import ingredientPicker from './objects/ingredientPicker'
import ingredientAmount from './objects/ingredientAmount'
import temperature from './objects/temperature'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    cta,
    embedHTML,
    figure,
    internalLink,
    temperature,
    link,
    recipe,
    ingredient,
    page,
    portableText,
    route,
    simplePortableText,
    siteConfig,
    ingredientPicker,
    ingredientAmount,
  ]),
})
