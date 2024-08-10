"use client";
import { getArticles } from "@/lib/action";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import ArticleItem, { ArticleSkeleton } from "./item";

const ArticleList = () => {
  const {
    data: articles,
    isLoading,
    isError,
  } = useQuery({
    queryFn: async () => await getArticles(),
    queryKey: ["articles"], //Array according to Documentation
  });
  if (isLoading) return <ArticleListSkeleton />;
  if (isError) return <div>Sorry There was an Error</div>;
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch mt-6">
      {articles?.data?.map(
        (
          article: {
            id: string;
            title: string;
            featured_image: string;
            featured_image_caption: string;
          },
          index: number
        ) => {
          return (
            <ArticleItem
              index={index}
              key={article.id}
              title={article.title}
              cover={article.featured_image}
              caption={article.featured_image_caption}
            />
          );
        }
      )}
    </div>
  );
};

export default ArticleList;

export const ArticleListSkeleton = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch mt-6">
      <ArticleSkeleton index={0} />
      <ArticleSkeleton index={1} />
      <ArticleSkeleton index={2} />
      <ArticleSkeleton index={3} />
      <ArticleSkeleton index={4} />
    </div>
  );
};
