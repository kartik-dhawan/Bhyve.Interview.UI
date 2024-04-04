export const styles = {
  searchCardList: {
    position: "relative",
    backgroundColor: "#d2d2d2",
    margin: "8px 0px",
    borderRadius: "6px",
    width: "100%",
    padding: "8px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    maxHeight: "70vh",
    overflow: "scroll",
    zIndex: 20000,
  },
  searchCardListItem: {
    backgroundColor: "#e9e9e9",
    borderRadius: "6px",
    "&:hover": {
      backgroundColor: "#e2e2e2",
    },
    zIndex: 2000000000,
  },
}
