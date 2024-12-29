import { User } from "lucide-react";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BlogPostCard from "./_components/BlogPostCard";
import { blogPosts } from "@/data/Blogs";

const BlogPage = () => {
  return (
    <div className="container max-w-5xl p-3 mx-auto font-inter">
      <div className="top-sec flex flex-col md:flex-row items-center">
        <h2 className="text-4xl font-bold text-blue-500 mb-4">Blog</h2>

        <div className="filter hidden md:flex items-center justify-center md:space-x-1 p-1 gap-2">
          <Button variant="link">Finance</Button>
          <Button variant="link">Insurance</Button>
          <Button variant="link">Real Estate</Button>
          <Button variant="link">Credit Card</Button>
          <Button variant="link">Stocks</Button>
          <Button variant="link">Health</Button>
          <Button variant="link">Knowledge</Button>
          <Button variant="link">Gold & Silver</Button>
          <Button variant="link">Ai</Button>
        </div>

        <div className="block md:hidden">
          <div className="filter flex items-center justify-start md:space-x-2 p-1 gap-2">
            <Button variant="default">Finance</Button>
            <Button variant="default">Insurance</Button>
            <Button variant="default">Real Estate</Button>
          </div>
          <div className="flex items-center justify-start md:space-x-2 p-1 gap-2">
            <Button variant="default">Credit Card</Button>
            <Button variant="default">Stocks</Button>
            <Button variant="default">Health</Button>
          </div>
          <div className="flex items-center justify-start md:space-x-2 p-1 gap-2 pb-4">
            <Button variant="default">Knowledge</Button>
            <Button variant="default">Gold & Silver</Button>
            <Button variant="default">Ai</Button>
          </div>
        </div>
      </div>
      <div className="calList">
        <div className="blog-posts grid grid-cols-1 sm:grid-cols-3 gap-3">
          {blogPosts.length > 0 &&
            blogPosts.map((ele, index) => {
              const cardColorClass =
                index % 2 === 0 ? "text-red-500" : "text-blue-500";
              return (
                <BlogPostCard
                  key={ele.id}
                  cardImg={ele.blogPostImg}
                  title={ele.Title}
                  description={ele.shortDesc}
                  blogLink={ele.links}
                  updatedAt={ele.updatedAt}
                  cardColor={cardColorClass}
                />
              );
            })}
        </div>
        <div className="">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
