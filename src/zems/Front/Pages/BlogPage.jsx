import React, { useEffect } from "react";
import PageHero from "../Components/Widget/PageHero";
import BlogGrid from "../Components/Section/BlogGrid";

function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Health Blog | CarePlus Clinic";
  }, []);

  return (
    <div className="blog-page">
      <PageHero
        title="Our Health Blog"
        bgImage="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2600&auto=format&fit=crop"
        pageTitle="Blog"
      />
      <BlogGrid />
    </div>
  );
}

export default BlogPage;
