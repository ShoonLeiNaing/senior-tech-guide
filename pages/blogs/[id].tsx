import parse from "html-react-parser";
import Footer from "../../components/Common/Footer";
import Navbar from "../../components/Common/Navbar";
import { Post } from "../../components/Home/Blogs";
import NewsLetter from "../../components/Home/NewsLetter";
import { posts } from "../../data/posts";
import ReactPlayer from "react-player";

interface IProps {
  post: Post;
}

function BlogDetail({ post }: IProps) {
  return (
    <>
      <Navbar />
      <div className="bg-white px-6 pt-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <figure>
            <img
              className="aspect-video rounded-xl bg-gray-50 object-cover"
              src={post.imageUrl}
              alt=""
            />
          </figure>
          <div className="lg:mt-16 mt-8 max-w-3xl mb-8">
            <div className="mt-8 flex items-center gap-x-4 text-xs">
              {/* <time dateTime={post.datetime} className="text-gray-500">
                {post.date}
              </time> */}
              <p
                style={{
                  color: post.category.color,
                  backgroundColor: post.category.backgroundColor,
                }}
                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium hover:bg-gray-100"
              >
                {post.category.title}
              </p>
            </div>

            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {post.title}
            </h1>

            <p className="mt-6">{post.description}</p>
            <p className="mt-6">{parse(post.content)}</p>
          </div>
          <ReactPlayer url={post.link} width="100%" />
          {/* <video controls className="w-full">
            <source src={post.link} type="video/mp4" />
          </video> */}
        </div>
      </div>

      <NewsLetter />
      <Footer />
    </>
  );
}

export default BlogDetail;

export const getStaticProps = async ({ params }: any) => {
  const post = posts.filter((post: Post) => post.id == params.id);
  return {
    props: {
      post: post[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = posts.map((post: Post) => ({
    params: {
      id: post.id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};
