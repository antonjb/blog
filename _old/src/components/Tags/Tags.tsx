import React from 'react'
import { Link } from 'gatsby'
import { kebabCase } from 'lodash'

import './Tags.css'

export const Tags: React.FC<{ tags?: string[] }> = ({ tags = [] }) => (
    <React.Fragment>
        {tags.length && (
            <ul className="tags">
                {tags.map(tag => (
                    <li key={`${tag}-tag`}>
                        <Link to={`/tags/${kebabCase(tag)}`}>{tag}</Link>
                    </li>
                ))}
            </ul>
        )}
    </React.Fragment>
)
