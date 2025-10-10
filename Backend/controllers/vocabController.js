import fetch from "node-fetch";

export const getWordOfTheDay = async (req, res) => {
  try {
    const resWord = await fetch("https://random-word-api.herokuapp.com/word?number=1");
    const [randomWord] = await resWord.json();

    const resMeaning = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord}`);
    const data = await resMeaning.json();
    const wordData = data[0];

    const word = {
      text: wordData.word,
      meaning: wordData.meanings[0]?.definitions[0]?.definition || "Meaning not found",
      example: wordData.meanings[0]?.definitions[0]?.example || "No example available",
      partOfSpeech: wordData.meanings[0]?.partOfSpeech || "unknown",
    };

    res.json(word);
  } catch (error) {
    console.error("Error fetching Word of the Day:", error);
    res.status(500).json({ message: "Error fetching Word of the Day" });
  }
};