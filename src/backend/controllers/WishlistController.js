import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";

/**
 * All the routes related to Wishlist are present here.
 * These are private routes.
 * Client needs to add "authorization" header with JWT token in it to access it.
 * */

/**
 * This handler handles getting items to user's wishlist.
 * send GET Request at /api/user/wishlist
 * */

export const getWishlistItemsHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  if (!userId) {
    return new Response(
      404,
      {},
      {
        errors: ["The email you entered is not Registered. Not Found error"],
      }
    );
  }
  const userWishlist = schema.users.findBy({ _id: userId }).wishlist;
  return new Response(200, {}, { wishlist: userWishlist });
};

/**
 * This handler handles adding items to user's wishlist.
 * send POST Request at /api/user/wishlist
 * body contains {product}
 * */

export const addItemToWishlistHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      return new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    const userWishlist = schema.users.findBy({ _id: userId }).wishlist;
    const { product } = JSON.parse(request.requestBody);
    userWishlist.push({
      ...product,
      createdAt: formatDate(),
      updatedAt: formatDate(),
    });
    this.db.users.update({ _id: userId }, { wishlist: userWishlist });
    return new Response(201, {}, { wishlist: userWishlist });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles removing items to user's wishlist.
 * send DELETE Request at /api/user/wishlist
 * body contains {product}
 * */

export const removeItemFromWishlistHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      return new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    let userWishlist = schema.users.findBy({ _id: userId }).wishlist;
    const productId = request.params.productId;
    userWishlist = userWishlist.filter((item) => item._id !== productId);
    this.db.users.update({ _id: userId }, { wishlist: userWishlist });
    return new Response(200, {}, { wishlist: userWishlist });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
