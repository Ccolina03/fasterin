
import { buildLegacyTheme } from "sanity";
//theme background
//customizing color general attributes
//using props to predefine values


//css variables
const props = {
    "--my-white": "#fff",
    "--my-black": "#1a1a1a",
    "--my-papafam-brand": "#F7AB0A",
    "--my-red": "#db4437",
    "--my-yellow": "#fb4b400",
    "--my-green": "#0f9d58",

};

export const myTheme = buildLegacyTheme({

    //base theme colors
    "--black": props["--my-black"],
    "--white": props["--my-white"],

    "--gray": "#666",
    "--gray-base": "#666",

    "--component-bg": props["--my-black"],
    "--component-text-color": props["--my-white"],

    //brand
    "--brand-primary": props["--my-papafam-brand"],
    
//Default Button

    "--default-button-color": "#666",
    "--default-button-primary-color": props["--my-papafam-brand"],
    "--default-button-success-color": props["--my-green"],
    "--default-button-warning-color": props["--my-yellow"],
    "--default-button-danger-color": props["--my-red"],

//Navbar
"--main-navigation-color": props["--my-black"],
"--main-navigation-color--inverted": props["--my-white"],

//State: 
"--state-success-color": props["--my-green"],
"--state-warning-color": props["--my-yellow"],
"--state-danger-color": props["--my-red"],
"--state-info-color": props["--my-papafam-brand"],


"--focus-color": props["--my-papafam-brand"],
    
    
});