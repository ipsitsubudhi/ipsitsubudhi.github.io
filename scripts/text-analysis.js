function performTextAnalysis() {
  const text = document.getElementById('textInput').value;

  // 1. Calculate the number of letters, words, spaces, newlines, and special symbols
  const letterCount = (text.match(/[a-zA-Z]/g) || []).length;
  const wordCount = (text.match(/\b\w+\b/g) || []).length;
  const spaceCount = (text.match(/\s/g) || []).length;
  const newlineCount = (text.match(/\n/g) || []).length;
  const specialSymbolsCount = (text.match(/[^a-zA-Z0-9\s\n]/g) || []).length;

  // 2. Tokenize and count pronouns
  const pronouns = ['I', 'me', 'my', 'you', 'your', 'he', 'him', 'his', 'she', 'her', 'hers', 'they', 'them', 'their', 'theirs', 'it', 'its'];
  const pronounCount = pronouns.reduce((acc, pronoun) => {
    acc[pronoun] = (text.match(new RegExp(`\\b${pronoun}\\b`, 'gi')) || []).length;
    return acc;
  }, {});

  // 3. Tokenize and count prepositions
  const prepositions = ['in', 'on', 'at', 'by', 'with', 'about', 'against', 'during', 'before', 'after'];
  const prepositionCount = prepositions.reduce((acc, preposition) => {
    acc[preposition] = (text.match(new RegExp(`\\b${preposition}\\b`, 'gi')) || []).length;
    return acc;
  }, {});

  // 4. Tokenize and count indefinite articles
  const articles = ['a', 'an'];
  const articleCount = articles.reduce((acc, article) => {
    acc[article] = (text.match(new RegExp(`\\b${article}\\b`, 'gi')) || []).length;
    return acc;
  }, {});

  // 5. Display the results
  document.getElementById('letterCount').textContent = `Number of Letters: ${letterCount}`;
  document.getElementById('wordCount').textContent = `Number of Words: ${wordCount}`;
  document.getElementById('spaceCount').textContent = `Number of Spaces: ${spaceCount}`;
  document.getElementById('newlineCount').textContent = `Number of Newlines: ${newlineCount}`;
  document.getElementById('specialSymbolsCount').textContent = `Number of Special Symbols: ${specialSymbolsCount}`;

  document.getElementById('pronounsCount').textContent = JSON.stringify(pronounCount, null, 2);
  document.getElementById('prepositionsCount').textContent = JSON.stringify(prepositionCount, null, 2);
  document.getElementById('articlesCount').textContent = JSON.stringify(articleCount, null, 2);
}

