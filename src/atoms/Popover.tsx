import { Options as OffsetSetting } from '@floating-ui/core/src/middleware/offset';

import {
  useFloating,
  autoUpdate,
  offset as offsetMiddleware,
  flip as flipMiddlware,
  shift as shiftMiddleware,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  useMergeRefs,
  Placement,
  FloatingPortal,
  FloatingFocusManager,
} from '@floating-ui/react';
import {
  cloneElement,
  createContext,
  forwardRef,
  isValidElement,
  useContext,
  useMemo,
  useState,
} from 'react';

interface UsePopoverProps {
  placement?: Placement;
  offset?: number | [number, number];
  initialOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const usePopover = ({
  placement = 'top',
  offset = 8,
  initialOpen = false,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
}: UsePopoverProps = {}) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(initialOpen);

  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  const offsetSetting: OffsetSetting = useMemo(() => {
    if (Array.isArray(offset)) {
      const [mainAxis, crossAxis] = offset;

      return {
        mainAxis,
        crossAxis,
      };
    }

    return offset;
  }, [offset]);

  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offsetMiddleware(offsetSetting),
      flipMiddlware(),
      shiftMiddleware(),
    ],
  });

  const { context } = data;

  const click = useClick(context, {
    enabled: controlledOpen == null,
  });
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const interactions = useInteractions([click, dismiss, role]);

  return useMemo(
    () => ({
      open,
      setOpen,
      ...interactions,
      ...data,
    }),
    [open, setOpen, interactions, data]
  );
};

const PopoverContext = createContext<ReturnType<typeof usePopover> | null>(
  null
);

export const usePopoverState = () => {
  const context = useContext(PopoverContext);

  if (context == null) {
    throw new Error(
      'Popover companion components must be children of <Popover />'
    );
  }

  return context;
};

interface PopoverProps extends UsePopoverProps {
  children: React.ReactNode;
}

export const Popover = ({ children, ...options }: PopoverProps) => {
  const popover = usePopover({ ...options });

  return (
    <PopoverContext.Provider value={popover}>
      {children}
    </PopoverContext.Provider>
  );
};

interface PopoverTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
}

// eslint-disable-next-line react/display-name
export const PopoverTrigger = forwardRef<
  HTMLElement,
  React.HTMLProps<HTMLElement> & PopoverTriggerProps
>(({ children, ...props }, propRef) => {
  if (!children || !isValidElement(children))
    throw new Error(
      'You must provide a trigger element as a child of <PopoverTrigger />'
    );

  const state = usePopoverState();
  const childrenRef = (children as any).ref;
  const ref = useMergeRefs([state.reference, propRef, childrenRef]);

  return cloneElement(
    children,
    state.getReferenceProps({
      ref,
      ...props,
      ...children.props,
      'data-state': state.open ? 'open' : 'closed',
    })
  );
});

// eslint-disable-next-line react/display-name
export const PopoverContent = forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>((props, propRef) => {
  const state = usePopoverState();
  const ref = useMergeRefs([state.floating, propRef]);

  return (
    <FloatingPortal>
      {state.open && (
        <FloatingFocusManager context={state.context} modal={false}>
          <div
            ref={ref}
            style={{
              position: state.strategy,
              top: state.y ?? 0,
              left: state.x ?? 0,
              width: 'max-content',
              ...props.style,
            }}
            {...state.getFloatingProps(props)}
          >
            {props.children}
          </div>
        </FloatingFocusManager>
      )}
    </FloatingPortal>
  );
});

// eslint-disable-next-line react/display-name
export const PopoverClose = forwardRef<
  HTMLDivElement,
  React.ButtonHTMLAttributes<HTMLDivElement>
>(({ children, ...props }, ref) => {
  const state = usePopoverState();
  return (
    <div {...props} ref={ref} onClick={() => state.setOpen(false)}>
      {children}
    </div>
  );
});
