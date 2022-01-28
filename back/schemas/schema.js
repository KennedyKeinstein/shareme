import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import user from './user'
import pin from './pin'
import comment from './comment'
import postedBy from './postedBy'
import save from './save'

export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    user,
    pin,
    comment,
    postedBy,
    save
  ]),
})
