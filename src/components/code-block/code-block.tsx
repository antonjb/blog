import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Code } from 'bright'

export function CodeBlock(
	props: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>,
) {
	return <Code {...props} />
}
