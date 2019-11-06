import React from 'react'

export interface ContentProps {
    content: React.ReactNode | string
    className?: string
}

export const HTMLContent: React.FC<ContentProps> = ({ content, className }) => {
    if (typeof content !== 'string') {
        return null
    }

    return <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
}

export const Content: React.FC<ContentProps> = ({ content, className }) => (
    <div className={className}>{content}</div>
)
