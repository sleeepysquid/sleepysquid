import Typography from "typography";
// Used to create Global styles

const typography = new Typography({ 
    baseFontSize: "16px",
    baseLineHeight: 2,
    headerFontFamily: [
        "bree",
        "sans-serif",
        "Segoe UI", 
        "Frutiger", 
        "Frutiger Linotype", 
        "Dejavu Sans",
        "Helvetica Neue",
        "Arial"
    ],
    bodyFontFamily: [
        "Futura",
        "sans-serif",
        "Segoe UI", 
        "Frutiger", 
        "Frutiger Linotype", 
        "Dejavu Sans",
        "Helvetica Neue",
        "Arial"
    ],
});

export default typography;