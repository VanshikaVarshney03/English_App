import { useEffect, useState } from "react";

export default function VocabularyBuilder() {
  const [word, setWord] = useState(null);
  const [loadingWord, setLoadingWord] = useState(true);
  const [news, setNews] = useState([]);
  const [loadingNews, setLoadingNews] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("Educational");

  // Fetch Word of the Day
  useEffect(() => {
    const fetchWord = async () => {
      try {
        const res = await fetch("https://random-word-api.herokuapp.com/word?number=1");
        const [randomWord] = await res.json();

        const meaningRes = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord}`);
        const data = await meaningRes.json();

        const wordData = data[0];
        setWord({
          text: wordData.word,
          meaning: wordData.meanings[0]?.definitions[0]?.definition || "Meaning not found.",
          example: wordData.meanings[0]?.definitions[0]?.example || "No example available.",
          partOfSpeech: wordData.meanings[0]?.partOfSpeech || "unknown",
        });
      } catch (error) {
        console.error("Error fetching word:", error);
      } finally {
        setLoadingWord(false);
      }
    };
    fetchWord();
  }, []);

  // Dummy News Data (category-wise)
  const allNews = {
    International: [
      "Global leaders meet to discuss climate policy in 2025",
      "UN launches new peace initiative in Asia",
      "International trade expected to rise next quarter",
    ],
    Sports: [
      "India wins the World Cup 2025!",
      "Olympic qualifiers: record-breaking performances this year",
      "Top 5 football clubs dominating 2025 season",
    ],
    Political: [
      "Government announces new education reforms",
      "Election results spark national discussions",
      "New policy aims to improve rural development",
    ],
    Educational: [
      "Top 10 ways to learn English faster",
      "Universities introduce AI-based learning modules",
      "Students excel with online interactive classrooms",
    ],
    Entertainment: [
      "New Hollywood releases breaking box office records",
      "Music festivals bring fans together worldwide",
      "Streaming platforms dominate entertainment trends",
    ],
    Technical: [
      "AI tools changing the face of modern education",
      "Tech companies announce breakthroughs in robotics",
      "Quantum computing becomes mainstream in 2025",
    ],
  };

  // Load initial category news
  useEffect(() => {
    setLoadingNews(true);
    setTimeout(() => {
      setNews(allNews[selectedCategory] || []);
      setLoadingNews(false);
    }, 500);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-6 sm:p-10">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-10">
          📚 Vocabulary Builder
        </h1>

        {/* Word of the Day Section */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-blue-200 mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            🌟 Word of the Day
          </h2>

          {loadingWord ? (
            <p className="text-blue-600 italic">Fetching today’s word...</p>
          ) : word ? (
            <div>
              <p className="text-3xl font-bold text-blue-900 capitalize">
                {word.text}
              </p>
              <p className="text-blue-700 italic mb-2">
                ({word.partOfSpeech})
              </p>
              <p className="text-gray-800 mb-2">
                <strong>Meaning:</strong> {word.meaning}
              </p>
              <p className="text-gray-700">
                <strong>Example:</strong> “{word.example}”
              </p>
            </div>
          ) : (
            <p className="text-red-600">Could not fetch the word today.</p>
          )}
        </div>

        {/* News Feed Section */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-blue-200">
          {/* News Feed Heading */}
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            🗞 News Feed
          </h2>

          {/* News Category Selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {[
              "International",
              "Sports",
              "Political",
              "Educational",
              "Entertainment",
              "Technical",
            ].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-blue-700 text-white shadow-md scale-105"
                    : "bg-white text-blue-700 border border-blue-300 hover:bg-blue-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* News List */}
          {loadingNews ? (
            <p className="text-blue-600 italic">Loading news...</p>
          ) : news.length > 0 ? (
            <ul className="space-y-3">
              {news.map((headline, idx) => (
                <li
                  key={idx}
                  className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all cursor-pointer"
                >
                  {headline}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No news available for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
}
