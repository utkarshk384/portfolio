import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import CustomEase from "gsap/CustomEase";
import * as Dialog from "@radix-ui/react-dialog";

gsap.registerPlugin(CustomEase);

/* Stitches */
import { styled } from "@/stitches.config";
import { Transition } from "react-transition-group";

type Props = {
  TriggerComponent?: React.FC<unknown>;
  children?: React.ReactNode;
  setDrawerOpen: (isOpen: boolean) => void;
  isDrawerOpen: boolean;
  contentClasses?: string;
  onMount?: () => void;
};

const Animation = (ref: HTMLDivElement, isDrawerOpen: boolean) => {
  const tweenOpts: gsap.TweenVars = {
    ease: CustomEase.create("custom", "M0,0 C0.82,0.085 0.395,0.895 1,1 "),
    transformOrigin: "right",
  };

  if (isDrawerOpen)
    return gsap.fromTo(
      ref,
      { x: "100%", ...tweenOpts },
      { x: "0%", ...tweenOpts }
    );

  return gsap.to(ref, { x: "100%", ...tweenOpts });
};

export const Drawer: React.FC<Props> = (props) => {
  const {
    TriggerComponent,
    children,
    isDrawerOpen,
    setDrawerOpen,
    contentClasses = "",
    onMount,
  } = props;

  const contentRef = useRef<HTMLDivElement | null>(null);

  return (
    <Dialog.Root open={isDrawerOpen} onOpenChange={setDrawerOpen}>
      {TriggerComponent && (
        <Dialog.Trigger>
          <TriggerComponent />
        </Dialog.Trigger>
      )}
      <Transition
        in={isDrawerOpen}
        unmountOnExit
        mountOnEnter
        nodeRef={contentRef}
        timeout={500}
        addEndListener={(done) => {
          Animation(contentRef.current!, isDrawerOpen).then(() => done());
          onMount?.();
        }}
      >
        <DrawerContent forceMount ref={contentRef} className={contentClasses}>
          <div className="relative h-full mt-24">{children}</div>
        </DrawerContent>
      </Transition>
    </Dialog.Root>
  );
};

const DrawerContent = styled(Dialog.Content, {
  position: "fixed",
  top: 0,
  left: 0,
  height: "100vh",
  overflow: "hidden",
  width: "100%",
  backgroundColor: "$base-100",
  zIndex: 10,
  boxShadow: "0 0 0 1px $base-100",
});
