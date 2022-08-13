export const PARAM_ID = {
    type: "object",
    properties: {
        id: {
            type: "number",
            nullable: false,
        },
    },
    required: ["id"],
    additionalProperties: false,
}