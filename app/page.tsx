import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs, allAuthors } from 'contentlayer/generated'
import Main from './Main'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const author = allAuthors.find((author) => author.name === 'syamil maulod')
  const posts = allCoreContent(sortedPosts)

  return <Main posts={posts} author={author} />
}
