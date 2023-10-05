import Link from 'next/link'
import React from 'react'

const LearnMore = ({learnMoreUrl}) => {
  return (
    <div className="flex justify-center px-6 pb-2">
    <Link
      href={learnMoreUrl}
      className="text-black text-sm underline">
      Learn more
    </Link>
  </div>
  )
}

export default LearnMore