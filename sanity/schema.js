import {blockContent} from './schemas/blockContent'
import {category} from './schemas/category'
import {post} from './schemas/post'
import {author} from './schemas/author'
import {teamPerson} from './schemas/teamPerson'
import {gallery} from './schemas/gallery'

export const schema = {
  types: [post, author, category, blockContent, teamPerson, gallery],
}
