import {blockContent} from './schemas/blockContent'
import {category} from './schemas/category'
import {post} from './schemas/post'
import {author} from './schemas/author'
import {teamPerson} from './schemas/teamPerson'
import {eventPost} from './schemas/eventPost'
import {jobApp} from './schemas/jobApp'

export const schema = {
  types: [post, author, category, blockContent, teamPerson, eventPost, jobApp],
}
