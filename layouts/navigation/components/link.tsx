import { useCallback } from "react";

/* Store */
import { useNavigationDrawer, useNavigationStore } from "@/src/stores";

/* Types */
import type { Routes } from "@/src/stores/navigation";

type LinkProps = {
  text: string;
  route: string;
  children?: React.ReactNode;
  className?: string;
  scrollIntoView: (el: Element) => void;
};

export const Link: React.FC<LinkProps> = (props) => {
  const { className = "", scrollIntoView } = props;
  const { route, setRoute } = useNavigationStore();
  const { setDrawerOpen } = useNavigationDrawer();

  const handler = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      const element = document.getElementById(props.route.replace("/", ""));
      if (element) scrollIntoView(element);

      setDrawerOpen(false);
      setRoute(props.route.replace("/", "") as Routes);
    },
    [props.route, scrollIntoView, setDrawerOpen, setRoute]
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
