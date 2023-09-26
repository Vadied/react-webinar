import { Alert } from "@mui/material";

const ErrAlert = ({ content }) => {
  if (!content) return <></>;

  return <Alert severity="error">{content}</Alert>;
};

export default ErrAlert;
