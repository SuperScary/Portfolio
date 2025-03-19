import Prism from 'prismjs';
import 'prismjs/components/prism-clike';

Prism.languages.gecco = Prism.languages.extend('clike', {
    'keyword': /\b(?:exp|func|def|print|scope|let|var|const|constant|if|else|while|for|return|class|include|pub|static|abstract|interface|extends|implements|try|catch|finally|throw|new|this|super|true|false|null|undefined|any)\b/,
    'type': /\b(?:String|Number|Void|Boolean|Int|Float|Double|Char|Array|Object|Map|Set|List|Tuple|Optional|Result|Error|Promise|Stream|Buffer|File|Path|DateTime|Regex|Json|Xml|Html|Css|Sql|Query|Request|Response|Socket|Server|Client|Database|Table|Column|Index|Constraint|Trigger|View|Procedure|Function|Module|Package|Namespace|Enum|Union|Intersection|Generic|Type|Interface|Class|Struct|Trait|Mixin|Extension|Alias|Import|Export|Default|Public|Private|Protected|Internal|External|Abstract|Final|Static|Const|Readonly|Async|Await|Yield|Defer|Break|Continue|Return|Throw|Try|Catch|Finally|If|Else|While|For|Do|Switch|Case|Default|Match|When|Then|Else|End|Begin|Start|Stop|Pause|Resume|Cancel|Abort|Exit|Quit|Restart|Reset|Clear|Delete|Remove|Insert|Update|Select|From|Where|Group|Order|Having|Limit|Offset|Join|Left|Right|Inner|Outer|Cross|Natural|Using|On|As|Is|In|Not|And|Or|Xor|Nor|Nand|Implies|Equivalent|Greater|Less|Equal|NotEqual|GreaterEqual|LessEqual|Contains|StartsWith|EndsWith|Matches|Includes|Excludes|Subset|Superset|Intersects|Disjoint|Empty|Null|Undefined|NaN|Infinity|True|False)\b/,
    'operator': /[+\-*/%=<>!&|~^?]+/,
    'number': /\b(?:0x[\da-f]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,
    'string': {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: true
    },
    'comment': [
        {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: true,
            greedy: true
        },
        {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: true,
            greedy: true
        }
    ],
    'function': /\b(?:func|print)\b|\b\w+(?=\s*\()/,
    'class-name': /\b\w+(?=\s*\{)/,
    'variable': /\b(?:let|var|const|constant)\s+(\w+)\b/,
    'punctuation': /[{}[\];(),.:]/
});

Prism.languages.insertBefore('gecco', 'string', {
    'template-string': {
        pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|[^`])*`/,
        greedy: true,
        inside: {
            'interpolation': {
                pattern: /\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                inside: {
                    'interpolation-punctuation': {
                        pattern: /^\$\{|\}$/,
                        alias: 'punctuation'
                    },
                    'rest': Prism.languages.gecco
                }
            },
            'string': /[\s\S]+/
        }
    }
}); 