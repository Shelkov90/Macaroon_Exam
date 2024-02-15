const BASE_URL = `http://localhost:3010`;

// Метод для получения массива Новостей из БД
export const getAllNews = async () => {
  const response = await fetch(`${BASE_URL}/news`);
  const data = await response.json();
  return data;
};

// Метод добавляет новость в БД
export const addNewsArticle = async (article) => {
  const response = await fetch(`${BASE_URL}/news`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(article),
  });
  const data = await response.json();
  return data;
};