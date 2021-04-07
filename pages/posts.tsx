import SampleComp from '../compoenets/SampleComp'
interface Props{
    content : {attributes : CompAttributes}
}
interface CompAttributes {
    Title: string;
    Description: string;
}
export default function PostPage({content}){
    return(
        <SampleComp content={content} />
    );
}

export async function getStaticProps(){
    const content =  await import(`../content/pages/${'comp'}.md`);
    return {props : { content : content.default }}
}