import { useRouter } from "next/navigation";
import { Post } from "..";

interface IProps {
  post: Post;
}

function BlogCard({ post }: IProps) {
  const router = useRouter();
  return (
    <article
      key={post.id}
      className="flex flex-col items-start justify-between"
      onClick={() => router.push(`/blogs/${post?.id}`)}
    >
      <div className="relative w-full">
        <img
          src={post.imageUrl}
          alt=""
          className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div className="max-w-xl">
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
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href={post.href}>
              <span className="absolute inset-0" />
              {post.title}
            </a>
          </h3>
          <p className="mt-5 line-clamp-4 text-sm leading-6 text-gray-600">
            {post.description}
          </p>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
