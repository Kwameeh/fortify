export const revalidate = 0;

import BlogList from "@/components/blog/bloglist";

const BlogPage = async () => {
  return (
    <section
      id="section"
      className="py-24 sm:py-24 h-full relative w-full justify-center flex items-center bg-black">
      <div id="container" className=" px-6 sm:px-24 w-full h-full">
        <div className="text-white text-6xl font-bebas">
          <h1>Our Blogs</h1>
        </div>
        <BlogList />
      </div>
    </section>
  );
};

export default BlogPage;
