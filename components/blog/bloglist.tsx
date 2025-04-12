import { urlFor } from "@/sanity/lib/image";
import { getAllPosts } from "@/sanity/queries/posts";
import Image from "next/image";
import Link from "next/link";

export default async function BlogList() {
  const postData = await getAllPosts();

  return (
    <div className="grid justify-between w-full gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {postData.map((post, index) => {
        return (
          <Link key={index} href={`blog/${post.slug?.current}` || ""}>
            <div className="w-full col-span-1 group shrink-0 border border-white px-3 py-2">
              <div className="flex flex-col mb-6">
                <h2 className="text-white text-xl">{post.title}</h2>

                <div className="flex justify-between w-full">
                  <span className="text-white text-sm">
                    {post.author?.name}
                  </span>
                  <span className="text-white text-sm">{post.publishedAt}</span>
                </div>
              </div>
              <div className="h-[250px] w-full relative overflow-hidden">
                <Image
                  src={
                    post.mainImage
                      ? urlFor(post.mainImage).url()
                      : "/placeholder-image.jpg"
                  }
                  alt={post.title || ""}
                  width={320}
                  height={450}
                  className="absolute w-full group-hover:scale-110 duration-300 h-full object-cover"
                />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
