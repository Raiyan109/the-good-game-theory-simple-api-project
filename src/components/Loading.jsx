import { Hourglass } from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className='flex justify-center items-center mt-52'>
            <Hourglass
                visible={true}
                height="80"
                width="80"
                ariaLabel="hourglass-loading"
                wrapperStyle={{}}
                wrapperClass=""
                colors={['#306cce', '#72a1ed']}
            />
        </div>
    );
};

export default Loading;