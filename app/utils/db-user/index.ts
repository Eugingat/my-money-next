import clientPromise from "@/app/lib/mongodb";
import {ObjectId} from 'mongodb';
import {deleteToken} from "@/app/utils/token";
import {notFound} from "next/navigation";

export const getUserDB = async (id: string, token: string) => {
  const client = await clientPromise;
  const db = client.db('my-money');
  const collection = db.collection('users');

  const [user] = await collection.aggregate([{
    $match: { _id: new ObjectId(id)}
  }, {
    $lookup: {
      from: "categories",
      localField: "category",
      foreignField: "_id",
      as: "category",
    }
  }, {
    $limit: 1
  }]).toArray();

  if (!user) {
    notFound();
  }

  if (user.token !== token) {
    deleteToken('hac');
  }

  return {
    name: user.name,
    category: user.category[0]
  }
};