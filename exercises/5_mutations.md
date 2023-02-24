## 💪 Exercise - mutations

We want to be able to create blog posts. So let's flesh out the `new.tsx` file a
bit. Again, this isn't a React exercise and I don't want you wasting your time
writing out JSX, so I've given you the starting point for the form.

```tsx
export default function NewPost() {
  return (
    <div>
      <h1>Create new post</h1>
      <Form method="post">
        <div className="mb-4">
          <input
            type="text"
            name="slug"
            id="slug"
            placeholder="Slug"
            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="mb-4">
          <textarea
            name="description"
            id="description"
            placeholder="Description"
            rows={4}
            className="block w-full rounded-md border-0 pl-2 pt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
          />
        </div>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Create post
        </button>
      </Form>
    </div>
  )
}
```

You'll need to add the `action` function and create new post with  a `store.createPost({ ... })` function from store.
The createPost function accepts title, slug and description.

## 🗃 Files

- `app/routes/posts/admin/new.tsx`
