import axios from "axios";

const BASEURL = import.meta.env.VITE_BACKEND_BASE_URL;

export const getNews = async (page, setError) => {
  try {
    const response = await axios.get(`${BASEURL}/api/v1/news?page=${page}`);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
    setError(error);
  }
};

export const updateInteraction = async (id, interaction, userId) => {
  try {
    const response = await axios.patch(`${BASEURL}/api/v1/news/interaction`, {
      id,
      interaction,
      userId,
    });

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};
