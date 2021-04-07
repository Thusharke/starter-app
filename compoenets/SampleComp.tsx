import {NextPage ,GetStaticProps} from 'next';


const CompPage = ({ content }) => {
    const { attributes } = content;
    return(
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:w-48" src="/images/books.jpg" alt="Man looking at item at a store" />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                    <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{attributes.Title}</a>
                    <p className="mt-2 text-gray-500">{attributes.Description}</p>
                </div>
            </div>
        </div>
    );
}
export default CompPage;