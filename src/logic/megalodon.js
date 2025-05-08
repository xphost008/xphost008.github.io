export default function mgl(hljs) {
    const KEYWORDS = [
        "pub",
        "func",
        "class",
        "use",
        "pkg",
    ]
    const TYPES = [
        "i8",
        "i16",
        "i32",
        "i64",
        "f32",
        "f64",
        "char",
        "bool",
        "str",
    ]
    return {
        name: "mgl",
        aliases: ["mgl"],
        keywords: {
            keyword: KEYWORDS,
            type: TYPES,
        },
        contains: [
            {
                className: "comment",
                begin: /\/\/\//,
                end: /\/\/\//
            },
            hljs.C_LINE_COMMENT_MODE,
            hljs.QUOTE_STRING_MODE,
        ]
    }
}