## 💪 Exercise - nested routing

It's about time we start writing blog posts! Let's render out the posts on route `/posts/admin`
where we can see a list of our posts and create new ones at `/posts/admin/new`.

For this exercise, all you're expected to do is create the files and export the
components. However on the admin route, i.e. `routes/posts/admin.tsx` you can use the same loader function from previous exercise.

💰 Since we are focusing on routes here then I am going to give you
some JSX you can use in some of these new files you'll create:

```tsx 
// app/routes/posts/admin.tsx
<div className="mx-auto max-w-4xl">
  <h1 className="my-6 mb-2 text-center text-3xl">Blog Admin</h1>
  <hr className="my-4" />
  <div className="grid grid-cols-4 gap-6">
    <nav className="col-span-4 md:col-span-1">
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug} className="text-blue-600 underline">
              {post.title}
            </Link>
          </li>
        ))}
        <li>
          <Link to="new" className="text-blue-600 underline">
            ➕ Create New Post
          </Link>
        </li>
      </ul>
    </nav>
  </div>
  <main className="col-span-4 md:col-span-3 mt-8">
    {/* 🐨 your job is to add an Outlet component here */}
  </main>
</div>
```

```tsx 
// app/routes/posts/admin/new.tsx
<h2>New Post</h2>
```

```tsx 
// app/routes/posts/admin/index.tsx
<div className="text-center">
  <Link to="new" className="rounded-md bg-indigo-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
    Create a New Post
  </Link>
</div>
```

(We'll expand on these 👆 in the next exercise)

## 🗃 Files

- `app/routes/posts/index.tsx`
- `app/routes/posts/admin.tsx` <-- new file
- `app/routes/posts/admin/new.tsx` <-- new file
- `app/routes/posts/admin/index.tsx` <-- new file
