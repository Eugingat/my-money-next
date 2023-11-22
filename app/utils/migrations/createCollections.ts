import clientPromise from "@/app/lib/mongodb";

export const createCollectionUser = async () => {
    const client = await clientPromise;

    const db = client.db('my-money');

    await db.createCollection('users', {
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: [ "login", "password", "name" , "category"],
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
                    category: {
                        bsonType: 'objectId',
                        description: 'Must be supplied'
                    }
                }
            }
        }
    })
};

export const createCollectionCategories = async () => {
    const client = await clientPromise;

    const db = client.db('my-money');

    await db.createCollection('categories', {
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: [ "mainCategories", "replenishmentCategories", "transactions"],
                properties: {
                    mainCategories: {
                        bsonType: 'array',
                        description: 'Must be supplied',
                        items: {
                            bsonType: 'object',
                            properties: {
                                name: {
                                    bsonType: 'string'
                                },
                                icon: {
                                    bsonType: 'string'
                                },
                                color: {
                                    bsonType: 'string'
                                },
                                value: {
                                    bsonType: 'int'
                                }
                            }
                        }
                    },
                    replenishmentCategories: {
                        bsonType: 'array',
                        description: 'Must be supplied',
                        items: {
                            bsonType: 'object',
                            properties: {
                                name: {
                                    bsonType: 'string'
                                },
                                icon: {
                                    bsonType: 'string'
                                },
                                color: {
                                    bsonType: 'string'
                                },
                                value: {
                                    bsonType: 'int'
                                }
                            }
                        }
                    },
                    transactions: {
                        bsonType: 'array',
                        description: 'Must be supplied',
                        items: {
                            bsonType: 'string'
                        }
                    },
                }
            }
        }
    })
}