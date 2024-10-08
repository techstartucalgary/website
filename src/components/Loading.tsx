import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  return (
    <div style={{ color: "white", minHeight: "100vh", textAlign: "center" }}>
      <CircularProgress color="success" size={70} />
    </div>
  );
};
export default Loading;
