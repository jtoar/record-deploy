module.exports = {
  enums: [],
  models: [
    {
      name: "User",
      dbName: null,
      fields: [
        {
          name: "id",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: false,
          isId: true,
          isReadOnly: false,
          type: "Int",
          hasDefaultValue: true,
          default: {
            name: "autoincrement",
            args: []
          },
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "email",
          kind: "scalar",
          isList: false,
          isRequired: true,
          isUnique: true,
          isId: false,
          isReadOnly: false,
          type: "String",
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false
        },
        {
          name: "name",
          kind: "scalar",
          isList: false,
          isRequired: false,
          isUnique: false,
          isId: false,
          isReadOnly: false,
          type: "String",
          hasDefaultValue: false,
          isGenerated: false,
          isUpdatedAt: false
        }
      ],
      isGenerated: false,
      primaryKey: null,
      uniqueFields: [],
      uniqueIndexes: []
    }
  ],
  types: []
};
