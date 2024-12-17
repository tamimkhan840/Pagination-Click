
import axios from "axios";
import { useEffect, useState } from "react";
import CardItem from "./CardItem";


 async function getData(pageNo) {
  try {
    const response = await axios.get(
      `http://localhost:3000/photos/?_page=${pageNo}&_per_page=10`
    );
    return response.data;
  } catch (error) {
    console.log(error);

  }

 }
function App() {
    const [photos, setPhotos] = useState(null);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        async function fetchPhotos() {
            const data = await getData(page);

            if (data.next) {
                setHasMore(true);
            } else {
                setHasMore(false);
            }

            if (photos) {
                if (photos.next) {
                    setPhotos((prev) => {
                        const previousDataIds = new Set(
                            prev.data.map((item) => item.id)
                        );

                        const updatedData = data.data.filter(
                            (item) => !previousDataIds.has(item.id)
                        );

                        if (prev.next) {
                            return {
                                ...data,
                                data: [...prev.data, ...updatedData],
                            };
                        }
                    });
                }
            } else {
                setPhotos(data);
            }
        }

        fetchPhotos();
    }, [page]);

    const handleClick = () => {
        setPage((prev) => {
            if (photos.next) {
                return prev + 1;
            }
        });
    };

    return (
        <div>
            <ul className="grid grid-cols-3 gap-4">
                {photos &&
                    photos.data.map((photo) => (
                      <CardItem key={photo.id} photo={photo}/>
                    ))}
            </ul>
            {hasMore && (
                <div
                    onClick={handleClick}
                    className="bg-green-600 text-white inline-block py-2 px-4 cursor-pointer mx-auto"
                >
                    Load More ...
                </div>
            )}
        </div>
    );
}

export default App;