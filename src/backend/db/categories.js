import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: "ef1f52f6-4e35-4cd7-ad4a-0a9b52de894f",
    categoryName: "vision",
    description:
      "Clear vision and stylish frames for a perfect blend of functionality and fashion",
  },
  {
    _id: "937d27a0-51b7-4005-bb04-4f5f111eac90",
    categoryName: "sports",
    description:
      "Stay focused and perform at your best with our high-performance sports glasses.",
  },
  {
    _id: "1164f45b-1659-4631-88d7-47325bb21eff",
    categoryName: "sunglasses",
    description:
      "Protect your eyes in style with our trendy sunglasses collection, featuring UV protection and a variety of designs to suit any outfit or occasion.",
  },
];
console.log({ categories });
