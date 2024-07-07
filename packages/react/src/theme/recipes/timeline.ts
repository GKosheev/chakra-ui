import { timelineAnatomy } from "../../anatomy"
import { defineSlotRecipe } from "../../styled-system"

export const timelineSlotRecipe = defineSlotRecipe({
  slots: timelineAnatomy.keys(),

  base: {
    root: {
      width: "full",
    },
    item: {
      display: "flex",
      position: "relative",
      alignItems: "flex-start",
      pb: "var(--timeline-offset)",
      _last: { pb: "0" },
    },
    separator: {
      position: "absolute",
      borderStartWidth: "2px",
      borderStartColor: "border",
      h: "100%",
      maxH: "calc(100% - var(--timeline-size) - var(--timeline-gutter) * 2)",
      top: "calc(var(--timeline-size) + var(--timeline-gutter))",
    },
    indicator: {
      position: "absolute",
      ms: "calc(-1 * var(--timeline-size) / 2)",
      boxSize: "var(--timeline-size)",
      bg: "bg.muted",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      rounded: "var(--timeline-radius)",
    },
    content: {
      w: "full",
      overflow: "hidden",
      pe: "px",
      ps: "calc(var(--timeline-size) + var(--timeline-gutter))",
    },
  },

  variants: {
    size: {
      sm: {
        root: {
          "--timeline-size": "spacing.4",
          "--timeline-offset": "spacing.6",
          "--timeline-gutter": "0.5rem",
          "--timeline-radius": "radii.full",
        },
      },
      md: {
        root: {
          "--timeline-size": "spacing.7",
          "--timeline-offset": "spacing.10",
          "--timeline-gutter": "0.5rem",
          "--timeline-radius": "radii.full",
        },
      },
      lg: {
        root: {
          "--timeline-size": "spacing.10",
          "--timeline-offset": "spacing.14",
          "--timeline-gutter": "0.5rem",
          "--timeline-radius": "radii.full",
        },
      },
    },
  },

  defaultVariants: {
    size: "md",
  },
})
