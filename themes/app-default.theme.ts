import { extendTheme } from "@chakra-ui/react";

const appDefaultTheme = extendTheme({
    styles: {
        global: {
            body: {
                bg: 'app-gray',
                color: 'white',
                fontFamily: 'Work Sans'
            }
        }
    },
    colors: {
        'app-gray': '#181924',
        'app-gray2': '#22232F',
        'app-gray3': '#2A2C3C'
    }
});

export default appDefaultTheme;
