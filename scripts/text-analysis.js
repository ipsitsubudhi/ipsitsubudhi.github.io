function analyzeText() {
  const text = document.getElementById("text-input").value;

  // Calculate basic metrics
  const letters = text.replace(/[^a-zA-Z]/g, '').length;
  const words = text.split(/\s+/).filter(word => word.length > 0).length;
  const spaces = (text.match(/\s/g) || []).length;
  const newlines = (text.match(/\n/g) || []).length;
  const specialSymbols = text.replace(/[a-zA-Z0-9\s\n]/g, '').length;

  // Display results conditionally
  document.getElementById("letters").textContent = letters ? `Letters: ${letters}` : '';
  document.getElementById("words").textContent = words ? `Words: ${words}` : '';
  document.getElementById("spaces").textContent = spaces ? `Spaces: ${spaces}` : '';
  document.getElementById("newlines").textContent = newlines ? `Newlines: ${newlines}` : '';
  document.getElementById("special-symbols").textContent = specialSymbols ? `Special Symbols: ${specialSymbols}` : '';

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
    pronounsOutput += `${pronoun}: ${count}<br>`;
  }
  document.getElementById("pronouns-count").innerHTML = pronounsOutput || 'No pronouns found.';

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
    prepositionsOutput += `${preposition}: ${count}<br>`;
  }
  document.getElementById("prepositions-count").innerHTML = prepositionsOutput || 'No prepositions found.';

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
    articlesOutput += `${article}: ${count}<br>`;
  }
  document.getElementById("articles-count").innerHTML = articlesOutput || 'No indefinite articles found.';
}

