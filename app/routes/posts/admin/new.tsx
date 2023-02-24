import type { ActionArgs } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { Form } from '@remix-run/react'
import { store } from '~/lib/store'

export async function action({ request }: ActionArgs) {
  const body = await request.formData()
  const title = body.get('title')?.toString() ?? ''
  const slug = body.get('slug')?.toString() ?? ''
  const description = body.get('description')?.toString() ?? ''
  await store.create({
    title,
    slug,
    description
  })
  return redirect(`/posts/admin`)
}

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
