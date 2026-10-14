import React from 'react'

const LecturesList = async({params}: {params: Promise<{slug: string[]}>}) => {

    const {slug} = await params;

    console.log(slug)

    if(slug?.length ==2) {
        return <div>
            2 Lectures
        </div>
    }
    if(slug?.length == 3) {
        return <div>
            3 Lectures
        </div>
    }

  return (
    <div>LecturesList</div>
  )
}

export default LecturesList