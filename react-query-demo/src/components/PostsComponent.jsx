import React from 'react'
import { useQuery } from '@tanstack/react-query'

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

export default function PostsComponent() {
  const {
    data,
    isLoading,
    isFetching,
    isError,
    error,
    refetch
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 2, 
  })

  
  if (isLoading) {
    return <p className="text-gray-600 text-lg">Loading posts...</p>
  }

  
  if (isError) {
    return <p className="text-red-500 text-lg">Error: {error.message}</p>
  }

  
  return (
    <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Latest Posts</h2>

        <button
          onClick={() => refetch()}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          🔄 Refresh
        </button>
      </div>

      {isFetching && (
        <p className="text-sm text-blue-500 mb-3">Refreshing data...</p>
      )}

      <ul className="space-y-4">
        {data.slice(0, 10).map((post) => (
          <li
            key={post.id}
            className="p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition"
          >
            <h3 className="text-lg font-bold text-gray-900">{post.title}</h3>
            <p className="text-gray-700 mt-1">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
