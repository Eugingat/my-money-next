import clientPromise from "@/app/lib/mongodb";

export const createCollectionUser = async () => {
    const client = await clientPromise;

    const db = client.db('my-money');

    await db.createCollection('users', {
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: [ "login", "password", "name" ],
                properties: {
                    login: {
                        bsonType: 'string',
                        description: 'Must be supplied'
                    },
                    password: {
                        bsonType: 'string',
                        description: 'Must be supplied'
                    },
                    name: {
                        bsonType: 'string',
                        description: 'Must be supplied'
                    },
                    token: {
                        bsonType: 'string',
                        description: 'Optional description'
                    },
                }
            }
        }
    })
};