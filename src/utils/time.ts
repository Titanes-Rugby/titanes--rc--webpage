export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export function calculateReadingTime(text: string) {
  const WORDS_PER_MINUTE = 250;

  const cleanedText = text.replace(/<[^>]*>/g, '');
  const wordMatch = cleanedText.match(/\w+/g);
  const wordCount = wordMatch ? wordMatch.length : 0;

  const minutes = Math.ceil(wordCount / WORDS_PER_MINUTE);

  return `${minutes} min read`;
}
