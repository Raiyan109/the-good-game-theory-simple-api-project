
const Items = ({ result }) => {

    return (
        <div>
            <img className="h-80 w-72 object-contain" src={result.image_url} alt="" />
        </div>
    );
};

export default Items;