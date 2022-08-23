import { styled } from "@mui/material/styles";

const FlagLabelRoot = styled("span")(
  ({ bgColor, color, theme, otherStyles }) => {
    return {
      alignItems: "center",
      backgroundColor: bgColor,
      borderRadius: 12,
      color,
      cursor: "default",
      display: "inline-flex",
      flexGrow: 0,
      flexShrink: 0,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(12),
      lineHeight: 2,
      fontWeight: 600,
      justifyContent: "center",
      letterSpacing: 0.5,
      minWidth: 20,
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      ...otherStyles,
    };
  }
);

export const FlagLabel = ({
  color = "primary",
  bgColor = "primary",
  children,
  otherStyles = {},
}) => {
  return (
    <FlagLabelRoot bgColor={bgColor} color={color} otherStyles={otherStyles}>
      {children}
    </FlagLabelRoot>
  );
};
