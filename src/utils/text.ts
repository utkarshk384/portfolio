export function SnakeCaseToTitleCase() {}

export function Capitalize(str: string) {}

class TextUtils {
  public snakeCaseToTitleCase(text: string, firstLtrCapitalize = true) {
    const words = text.split("_");

    const capitalizedWords = words.map((word, i) => {
      if (firstLtrCapitalize && i > 0) return word.toLowerCase();

      const firstLetter = word[0].toUpperCase();
      const rest = word.slice(1).toLowerCase();
      return `${firstLetter}${rest}`;
    });

    return capitalizedWords.join(" ");
  }

  public capitalize(text: string) {
    return text[0].toUpperCase() + text.slice(1).toLowerCase();
  }

  public truncate(text: string, maxLength: number = 30) {
    if (text.length <= maxLength) return text;

    return text.slice(0, maxLength) + "...";
  }
}

const textUtils = new TextUtils();

export { textUtils };
