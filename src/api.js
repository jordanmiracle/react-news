import {NEWS_API_KEY} from "./config";

export const getArticles = async () => {
    const response = await fetch(
        // eslint-disable-next-line no-template-curly-in-string
        `https://newsapi.org/v2/everything?q=covid&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
    );
    return await response.json();
};
