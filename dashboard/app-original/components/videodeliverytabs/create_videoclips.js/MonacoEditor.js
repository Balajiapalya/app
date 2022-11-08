import Editor, { useMonaco } from "@monaco-editor/react";
import { useState,useEffect } from 'react';
const MonacoEditor = ({codeData,setCodeData}) => {
    const monaco=useMonaco()
    useEffect(()=>{
        if(monaco){
         monaco.editor.defineTheme('my-theme', {
             base: 'vs',
             inherit: true,
             rules:[{ background: '#ffefef' }],
             // rules: [{ token: 'comment.js', foreground: '008800' } ],
             colors: {
               'editor.background': '#f7f7f7',
               'editor.lineHighlightBackground': '#00000000',
               'editor.lineHighlightBorder': '#00000000',
             //   'editor.foreground': '#000000',
               'editorIndentGuide.background': '#ecebec',
               'editorIndentGuide.activeBackground': '#e0e0e0',
             //   'scrollbarSlider.background': '#b1c4f8'       
             },  
       });
       monaco.editor.setTheme('my-theme')
        }
     },[monaco])
     const handleChange = (e) => {
        setCodeData(e)
    }
    return (
        <>
            <Editor
                value={codeData}
                defaultLanguage="json"
                id="prettyJSONFormat"
                theme="my-theme"
                // className={`${styles.code_input} form_control`}
                onChange={(e) => handleChange(e)}
                options={{
                    minimap: {
                        enabled: false,
                    },
                    fontSize: 12,
                    fontFamily: 'Inter-Regular',
                    scrollbar: {
                        verticalScrollbarSize: 12,
                        horizontalScrollbarSize: 12
                    }
                    // "bracketPairColorization.enabled": true
                }}

            />
        </>
    )
}
export default MonacoEditor