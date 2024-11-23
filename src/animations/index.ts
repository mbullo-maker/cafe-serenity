import { Variants } from 'framer-motion';

// Types for custom animation parameters
interface CustomTransitionProps {
  direction?: number;
  index?: number;
  delay?: number;
}

// Enhanced spring configurations for different feels
export const springs = {
  soft: {
    type: "spring",
    stiffness: 100,
    damping: 20,
    mass: 1,
  } as const,
  
  bouncy: {
    type: "spring",
    stiffness: 400,
    damping: 8,
    mass: 0.8,
    restDelta: 0.001,
  } as const,
  
  stiff: {
    type: "spring",
    stiffness: 600,
    damping: 30,
    mass: 0.5,
  } as const,
  
  gentle: {
    type: "spring",
    stiffness: 200,
    damping: 25,
    mass: 1.2,
  } as const,
  
  slow: {
    type: "spring",
    stiffness: 150,
    damping: 15,
    mass: 1,
  } as const,
  
  elastic: {
    type: "spring",
    stiffness: 700,
    damping: 30,
    mass: 2,
    restDelta: 0.001,
  } as const,
  
  precise: {
    type: "spring",
    stiffness: 800,
    damping: 35,
    mass: 0.5,
    restSpeed: 0.001,
  } as const,
  
  smooth: {
    type: "spring",
    stiffness: 250,
    damping: 25,
    mass: 1,
  } as const,
} as const;

// Easing presets for smooth animations
export const easings = {
  smooth: [0.4, 0, 0.2, 1],
  smoothOut: [0, 0, 0.2, 1],
  smoothIn: [0.4, 0, 1, 1],
  snappy: [0.4, 1.2, 0.6, 1],
  bounceOut: [0.87, 0, 0.13, 1],
  bounceIn: [0.43, 0.28, 0.86, 1],
  elastic: [0.43, 0.23, 0.23, 1.17],
} as const;

// Menu Item Animations
export const menuItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
    filter: "blur(10px)",
  },
  visible: (custom?: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      ...springs.bouncy,
      delay: (custom || 0) * 0.1,
    },
  }),
  hover: {
    y: -5,
    scale: 1.02,
    transition: springs.gentle,
  },
  tap: {
    scale: 0.98,
    transition: springs.stiff,
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    filter: "blur(10px)",
    transition: {
      duration: 0.2,
      ease: easings.smoothOut,
    },
  },
};

// Menu Category Container
export const menuCategoryContainerVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      ...springs.bouncy,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  hover: {
    scale: 1.02,
    transition: springs.gentle,
  },
};

// Menu Category Image with Parallax
export const menuCategoryImageVariants: Variants = {
  hidden: {
    scale: 1.2,
    opacity: 0,
    y: 20,
  },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      ...springs.slow,
      duration: 1.2,
    },
  },
  hover: {
    scale: 1.15,
    y: -10,
    transition: {
      ...springs.gentle,
      duration: 1,
    },
  },
};

// Menu Category Text Elements
export const menuCategoryTextVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      ...springs.bouncy,
      duration: 0.8,
    },
  },
  hover: {
    y: -5,
    transition: springs.gentle,
  },
};

// Menu Category Overlay with Gradient
export const menuCategoryOverlayVariants: Variants = {
  hidden: { 
    opacity: 0,
    background: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))",
  },
  visible: { 
    opacity: 1,
    background: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))",
    transition: {
      duration: 0.5,
    },
  },
  hover: { 
    opacity: 0.7,
    background: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.1))",
    transition: {
      duration: 0.3,
    },
  },
};

// Menu Category Icon with 3D Effect
export const menuCategoryIconVariants: Variants = {
  hidden: {
    scale: 0,
    rotate: -180,
    opacity: 0,
  },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
  hover: {
    scale: 1.1,
    rotateY: 180,
    transition: {
      ...springs.bouncy,
      duration: 0.6,
    },
  },
};

// Menu Grid Container
export const menuGridVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ...springs.gentle,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.3,
    },
  },
};

// Menu Price Tag
export const menuPriceVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
    rotate: -45,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: springs.bouncy,
  },
  hover: {
    scale: 1.1,
    rotate: -5,
    transition: springs.gentle,
  },
};

