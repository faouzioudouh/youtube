module.exports = (opts = {}) => {
  let props = ''

  if (opts.expandProps && opts.ref) {
    props = '{svgRef, ...props}'
  } else if (opts.expandProps) {
    props = 'props'
  } else if (opts.ref) {
    props = '{svgRef}'
  }

  return (code, state) => `import React from 'react'

interface Props {
  title: string;
}

const ${state.componentName} = (${props}: Props) => ${code}

export default ${state.componentName}`
}