import { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';
interface Props {
  content: { attributes: HomeAttributes };
}
interface HomeAttributes {
  hero_title: string;
  hero_description: string;
}
const HomePage: NextPage<Props> = ({ content }) => {
  const { attributes } = content;
return (
    <>
      <h1>{attributes.hero_title}</h1>
      <p>{attributes.hero_description}</p>
      <Link href="/posts">Click me for posts</Link>
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const content = await import(`../content/${'home'}.md`);
  return { props: { content: JSON.parse(JSON.stringify(content.default)) } };
};
export default HomePage;