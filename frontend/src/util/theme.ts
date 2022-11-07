import { autocompleteClasses } from "@mui/material";

const black = "#3C3C3B";
const white = "#ffff";
const teal = "#48808B";
const yellow = "#F7C86F";
const aqua = " #D5ECDF";
const lightBlue = "#98D9DE";
const turquoise = "#518D7E";
const bronze = "#C58C41";
const grey = "#A5A5A5";
const lightgrey = "#e8e8e8";

const theme = {
  breakpoints: {
    values: {
      xs: 481,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      light: aqua,
      main: yellow,
      dark: bronze,
      contrastText: white,
    },
    secondary: {
      light: aqua,
      main: teal,
      dark: bronze,
      contrastText: black,
    },
    divider: yellow,
  },

  typography: {
    fontFamily: "Montserrat",
  },
  body2: {
    fontSize: 0.8,
  },
  p: {
    fontFamily: "Montserrat !important",
    fontSize: "1rem",
    lineHeight: "21px",
    textAlign: "left",
  },
  a: {
    color: teal,
    display: "inline",
    textDecoration: "underline",
    padding: "0 3px",
    fontSize: "1rem",
    lineHeight: "19.5px",
  },

  emptyRenderValue: {
    color: "rgba(72, 128, 139, .4)",
    lineHeight: "1.4375em",
    letterSpacing: " 0.00938em",
  },

  h3: {
    fontFamily: "Montserrat",
    fontWeight: "600",
    fontStyle: "normal",
    color: teal,
    fontSize: "24px",
    lineHeight: "22px",
    padding: "2% 0",
  },
  buttonContained: {
    position: "relative",
    margin: "15px 15px 15px 15px",
    backgroundColor: yellow,
    color: "#fff",
    width: "9rem",
    height: "2.625rem",
  },

  buttonOutlined: {
    width: "157.43px",
    height: "46px",
    padding: "12px 32px",
    backgroundColor: "transparent",
    border: `1.5px solid ${yellow}`,
    color: yellow,
    fontSize: "1rem",
    lineHeight: "21.8px",
    margin: "0px 23px",
    borderRadius: "0",
    boxShadow: "none",
    textTransform: "initial",
  },

  buttonCta: {
    backgroundColor: "transparent",
    color: yellow,
    border: `1.54px solid ${yellow}`,
    boxSizing: " border-box",
    minWidth: "max-content",
    width: "188.43px",
    height: "46px",
    borderRadius: "0",
    textTransform: "initial",
    fontSize: "1rem",
    lineHeight: "21.86px",
    boxShadow: "none",
  },

  buttonCtaHeader: {
    padding: "12px 32px",
    marginRight: "1rem",
  },

  buttonCtaContained: {
    backgroundColor: yellow,
    color: white,
    border: `1.54px solid ${yellow}`,
    padding: "12px, 32px, 12px, 32px",
    boxSizing: " border-box",
    minWidth: "max-content",
    width: "188.43px",
    height: "46px",
    borderRadius: "0",
    textTransform: "initial",
    fontSize: "1rem",
    lineHeight: "21.86px",
    boxShadow: "none",

    "& span": {
      color: white,
      fontSize: "1rem",
    },
  },

  buttonText: {
    fontWeight: " 500",
    fontStyle: " normal",
    fontSize: "1rem",
    lineHeight: " 21.86px",
    color: "#3C3C3B",
    padding: "12px 32px",
    textTransform: "none",
  },

  animatedBtn: {
    width: "200px",
    height: "50px",
    lineHeight: "50px",
    border: "2px solid #fff",
    margin: "30px 0",
    position: "relative",
    cursor: "pointer",
    transition: "all 1s ease",
    overflow: "hidden",

    "&::before": {
      content: "",
      width: "100%",
      height: "100%",
      backgroundColor: "#fff",
      position: "absolute",
      transition: " all 1s ease",
    },
    " & > span": {
      textAlign: "center",
      textTransform: "uppercase",
      color: "#fff",
      fontWeight: "bold",
      fontSize: "16px",
      position: "relative",
      zIndex: "1",
      transition: "all 1s ease",
    },
  },

  circleBtn: {
    position: "relative",
    backgroundColor: "white",
    width: "86px",
    height: "86px",
    borderRadius: "50%",
    outline: `solid 1px ${turquoise}`,
    transition: " outline 0.3s linear",
    margin: " 0",
    left: "50%",
    transform: "translateY(-50%)",

    "&:hover": {
      outlineWidth: "20px",
    },
  },

  buttonExport: {
    backgroundColor: white,
    color: yellow,
    border: `1.54px solid ${yellow}`,
    padding: "12px, 32px, 12px, 32px",
    boxSizing: " border-box",
    minWidth: "max-content",
    width: "188.43px",
    height: "46px",
    borderRadius: "0",
    textTransform: "initial",
    fontSize: "1rem",
    lineHeight: "21.86px",

    "& a": {
      display: "flex",
      alignItems: "center",
      color: yellow,
      justifyContent: "center",
      position: "relative",
      top: "50%",
      transform: "translateY(-50%)",
    },
  },
  buttonsWrapper: {
    paddingTop: "10%",
  },
  menuItem: {
    color: black,
    textTransform: "capitalize",
    fontFamily: "Montserrat !important",
    fontWeight: "500 !important",
  },

  // Styling for forms
  form: {
    width: "100%",
    textAlign: "center",
    padding: "1%",
    position: "relative",
    left: "50%",
    transform: "translate(-50%)",
    height: "100%",

    "& .MuiGrid-item": {
      padding: "0",
    },
  },

  newLoopLocationForm: {
    width: "80%",
    textAlign: "center",
    marginTop: "5%",
    padding: "2%",
    position: "relative",
    left: "50%",
    transform: "translate(-50%)",
    backgroundColor: "#EDF2F3",
  },

  formGrid: {
    padding: "2% 0",
    display: "flex",
    flexDirection: "column",
  },

  formGridItem: {
    padding: "0",
  },

  threeColumnsFormWrapper: {
    height: "100%",
    textAlign: "center",
    backgroundColor: white,
    padding: "5% 0",
  },

  threeColumnsForm: {
    backgroundColor: " rgb(72, 128, 139, 0.1)",
    padding: "5%",
  },

  singleForm: {
    textAlign: "center",
    position: "relative",
    left: "50%",
    top: "50%",
    transform: "translate(-50%)",
    width: "60%",
  },
  formContainer: {
    position: "relative",
    left: "50%",
    transform: " translateX(-50%)",
    width: "80%",
    padding: "0 2%",
    height: "100%",
    maxWidth: "1440px",
  },

  formContainerLocation: {
    maxWidth: "1440px",
    position: "relative",
    left: "50%",
    transform: "translate(-50%)",
  },
  contactFormWrapper: {
    height: "100%",
    padding: "2% 10%",

    "& div": {
      "& div": {
        boxShadow: "none !important",
      },
    },

    "& h1": {
      fontFamily: "Playfair Display",
      fontSize: "36px",
      color: teal,
      textAlign: "left",
      fontWeight: "bold",
    },

    "& p": {
      textAlign: "left",
      margin: "1% 0",
      fontWeight: " 400",
      fontStyle: "normal",
      fontSize: "18px",
      lineHeight: " 24.59px",
      color: black,
    },
  },

  formImg: {
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },

  formSubmitActions: {
    display: "flex",
    justifyContent: "space-around",
    padding: "15px 0",
    width: "100% !important",
  },
  image: {
    margin: "20px auto auto auto",
  },
  pageTitle: {
    fontFamily: "Montserrat",
    fontSize: "36px",
    fontWeight: "600",
    lineHeight: "63.98px",
    color: teal,
    textAlign: "left",
  },
  loopName: {
    fontFamily: "Montserrat",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: "2rem ",
  },
  textField: {
    marginTop: "2%",
    border: "none",
    fontFamily: "Montserrat",
    float: "left",
  },

  textArea: {
    backgroundColor: white,
    padding: "1%",
    border: `1px solid ${teal} `,
    lineHeight: "1.1876em",
  },

  textAreaPlaceholder: {
    "&::placeholder": { opacity: 0.5 },
  },

  inputLabel: {
    color: "rgb(72, 128, 139, .4)",
  },

  button: {
    width: "157.43px",
    height: "46px",
    padding: "12px 32px",
    backgroundColor: yellow,
    border: `1.5px solid ${yellow}`,
    color: white,
    fontSize: "1rem",
    lineHeight: "21.8px",
    margin: "0px 23px",
    borderRadius: "0",
    boxShadow: "none",
    textTransform: "initial",

    "& img": {
      paddingLeft: "20px",
    },
  },
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 10,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  card: {
    minWidth: "500px",
    backgroundColor: "#EDF2F3",
    borderRadius: "0",
  },
  cardContent: {
    padding: "30px 30px 0 30px",
    "& h1": {
      fontSize: "1.5rem",
      textTransform: "uppercase",
      fontWeight: "bolder",
    },

    "& h2": {
      fontSize: "1.5rem",
      fontWeight: 500,
    },

    "& h3": {
      fontSize: "1rem",
      display: "flex",
      color: turquoise,
      margin: " 1% 0",
    },

    "& p": {
      fontSize: "1rem",
      margin: "5px 30px",
    },

    "& p#description": {
      margin: "0",
    },

    "& div#categories-container, div#sizes-container": {
      display: "flex",
      flexWrap: "wrap",
    },
  },

  cardsAction: {
    margin: "20px 0",
    display: "flex",
    justifyContent: "end",
  },
  geocoder: {
    height: "20px",
  },

  pageGrid: {
    transform: " translate(-50%, -50%)",
    position: "absolute",
    top: "50%",
    left: "50%",
    backgroundColor: "#EDF2F3",
    textAlign: "center",
    height: "80vh",
    width: "60%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: "800px",

    "& div": {
      position: "relative",
      left: "50%",
      transform: "translateX(-50%)",
      width: "80%",

      "& h3": {
        fontFamily: "Playfair Display",
        fontWeight: "700",
        fontStyle: "normal",
        fontSize: "48px",
        lineHeight: "63.98px",
        color: teal,
        textAlign: "left",
      },

      "& p": {
        textAlign: "left",
      },
    },
  },

  pageDescription: {
    textAlign: "left",
    padding: "5% 0",

    "& p": {
      display: "inline",
    },
  },

  /*styling for table*/
  tableCellRoot: {
    fontSize: "1rem",
    borderBottom: "none !important",
  },

  tableCell: {
    borderBottom: "1px solid #dee3ed",
  },

  actionsWrapper: {
    display: "flex",
  },

  input: {
    backgroundColor: "#fff",
    minWidth: "30rem",
    width: "30rem",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    minHeight: "1.4375em",
    borderRadius: "0",
    fontFamily: "Montserrat",
    border: `1px solid ${turquoise} !important`,
    color: "rgb(72, 128, 139, .4) !important",
    fontSize: "1rem",
    fontWeight: "400",
    lineHeight: " 1.4375em",
    letterSpacing: "0.00938em",
  },

  inputAdornment: {
    paddingLeft: "2%",
    color: "#518D7E !important",
  },

  iconButton: {
    padding: 10,
  },

  selectInputOutlined: {
    color: black,
    width: "100%",
    border: `1px solid ${turquoise}`,
    borderRadius: "0",
    backgroundColor: "transparent",
    textTransform: "capitalize",
  },
  selectOutlined: {
    padding: "10px",
  },

  selectInputStandard: {
    color: black,
    width: "100%",
    margin: "5px auto 5px auto",
    textTransform: "capitalize",
    "&:after": {
      borderColor: "#1976d2",
    },
  },
  selectStandard: {
    padding: "10px 10px 10px 0",
  },

  labelSelect: {
    marginTop: "10px",
    color: "rgb(72, 128, 139, .4)",
    transform: "translate(0px, -6px) scale(0.75)",
    "&:focus": {
      color: "#f7c86f",
    },
  },

  simpleSelect: {
    color: black,
    fontWeight: "500 !important",
  },

  formWrapper: {
    backgroundColor: "#EDF2F3",
    padding: "35px 15%",

    "& p#explanatory-text": {
      marginTop: "20px",
    },
  },

  formHelperLink: {
    "& .text": {
      display: "inline-block",
      fontSize: "14px",
    },
    "& .link": {
      display: "inline-block !important",
      fontSize: "14px",
      marginLeft: "5px",
      textDecoration: "underline",
      color: "black",
    },
  },

  label: {
    color: "rgba(0, 0, 0, 0.6)",
    fontStyle: "italic",
    fontWeight: "lighter",
    paddingLeft: "16px",
  },

  listItemTextFontSize: {
    fontSize: "0.875rem",
    textTransform: "capitalize",
  },

  menuItemSpacingAndColor: {
    letterSpacing: "0.00938em",
    "&$selected": {
      backgroundColor: "rgba(25, 118, 210, 0.08)",
      "&:focus-visible": {
        backgroundColor: "rgba(25, 118, 210, 0.08)",
      },
      "&:hover": {
        backgroundColor: "rgba(25, 118, 210, 0.12)",
      },
    },
  },
  selected: {},

  specificSpacing: {
    letterSpacing: "0.00938em",
  },

  alertContainer: {
    padding: "30px 50px",
    width: "40%",
    position: "absolute",
    zIndex: "1",
    backgroundColor: "#EDF2F3",
    left: "50%",
    transform: "translate(-50%)",
    marginTop: "1%",
    boxShadow:
      "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12) !important",

    " & h1": {
      color: teal,
      textAlign: "left",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: "800",
      lineHeight: "32.8px",
      padding: "1% 0",

      "& span": {
        fontStyle: "italic",
      },
    },

    " & p": {
      textAlign: "left",
      color: black,
      fontSize: "16px",
      lineHeight: " 21.86px",
      padding: "1% 0",
    },

    "& div": {
      display: "flex",
      justifyContent: "space-around",
      padding: "3% 0",
    },
  },

  closeIcon: {
    position: "absolute",
    right: "20px",
    cursor: "pointer",
  },

  footer: {
    paddingTop: "152px",
    backgroundColor: "#ffff",
    color: black,
    width: "100%",
    position: "relative",
    bottom: 0,
    zIndex: "11",

    "& a": {
      color: "inherit",
      fontSize: "1.3em",
    },
  },

  footerWrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },

  footerSections: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: "1% 0",
    maxWidth: "720px",
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    paddingLeft: "50px",
  },

  footerSection: {
    width: "50%",
    display: "flex",
    flexDirection: "column",

    "& h5": {
      fontStyle: " normal",
      fontSize: " 24px",
      lineHeight: "32.8px",
      color: teal,
      padding: "2% 0",
      fontWeight: "800",
    },

    "& a": {
      fontStyle: "normal",
      fontSize: "1rem",
      lineHeight: "21.86px",
      paddingTop: "8px",
      cursor: "pointer",

      "&:hover": {
        textDecoration: "none",
      },
    },
  },

  footerLegalWrapper: {
    backgroundColor: teal,
    width: "100%",

    "& p": {
      margin: "27px 80px",
      fontWeight: "300",
      fontStyle: "normal",
      fontSize: "16px",
      lineHeight: "21.86px",
      color: white,

      "& span": {
        color: white,
        fontWeight: "800",
      },
    },
  },

  legalLinksWrapper: {
    maxWidth: "1440px",
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  newLoopMap: {
    cursor: "pointer",
    filter: "drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25))",
  },

  inMapSearchBar: {
    position: "absolute",
    top: "20px",
    left: "20px",
  },

  legalLinks: {
    margin: "27px 80px",

    "& a": {
      fontStyle: "normal",
      fontSize: "1rem",
      lineHeight: "21.86px",
      paddingRight: " 34px",
      cursor: "pointer",
      color: white,
      "&:hover": {
        textDecoration: "none",
      },
    },
  },

  contactsWrapper: {
    height: "100%",
  },

  errorDiv: {
    margin: "0 !important",
    color: "red",
    textAlign: "initial",
  },
  searchBarContainer: {
    padding: "2% 0%",
  },
  customLabelStyle: {
    fontFamily: "Montserrat !important",
  },

  activeIcon: {
    color: `${teal} !important`,
  },

  completedIcon: {
    color: `${teal} !important`,
  },

  stepLabel: {
    fontFamily: "Montserrat",
    color: black,
  },

  popoverWrapper: {
    display: "flex",
    alignItems: "center",
    paddingTop: "10px",
    position: "absolute",
    left: "100%",
    top: "20%",
    opacity: "0.6",
  },

  formFieldWithPopover: {
    display: "flex",
    position: "relative",
  },
  icon: {
    color: teal,
  },

  infoAlert: {
    backgroundColor: "rgb(229, 246, 253)",
    color: " rgb(1, 67, 97)",
  },
  errorAlert: {
    backgroundColor: "rgb(253, 237, 237)",
    color: "rgb(95, 33, 32)",
  },
  successAlert: {
    backgroundColor: "rgb(237, 247, 237)",
    color: "rgb(30, 70, 32)",
  },

  landingPageDesktop: {
    backgroundColor: "#FFFFFF",
  },

  landingPageWrapper: {
    position: "relative",

    "& .landing-page-hero": {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      position: "relative",
      maxWidth: "1440px",
      left: "50%",
      transform: " translateX(-50%)",

      "& .hero-text-wrapper": {
        position: "relative",
        marginTop: "10%",
        padding: " 0 80px",

        "& h1": {
          fontSize: "7rem",
          lineHeight: "7rem",
          fontWeight: "900",
          color: "#518D7E",
          margin: "2rem 0",
          fontFamily: "'Playfair Display', serif",

          "& span": {
            WebkitTextStroke: "1.5px #518d7e",
            color: "transparent",
          },
        },

        "& p": {
          margin: " 2rem 0",
          color: "#3C3C3B",
          fontSize: "1.25rem",
          lineHeight: "2rem",
        },
      },

      "& .hero-image-wrapper": {
        marginTop: "5%",
        position: "relative",

        "& .image-wrapper": {
          position: "relative",
          overflow: "hidden",
          maxHeight: "80%",

          " & img": {
            width: "100%",
            height: "auto",
            position: "relative",
            top: "-10%",
          },

          "& p": {
            position: "absolute",
            color: "white",
            margin: "0",
            bottom: "138px",
            right: "-120px",
            transform: " rotate(-90deg)",
            fontSize: "12px",
          },
        },
        "& .icon": {
          width: "50%",
          height: "auto",
          color: turquoise,
          position: "relative",
          top: "50%",
          left: "50%",
          transform: " translate(-50%, -50%)",
        },
      },
    },
  },

  sectionsWrapper: {
    maxWidth: "1440px",
    left: "50%",
    transform: " translateX(-50%)",
    position: "relative",

    "& .single-section-wrapper": {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      margin: "100px 0",
      position: "relative",

      "& .image-wrapper": {
        position: "relative",
        height: "100%",
        overflow: "hidden",
        marginLeft: "10px",

        "& img": {
          width: "100%",
          height: "auto",
          position: "relative",
          left: "80px",
          zIndex: "1",
        },
      },
      "& .text-wrapper": {
        textAlign: "left",
        paddingLeft: "2%",
        display: "flex",
        flexDirection: "column",
        justifyContent: " space-between",
        width: "80%",

        "& h1": {
          fontFamily: "'Playfair Display', serif",
          fontWeight: " bold",
          fontSize: "12.5rem",
          WebkitTextStroke: `1.5px ${turquoise}`,
          color: "transparent",
          margin: "0",
          lineHeight: "96.3%",
        },

        "& h3": {
          color: turquoise,
          fontSize: "5rem",
          margin: "0",
          fontFamily: "'Playfair Display', serif",
          lineHeight: "4.8rem",
        },

        "& p": {
          color: turquoise,
          fontSize: "1.25rem",
          lineHeight: "2.5rem",
          margin: "0",

          "& a": {
            fontFamily: "'Playfair Display', serif",
            fontWeight: "900",
            fontSize: "24px",
            lineHeight: "40px",
            textDecoration: "underline",
            color: "#518d7e",
          },
        },
      },
    },

    "& .single-section-wrapper-2": {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      margin: "20% 0",
      position: "relative",

      "& .text-wrapper": {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",

        "& h1": {
          fontFamily: "Playfair Display, serif",
          fontWeight: " bold",
          fontSize: "16.8rem",
          WebkitTextStroke: "1.5px #48808B",
          color: "transparent",
          margin: "0",
          lineHeight: "96.3%",
        },

        "& div": {
          padding: "0 2%",
          width: "40%",

          "& h3": {
            color: "#48808B",
            fontFamily: "'Playfair Display', serif",
            fontSize: "5rem",
            lineHeight: "4.8rem",
            marginBottom: "2%",
          },

          "& p": {
            color: teal,
            textAlign: "left",
            fontSize: "1.25rem",
            height: " 2rem",
            fontWeight: "400",
            lineHeight: "32px",
            letterSpacing: "0em",

            "& a": {
              display: "block",
              margin: "2% 0",
            },
          },
        },
      },

      "& .circles-frame": {
        position: "absolute",
        right: "0",
        top: "-10%",
        zIndex: "11",
      },
    },

    "& .single-section-wrapper-3": {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      position: "relative",
      margin: "15% 0",

      "& .circles-frame": {
        position: "absolute",
        left: "15%",
        top: "-10%",
      },

      "& .background-box": {
        justifySelf: "center",
        position: "absolute",
        height: "80%",
        backgroundColor: "#F7C86F",
        width: "722px",
        opacity: " 0.3",
      },

      "& .image-wrapper": {
        position: "relative",
        marginTop: "calc(549px / 2)",
        transform: "translateY(-50%)",
        display: "flex",
        top: "30px",
        width: "90%",
        justifySelf: "flex-end",

        "& img": {
          width: "100%",
          height: "auto",
        },
      },

      "& .text-wrapper": {
        padding: "0 5%",
        position: "relative",
        bottom: "20%",

        "& h1": {
          fontFamily: "'Playfair Display', serif",
          fontWeight: " bold",
          fontSize: "16.8rem",
          WebkitTextStroke: `2px ${bronze}`,
          color: "transparent",
          margin: "0",
          lineHeight: "96.3%",
        },

        "& div": {
          marginRight: "15%",

          "& h3": {
            color: bronze,
            fontFamily: "'Playfair Display', serif",
            fontSize: "5rem",
            lineHeight: "4.8rem",
            marginBottom: "10%",
            marginTop: "5%",
          },

          "& p": {
            color: bronze,
            textAlign: "left",
            fontSize: "1.25rem",
            height: " 2rem",
            fontWeight: "400",
            lineHeight: "32px",
            letterSpacing: "0em",
          },
        },
      },
    },
  },

  //donations
  donationsWrapper: {
    position: "relative",
    margin: "100px 0",
    width: "40%",
    maxWidth: "1440px",
    left: "50%",
    transform: " translateX(-50%)",

    "& .background-box": {
      justifySelf: "center",
      position: "absolute",
      height: "298px",
      backgroundColor: yellow,
      width: "60%",
      opacity: " 0.3",
      top: "30%",
      left: "50%",
      transform: "translateX(-50%)",
    },

    " & div": {
      "& .image-wrapper": {
        position: "relative",
        width: "480px",
        height: "357px",
        display: "flex",
        left: "197px",

        "& img": {
          width: "100%",
          height: "auto",
          objectFit: "cover",
        },
      },

      "& .text-wrapper": {
        paddingRight: "50%",
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: "column",

        "& h3": {
          color: bronze,
          fontFamily: "'Playfair Display', serif",
          fontSize: "4.5rem",
          lineHeight: "5rem",
          fontWeight: "700",
          margin: " 0",
          paddingBottom: "28px",
        },

        "& p": {
          color: black,
          textAlign: "left",
          fontSize: "1rem",
          lineHeight: " 1.5rem",
          fontWeight: "400",
          fontFamily: "Montserrat",
          paddingBottom: "16px",
          margin: "0",

          "& span": {
            fontFamily: "Montserrat",
            fontWeight: "900",
          },
        },

        "& button": {
          width: "105px",
          height: " 35px",
          border: ` 2px solid ${bronze} `,
          color: bronze,
          backgroundColor: "transparent",
          fontSize: "14px",
          lineHeight: "19px",
          fontWeight: "500",
        },
      },
    },
  },

  imageAnimatedWrapper: {
    outline: `solid 1px ${teal}`,
    transition: " outline 0.5s linear",
    margin: " 0.5em",
    position: "relative",
    overflow: "hidden",
    height: "90%",
    width: "90%",

    "&:hover": {
      outlineWidth: "80px",
    },

    "& img": {
      width: "100%",
      height: "auto",
      position: "relative",
      zIndex: "111",
    },
  },

  projectNumbersWrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    maxWidth: "1440px",
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    margin: "50px 0",

    "& .inner-wrapper": {
      backgroundColor: turquoise,
      display: "flex",
      flexDirection: "column",
      paddingLeft: "5%",

      "& h1": {
        fontFamily: "Playfair Display",
        color: white,
        fontSize: "6rem",
      },
    },

    "& .images-wrapper": {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",

      "& *": {
        position: "relative",
        width: "100%",
      },
    },
  },

  aboutSectionWrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    padding: "100px 0",
    position: "relative",
    maxWidth: "1440px",
    left: "50%",
    transform: " translateX(-50%)",

    "& .image-wrapper": {
      "& img": {
        width: "100%",
        height: "auto",
        objectFit: "cover",
      },
    },

    "& .text-wrapper": {
      paddingRight: "15%",
      paddingLeft: "5%",
      position: "relative",

      "& h3": {
        color: teal,
        fontFamily: "Playfair Display",
        fontSize: "3rem",
        lineHeight: "4rem",
        fontWeight: "bold",
        margin: "0",
      },

      "& p": {
        color: teal,
        fontSize: "1.25rem",
        lineHeight: "2rem",
        fontWeight: "normal",
      },

      "& h5": {
        "& a": {
          color: teal,
          fontSize: "1.5rem",
          lineHeight: "2rem",
          fontWeight: "900",
          textDecoration: "underline",
          fontFamily: "Playfair Display",
        },
      },
    },
  },

  supportersSection: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    margin: "0 5%",
    paddingBottom: "100px",

    "& .background-box": {
      position: "absolute",
      height: "252px",
      backgroundColor: aqua,
      opacity: "0.3",
      width: "721px",
      left: "-5%",
      transform: "translateY(50%)",
    },

    "& h2": {
      color: teal,
      fontFamily: "Playfair Display",
      fontSize: "5rem",
      lineHeight: "96.3%",
      fontWeight: "bold",
      zIndex: "1",
      marginBottom: "1%",
    },

    "& h5": {
      color: teal,
      fontSize: "1.5rem",
      lineHeight: "2rem",
      fontWeight: "900",
      fontFamily: "Playfair Display",
      zIndex: "1",
      marginTop: "1%",

      "& a": {
        color: teal,
        fontSize: "1.5rem",
        lineHeight: "2rem",
        fontWeight: "900",
        fontFamily: "Playfair Display",
        zIndex: "1",
        marginTop: "1%",
      },
    },

    "& .logos-wrapper": {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-evenly",
      zIndex: "1",
      maxWidth: "1440px",
      left: "50%",
      transform: " translateX(-50%)",
      position: "relative",
      padding: "2% 0",
      alignItems: "center",
      flexWrap: "wrap",

      "& > div": {
        margin: "0 5%",

        "& > a": {
          "& > img": {
            width: "100%",
            height: "auto",
          },
        },
      },
    },
  },
  countersWrapper: {
    display: "flex",
    flexWrap: "wrap",

    "& .isVisible": {
      position: "relative",
      width: "50%",
      paddingLeft: "5%",

      "& h1": {
        fontFamily: "Playfair Display",
        color: "transparent",
        WebkitTextStroke: "1px white",
        fontSize: "78px",
        margin: "1% 0",
      },

      "& h3": {
        fontFamily: "Playfair Display",
        color: "white",
        fontSize: "49px",
        margin: "1% 0",
      },
    },
  },
  counterLinkWrapper: {
    position: "relative",
    width: "50%",
    paddingLeft: "5%",

    "& div": {
      height: "105px",
      display: "flex",
      alignItems: "center",

      "& a": {
        backgroundColor: "#F7C86F",
        width: "52px",
        height: "52px",
        borderRadius: "50%",
        display: "inline-block",
        top: "50%",
        position: "relative",
        transform: "translateY(-50%)",

        "& .icon": {
          position: "relative",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(-90deg) ",
          color: "white",
        },
      },
    },

    "& h3": {
      fontFamily: "Playfair Display",
      color: "white",
      fontSize: "49px",
      margin: "1% 0",
    },
  },
  progressBox: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    padding: "5% 0",

    "& h3": {
      color: black,
      fontFamily: "Montserrat",
    },
  },
  progressAnimation: {
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    color: turquoise,
  },
  progressBarWrapper: {
    width: "60%",
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "2% 0",
  },
  gridItemAlignedEnd: {
    display: "flex",
    alignItems: "flex-end",
  },
  donationsContainer: {
    justifyContent: "flex-start",
    width: "50%",
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#EDF2F3",
    padding: "2% 5%",
    margin: "2% 0",
    maxWidth: "800px",
  },
  legalPagesWrapper: {
    width: "40%",
    maxWidth: "1440px",
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "left",
    padding: "2% 0",

    "& p": {
      lineHeight: "30px",
      textAlign: "left",
      fontSize: "16px",
      padding: "2% 0",

      "& a": {
        color: teal,
      },

      "& span": {
        fontWeight: "bold",
      },

      "& ol": {
        "& li": {
          padding: "1% 0",

          "& a": {
            color: teal,
          },
        },
      },
    },

    "& img": {
      width: "100%",
      height: "auto",
      padding: "5% 0",
    },
  },
  MuiAccordionRoot: {
    borderBottom: `1px solid ${lightgrey}`,
    borderBottomLeftRadius: "0 !important",
    borderBottomRightRadius: "0 !important",
  },
  AccordionTypographyRoot: {
    fontWeight: `600`,
  },

  borderlessTableCellRoot: {
    borderBottom: "none",
  },
  headRowTableCellRoot: {
    paddingBottom: 24,
    borderBottom: "1px solid #C4C4C4",
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "17px",
    color: "#C4C4C4",
  },
  fieldSubheadingTypographyRoot: {
    fontSize: 16,
    color: "#068C7C",
  },
  switchGroupRoot: {
    marginTop: 10,
  },
  underlinedLink: {
    textDecoration: "underline",
    color: "#F7C86F",
    display: "inline-block",
    margin: "15px 0",
    width: "80%",
  },
  gridItemsNoPadding: {
    padding: 0,
  },
};
export default theme;
