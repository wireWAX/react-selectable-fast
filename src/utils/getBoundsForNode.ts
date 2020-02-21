export type TGetBoundsForNodeArgs = {
  scrollTop: number
  scrollLeft: number
}

export type TComputedBounds = {
  top: number
  left: number
  width: number
  height: number
  offsetWidth: number
  offsetHeight: number
}

export function getDocumentScroll() {
  const documentScrollTop = Math.max(
    window.pageYOffset,
    document.documentElement.scrollTop,
    document.body.scrollTop
  )

  const documentScrollLeft = Math.max(
    window.pageXOffset,
    document.documentElement.scrollLeft,
    document.body.scrollLeft
  )

  return { documentScrollTop, documentScrollLeft }
}

/**
 * Given a node, get everything needed to calculate its boundaries
 */
export function getBoundsForNode(
  node: HTMLElement,
  containerScroll: TGetBoundsForNodeArgs = { scrollTop: 0, scrollLeft: 0 }
) {
  const { scrollTop, scrollLeft } = containerScroll
  const { documentScrollTop, documentScrollLeft } = getDocumentScroll()

  var rect = node.getClientRects();
  const rects = [];
  for (let i = 0; i < rect.length; i += 1) {
      rects.push(
          {
              top: rect[i].top + documentScrollTop + scrollTop,
              left: rect[i].left + documentScrollLeft + scrollLeft,
              offsetWidth: node.offsetWidth,
              offsetHeight: node.offsetHeight,
              width: rect[i].width,
              height: rect[i].height
          } 
      )
  };
  return rects;
}
