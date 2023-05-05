import { useCallback } from "react";

/* Store */
import { useNavigationStore } from "@/src/stores";

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
  const { route, setRoute, setDrawerOpen } = useNavigationStore();

  const handler = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      setDrawerOpen(false);
      setRoute(props.route.replace("/", "") as Routes);
    },
    [props.route, setDrawerOpen, setRoute]
  );

  return (
    <a
      href={props.route}
      onClick={handler}
      className={`${className} ${
        route === props.route.replace("/", "")
          ? "text-accent font-bold"
          : "text-content"
      }`}
    >
      {props.text}
    </a>
  );
};
