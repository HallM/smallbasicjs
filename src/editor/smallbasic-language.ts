const tokenProvider = {
  ignoreCase: true,

  keywords: [
    'Else',
    'ElseIf',
    'EndFor',
    'EndIf',
    'EndSub',
    'EndWhile',
    'For',
    'Goto',
    'If',
    'Step',
    'Sub',
    'Then',
    'To',
    'While'
  ],

  operators: [
    '=',
    '<>',
    '>',
    '<',
    '>=',
    '<=',
    '*',
    '/',
    '+',
    '-',
    'and',
    'or'
  ],

  predefined: [
    'Array',
    'Clock',
    'Controls',
    'Desktop',
    'Dictionary',
    'File',
    'Flickr',
    'GraphicsWindow',
    'ImageList',
    'Math',
    'Mouse',
    'Network',
    'Program',
    'Shapes',
    'Sound',
    'Stack',
    'Text',
    'TextWindow',
    'Timer',
    'Turtle'
  ],

  symbols:  /[=><+\-*\/]+/,

  escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,

  tokenizer: {
    root: [
      [/\.[a-z_$][\w$]*/, 'predefined'],
      [/[a-z_$][\w$]*/, { cases: { '@keywords': 'keyword',
                                  '@predefined': 'constant',
                                  '@default': 'identifier' } }],

      { include: '@whitespace' },

      [/[{}()\[\]]/, '@brackets'],
      [/[<>](?!@symbols)/, '@brackets'],
      [/@symbols/, { cases: { '@operators': 'operator',
                              '@default'  : '' } } ],

      [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
      [/\d+/, 'number'],

      [/[;,.]/, 'delimiter'],

      [/"([^"\\]|\\.)*$/, 'string.invalid' ],  // non-teminated string
      [/"/,  { token: 'string.quote', bracket: '@open', next: '@string' } ],

      [/'[^\\']'/, 'string'],
      [/(')(@escapes)(')/, ['string','string.escape','string']],
      [/'/, 'string.invalid']
    ],

    comment: [
    ],

    string: [
      [/[^\\"]+/,  'string'],
      [/@escapes/, 'string.escape'],
      [/\\./,      'string.escape.invalid'],
      [/"/,        { token: 'string.quote', bracket: '@close', next: '@pop' } ]
    ],

    whitespace: [
      [/[ \t\r\n]+/, 'white'],
      [/'.*$/,    'comment'],
    ],
  },
};

const completionProvider = {
  provideCompletionItems: (model, position) => {
    var textUntilPosition = model.getValueInRange({startLineNumber: position.lineNumber, startColumn: 1, endLineNumber: position.lineNumber, endColumn: position.column-1});

    if (/TextWindow\.$/i.test(textUntilPosition)) {
      return [
        {
          label: 'ForegroundColor',
          kind: monaco.languages.CompletionItemKind.Snippet,
          insertText: 'ForegroundColor = "{{color}}"',
          documentation: 'Set the color of the text in the TextWindow'
        }
      ];
    }

    return [
      {
        label: 'TextWindow',
        kind: monaco.languages.CompletionItemKind.Text
      }, {
        label: 'While',
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: [
          'While {{condition}}',
          '\t{{}}',
          'EndWhile'
        ].join('\n'),
        documentation: 'While loop'
      }
    ]
  }
};

export {tokenProvider, completionProvider};
