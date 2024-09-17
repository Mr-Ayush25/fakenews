import { useEffect, useState } from "react";
import { getNews, updateInteraction } from "../api/news";
import { getOrCreateUserId } from "../utils/index.js";
import Cards from "./Cards";
import { Loader2Icon } from "lucide-react";

const News = () => {
    const [news, setNews] = useState([]);
    const [userId, setUserId] = useState(null);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleInteraction = async (id, itype, userId) => {
        let data = await updateInteraction(id, itype, userId);
        if (data) {
            setNews(
                news.map((currentNews) =>
                    currentNews._id == id ? data : currentNews
                )
            );
        }
    };

    useEffect(() => {
        const id = getOrCreateUserId();
        setUserId(id);
    }, []);

    useEffect(() => {
        const fetchNews = async (p, e) => {
            setIsLoading(true);
            let data = await getNews(p, e);
            console.log("Got data here", data);
            if (data?.news && data?.news?.length) {
                setNews([...news, ...data.news]);
                setIsLoading(false);
                return;
            }
            setNews(...news);
            setIsLoading(false);
        };

        fetchNews(page, setError);
    }, [page]);

    return (
        <div className="py-6">
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-3">
                {news?.map((data) => (
                    <Cards
                        key={data?._id}
                        data={data}
                        handleInteraction={handleInteraction}
                        userId={userId}
                    />
                ))}
            </div>
            <div className="w-full flex justify-center items-center ">
                <button
                    disabled={isLoading}
                    className="w-fit px-4 py-2 rounded-lg bg-slate-900 text-white flex justify-center items-center gap-2"
                    onClick={() => setPage((prevPage) => prevPage + 1)}
                >
                    Load More{" "}
                    {isLoading && (
                        <Loader2Icon className="animate-spin h-4 w-4" />
                    )}
                </button>
            </div>
        </div>
    );
};

export default News;
