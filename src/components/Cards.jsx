import { ThumbsDown, ThumbsUp } from "lucide-react";

const Cards = ({ data, handleInteraction, userId }) => {
  const hasUpvoted = data?.upvotes?.includes(userId);
  const hasDownvoted = data?.downvotes?.includes(userId);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md max-w-md mx-auto my-4 h-[420px]">
      <img
        src={data?.urlToImage}
        alt={data?.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-2 flex flex-col justify-start items-center h-full">
        <h2 className="text-xl font-semibold mb-2 line-clamp-2">
          {data?.title}
        </h2>
        <p className="text-gray-700 mb-4 line-clamp-4">{data?.content}</p>
        <div className="flex flex-row justify-between w-full p-2">
          <div className="flex flex-row gap-2">
            <ThumbsUp
              className={`h-6 w-6 cursor-pointer ${
                hasUpvoted ? "text-blue-600" : ""
              }`}
              onClick={() => handleInteraction(data?._id, "up", userId)}
            />
            {data?.upvotes?.length}
            <ThumbsDown
              className={`h-6 w-6 cursor-pointer ${
                hasDownvoted ? "text-blue-600" : ""
              }`}
              onClick={() => handleInteraction(data?._id, "down", userId)}
            />
            {data?.downvotes?.length}
          </div>
          <div>Total : {data?.voteCount}</div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
