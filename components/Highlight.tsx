'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

function mergeClassNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function HandHighlight({ children, url, className }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (el) {
      setTimeout(() => {
        el.setAttribute('data-animate', 'true')
      }, 50)
    }
  }, [])

  // Helper: is this an internal link?
  const isInternal = url && url.startsWith('/')

  const combinedClassName = mergeClassNames('hand-highlight', className)

  const content = (
    <span ref={ref} className={combinedClassName}>
      {children}
    </span>
  )

  if (!url) return content

  // Internal: use Next.js Link
  if (isInternal) {
    return (
      <Link href={url} legacyBehavior>
        <a className={combinedClassName}>{content}</a>
      </Link>
    )
  }

  // External: use <a> with target and rel
  return (
    <a href={url} className={combinedClassName} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  )
}

HandHighlight.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string,
}
