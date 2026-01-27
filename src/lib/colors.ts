/**
 * Skydda Design System - Centralized Color Palette
 * 
 * All colors used throughout the project are defined here.
 * This ensures consistency and makes it easy to update the entire design system.
 * 
 * Colors are provided in multiple formats:
 * - HSL values (for CSS variables and Tailwind)
 * - RGB/RGBA strings (for canvas and inline styles)
 * - Hex values (for compatibility)
 * 
 * @example
 * // For Tailwind classes (use CSS variables in className):
 * <div className="bg-primary text-primary-foreground" />
 * 
 * // For inline styles:
 * <div style={{ backgroundColor: colors.primary.rgb }} />
 * 
 * // For canvas with opacity:
 * ctx.fillStyle = colors.primary.hsla(0.5);
 * 
 * // For animations with opacity:
 * animate={{ boxShadow: `0 0 10px ${colors.glowPrimary.hsla(0.3)}` }}
 */

export const colors = {
  // Core darkness palette
  background: {
    hsl: "0 0% 4%",
    rgb: "rgb(10, 10, 10)",
    hex: "#0a0a0a",
  },
  foreground: {
    hsl: "0 0% 92%",
    rgb: "rgb(234, 234, 234)",
    hex: "#eaeaea",
  },

  // Card colors
  card: {
    hsl: "0 0% 6%",
    rgb: "rgb(15, 15, 15)",
    hex: "#0f0f0f",
  },
  cardForeground: {
    hsl: "0 0% 92%",
    rgb: "rgb(234, 234, 234)",
    hex: "#eaeaea",
  },

  // Popover colors
  popover: {
    hsl: "0 0% 6%",
    rgb: "rgb(15, 15, 15)",
    hex: "#0f0f0f",
  },
  popoverForeground: {
    hsl: "0 0% 92%",
    rgb: "rgb(234, 234, 234)",
    hex: "#eaeaea",
  },

  // Primary - Living glow (cyan pulse)
  primary: {
    hsl: "185 80% 50%",
    rgb: "rgb(25, 204, 204)",
    hex: "#19cccc",
    // For use in canvas/animations with opacity
    hsla: (opacity: number) => `hsla(185, 80%, 50%, ${opacity})`,
    rgba: (opacity: number) => `rgba(25, 204, 204, ${opacity})`,
  },
  primaryForeground: {
    hsl: "0 0% 4%",
    rgb: "rgb(10, 10, 10)",
    hex: "#0a0a0a",
  },

  // Secondary - Muted whispers
  secondary: {
    hsl: "0 0% 12%",
    rgb: "rgb(31, 31, 31)",
    hex: "#1f1f1f",
  },
  secondaryForeground: {
    hsl: "0 0% 70%",
    rgb: "rgb(179, 179, 179)",
    hex: "#b3b3b3",
  },

  // Muted colors
  muted: {
    hsl: "0 0% 10%",
    rgb: "rgb(26, 26, 26)",
    hex: "#1a1a1a",
  },
  mutedForeground: {
    hsl: "0 0% 50%",
    rgb: "rgb(128, 128, 128)",
    hex: "#808080",
  },

  // Accent glow
  accent: {
    hsl: "185 60% 35%",
    rgb: "rgb(36, 102, 102)",
    hex: "#246666",
  },
  accentForeground: {
    hsl: "0 0% 92%",
    rgb: "rgb(234, 234, 234)",
    hex: "#eaeaea",
  },

  // Destructive
  destructive: {
    hsl: "0 62% 50%",
    rgb: "rgb(204, 51, 51)",
    hex: "#cc3333",
  },
  destructiveForeground: {
    hsl: "0 0% 92%",
    rgb: "rgb(234, 234, 234)",
    hex: "#eaeaea",
  },

  // Border and input
  border: {
    hsl: "0 0% 15%",
    rgb: "rgb(38, 38, 38)",
    hex: "#262626",
  },
  input: {
    hsl: "0 0% 15%",
    rgb: "rgb(38, 38, 38)",
    hex: "#262626",
  },
  ring: {
    hsl: "185 80% 50%",
    rgb: "rgb(25, 204, 204)",
    hex: "#19cccc",
  },

  // Custom Skydda tokens
  glowPrimary: {
    hsl: "185 80% 50%",
    rgb: "rgb(25, 204, 204)",
    hex: "#19cccc",
    hsla: (opacity: number) => `hsla(185, 80%, 50%, ${opacity})`,
    rgba: (opacity: number) => `rgba(25, 204, 204, ${opacity})`,
  },
  glowSecondary: {
    hsl: "200 70% 40%",
    rgb: "rgb(31, 133, 163)",
    hex: "#1f85a3",
    hsla: (opacity: number) => `hsla(200, 70%, 40%, ${opacity})`,
    rgba: (opacity: number) => `rgba(31, 133, 163, ${opacity})`,
  },
  void: {
    hsl: "0 0% 2%",
    rgb: "rgb(5, 5, 5)",
    hex: "#050505",
  },
  whisper: {
    hsl: "0 0% 40%",
    rgb: "rgb(102, 102, 102)",
    hex: "#666666",
  },

  // Particle field background (used in ParticleField.tsx)
  particleBackground: {
    rgba: (opacity: number) => `rgba(10, 10, 10, ${opacity})`,
    // Default opacity of 0.1
    default: "rgba(10, 10, 10, 0.1)",
  },
} as const;

/**
 * Helper function to get HSL value for CSS variables
 * Returns the HSL string without the 'hsl()' wrapper for use in CSS variables
 */
export const getHSL = (colorKey: keyof typeof colors): string => {
  const color = colors[colorKey];
  if (typeof color === "object" && "hsl" in color) {
    return color.hsl;
  }
  throw new Error(`Color ${colorKey} does not have an HSL value`);
};

/**
 * Helper function to get RGB/RGBA value for inline styles or canvas
 */
export const getRGB = (colorKey: keyof typeof colors, opacity?: number): string => {
  const color = colors[colorKey];
  if (typeof color === "object" && "rgb" in color) {
    if (opacity !== undefined && "rgba" in color && typeof color.rgba === "function") {
      return color.rgba(opacity);
    }
    return color.rgb;
  }
  throw new Error(`Color ${colorKey} does not have an RGB value`);
};

/**
 * Helper function to get HSLA value for canvas or inline styles
 */
export const getHSLA = (colorKey: keyof typeof colors, opacity: number): string => {
  const color = colors[colorKey];
  if (typeof color === "object" && "hsla" in color && typeof color.hsla === "function") {
    return color.hsla(opacity);
  }
  throw new Error(`Color ${colorKey} does not support HSLA with opacity`);
};

/**
 * Export color tokens for direct access
 */
export type ColorKey = keyof typeof colors;
