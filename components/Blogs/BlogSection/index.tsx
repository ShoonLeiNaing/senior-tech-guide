import { posts } from "../../../data/posts";
import { Post } from "../../Home/Blogs";
import BlogCard from "../../Home/Blogs/BlogCard";

export default function BlogSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Explore Our Blogs
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Connect with technology using our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post: Post) => (
            <BlogCard post={post} key={post?.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
