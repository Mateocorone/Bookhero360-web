import { IBlogPost } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import BlogCardV1 from '../shared/card/BlogCardV1';
import LinkButton from '../ui/button/LinkButton';

const blogs: IBlogPost[] = getMarkDownData<IBlogPost & { [key: string]: unknown }>('src/data/blogs').slice(5, 8);

const Blog = () => {
  return (
    <section
      className="bg-background-2 dark:bg-background-5 pt-20 pb-28 md:pt-32 md:pb-32 lg:pt-[128px] lg:pb-[128px] xl:pt-[100px] xl:pb-[100px]"
      aria-label="Blog posts and insights">
      <div className="main-container">
        <div className="mb-[70px] text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan mb-5">Blog</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mb-3">Actionable insights from real experts.</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[738px]">
              Stay ahead of trends, updates, and growth strategies with our expert-written blog.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-10 xl:grid-cols-3">
          {blogs.map((blog, index) => (
            <RevealAnimation delay={0.6 + index * 0.1} key={blog.slug}>
              <BlogCardV1
                blog={blog}
                className="dark:bg-background-6 border-stroke-4 dark:border-background-6 border bg-white"
              />
            </RevealAnimation>
          ))}
        </div>

        <div className="mt-7 flex justify-center md:mt-14">
          <RevealAnimation delay={0.7}>
            <LinkButton
              href="/blog"
              className="btn btn-secondary hover:btn-white dark:hover:btn-accent dark:btn-transparent btn-md"
              aria-label="View all blog posts">
              Explore the blog
            </LinkButton>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Blog;
