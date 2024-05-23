document.addEventListener("DOMContentLoaded", async function () {
  const response = await fetch(chrome.runtime.getURL("assets/words.csv"));
  const text = await response.text();
  const data = text
    .trim()
    .split("\n")
    .map((row) => {
      const [text, author] = row.split(",").map((item) => item.trim());
      return { text, author };
    });
  const quote = data[Math.floor(Math.random() * data.length)];
  document.getElementById("quoteText").textContent = `${quote.text}`;
  document.getElementById("quoteAuthor").textContent = `- ${quote.author} -`;
});