// Menu Item Description
export const menuDescriptionVariants: Variants = {
  hidden: {
    opacity: 0,
    height: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    height: "auto",
    y: 0,
    transition: {
      ...springs.gentle,
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};

// Menu Category Badge
export const menuBadgeVariants: Variants = {
  hidden: {
    scale: 0,
    opacity: 0,
    x: 20,
  },
  visible: {
    scale: 1,
    opacity: 1,
    x: 0,
    transition: springs.bouncy,
  },
  hover: {
    scale: 1.1,
    rotate: [0, -5, 5, -5, 0],
    transition: {
      ...springs.gentle,
      duration: 0.5,
    },
  },
};

// Menu Item Image
export const menuItemImageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.2,
    filter: "blur(10px) brightness(0.8)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px) brightness(1)",
    transition: {
      ...springs.gentle,
      duration: 0.8,
    },
  },
  hover: {
    scale: 1.1,
    filter: "blur(0px) brightness(1.1)",
    transition: {
      ...springs.gentle,
      duration: 0.4,
    },
  },
};

// Menu Navigation Link
export const menuNavLinkVariants: Variants = {
  initial: { y: -20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.3 } },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95 }
};

// Menu Section Header
export const menuSectionHeaderVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      ...springs.bouncy,
      duration: 0.8,
    },
  },
};

// Menu Item Tag (e.g., "Spicy", "Vegetarian", etc.)
export const menuItemTagVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
    x: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: springs.bouncy,
  },
  hover: {
    scale: 1.1,
    transition: springs.gentle,
  },
};

// Menu Category Divider
export const menuDividerVariants: Variants = {
  hidden: {
    scaleX: 0,
    opacity: 0,
  },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      ...springs.gentle,
      duration: 0.8,
    },
  },
};

// Menu Item Rating Stars
export const menuRatingVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
    x: -20,
  },
  visible: (custom?: number) => ({
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      ...springs.bouncy,
      delay: (custom || 0) * 0.1,
    },
  }),
  hover: {
    scale: 1.2,
    rotate: 5,
    transition: springs.gentle,
  },
};

// Menu Search Input
export const menuSearchVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: springs.gentle,
  },
  focus: {
    scale: 1.02,
    boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.6)",
    transition: springs.stiff,
  },
};

// Menu Filter Button
export const menuFilterButtonVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: springs.bouncy,
  },
  hover: {
    scale: 1.05,
    transition: springs.gentle,
  },
  active: {
    scale: 0.95,
    transition: springs.stiff,
  },
};

// Menu Loading Skeleton
export const menuSkeletonVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ...springs.gentle,
      repeat: Infinity,
      repeatType: "reverse",
      duration: 1.5,
    },
  },
};

// Interaction Feedback Animations
export const interactionFeedbackVariants: Variants = {
  tap: {
    scale: 0.95,
    transition: springs.precise,
  },
  hover: {
    scale: 1.02,
    transition: springs.smooth,
  },
  focus: {
    scale: 1.02,
    boxShadow: "0 0 0 2px rgba(66, 153, 225, 0.6)",
    transition: springs.precise,
  },
  success: {
    scale: [1, 1.1, 1],
    borderColor: ["#48BB78", "#48BB78", "initial"],
    transition: {
      duration: 0.5,
      times: [0, 0.2, 1],
      ease: "easeInOut",
    },
  },
  error: {
    x: [-2, 2, -2, 2, 0],
    borderColor: ["#F56565", "#F56565", "initial"],
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

// Enhanced Menu Navigation
export const enhancedMenuNavVariants: Variants = {
  initial: {
    opacity: 0,
    y: -20,
    filter: "blur(8px)",
  },
  enter: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      ease: easings.bounceOut,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    filter: "blur(8px)",
    transition: {
      duration: 0.3,
      ease: easings.bounceIn,
    },
  },
  hover: {
    y: -2,
    transition: springs.smooth,
  },
  active: {
    scale: 0.98,
    transition: springs.precise,
  },
};

// Advanced Card Interactions
export const cardInteractionVariants: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95 }
};

// Scroll-based Parallax
export const parallaxScrollVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 30,
      mass: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 0.3,
      ease: easings.bounceOut,
    },
  },
};

// Advanced Button States
export const advancedButtonVariants: Variants = {
  initial: {
    scale: 1,
    backgroundColor: "var(--button-bg)",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  },
  hover: {
    scale: 1.05,
    backgroundColor: "var(--button-hover-bg)",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    transition: {
      ...springs.smooth,
      backgroundColor: { duration: 0.2 },
      boxShadow: { duration: 0.2 },
    },
  },
  tap: {
    scale: 0.95,
    backgroundColor: "var(--button-active-bg)",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    transition: springs.precise,
  },
  focus: {
    scale: 1.02,
    boxShadow: "0 0 0 3px var(--button-focus-ring)",
    transition: springs.precise,
  },
  loading: {
    scale: 0.98,
    opacity: 0.8,
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 0.8,
    },
  },
  success: {
    scale: [1, 1.1, 1],
    backgroundColor: ["var(--button-success-bg)", "var(--button-success-bg)", "var(--button-bg)"],
    transition: {
      duration: 0.5,
      times: [0, 0.2, 1],
      ease: "easeInOut",
    },
  },
  error: {
    x: [-2, 2, -2, 2, 0],
    backgroundColor: ["var(--button-error-bg)", "var(--button-error-bg)", "var(--button-bg)"],
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

// Advanced Layout Transitions
export const layoutTransitionVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.96,
    filter: "blur(10px)",
  },
  enter: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: easings.smooth,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    scale: 1.04,
    filter: "blur(10px)",
    transition: {
      duration: 0.4,
      ease: easings.smoothOut,
    },
  },
};

