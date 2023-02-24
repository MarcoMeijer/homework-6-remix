## 💪 Exercise - data loading

We're going to start simple by and fetch blog posts from the `lib/store.ts` file directly in the `loader`. 
You use the `store.`

```tsx
import { store } from '~/lib/store'

// Somewhere in the loader
const posts = await store.getPosts()
```

Put that in your loader and then get that data from the loader to the component using
`json` and `useLoaderData`. You can render the posts using this JSX:

```tsx
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
```

## 🗃 Files

- `app/routes/posts/index.tsx`
