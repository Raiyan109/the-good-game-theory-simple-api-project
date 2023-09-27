import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import Loading from "../components/Loading";

export const ItemContext = createContext()

export const useItemContext = () => {
    return useContext(ItemContext)
}

const ItemProvider = ({ children }) => {
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    const baseUrl = 'https://api.punkapi.com/v2/beers'

    const fetchData = async () => {
        setLoading(true)
        await axios.get(baseUrl)
            .then((data) => setResults(data.data))
            .catch((err) => console.log(err))
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (loading) { return <Loading /> }


    const value = {
        results,
        searchTerm, setSearchTerm
    }

    return (
        <ItemContext.Provider value={value}>
            {children}
        </ItemContext.Provider>
    )
}



export default ItemProvider;