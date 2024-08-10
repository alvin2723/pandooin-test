import React from "react";
import ArticleList from "./list";

const Articles = () => {
  return (
    <section id="article" className="my-[72px]">
      <div className="container max-w-7xl">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl2 lg:text-4xl font-unbounded font-bold text-green">
            Articles
          </h2>
          <p className="text-green text-base lg:text-2xl">
            Our curated writings, offering something for every reader.
          </p>
        </div>
        <ArticleList />
      </div>
    </section>
  );
};

export default Articles;
