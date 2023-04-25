import { GraphQLClient, gql } from "graphql-request";
import { BlogCard } from "../components/BlogCard";

const graphcms = new GraphQLClient(
  "https://api-ap-southeast-2.hygraph.com/v2/clgvty2by0vnt01uifnngdtbv/master"
);

const QUERY = gql`
  {
    posts {
      id
      title
      datePublished
      slug
      content {
        html
      }
      author {
        name
        avatar {
          url
        }
      }
      coverPhoto {
        url
      }
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default function Home({ posts }) {
  return (
    <main className={``}>
      <p>GraphQL</p>
      {posts.map((post) => (
        <BlogCard
          title={post.title}
          author={post.author}
          coverPhoto={post.coverPhoto}
          key={post.id}
          datePublished={post.datePublished}
          slug={post.slug}
        />
      ))}
    </main>
  );
}
