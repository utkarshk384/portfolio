import { useMemo } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

type CarouselBtnProps = {
  clickHandler: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
};

export const CarouselButton: React.FC<CarouselBtnProps> = (props) => {
  const { clickHandler, hasNext, hasPrev } = props;

  const isLeft = useMemo(() => typeof hasNext !== "undefined", [hasNext]);

  return (
    <button
      onClick={clickHandler}
      className={`absolute -bottom-14 ${
        isLeft ? "-translate-x-16" : "translate-x-10"
      } p-2 transform rounded-lg left-1/2 bg-accent`}
    >
      {isLeft ? (
        <ChevronLeftIcon width={24} height={24} className="text-base-100" />
      ) : (
        <ChevronRightIcon width={24} height={24} className="text-base-100" />
      )}
    </button>
  );
};
