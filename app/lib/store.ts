import { supabase } from './supabase'

export interface BlogPost {
  slug: string
  title: string
  description: string
}

export class Store {
  async getPosts() {
    const { data } = await supabase.from('blog').select('*')

    return data as BlogPost[]
  }

  async getPost(slug: string) {
    const { data } = await supabase.from('blog').select('*').eq('slug', slug)

    return data?.[0] as unknown as BlogPost
  }

  async create(newPost: BlogPost) {
    const { data } = await supabase.from('blog').insert([newPost]).select('*')

    return data as unknown as BlogPost
  }
}

export const store = new Store()
