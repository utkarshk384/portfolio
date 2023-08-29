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
  gridTemplateColumns: "2fr 1fr",
});

const Details = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "3rem",
});

const TitleWrapper = styled("div", {
  cursor: "pointer",
  display: "flex",
  borderBottom: "1px solid $yellow",
  paddingBottom: "0.2rem",
  gap: "0.5rem",
});

const ImageWrapper = styled("div", {
  display: "flex",
  position: "relative",
  ".carousel-root": {
    overflow: "visible !important",
  },
});

StyledProjectItem.Container = Container;
StyledProjectItem.Details = Details;
StyledProjectItem.TitleWrapper = TitleWrapper;
StyledProjectItem.ImageWrapper = TitleWrapper;
