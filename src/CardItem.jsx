import { MdFavorite } from "react-icons/md";

function CardItem({ photo }) {

  return (
    <div className="container mx-auto p-3">
      <div className="border rounded-lg shadow-lg bg-white p-4">
        {/* Thumbnail Image */}
        <img
          className="w-full h-40 object-cover rounded-md mb-4 sm:h-48 md:h-56"
          src={photo.thumbnailUrl}
          alt={photo.title}
        />

        {/* Name */}
        <h3 className="text-lg font-semibold text-gray-800 truncate mb-2">{photo.name}</h3>

        {/* Title and Author */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm text-gray-600">{photo.title}</h3>
          <h3 className="text-sm text-gray-500 italic">{photo.author}</h3>
        </div>

        <hr className="my-2" />

        {/* Profile and Action */}
        <div className="flex justify-between items-center">
          <img
            className="w-10 h-10 rounded-full object-cover border border-gray-300"
            src={photo.url}
            alt={photo.title}
          />
          <button className="p-2 rounded-full hover:bg-gray-100 transition-all">
            <MdFavorite className="text-red-500 text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
