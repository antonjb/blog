export type Space = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
export type BorderSize = '0' |'1' | '2' | '3' | '4' | '5';

declare module 'astro/types' {
    interface Props {
        space?: Space;
        borderSize?: BorderSize;
    }
} 