// 3D Card Flip Animation
export const card3DFlipVariants: Variants = {
  initial: {
    rotateY: 0,
    z: 0,
  },
  flip: {
    rotateY: 180,
    z: 50,
    transition: {
      duration: 0.6,
      ease: easings.smooth,
    },
  },
  hover: {
    z: 30,
    transition: springs.gentle,
  },
};

// Advanced Image Gallery
export const imageGalleryVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easings.smooth,
    },
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.5,
      ease: easings.smooth,
    },
  }),
};

// Floating Elements Animation
export const floatingElementVariants: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-2, 2, -2],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

// Advanced Modal Animations
export const advancedModalVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
    y: 50,
    rotateX: -20,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
      mass: 0.5,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 30,
    rotateX: 10,
    filter: "blur(10px)",
    transition: {
      duration: 0.3,
      ease: easings.smoothOut,
    },
  },
};

// Staggered List Animation
export const staggeredListVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// List Item Animation
export const listItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
    y: 10,
    scale: 0.8,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: springs.bouncy,
  },
  hover: {
    x: 5,
    scale: 1.02,
    transition: springs.gentle,
  },
  tap: {
    scale: 0.98,
    transition: springs.precise,
  },
};

// Notification Bell Animation
export const notificationBellVariants: Variants = {
  initial: { rotate: 0, scale: 1 },
  ring: {
    rotate: [0, 15, -15, 10, -10, 5, -5, 0],
    scale: [1, 1.1, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  hover: {
    scale: 1.1,
    transition: springs.gentle,
  },
  newNotification: {
    scale: [1, 1.2, 1],
    rotate: [0, 20, -20, 10, -10, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

// Advanced Tooltip
export const tooltipVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 10,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 25,
      mass: 0.5,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 10,
    filter: "blur(8px)",
    transition: {
      duration: 0.2,
      ease: easings.smoothOut,
    },
  },
};

// Advanced Loading States
export const loadingSpinnerVariants: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 360,
    transition: {
      duration: 1,
      ease: "linear",
      repeat: Infinity,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.2 },
  },
};

// Progress Bar Animation
export const progressBarVariants: Variants = {
  initial: { scaleX: 0, originX: 0 },
  animate: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: easings.smooth,
    },
  },
  loading: {
    scaleX: [0, 1, 1],
    x: ["0%", "0%", "100%"],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Micro-interaction Feedback
export const microInteractionVariants: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95 }
};

// Advanced Form Input Animations
export const formInputVariants: Variants = {
  initial: {
    scale: 1,
    borderColor: "var(--border-color)",
  },
  focus: {
    scale: 1.02,
    borderColor: "var(--primary-color)",
    boxShadow: "0 0 0 3px var(--focus-ring)",
    transition: springs.precise,
  },
  error: {
    scale: [1, 0.98, 1],
    borderColor: "var(--error-color)",
    x: [-2, 2, -2, 2, 0],
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  success: {
    scale: [1, 1.02, 1],
    borderColor: "var(--success-color)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// Page Transition Effects
export const pageTransitionVariants: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: 20, transition: { duration: 0.3 } }
};

// Advanced Scroll Progress
export const scrollProgressVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: easings.smooth,
    },
  },
  hover: {
    scaleY: 1.5,
    opacity: 0.8,
    transition: springs.gentle,
  },
};

// Advanced Drag Constraints
export const dragConstraintVariants: Variants = {
  drag: {
    scale: 1.02,
    zIndex: 50,
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
    transition: springs.precise,
  },
  dragEnd: {
    scale: 1,
    zIndex: 0,
    boxShadow: "none",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
  dragConstraints: {
    top: -100,
    left: -100,
    right: 100,
    bottom: 100,
  },
};

// Cursor Follow Animation
export const cursorFollowVariants: Variants = {
  default: {
    scale: 1,
    backgroundColor: "var(--cursor-color)",
    mixBlendMode: "difference",
  },
  hover: {
    scale: 2,
    backgroundColor: "var(--cursor-hover-color)",
    transition: springs.gentle,
  },
  click: {
    scale: 0.8,
    transition: springs.precise,
  },
};

// Advanced Text Reveal
export const textRevealVariants: Variants = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easings.smooth,
      staggerChildren: 0.1,
    },
  },
  exit: {
    y: "-100%",
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: easings.smoothOut,
    },
  },
};

