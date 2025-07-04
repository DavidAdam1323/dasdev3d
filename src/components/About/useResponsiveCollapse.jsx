import { useCollapse } from "react-collapsed";
import { useState } from "react";

const useResponsiveCollapse = (isMobile, delay = 1000) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [pendingState, setPendingState] = useState(null);

  const { getCollapseProps } = useCollapse({ isExpanded });

  const collapseProps = isMobile
    ? getCollapseProps()
    : { style: { height: "auto", overflow: "visible" } };

  const handleToggle = (nextState) => {
    setPendingState(nextState);
    setTimeout(() => {
      setIsExpanded(nextState);
      setPendingState(null);
    }, delay);
  };

  return {
    isExpanded,
    pendingState,
    collapseProps,
    handleToggle,
  };
};

export default useResponsiveCollapse;