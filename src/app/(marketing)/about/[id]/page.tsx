import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata({params}: {params: Promise<{id: string}>}): Promise<Metadata> {
    const {id} = await params;
    return {
        title: {
            absolute: `About ${id}`,
        },
        description: `This is the about page for ${id}`,
    }

}
    


const AboutDetails = async({params}: {params: Promise<{id: string}>}) => {

    const {id} = await params
  return (
    <div>AboutDetails {id}</div>
  )
}

export default AboutDetails