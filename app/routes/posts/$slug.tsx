import { LoaderArgs } from '@remix-run/node';
import { useLoaderData, useParams } from '@remix-run/react';
import { store } from '~/lib/store'

export async function loader({ params }: LoaderArgs) {
  const { slug } = params;
  if (slug === undefined)
    return undefined;
  return await store.getPost(slug);
}

export default function Invoice() {
  const post = useLoaderData<typeof loader>()
    
  return <main className="mx-auto max-w-4xl">
    <h1 className="my-6 border-b-2 text-center text-3xl">{post.title}</h1>
    <p className="text-md">{post.description}</p>
  </main>;
}