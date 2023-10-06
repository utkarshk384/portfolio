import { styled } from "@/styles/stitches";

type ProjectItemType = {
  Container: typeof Container;
  Details: typeof Details;
  TitleWrapper: typeof TitleWrapper;
  ImageWrapper: typeof ImageWrapper;
};

export const StyledProjectItem = {} as ProjectItemType;

const Container = styled("div", {
  display: "grid",
  gridTemplateRows: "1fr 1fr",
  gap: "2rem",

  "@lg": {
    gridTemplateRows: "1fr",
    gridTemplateColumns: "1fr 1fr",
  },
});

const Details = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "3rem",
});

const TitleWrapper = styled("div", {
  cursor: "pointer",
  display: "flex",
  paddingBottom: "0.2rem",
  gap: "0.5rem",
});

const ImageWrapper = styled("div", {
  display: "flex",
  position: "relative",
});

StyledProjectItem.Container = Container;
StyledProjectItem.Details = Details;
StyledProjectItem.TitleWrapper = TitleWrapper;
StyledProjectItem.ImageWrapper = TitleWrapper;
