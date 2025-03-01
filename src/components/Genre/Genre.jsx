import { Card } from "react-bootstrap";

const GenreList = [
    {
        id: "1",
        gen: "Action"
    },
    {
        id: "2",
        gen: "Adventure"
    },
    {
        id: "3",
        gen: "Comedy"
    },
    {
        id: "4",
        gen: "Demons"
    },
    {
        id: "5",
        gen: "Drama"
    },
    {
        id: "6",
        gen: "Ecchi"
    },
    {
        id: "7",
        gen: "Fantasy"
    },
    {
        id: "8",
        gen: "Game"
    },
    {
        id: "9",
        gen: "Harem"
    },
    {
        id: "10",
        gen: "Historical"
    },
    {
        id: "11",
        gen: "Horror"
    },
    {
        id: "12",
        gen: "Josei"
    },
    {
        id: "13",
        gen: "Magic"
    },
    {
        id: "14",
        gen: "Martial Arts"
    },
    {
        id: "15",
        gen: "Mecha"
    },
    {
        id: "16",
        gen: "Military"
    },
    {
        id: "17",
        gen: "Music"
    },
    {
        id: "18",
        gen: "Mystery"
    },
    {
        id: "19",
        gen: "Psyshological"
    },
    {
        id: "20",
        gen: "Parody"
    },
    {
        id: "21",
        gen: "Police"
    },
    {
        id: "22",
        gen: "Romance"
    },
    {
        id: "23",
        gen: "Samurai"
    },
    {
        id: "24",
        gen: "School"
    },
    {
        id: "25",
        gen: "Sci-Fi"
    },
    {
        id: "26",
        gen: "Seinen"
    },
    {
        id: "27",
        gen: "Shounen"
    },
    {
        id: "29",
        gen: "Shoujo"
    },
    {
        id: "30",
        gen: "Slice of Life"
    },
    {
        id: "31",
        gen: "Space"
    },
    {
        id: "32",
        gen: "Sports"
    },
    {
        id: "33",
        gen: "Super Power"
    },
    {
        id: "34",
        gen: "Supernatural"
    },
    {
        id: "35",
        gen: "Thriller"
    },
    {
        id: "36",
        gen: "Vampire"
    },
]

const Genre = () => {
  return (
    <div className="mt-14 mb-12">
        <div className="container">
            <div className="mb-10 max-w-[600px] mx-auto">
                <h1 className="text-4xl font-bold" data-aos="zoom-out">Genres</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center" data-aos="zoom-out" data-aos-delay="300">
                {GenreList.map(({ id, gen }) => (
                    <div key={id} className="div space-y-3">
                      <div>
                        <Card className="border rounded-md p-1 shadow-sm hover:border-blue-500 transition hover:text-blue-500">
                        <h3 className="font-semibold">{gen}</h3>
                        </Card>
                        </div>
                      </div>
                  ))}
            </div>
        </div>
    </div>
)
}

export default Genre