import { marked } from 'marked'

export const getExcerpt = async (text: string) => {
  const match = text.match(/(?:^|\n\s*\n)(?![>#*`-])([\s\S]+?)(?=\n\s*\n|$)/)
  return await marked.parse(match ? match[1].trim() : '')
}
