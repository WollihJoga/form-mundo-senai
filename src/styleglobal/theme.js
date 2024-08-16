import { extendTheme } from "@chakra-ui/react";


export const theme = extendTheme({

    styles:{
        global:{
            "html , body":{
                fontSize:"20px",
                bgImage:"url('https://i.pinimg.com/736x/7a/8c/a0/7a8ca0fd9bedaf48a6e2bbd57bc5468e.jpg')",
                bgPosition:"center",
                bgRepeat:"no-repeat",
                bgSize:"cover",
                width:"100vw",
                height:"100vh",
                filter:"brightness(0.9) contrast(1.2)"
                
            },
        },
    },

});
