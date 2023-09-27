
import SearchFuncion from '../components/SearchFuncion';
import { useItemContext } from '../context/ItemProvider';
import Items from './Items';


const Home = () => {
    const { results, searchTerm } = useItemContext()
    // const item = results
    // console.log(item);

    return (
        <section className='mt-32 mb-14'>
            <SearchFuncion />
            <div className='flex justify-center items-center py-12 px-7'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {results.filter((result) => {
                        if (searchTerm == '') {
                            return result
                        }
                        else if (result.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return result
                        }
                    }).map((result) => (
                        <>
                            <Items result={result} />
                        </>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Home;