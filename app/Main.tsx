import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import Image from 'next/image'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts, author }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {/* Hero Section */}

        <section
          className="hero flex h-screen flex-row items-center justify-center text-white"
          id="hero"
        >
          {/* Left Column: Greeting */}
          <div className="flex flex-1 flex-col items-start justify-center">
            <h1 className="mb-4 text-left text-5xl font-bold text-gray-900 dark:text-gray-100">
              hello,
              <br />
              i'm syamil
            </h1>
            <p className="text-left text-xl text-gray-900 opacity-70 dark:text-gray-100">
              I am generally curious and especially interested in {''}
              <span className="hand-highlight font-semibold text-gray-900 dark:text-gray-100">
                advanced manufacturing
              </span>
              {''},{' '}
              <span className="hand-highlight font-semibold text-gray-900 dark:text-gray-100">
                data
              </span>
              , and{' '}
              <span className="hand-highlight font-semibold text-gray-900 dark:text-gray-100">
                {' '}
                social equity
              </span>
            </p>

            {/* Button Row */}
            <div className="mt-12 flex flex-row gap-4">
              <a
                href="/about"
                className="rounded bg-gray-900 px-6 py-3 text-white shadow transition hover:bg-gray-700"
              >
                about
              </a>
              <a
                href="#content"
                className="rounded bg-gray-100 px-6 py-3 text-gray-900 shadow transition hover:bg-gray-200"
              >
                read
              </a>
              {/* Add more buttons here as needed */}
            </div>
          </div>

          {/* Right Column: Profile */}
          <div className="hidden flex-1 flex-col items-center justify-center md:flex">
            {/* Example profile image and bio */}
            {author?.avatar && (
              <Image
                src={author.avatar}
                alt="avatar"
                width={192}
                height={192}
                className="mb-4 h-56 w-56 rounded-full shadow-lg"
              />
            )}

            <p className="text-center text-lg text-gray-900 dark:text-gray-100"></p>
            {/* Add more profile details or links here */}
          </div>
        </section>
      </div>
      <section
        className="flex min-h-screen scroll-mt-20 flex-col justify-center text-gray-900"
        id="content"
      >
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
              recent
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              {siteMetadata.description}
            </p>
          </div>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((post) => {
              const { slug, date, title, summary, tags } = post
              return (
                <li key={slug} className="py-12">
                  <article>
                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        </dd>
                      </dl>
                      <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-2xl leading-8 font-bold tracking-tight">
                              <Link
                                href={`/blog/${slug}`}
                                className="text-gray-900 dark:text-gray-100"
                              >
                                {title}
                              </Link>
                            </h2>
                            <div className="flex flex-wrap">
                              {tags.map((tag) => (
                                <Tag key={tag} text={tag} />
                              ))}
                            </div>
                          </div>
                          <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                            {summary}
                          </div>
                        </div>
                        <div className="text-base leading-6 font-medium">
                          <Link
                            href={`/blog/${slug}`}
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            aria-label={`Read more: "${title}"`}
                          >
                            Read more &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base leading-6 font-medium">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}

      {/* Uncomment the following section to enable newsletter subscription */}

      {/* {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
