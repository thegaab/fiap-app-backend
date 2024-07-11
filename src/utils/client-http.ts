import fetch from 'node-fetch'

interface IPost {
  name: string
  content: string
  url_image: string
  relationalId: string
}

export async function createPostInPosts(post: IPost, token: string) {
  const response = await fetch('http://localhost:3000/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(post),
  })

  if (!response.ok) {
    throw new Error(`Error to create post in posts ${response.statusText}`)
  }

  return response
}
