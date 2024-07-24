import { useCallback } from "react";
import NextLink from "next/link";

/* Store */
import { useNavigationDrawer, useNavigationStore } from "@/src/stores";

/* Types */
import type { Routes } from "@/src/stores/navigation";

type LinkProps = {
  text: string;
  route: string;
  children?: React.ReactNode;
  className?: string;
};

export const Link: React.FC<LinkProps> = (props) => {
  const { className = "" } = props;
  const { route, setRoute } = useNavigationStore();
  const { setDrawerOpen } = useNavigationDrawer();

  const handler = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      scrollIntoview(props.route.replace("/", ""));
      setDrawerOpen(false);
      setRoute(props.route.replace("/", "") as Routes);
    },
    [props.route, setDrawerOpen, setRoute]
  );

  return (
    <a
      href={props.route}
      onClick={handler}
      className={`${className} font-cookie ${
        route === props.route.replace("/", "")
          ? "text-accent font-bold"
          : "text-content"
      }`}
    >
      {props.text}
    </a>
  );
};

const scrollIntoview = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth" });
};
