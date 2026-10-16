import React from 'react'

const BlogDetails = async({params} : {params: Promise<{id: string}>}) => {

    const {id} = await params;

    if(id === "1") {
        throw new Error("Error in blog details")
    }

  return (
    <div>BlogDetails {id}</div>
  )
}

export default BlogDetails