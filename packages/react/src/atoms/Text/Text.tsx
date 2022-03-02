import React from "react"
import { FontSize } from "@ar.e/foundation"

interface TextProps {
  size?: keyof typeof FontSize
}

const Text: React.FC<TextProps> = ({ size = FontSize.base, children }) => {
  const className = `are-text are-text-${size}`
  return <div className={className}>{children}</div>
}

export default Text
