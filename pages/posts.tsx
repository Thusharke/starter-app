import SampleComp from '../compoenets/SampleComp'
export default function PostPage({content}){
    return(
        <SampleComp content={content} />
    );
}

export async function getStaticProps(){
    const content =  await import(`../content/pages/${'comp'}.md`);
    return {props : { content : content.default }}
}