// Dynamic Entrance Animations
export const slideInVariants = {
  fromTop: {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  },
  fromBottom: {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  },
  fromLeft: {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.5 } }
  },
  fromRight: {
    initial: { x: 50, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.5 } }
  }
};

// Floating Elements Animation
export const floatingElementVariants: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-2, 2, -2],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

// Micro-interaction Feedback
export const microInteractionVariants: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95 }
};

// Advanced Card Interactions
export const cardInteractionVariants: Variants = {
  initial: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -5,
    transition: { duration: 0.2, ease: 'easeOut' }
  },
  animate: {
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

// Menu Navigation Link
export const menuNavLinkVariants: Variants = {
  initial: { scale: 1, color: '#374151' },
  hover: {
    scale: 1.05,
    color: '#D97706',
    transition: { duration: 0.2 }
  },
  tap: { scale: 0.95 }
};

// Staggered Entrance Animation
export const staggeredEntranceVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Staggered Child Elements
export const staggeredChildVariants: Variants = {
  initial: (index: number) => ({
    opacity: 0,
    x: index % 2 === 0 ? -50 : 50,
    y: 50,
    scale: 0.8,
    rotate: index % 2 === 0 ? -10 : 10,
  }),
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 0.8,
    },
  },
  exit: (index: number) => ({
    opacity: 0,
    x: index % 2 === 0 ? 50 : -50,
    y: -50,
    scale: 0.8,
    rotate: index % 2 === 0 ? 10 : -10,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  }),
};

// Reveal Landing Animation
export const revealLandingVariants: Variants = {
  initial: {
    opacity: 0,
    clipPath: "circle(0% at 50% 50%)",
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    clipPath: "circle(100% at 50% 50%)",
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
  exit: {
    opacity: 0,
    clipPath: "circle(0% at 50% 50%)",
    scale: 1.2,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

// Slide Animations
export const slideInVariants = {
  fromLeft: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  },
  fromRight: {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  },
  fromTop: {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  },
  fromBottom: {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  }
};

// Floating Animation
export const floatingElementVariants: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-2, 2, -2],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

// Micro-interactions
export const microInteractionVariants: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95 }
};

// Card Interactions
export const cardInteractionVariants: Variants = {
  initial: { scale: 1, y: 0, opacity: 0 },
  animate: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
  hover: {
    scale: 1.02,
    y: -5,
    transition: { duration: 0.2, ease: 'easeOut' }
  }
};

// Navigation Links
export const menuNavLinkVariants: Variants = {
  initial: { scale: 1, color: '#374151' },
  hover: {
    scale: 1.05,
    color: '#D97706',
    transition: { duration: 0.2 }
  },
  tap: { scale: 0.95 }
};

// Staggered Container
export const staggeredEntranceVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Staggered Children
export const staggeredChildVariants: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut'
    }
  }
};

// Reveal Animation
export const revealLandingVariants: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

// Page Transitions
export const pageTransitionVariants: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: {
      duration: 0.3,
      ease: 'easeIn'
    }
  }
};

// Menu Navigation Link Variants
export const menuNavLinkVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
};

// Card Interaction Variants
export const cardInteractionVariants: Variants = {
  initial: {
    scale: 1,
    opacity: 0,
    y: 20,
  },
  animate: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.2,
    },
  },
  tap: {
    scale: 0.98,
  },
};

// Floating Element Variants
export const floatingElementVariants: Variants = {
  initial: {
    y: 0,
  },
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Micro Interaction Variants
export const microInteractionVariants: Variants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.2,
    },
  },
  tap: {
    scale: 0.95,
  },
};

// Page Transition Variants
export const pageTransitionVariants: Variants = {
  initial: {
    opacity: 0,
    x: -20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: {
      duration: 0.3,
    },
  },
};

// Slide In Variants
export const slideInVariants: Variants = {
  initial: {
    opacity: 0,
    x: -20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: {
      duration: 0.2,
    },
  },
};

// Staggered Entrance Variants
export const staggeredEntranceVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Staggered Child Variants
export const staggeredChildVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

// Reveal Landing Variants
export const revealLandingVariants: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};
