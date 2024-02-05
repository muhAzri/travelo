import { searchIcon } from "@assets/icons"
import Image from "next/image"

const Search = () => {
    return (
        <form className="flex items-center ml-8">
            <input
                className="border border-gray-50 px-4 py-3 rounded-l-md text-sm text-gray-50"
                type="text"
                placeholder="Kategori    | Lokasi"
            />

            <button
                className="flex justify-center items-center bg-blue-100 border border-blue-100 text-white text-sm rounded-r-md h-[46px] w-[46px]"
                type="submit"
            >
                <Image
                    src={searchIcon}
                    alt="search-icon"
                    height={"24"}
                    width={"24"}
                />

            </button>
        </form>
    )
}

export default Search