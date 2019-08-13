import { MouseEvent } from 'react'

/**
 * @buttonNumber
 * 1: Left button
 * 2: Middle/Right button
 * 3: Right/Back button
 */
export function detectMouseButton(evt: MouseEvent<HTMLElement>, buttonNumber = 1) {
  if (evt.metaKey || evt.ctrlKey || evt.altKey || evt.shiftKey) {
    return false
  }

  if ('buttons' in evt) {
    return evt.buttons === buttonNumber
  }

  if ('which' in evt) {
    return (evt as KeyboardEvent).which === buttonNumber
  }

  return (evt as MouseEvent).button === buttonNumber - 1
}
