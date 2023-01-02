import React from "react"

interface TextProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  children: React.ReactNode;
}
export default function Text({ tag, children }: TextProps) {
  const Tag = tag || 'h1'
  return (
    <Tag>{children}</Tag>
  )
}

Text.defaultProps = {
  tag: 'h1'
}
