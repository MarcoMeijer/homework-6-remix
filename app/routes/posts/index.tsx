import { store } from '~/lib/store'
import type { LoaderArgs } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'

export async function loader(args: LoaderArgs) {
  // Somewhere in the loader
  return await store.getPosts()
}

export default function Index() {
  const posts = useLoaderData<typeof loader>()

  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug} className="text-blue-600 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
