"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[7053],{73065:function(e,t,r){r.d(t,{TC:function(){return i}});var n=r(50959),o=r(11527);const c={light:{background:"#fff",color:"#000"},dark:{background:"#171717",color:"#fff"}},u=(0,n.createContext)(void 0);function i(){const e=(0,n.useContext)(u);if(!e)throw new Error("useThemeContext must be used within ThemeProvider");return e}t.ZP=({children:e})=>{const[t,r]=(0,n.useState)("dark");const i={theme:c[t],toggleTheme:function(){r("light"===t?"dark":"light")}};return(0,o.jsx)(u.Provider,{value:i,children:e})}},87053:function(e,t,r){r.r(t);var n=r(6329),o=r(73065),c=r(11527);t.default=()=>{const{toggleTheme:e}=(0,o.TC)();return(0,c.jsx)(n.ZP,{onClick:e,children:"toggle the theme"})}}}]);