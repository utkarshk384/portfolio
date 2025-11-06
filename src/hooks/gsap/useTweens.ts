import gsap from "gsap";
import { useRef, useEffect } from "react";

type ReturnType<T> = React.MutableRefObject<T | null>;
type RefType<T> = React.MutableRefObject<T>;

export type GsapContextFn<T> = (
  context: gsap.Context,
  ref: RefType<T>
) => Function | any | void;

export const useTweens = <T extends HTMLElement = HTMLDivElement>(
  fn: GsapContextFn<T>
): ReturnType<T> => {
  const scopeRef = useRef<T>(null);

  useEffect(() => {
    if (!scopeRef.current) return;

    const gsapCtx = gsap.context(
      (ctx) => fn(ctx, scopeRef as RefType<T>),
      scopeRef.current
    );

    return () => {
      gsapCtx.revert();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return scopeRef;
};
