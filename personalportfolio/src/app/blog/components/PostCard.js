import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({ post }) => {
  console.log(post)
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
        <img
          className='absolute h-80 w-full object-cover object-top shadow-lg rounded-t-lg lg:rounded-lg'
          src={post.featuredImage.url}
          alt={post.title}
        />
      </div>
    </div>
  )
}

export default PostCard