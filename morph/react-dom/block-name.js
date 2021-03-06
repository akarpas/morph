import { leave } from '../react/block-name.js'
import handleTable from '../react/block-name-handle-table.js'
import getBlockName from './get-block-name.js'

export function enter(node, parent, state) {
  if (node.isFragment && node.children.length === 0) return true

  let name = getBlockName(node, parent, state)
  if (name === null) return true

  // TODO remove the use of those because they're just the name and keep one
  node.nameFinal = name
  node.nameTag = name
  state.use(name, node.isLazy)

  if (handleTable(node, parent, state)) return true

  state.render.push(`<${node.nameFinal}`)
}

export { leave }
