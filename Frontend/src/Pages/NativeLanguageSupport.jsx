import React, { useState } from "react";

export default function LanguageTranslator() {
  const [started, setStarted] = useState(false);
  const [fromLang, setFromLang] = useState("");
  const [toLang, setToLang] = useState("");

  const languages = [
    "English", "Hindi", "Spanish", "French", "German", "Chinese", "Japanese",
    "Arabic", "Russian", "Portuguese", "Bengali", "Urdu", "Korean", "Italian"
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-blue-50 p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Native Language Support</h1>

      {!started ? (
        <button
          onClick={() => setStarted(true)}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Get Started
        </button>
      ) : (
        <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="flex-1 flex flex-col">
              <label className="mb-1 font-semibold">From</label>
              <select
                value={fromLang}
                onChange={(e) => setFromLang(e.target.value)}
                className="border rounded-lg p-2"
              >
                <option value="">Select Language</option>
                {languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex-1 flex flex-col">
              <label className="mb-1 font-semibold">To</label>
              <select
                value={toLang}
                onChange={(e) => setToLang(e.target.value)}
                className="border rounded-lg p-2"
              >
                <option value="">Select Language</option>
                {languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <textarea
            placeholder="Type your text here..."
            className="border rounded-lg p-3 h-32 resize-none"
          />
          <button
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Translate
          </button>
        </div>
      )}
    </div>
  );
}