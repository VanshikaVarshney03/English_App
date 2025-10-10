import { useEffect, useState } from "react";

export default function VocabularyBuilder() {
  const [word, setWord] = useState(null);
  const [loadingWord, setLoadingWord] = useState(true);
  const [news, setNews] = useState([]);
  const [loadingNews, setLoadingNews] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("Educational");

  const NEWS_API_KEY = "5b42f72a2bf94e7690f9e1f5fc41fb87";

  // ✅ Fetch Word of the Day
  useEffect(() => {
    const fetchWord = async () => {
      try {
        setLoadingWord(true);
        const res = await fetch("https://random-word-api.herokuapp.com/word?number=1");
        const [randomWord] = await res.json();

        const meaningRes = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord}`
        );
        const data = await meaningRes.json();
        const wordData = data[0];

        setWord({
          text: wordData.word,
          meaning:
            wordData.meanings[0]?.definitions[0]?.definition || "Meaning not found.",
          example:
            wordData.meanings[0]?.definitions[0]?.example || "No example available.",
          partOfSpeech: wordData.meanings[0]?.partOfSpeech || "unknown",
        });
      } catch (error) {
        console.error("Error fetching word:", error);
        setWord(null);
      } finally {
        setLoadingWord(false);
      }
    };
    fetchWord();
  }, []);

  // ✅ Fetch News from NewsAPI directly
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoadingNews(true);

        // Convert category to NewsAPI categories
        const categoryMap = {
          International: "general",
          Sports: "sports",
          Political: "general",
          Educational: "education",
          Entertainment: "entertainment",
          Technical: "technology",
        };

        const categoryParam = categoryMap[selectedCategory] || "general";

        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?category=${categoryParam}&language=en&pageSize=5&apiKey=${NEWS_API_KEY}`
        );
        const data = await res.json();

        if (data.status === "ok") {
          const headlines = data.articles.map((article) => ({
            title: article.title,
            description: article.description,
            url: article.url,
            source: article.source.name,
            image: article.urlToImage,
            publishedAt: article.publishedAt,
          }));
          setNews(headlines);
        } else {
          console.error("Error fetching news:", data);
          setNews([]);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        setNews([]);
      } finally {
        setLoadingNews(false);
      }
    };
    fetchNews();
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-6 sm:p-10">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-10">
          📚 Vocabulary Builder
        </h1>

        {/* Word of the Day */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-blue-200 mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">🌟 Word of the Day</h2>

          {loadingWord ? (
            <p className="text-blue-600 italic">Fetching today’s word...</p>
          ) : word ? (
            <div>
              <p className="text-3xl font-bold text-blue-900 capitalize">{word.text}</p>
              <p className="text-blue-700 italic mb-2">({word.partOfSpeech})</p>
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

        {/* News Feed */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-blue-200">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">🗞 News Feed</h2>

          {/* Categories */}
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
            <ul className="space-y-4">
              {news.map((n, idx) => (
                <li
                  key={idx}
                  className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all cursor-pointer"
                >
                  <a href={n.url} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-lg font-semibold text-blue-800">{n.title}</h3>
                    <p className="text-gray-700 text-sm mt-1">{n.description}</p>
                    <p className="text-gray-500 text-xs mt-2">Source: {n.source}</p>
                  </a>
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
