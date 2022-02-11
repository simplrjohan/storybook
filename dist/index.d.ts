import { MouseEventHandler, FC } from 'react';
import * as styled_components from 'styled-components';

interface ButtonProps {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    onClick?: MouseEventHandler<HTMLButtonElement>;
    themify?: any;
}

declare const Button: FC<ButtonProps>;

declare const background: {
    app: string;
    appInverse: string;
    positive: string;
    negative: string;
    warning: string;
};
declare const color: {
    primary: string;
    secondary: string;
    tertiary: string;
    orange: string;
    gold: string;
    green: string;
    seafoam: string;
    purple: string;
    ultraviolet: string;
    lightest: string;
    lighter: string;
    light: string;
    mediumlight: string;
    medium: string;
    mediumdark: string;
    dark: string;
    darker: string;
    darkest: string;
    border: string;
    positive: string;
    negative: string;
    warning: string;
};
declare const spacing: {
    padding: {
        small: number;
        medium: number;
        large: number;
    };
    borderRadius: {
        small: number;
        default: number;
    };
};
declare const typography: {
    readonly type: {
        readonly primary: "\"Nunito Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif";
        readonly code: "\"SFMono-Regular\", Consolas, \"Liberation Mono\", Menlo, Courier, monospace";
    };
    readonly weight: {
        readonly regular: "400";
        readonly bold: "700";
        readonly extrabold: "800";
        readonly black: "900";
    };
    readonly size: {
        readonly s1: 12;
        readonly s2: 14;
        readonly s3: 16;
        readonly m1: 20;
        readonly m2: 24;
        readonly m3: 28;
        readonly l1: 32;
        readonly l2: 40;
        readonly l3: 48;
        readonly code: 90;
    };
};
declare const breakpoint = 600;
declare const pageMargin = 5.55555;
declare const pageMargins: styled_components.FlattenSimpleInterpolation;
declare const hoverEffect: styled_components.FlattenSimpleInterpolation;

declare const styles_d_background: typeof background;
declare const styles_d_color: typeof color;
declare const styles_d_spacing: typeof spacing;
declare const styles_d_typography: typeof typography;
declare const styles_d_breakpoint: typeof breakpoint;
declare const styles_d_pageMargin: typeof pageMargin;
declare const styles_d_pageMargins: typeof pageMargins;
declare const styles_d_hoverEffect: typeof hoverEffect;
declare namespace styles_d {
  export {
    styles_d_background as background,
    styles_d_color as color,
    styles_d_spacing as spacing,
    styles_d_typography as typography,
    styles_d_breakpoint as breakpoint,
    styles_d_pageMargin as pageMargin,
    styles_d_pageMargins as pageMargins,
    styles_d_hoverEffect as hoverEffect,
  };
}

declare const bodyStyles: styled_components.FlattenSimpleInterpolation;
declare const fontUrl = "https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900&display=swap";
declare const GlobalStyle: styled_components.GlobalStyleComponent<{}, styled_components.DefaultTheme>;

declare const global_d_bodyStyles: typeof bodyStyles;
declare const global_d_fontUrl: typeof fontUrl;
declare const global_d_GlobalStyle: typeof GlobalStyle;
declare namespace global_d {
  export {
    global_d_bodyStyles as bodyStyles,
    global_d_fontUrl as fontUrl,
    global_d_GlobalStyle as GlobalStyle,
  };
}

declare const easing: {
    rubber: string;
};
declare const rotate360: styled_components.Keyframes;
declare const glow: styled_components.Keyframes;
declare const float: styled_components.Keyframes;
declare const jiggle: styled_components.Keyframes;
declare const shake: styled_components.Keyframes;
declare const inlineGlow: styled_components.FlattenSimpleInterpolation;

declare const animation_d_easing: typeof easing;
declare const animation_d_rotate360: typeof rotate360;
declare const animation_d_glow: typeof glow;
declare const animation_d_float: typeof float;
declare const animation_d_jiggle: typeof jiggle;
declare const animation_d_shake: typeof shake;
declare const animation_d_inlineGlow: typeof inlineGlow;
declare namespace animation_d {
  export {
    animation_d_easing as easing,
    animation_d_rotate360 as rotate360,
    animation_d_glow as glow,
    animation_d_float as float,
    animation_d_jiggle as jiggle,
    animation_d_shake as shake,
    animation_d_inlineGlow as inlineGlow,
  };
}

export { Button, animation_d as animation, global_d as global, styles_d as styles };
