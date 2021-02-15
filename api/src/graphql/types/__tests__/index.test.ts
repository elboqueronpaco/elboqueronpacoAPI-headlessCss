import typeDefs from '../index'

describe('#typeDefs', () => {
  it('should match the GraphQL schema', () => {
    expect(typeDefs).toMatchInlineSnapshot(`
      Object {
        "definitions": Array [
          Object {
            "description": undefined,
            "directives": Array [],
            "fields": Array [
              Object {
                "arguments": Array [],
                "description": undefined,
                "directives": Array [],
                "kind": "FieldDefinition",
                "loc": Object {
                  "end": 22,
                  "start": 13,
                },
                "name": Object {
                  "kind": "Name",
                  "loc": Object {
                    "end": 15,
                    "start": 13,
                  },
                  "value": "id",
                },
                "type": Object {
                  "kind": "NonNullType",
                  "loc": Object {
                    "end": 22,
                    "start": 17,
                  },
                  "type": Object {
                    "kind": "NamedType",
                    "loc": Object {
                      "end": 21,
                      "start": 17,
                    },
                    "name": Object {
                      "kind": "Name",
                      "loc": Object {
                        "end": 21,
                        "start": 17,
                      },
                      "value": "UUID",
                    },
                  },
                },
              },
              Object {
                "arguments": Array [],
                "description": undefined,
                "directives": Array [],
                "kind": "FieldDefinition",
                "loc": Object {
                  "end": 38,
                  "start": 25,
                },
                "name": Object {
                  "kind": "Name",
                  "loc": Object {
                    "end": 31,
                    "start": 25,
                  },
                  "value": "userId",
                },
                "type": Object {
                  "kind": "NonNullType",
                  "loc": Object {
                    "end": 38,
                    "start": 33,
                  },
                  "type": Object {
                    "kind": "NamedType",
                    "loc": Object {
                      "end": 37,
                      "start": 33,
                    },
                    "name": Object {
                      "kind": "Name",
                      "loc": Object {
                        "end": 37,
                        "start": 33,
                      },
                      "value": "UUID",
                    },
                  },
                },
              },
              Object {
                "arguments": Array [],
                "description": undefined,
                "directives": Array [],
                "kind": "FieldDefinition",
                "loc": Object {
                  "end": 57,
                  "start": 41,
                },
                "name": Object {
                  "kind": "Name",
                  "loc": Object {
                    "end": 48,
                    "start": 41,
                  },
                  "value": "appName",
                },
                "type": Object {
                  "kind": "NonNullType",
                  "loc": Object {
                    "end": 57,
                    "start": 50,
                  },
                  "type": Object {
                    "kind": "NamedType",
                    "loc": Object {
                      "end": 56,
                      "start": 50,
                    },
                    "name": Object {
                      "kind": "Name",
                      "loc": Object {
                        "end": 56,
                        "start": 50,
                      },
                      "value": "String",
                    },
                  },
                },
              },
              Object {
                "arguments": Array [],
                "description": undefined,
                "directives": Array [],
                "kind": "FieldDefinition",
                "loc": Object {
                  "end": 79,
                  "start": 60,
                },
                "name": Object {
                  "kind": "Name",
                  "loc": Object {
                    "end": 70,
                    "start": 60,
                  },
                  "value": "identifier",
                },
                "type": Object {
                  "kind": "NonNullType",
                  "loc": Object {
                    "end": 79,
                    "start": 72,
                  },
                  "type": Object {
                    "kind": "NamedType",
                    "loc": Object {
                      "end": 78,
                      "start": 72,
                    },
                    "name": Object {
                      "kind": "Name",
                      "loc": Object {
                        "end": 78,
                        "start": 72,
                      },
                      "value": "String",
                    },
                  },
                },
              },
              Object {
                "arguments": Array [],
                "description": undefined,
                "directives": Array [],
                "kind": "FieldDefinition",
                "loc": Object {
                  "end": 95,
                  "start": 82,
                },
                "name": Object {
                  "kind": "Name",
                  "loc": Object {
                    "end": 86,
                    "start": 82,
                  },
                  "value": "icon",
                },
                "type": Object {
                  "kind": "NonNullType",
                  "loc": Object {
                    "end": 95,
                    "start": 88,
                  },
                  "type": Object {
                    "kind": "NamedType",
                    "loc": Object {
                      "end": 94,
                      "start": 88,
                    },
                    "name": Object {
                      "kind": "Name",
                      "loc": Object {
                        "end": 94,
                        "start": 88,
                      },
                      "value": "String",
                    },
                  },
                },
              },
              Object {
                "arguments": Array [],
                "description": undefined,
                "directives": Array [],
                "kind": "FieldDefinition",
                "loc": Object {
                  "end": 118,
                  "start": 98,
                },
                "name": Object {
                  "kind": "Name",
                  "loc": Object {
                    "end": 109,
                    "start": 98,
                  },
                  "value": "description",
                },
                "type": Object {
                  "kind": "NonNullType",
                  "loc": Object {
                    "end": 118,
                    "start": 111,
                  },
                  "type": Object {
                    "kind": "NamedType",
                    "loc": Object {
                      "end": 117,
                      "start": 111,
                    },
                    "name": Object {
                      "kind": "Name",
                      "loc": Object {
                        "end": 117,
                        "start": 111,
                      },
                      "value": "String",
                    },
                  },
                },
              },
              Object {
                "arguments": Array [],
                "description": undefined,
                "directives": Array [],
                "kind": "FieldDefinition",
                "loc": Object {
                  "end": 141,
                  "start": 121,
                },
                "name": Object {
                  "kind": "Name",
                  "loc": Object {
                    "end": 130,
                    "start": 121,
                  },
                  "value": "createdAt",
                },
                "type": Object {
                  "kind": "NonNullType",
                  "loc": Object {
                    "end": 141,
                    "start": 132,
                  },
                  "type": Object {
                    "kind": "NamedType",
                    "loc": Object {
                      "end": 140,
                      "start": 132,
                    },
                    "name": Object {
                      "kind": "Name",
                      "loc": Object {
                        "end": 140,
                        "start": 132,
                      },
                      "value": "Datetime",
                    },
                  },
                },
              },
              Object {
                "arguments": Array [],
                "description": undefined,
                "directives": Array [],
                "kind": "FieldDefinition",
                "loc": Object {
                  "end": 164,
                  "start": 144,
                },
                "name": Object {
                  "kind": "Name",
                  "loc": Object {
                    "end": 153,
                    "start": 144,
                  },
                  "value": "updatedAt",
                },
                "type": Object {
                  "kind": "NonNullType",
                  "loc": Object {
                    "end": 164,
                    "start": 155,
                  },
                  "type": Object {
                    "kind": "NamedType",
                    "loc": Object {
                      "end": 163,
                      "start": 155,
                    },
                    "name": Object {
                      "kind": "Name",
                      "loc": Object {
                        "end": 163,
                        "start": 155,
                      },
                      "value": "Datetime",
                    },
                  },
                },
              },
            ],
            "interfaces": Array [],
            "kind": "ObjectTypeDefinition",
            "loc": Object {
              "end": 166,
              "start": 0,
            },
            "name": Object {
              "kind": "Name",
              "loc": Object {
                "end": 8,
                "start": 5,
              },
              "value": "App",
            },
          },
          Object {
            "description": undefined,
            "directives": Array [],
            "fields": Array [
              Object {
                "arguments": Array [],
                "description": undefined,
                "directives": Array [],
                "kind": "FieldDefinition",
                "loc": Object {
                  "end": 198,
                  "start": 183,
                },
                "name": Object {
                  "kind": "Name",
                  "loc": Object {
                    "end": 190,
                    "start": 183,
                  },
                  "value": "getApps",
                },
                "type": Object {
                  "kind": "ListType",
                  "loc": Object {
                    "end": 198,
                    "start": 192,
                  },
                  "type": Object {
                    "kind": "NonNullType",
                    "loc": Object {
                      "end": 197,
                      "start": 193,
                    },
                    "type": Object {
                      "kind": "NamedType",
                      "loc": Object {
                        "end": 196,
                        "start": 193,
                      },
                      "name": Object {
                        "kind": "Name",
                        "loc": Object {
                          "end": 196,
                          "start": 193,
                        },
                        "value": "App",
                      },
                    },
                  },
                },
              },
              Object {
                "arguments": Array [],
                "description": undefined,
                "directives": Array [],
                "kind": "FieldDefinition",
                "loc": Object {
                  "end": 240,
                  "start": 223,
                },
                "name": Object {
                  "kind": "Name",
                  "loc": Object {
                    "end": 231,
                    "start": 223,
                  },
                  "value": "getUsers",
                },
                "type": Object {
                  "kind": "ListType",
                  "loc": Object {
                    "end": 240,
                    "start": 233,
                  },
                  "type": Object {
                    "kind": "NonNullType",
                    "loc": Object {
                      "end": 239,
                      "start": 234,
                    },
                    "type": Object {
                      "kind": "NamedType",
                      "loc": Object {
                        "end": 238,
                        "start": 234,
                      },
                      "name": Object {
                        "kind": "Name",
                        "loc": Object {
                          "end": 238,
                          "start": 234,
                        },
                        "value": "User",
                      },
                    },
                  },
                },
              },
            ],
            "interfaces": Array [],
            "kind": "ObjectTypeDefinition",
            "loc": Object {
              "end": 242,
              "start": 208,
            },
            "name": Object {
              "kind": "Name",
              "loc": Object {
                "end": 218,
                "start": 213,
              },
              "value": "Query",
            },
          },
          Object {
            "description": undefined,
            "directives": Array [],
            "fields": Array [
              Object {
                "arguments": Array [
                  Object {
                    "defaultValue": undefined,
                    "description": undefined,
                    "directives": Array [],
                    "kind": "InputValueDefinition",
                    "loc": Object {
                      "end": 249,
                      "start": 228,
                    },
                    "name": Object {
                      "kind": "Name",
                      "loc": Object {
                        "end": 233,
                        "start": 228,
                      },
                      "value": "input",
                    },
                    "type": Object {
                      "kind": "NamedType",
                      "loc": Object {
                        "end": 249,
                        "start": 235,
                      },
                      "name": Object {
                        "kind": "Name",
                        "loc": Object {
                          "end": 249,
                          "start": 235,
                        },
                        "value": "CreateAppInput",
                      },
                    },
                  },
                ],
                "description": undefined,
                "directives": Array [],
                "kind": "FieldDefinition",
                "loc": Object {
                  "end": 255,
                  "start": 218,
                },
                "name": Object {
                  "kind": "Name",
                  "loc": Object {
                    "end": 227,
                    "start": 218,
                  },
                  "value": "createApp",
                },
                "type": Object {
                  "kind": "NonNullType",
                  "loc": Object {
                    "end": 255,
                    "start": 251,
                  },
                  "type": Object {
                    "kind": "NamedType",
                    "loc": Object {
                      "end": 254,
                      "start": 251,
                    },
                    "name": Object {
                      "kind": "Name",
                      "loc": Object {
                        "end": 254,
                        "start": 251,
                      },
                      "value": "App",
                    },
                  },
                },
              },
              Object {
                "arguments": Array [
                  Object {
                    "defaultValue": undefined,
                    "description": undefined,
                    "directives": Array [],
                    "kind": "InputValueDefinition",
                    "loc": Object {
                      "end": 295,
                      "start": 273,
                    },
                    "name": Object {
                      "kind": "Name",
                      "loc": Object {
                        "end": 278,
                        "start": 273,
                      },
                      "value": "input",
                    },
                    "type": Object {
                      "kind": "NamedType",
                      "loc": Object {
                        "end": 295,
                        "start": 280,
                      },
                      "name": Object {
                        "kind": "Name",
                        "loc": Object {
                          "end": 295,
                          "start": 280,
                        },
                        "value": "CreateUserInput",
                      },
                    },
                  },
                ],
                "description": undefined,
                "directives": Array [],
                "kind": "FieldDefinition",
                "loc": Object {
                  "end": 303,
                  "start": 262,
                },
                "name": Object {
                  "kind": "Name",
                  "loc": Object {
                    "end": 272,
                    "start": 262,
                  },
                  "value": "createUser",
                },
                "type": Object {
                  "kind": "NonNullType",
                  "loc": Object {
                    "end": 303,
                    "start": 298,
                  },
                  "type": Object {
                    "kind": "NamedType",
                    "loc": Object {
                      "end": 302,
                      "start": 298,
                    },
                    "name": Object {
                      "kind": "Name",
                      "loc": Object {
                        "end": 302,
                        "start": 298,
                      },
                      "value": "User",
                    },
                  },
                },
              },
              Object {
                "arguments": Array [
                  Object {
                    "defaultValue": undefined,
                    "description": undefined,
                    "directives": Array [],
                    "kind": "InputValueDefinition",
                    "loc": Object {
                      "end": 329,
                      "start": 312,
                    },
                    "name": Object {
                      "kind": "Name",
                      "loc": Object {
                        "end": 317,
                        "start": 312,
                      },
                      "value": "input",
                    },
                    "type": Object {
                      "kind": "NamedType",
                      "loc": Object {
                        "end": 329,
                        "start": 319,
                      },
                      "name": Object {
                        "kind": "Name",
                        "loc": Object {
                          "end": 329,
                          "start": 319,
                        },
                        "value": "LoginInput",
                      },
                    },
                  },
                ],
                "description": undefined,
                "directives": Array [],
                "kind": "FieldDefinition",
                "loc": Object {
                  "end": 344,
                  "start": 306,
                },
                "name": Object {
                  "kind": "Name",
                  "loc": Object {
                    "end": 311,
                    "start": 306,
                  },
                  "value": "login",
                },
                "type": Object {
                  "kind": "NonNullType",
                  "loc": Object {
                    "end": 344,
                    "start": 332,
                  },
                  "type": Object {
                    "kind": "NamedType",
                    "loc": Object {
                      "end": 343,
                      "start": 332,
                    },
                    "name": Object {
                      "kind": "Name",
                      "loc": Object {
                        "end": 343,
                        "start": 332,
                      },
                      "value": "AuthPayload",
                    },
                  },
                },
              },
            ],
            "interfaces": Array [],
            "kind": "ObjectTypeDefinition",
            "loc": Object {
              "end": 346,
              "start": 244,
            },
            "name": Object {
              "kind": "Name",
              "loc": Object {
                "end": 257,
                "start": 249,
              },
              "value": "Mutation",
            },
          },
          Object {
            "description": undefined,
            "directives": Array [],
            "fields": Array [
              Object {
                "defaultValue": undefined,
                "description": undefined,
                "directives": Array [],
                "kind": "InputValueDefinition",
                "loc": Object {
                  "end": 299,
                  "start": 283,
                },
                "name": Object {
                  "kind": "Name",
                  "loc": Object {
                    "end": 290,
                    "start": 283,
                  },
                  "value": "appName",
                },
                "type": Object {
                  "kind": "NonNullType",
                  "loc": Object {
                    "end": 299,
                    "start": 292,
                  },
                  "type": Object {
                    "kind": "NamedType",
                    "loc": Object {
                      "end": 298,
                      "start": 292,
                    },
                    "name": Object {
                      "kind": "Name",
                      "loc": Object {
                        "end": 298,
                        "start": 292,
                      },
                      "value": "String",
                    },
                  },
                },
              },
              Object {
                "defaultValue": undefined,
                "description": undefined,
                "directives": Array [],
                "kind": "InputValueDefinition",
                "loc": Object {
                  "end": 321,
                  "start": 302,
                },
                "name": Object {
                  "kind": "Name",
                  "loc": Object {
                    "end": 312,
                    "start": 302,
                  },
                  "value": "identifier",
                },
                "type": Object {
                  "kind": "NonNullType",
                  "loc": Object {
                    "end": 321,
                    "start": 314,
                  },
                  "type": Object {
                    "kind": "NamedType",
                    "loc": Object {
                      "end": 320,
                      "start": 314,
                    },
                    "name": Object {
                      "kind": "Name",
                      "loc": Object {
                        "end": 320,
                        "start": 314,
                      },
                      "value": "String",
                    },
                  },
                },
              },
              Object {
                "defaultValue": undefined,
                "description": undefined,
                "directives": Array [],
                "kind": "InputValueDefinition",
                "loc": Object {
                  "end": 337,
                  "start": 324,
                },
                "name": Object {
                  "kind": "Name",
                  "loc": Object {
                    "end": 328,
                    "start": 324,
                  },
                  "value": "icon",
                },
                "type": Object {
                  "kind": "NonNullType",
                  "loc": Object {
                    "end": 337,
                    "start": 330,
                  },
                  "type": Object {
                    "kind": "NamedType",
                    "loc": Object {
                      "end": 336,
                      "start": 330,
                    },
                    "name": Object {
                      "kind": "Name",
                      "loc": Object {
                        "end": 336,
                        "start": 330,
                      },
                      "value": "String",
                    },
                  },
                },
              },
              Object {
                "defaultValue": undefined,
                "description": undefined,
                "directives": Array [],
                "kind": "InputValueDefinition",
                "loc": Object {
                  "end": 360,
                  "start": 340,
                },
                "name": Object {
                  "kind": "Name",
                  "loc": Object {
                    "end": 351,
                    "start": 340,
                  },
                  "value": "description",
                },
                "type": Object {
                  "kind": "NonNullType",
                  "loc": Object {
                    "end": 360,
                    "start": 353,
                  },
                  "type": Object {
                    "kind": "NamedType",
                    "loc": Object {
                      "end": 359,
                      "start": 353,
                    },
                    "name": Object {
                      "kind": "Name",
                      "loc": Object {
                        "end": 359,
                        "start": 353,
                      },
                      "value": "String",
                    },
                  },
                },
              },
              Object {
                "defaultValue": undefined,
                "description": undefined,
                "directives": Array [],
                "kind": "InputValueDefinition",
                "loc": Object {
                  "end": 376,
                  "start": 363,
                },
                "name": Object {
                  "kind": "Name",
                  "loc": Object {
                    "end": 369,
                    "start": 363,
                  },
                  "value": "userId",
                },
                "type": Object {
                  "kind": "NonNullType",
                  "loc": Object {
                    "end": 376,
                    "start": 371,
                  },
                  "type": Object {
                    "kind": "NamedType",
                    "loc": Object {
                      "end": 375,
                      "start": 371,
                    },
                    "name": Object {
                      "kind": "Name",
                      "loc": Object {
                        "end": 375,
                        "start": 371,
                      },
                      "value": "UUID",
                    },
                  },
                },
              },
            ],
            "kind": "InputObjectTypeDefinition",
            "loc": Object {
              "end": 378,
              "start": 258,
            },
            "name": Object {
              "kind": "Name",
              "loc": Object {
                "end": 278,
                "start": 264,
              },
              "value": "CreateAppInput",
            },
          },
          Object {
            "description": undefined,
            "directives": Array [],
            "kind": "ScalarTypeDefinition",
            "loc": Object {
              "end": 11,
              "start": 0,
            },
            "name": Object {
              "kind": "Name",
              "loc": Object {
                "end": 11,
                "start": 7,
              },
              "value": "UUID",
            },
          },
          Object {
            "description": undefined,
            "directives": Array [],
            "kind": "ScalarTypeDefinition",
            "loc": Object {
              "end": 27,
              "start": 12,
            },
            "name": Object {
              "kind": "Name",
              "loc": Object {
                "end": 27,
                "start": 19,
              },
              "value": "Datetime",
            },
          },
          Object {
            "description": undefined,
            "directives": Array [],
            "fields": Array [
              Object {
                "arguments": Array [],
                "description": undefined,
                "directives": Array [],
                "kind": "FieldDefinition",
                "loc": Object {
                  "end": 23,
                  "start": 14,
                },
                "name": Object {
                  "kind": "Name",
                  "loc": Object {
                    "end": 16,
                    "start": 14,
                  },
                  "value": "id",
                },
                "type": Object {
                  "kind": "NonNullType",
                  "loc": Object {
                    "end": 23,
                    "start": 18,
                  },
                  "type": Object {
                    "kind": "NamedType",
                    "loc": Object {
                      "end": 22,
                      "start": 18,
                    },
                    "name": Object {
                      "kind": "Name",
                      "loc": Object {
                        "end": 22,
                        "start": 18,
                      },
                      "value": "UUID",
                    },
                  },
                },
              },
              Object {
                "arguments": Array [],
                "description": undefined,
                "directives": Array [],
                "kind": "FieldDefinition",
                "loc": Object {
                  "end": 43,
                  "start": 26,
                },
                "name": Object {
                  "kind": "Name",
                  "loc": Object {
                    "end": 34,
                    "start": 26,
                  },
                  "value": "username",
                },
                "type": Object {
                  "kind": "NonNullType",
                  "loc": Object {
                    "end": 43,
                    "start": 36,
                  },
                  "type": Object {
                    "kind": "NamedType",
                    "loc": Object {
                      "end": 42,
                      "start": 36,
                    },
                    "name": Object {
                      "kind": "Name",
                      "loc": Object {
                        "end": 42,
                        "start": 36,
                      },
                      "value": "String",
                    },
                  },
                },
              },
              Object {
                "arguments": Array [],
                "description": undefined,
                "directives": Array [],
                "kind": "FieldDefinition",
                "loc": Object {
                  "end": 63,
                  "start": 46,
                },
                "name": Object {
                  "kind": "Name",
                  "loc": Object {
                    "end": 54,
                    "start": 46,
                  },
                  "value": "password",
                },
                "type": Object {
                  "kind": "NonNullType",
                  "loc": Object {
                    "end": 63,
                    "start": 56,
                  },
                  "type": Object {
                    "kind": "NamedType",
                    "loc": Object {
                      "end": 62,
                      "start": 56,
                    },
                    "name": Object {
                      "kind": "Name",
                      "loc": Object {
                        "end": 62,
                        "start": 56,
                      },
                      "value": "String",
                    },
                  },
                },
              },
              Object {
                "arguments": Array [],
                "description": undefined,
                "directives": Array [],
                "kind": "FieldDefinition",
                "loc": Object {
                  "end": 80,
                  "start": 66,
                },
                "name": Object {
                  "kind": "Name",
                  "loc": Object {
                    "end": 71,
                    "start": 66,
                  },
                  "value": "email",
                },
                "type": Object {
                  "kind": "NonNullType",
                  "loc": Object {
                    "end": 80,
                    "start": 73,
                  },
                  "type": Object {
                    "kind": "NamedType",
                    "loc": Object {
                      "end": 79,
                      "start": 73,
                    },
                    "name": Object {
                      "kind": "Name",
                      "loc": Object {
                        "end": 79,
                        "start": 73,
                      },
                      "value": "String",
                    },
                  },
                },
              },
              Object {
                "arguments": Array [],
                "description": undefined,
                "directives": Array [],
                "kind": "FieldDefinition",
                "loc": Object {
                  "end": 101,
                  "start": 83,
                },
                "name": Object {
                  "kind": "Name",
                  "loc": Object {
                    "end": 92,
                    "start": 83,
                  },
                  "value": "privilege",
                },
                "type": Object {
                  "kind": "NonNullType",
                  "loc": Object {
                    "end": 101,
                    "start": 94,
                  },
                  "type": Object {
                    "kind": "NamedType",
                    "loc": Object {
                      "end": 100,
                      "start": 94,
                    },
                    "name": Object {
                      "kind": "Name",
                      "loc": Object {
                        "end": 100,
                        "start": 94,
                      },
                      "value": "String",
                    },
                  },
                },
              },
              Object {
                "arguments": Array [],
                "description": undefined,
                "directives": Array [],
                "kind": "FieldDefinition",
                "loc": Object {
                  "end": 120,
                  "start": 104,
                },
                "name": Object {
                  "kind": "Name",
                  "loc": Object {
                    "end": 110,
                    "start": 104,
                  },
                  "value": "active",
                },
                "type": Object {
                  "kind": "NonNullType",
                  "loc": Object {
                    "end": 120,
                    "start": 112,
                  },
                  "type": Object {
                    "kind": "NamedType",
                    "loc": Object {
                      "end": 119,
                      "start": 112,
                    },
                    "name": Object {
                      "kind": "Name",
                      "loc": Object {
                        "end": 119,
                        "start": 112,
                      },
                      "value": "Boolean",
                    },
                  },
                },
              },
              Object {
                "arguments": Array [],
                "description": undefined,
                "directives": Array [],
                "kind": "FieldDefinition",
                "loc": Object {
                  "end": 143,
                  "start": 123,
                },
                "name": Object {
                  "kind": "Name",
                  "loc": Object {
                    "end": 132,
                    "start": 123,
                  },
                  "value": "createdAt",
                },
                "type": Object {
                  "kind": "NonNullType",
                  "loc": Object {
                    "end": 143,
                    "start": 134,
                  },
                  "type": Object {
                    "kind": "NamedType",
                    "loc": Object {
                      "end": 142,
                      "start": 134,
                    },
                    "name": Object {
                      "kind": "Name",
                      "loc": Object {
                        "end": 142,
                        "start": 134,
                      },
                      "value": "Datetime",
                    },
                  },
                },
              },
              Object {
                "arguments": Array [],
                "description": undefined,
                "directives": Array [],
                "kind": "FieldDefinition",
                "loc": Object {
                  "end": 166,
                  "start": 146,
                },
                "name": Object {
                  "kind": "Name",
                  "loc": Object {
                    "end": 155,
                    "start": 146,
                  },
                  "value": "updatedAt",
                },
                "type": Object {
                  "kind": "NonNullType",
                  "loc": Object {
                    "end": 166,
                    "start": 157,
                  },
                  "type": Object {
                    "kind": "NamedType",
                    "loc": Object {
                      "end": 165,
                      "start": 157,
                    },
                    "name": Object {
                      "kind": "Name",
                      "loc": Object {
                        "end": 165,
                        "start": 157,
                      },
                      "value": "Datetime",
                    },
                  },
                },
              },
            ],
            "interfaces": Array [],
            "kind": "ObjectTypeDefinition",
            "loc": Object {
              "end": 168,
              "start": 0,
            },
            "name": Object {
              "kind": "Name",
              "loc": Object {
                "end": 9,
                "start": 5,
              },
              "value": "User",
            },
          },
          Object {
            "description": undefined,
            "directives": Array [],
            "fields": Array [
              Object {
                "arguments": Array [],
                "description": undefined,
                "directives": Array [],
                "kind": "FieldDefinition",
                "loc": Object {
                  "end": 204,
                  "start": 190,
                },
                "name": Object {
                  "kind": "Name",
                  "loc": Object {
                    "end": 195,
                    "start": 190,
                  },
                  "value": "token",
                },
                "type": Object {
                  "kind": "NonNullType",
                  "loc": Object {
                    "end": 204,
                    "start": 197,
                  },
                  "type": Object {
                    "kind": "NamedType",
                    "loc": Object {
                      "end": 203,
                      "start": 197,
                    },
                    "name": Object {
                      "kind": "Name",
                      "loc": Object {
                        "end": 203,
                        "start": 197,
                      },
                      "value": "String",
                    },
                  },
                },
              },
            ],
            "interfaces": Array [],
            "kind": "ObjectTypeDefinition",
            "loc": Object {
              "end": 206,
              "start": 170,
            },
            "name": Object {
              "kind": "Name",
              "loc": Object {
                "end": 186,
                "start": 175,
              },
              "value": "AuthPayload",
            },
          },
          Object {
            "description": undefined,
            "directives": Array [],
            "fields": Array [
              Object {
                "defaultValue": undefined,
                "description": undefined,
                "directives": Array [],
                "kind": "InputValueDefinition",
                "loc": Object {
                  "end": 391,
                  "start": 374,
                },
                "name": Object {
                  "kind": "Name",
                  "loc": Object {
                    "end": 382,
                    "start": 374,
                  },
                  "value": "username",
                },
                "type": Object {
                  "kind": "NonNullType",
                  "loc": Object {
                    "end": 391,
                    "start": 384,
                  },
                  "type": Object {
                    "kind": "NamedType",
                    "loc": Object {
                      "end": 390,
                      "start": 384,
                    },
                    "name": Object {
                      "kind": "Name",
                      "loc": Object {
                        "end": 390,
                        "start": 384,
                      },
                      "value": "String",
                    },
                  },
                },
              },
              Object {
                "defaultValue": undefined,
                "description": undefined,
                "directives": Array [],
                "kind": "InputValueDefinition",
                "loc": Object {
                  "end": 411,
                  "start": 394,
                },
                "name": Object {
                  "kind": "Name",
                  "loc": Object {
                    "end": 402,
                    "start": 394,
                  },
                  "value": "password",
                },
                "type": Object {
                  "kind": "NonNullType",
                  "loc": Object {
                    "end": 411,
                    "start": 404,
                  },
                  "type": Object {
                    "kind": "NamedType",
                    "loc": Object {
                      "end": 410,
                      "start": 404,
                    },
                    "name": Object {
                      "kind": "Name",
                      "loc": Object {
                        "end": 410,
                        "start": 404,
                      },
                      "value": "String",
                    },
                  },
                },
              },
              Object {
                "defaultValue": undefined,
                "description": undefined,
                "directives": Array [],
                "kind": "InputValueDefinition",
                "loc": Object {
                  "end": 428,
                  "start": 414,
                },
                "name": Object {
                  "kind": "Name",
                  "loc": Object {
                    "end": 419,
                    "start": 414,
                  },
                  "value": "email",
                },
                "type": Object {
                  "kind": "NonNullType",
                  "loc": Object {
                    "end": 428,
                    "start": 421,
                  },
                  "type": Object {
                    "kind": "NamedType",
                    "loc": Object {
                      "end": 427,
                      "start": 421,
                    },
                    "name": Object {
                      "kind": "Name",
                      "loc": Object {
                        "end": 427,
                        "start": 421,
                      },
                      "value": "String",
                    },
                  },
                },
              },
            ],
            "kind": "InputObjectTypeDefinition",
            "loc": Object {
              "end": 430,
              "start": 348,
            },
            "name": Object {
              "kind": "Name",
              "loc": Object {
                "end": 369,
                "start": 354,
              },
              "value": "CreateUserInput",
            },
          },
          Object {
            "description": undefined,
            "directives": Array [],
            "fields": Array [
              Object {
                "defaultValue": undefined,
                "description": undefined,
                "directives": Array [],
                "kind": "InputValueDefinition",
                "loc": Object {
                  "end": 467,
                  "start": 453,
                },
                "name": Object {
                  "kind": "Name",
                  "loc": Object {
                    "end": 458,
                    "start": 453,
                  },
                  "value": "email",
                },
                "type": Object {
                  "kind": "NonNullType",
                  "loc": Object {
                    "end": 467,
                    "start": 460,
                  },
                  "type": Object {
                    "kind": "NamedType",
                    "loc": Object {
                      "end": 466,
                      "start": 460,
                    },
                    "name": Object {
                      "kind": "Name",
                      "loc": Object {
                        "end": 466,
                        "start": 460,
                      },
                      "value": "String",
                    },
                  },
                },
              },
              Object {
                "defaultValue": undefined,
                "description": undefined,
                "directives": Array [],
                "kind": "InputValueDefinition",
                "loc": Object {
                  "end": 487,
                  "start": 470,
                },
                "name": Object {
                  "kind": "Name",
                  "loc": Object {
                    "end": 478,
                    "start": 470,
                  },
                  "value": "password",
                },
                "type": Object {
                  "kind": "NonNullType",
                  "loc": Object {
                    "end": 487,
                    "start": 480,
                  },
                  "type": Object {
                    "kind": "NamedType",
                    "loc": Object {
                      "end": 486,
                      "start": 480,
                    },
                    "name": Object {
                      "kind": "Name",
                      "loc": Object {
                        "end": 486,
                        "start": 480,
                      },
                      "value": "String",
                    },
                  },
                },
              },
            ],
            "kind": "InputObjectTypeDefinition",
            "loc": Object {
              "end": 489,
              "start": 432,
            },
            "name": Object {
              "kind": "Name",
              "loc": Object {
                "end": 448,
                "start": 438,
              },
              "value": "LoginInput",
            },
          },
          Object {
            "description": undefined,
            "directives": Array [],
            "kind": "SchemaDefinition",
            "loc": Object {
              "end": 42,
              "start": 0,
            },
            "operationTypes": Array [
              Object {
                "kind": "OperationTypeDefinition",
                "loc": Object {
                  "end": 21,
                  "start": 9,
                },
                "operation": "query",
                "type": Object {
                  "kind": "NamedType",
                  "loc": Object {
                    "end": 21,
                    "start": 16,
                  },
                  "name": Object {
                    "kind": "Name",
                    "loc": Object {
                      "end": 21,
                      "start": 16,
                    },
                    "value": "Query",
                  },
                },
              },
              Object {
                "kind": "OperationTypeDefinition",
                "loc": Object {
                  "end": 40,
                  "start": 22,
                },
                "operation": "mutation",
                "type": Object {
                  "kind": "NamedType",
                  "loc": Object {
                    "end": 40,
                    "start": 32,
                  },
                  "name": Object {
                    "kind": "Name",
                    "loc": Object {
                      "end": 40,
                      "start": 32,
                    },
                    "value": "Mutation",
                  },
                },
              },
            ],
          },
        ],
        "kind": "Document",
      }
    `)
  })
})
