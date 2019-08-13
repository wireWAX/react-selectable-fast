import { getBoundsForNode, TComputedBounds } from './getBoundsForNode'

type TAreBoundsCollideOptions = {
  tolerance?: number
  useOffsetSize?: boolean
}

/**
 * Given offsets, widths, and heights of two objects, determine if they collide (overlap).
 */
const areBoundsCollide = (
  a: TComputedBounds,
  b: TComputedBounds,
  { tolerance = 0, useOffsetSize = false }: TAreBoundsCollideOptions
) => {
  const aHeight = useOffsetSize ? a.offsetHeight : a.height
  const bHeight = useOffsetSize ? b.offsetHeight : b.height

  const aWidth = useOffsetSize ? a.offsetWidth : a.width
  const bWidth = useOffsetSize ? b.offsetWidth : b.width

  return !(
    a.top + aHeight - tolerance < b.top ||
    // 'a' top doesn't touch 'b' bottom
    a.top + tolerance > b.top + bHeight ||
    // 'a' right doesn't touch 'b' left
    a.left + aWidth - tolerance < b.left ||
    // 'a' left doesn't touch 'b' right
    a.left + tolerance > b.left + bWidth
  )
}

/**
 * Given two objects containing "top", "left", "offsetWidth" and "offsetHeight"
 * properties, determine if they collide.
 */
export function doObjectsCollide(
  a: HTMLElement | TComputedBounds,
  b: HTMLElement | TComputedBounds,
  tolerance: number = 0,
  delta: number = 1
) {
  const aObj = a instanceof HTMLElement ? getBoundsForNode(a) : a
  const bObj = b instanceof HTMLElement ? getBoundsForNode(b) : b

  return areBoundsCollide(aObj, bObj, { tolerance, useOffsetSize: delta === 1 })
}
