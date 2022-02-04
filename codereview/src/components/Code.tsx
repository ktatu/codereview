import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx"
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism"

SyntaxHighlighter.registerLanguage("jsx", jsx)

const Code = ({ codeStr }: { codeStr: string }) => {
    //const [code, setCode] = useState('')

    //const testCode = true === true ? true : false

    const handleClick = (lineNum: any) => {
        console.log("click ", lineNum )
    }

    return (
        <SyntaxHighlighter
            language="jsx"
            showLineNumbers
            wrapLines
            style={xonokai}
            lineProps={(lineNumber: any) => ({
                onClick() {
                    handleClick(lineNumber)
                }
            })}
        >
            {codeStr}
        </SyntaxHighlighter>
    )
}

export default Code