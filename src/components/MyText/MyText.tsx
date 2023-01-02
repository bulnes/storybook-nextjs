import React from "react"

interface MyTextProps {
  children: React.ReactNode;
  appendText?: string;
}
export default function MyText({ children, appendText }: MyTextProps) {
  return (
    <p>
      {children} 
      {appendText}
    </p>
  )
}

MyText.defaultProps = {
  appendText: ''
}
