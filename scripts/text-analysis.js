function performTextAnalysis() {
  const text = document.getElementById("textInput").value.trim();

  // Calculate basic metrics
  const letters = text.replace(/[^a-zA-Z]/g, '').length;
  const words = text.split(/\s+/).filter(word => word.length > 0).length;
  const spaces = (text.match(/\s/g) || []).length;
  const newlines = (text.match(/\n/g) || []).length;
  const specialSymbols = (text.match(/[^\w\s]/g) || []).length;

  // Display results conditionally
  document.getElementById("letterCount").textContent = letters ? `Letters: ${letters}` : '';
  document.getElementById("wordCount").textContent = words ? `Words: ${words}` : '';
  document.getElementById("spaceCount").textContent = spaces ? `Spaces: ${spaces}` : '';
  document.getElementById("newlineCount").textContent = newlines ? `Newlines: ${newlines}` : '';
  document.getElementById("specialSymbolsCount").textContent = specialSymbols ? `Special Symbols: ${specialSymbols}` : '';

  // Pronouns Group
  const pronouns = ["I", "me", "my", "you", "your", "he", "him", "his", "she", "her", "hers", "it", "its", "we", "us", "our", "they", "them", "their"];
  const pronounsCount = {};
  pronouns.forEach(pronoun => {
    const count = (text.match(new RegExp(`\\b${pronoun}\\b`, 'gi')) || []).length;
    if (count > 0) {
      pronounsCount[pronoun] = count;
    }
  });
  let pronounsOutput = '';
  for (const [pronoun, count] of Object.entries(pronounsCount)) {
    pronounsOutput += `${pronoun}: ${count}\n`;
  }
  document.getElementById("pronounsCount").textContent = pronounsOutput || 'No pronouns found.';

  // Prepositions Group
  const prepositions = ["in", "on", "at", "by", "with", "about", "under", "over", "between", "through", "during", "for"];
  const prepositionsCount = {};
  prepositions.forEach(preposition => {
    const count = (text.match(new RegExp(`\\b${preposition}\\b`, 'gi')) || []).length;
    if (count > 0) {
      prepositionsCount[preposition] = count;
    }
  });
  let prepositionsOutput = '';
  for (const [preposition, count] of Object.entries(prepositionsCount)) {
    prepositionsOutput += `${preposition}: ${count}\n`;
  }
  document.getElementById("prepositionsCount").textContent = prepositionsOutput || 'No prepositions found.';

  // Indefinite Articles Group
  const articles = ["a", "an"];
  const articlesCount = {};
  articles.forEach(article => {
    const count = (text.match(new RegExp(`\\b${article}\\b`, 'gi')) || []).length;
    if (count > 0) {
      articlesCount[article] = count;
    }
  });
  let articlesOutput = '';
  for (const [article, count] of Object.entries(articlesCount)) {
    articlesOutput += `${article}: ${count}\n`;
  }
  document.getElementById("articlesCount").textContent = articlesOutput || 'No indefinite articles found.';
}
