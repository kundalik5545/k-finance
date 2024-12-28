import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

const BlogPostCard = ({
  cardImg,
  title,
  description,
  blogLink,
  updatedAt,
  cardColor,
}) => (
  <Link href={blogLink} className="block">
    <Card
      className={`font-inter tracking-wide shadow-sm hover:shadow-xl flex flex-col transform hover:scale-105 transition-transform duration-300 overflow-hidden m-2`}
    >
      <Image
        src={`/${cardImg}`}
        className="p-0 rounded-sm rounded-b-xl pb-1 transition-transform duration-300 transform hover:scale-105"
        alt={title}
        width={500}
        height={500}
      />
      <div className="Card-Containt rounded-b-lg flex-grow flex flex-col">
        <CardHeader>
          <CardTitle className="text-lg md:text-xl lg:text-xl font-bold tracking-normal leading-snug">
            {title}
          </CardTitle>
        </CardHeader>
        {/* <CardContent>
          <p className="text-sm md:text-base lg:text-base">
            <span>{description}</span>{" "}
            <a href={blogLink} className="text-blue-600 underline">
              Read More...
            </a>
          </p>
        </CardContent> */}
        <CardFooter>
          <p className={`${cardColor}`}>{updatedAt}</p>
        </CardFooter>
      </div>
    </Card>
  </Link>
);

export default BlogPostCard;
