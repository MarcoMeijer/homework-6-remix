## 💪 Exercise - dynamic params

Let's make the blog post page so we can read blog content. Create a
file in `app/routes/posts/$slug.tsx` (our param will be called `slug`).

In that file you'll need a `loader` that uses the `slug` param to find the blog post by its slug.
Blog posts are static data that can be found at `/lib/store.ts`.


```tsx
import { store } from '~/lib/store'

const slug = 'my-first-blog'

const posts = await store.getPost(slug)
```

Use the `useLoaderData()` to retrieve the blog post while rendering out this JSX.

```tsx
<main className="mx-auto max-w-4xl">
  <h1 className="my-6 border-b-2 text-center text-3xl">{post.title}</h1>
  <p className="text-md">{post.description}</p>
</main>
```

## 🗃 Files

- `app/routes/posts/$slug.tsx` <-- you create this file
