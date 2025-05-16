export default function mgl(hljs) {
    const KEYWORDS = [
        "class",
        "enum",
        "error",
        "annotation",
        "constructor",
        "pub",
        "virtual",
        "func",
        "if",
        "else",
        "case",
        "for",
        "loop",
        "break",
        "continue",
        "pkg",
        "uses",
        "raise",
        "result",
        "as",
        "async",
        "await",
    ]
    const TYPES = [
        "i8",
        "u8",
        "i16",
        "u16",
        "i32",
        "u32",
        "i64",
        "u64",
        "f32",
        "f64",
        "char",
        "bool",
        "str",
    ]
    const BUILT_INS = [
        "self",
    ]
    const LITERALS = [
        "true",
        "false",
        "nul",
        "eof",
    ]
    const IDENT_RE = /[a-zA-Z]{1}[a-zA-Z0-9]*/
    const ANNOTATION = {
      className: 'meta',
      begin: '^@' + IDENT_RE + '*',
      contains: [
        {
          begin: /\(/,
          end: /\)/,
          contains: ["self"]
        }
      ]
    };
    const MULTI_LINE_COMMENT = 
    {
        className: "comment",
        begin: /\/\/\//,
        end: /\/\/\//
    };
    return {
        name: "mgl",
        aliases: ["mgl"],
        keywords: {
            keyword: KEYWORDS,
            type: TYPES,
            built_in: BUILT_INS,
            literal: LITERALS,
        },
        contains: [
            MULTI_LINE_COMMENT,
            hljs.C_LINE_COMMENT_MODE,
            hljs.QUOTE_STRING_MODE,
            ANNOTATION,
            {
                match: [
                    /\b(?:class|enum|annotation|error)/,
                    /\s+/,
                    IDENT_RE,
                ],
                className: {
                    1: "keyword",
                    3: "title.class"
                }
            },
        ],
    }
}