export default class TavernColor {
    primary: string;
    secondary: string;
    tertiary: string;
    normal: string;
    dark: string;
    accent: string;

    constructor(data: any | undefined) {
        this.primary = data?.primary || '#000000';
        this.secondary = data?.secondary || '#000000';
        this.tertiary = data?.tertiary || '#000000';
        this.normal = data?.normal || '#000000';
        this.dark = data?.dark || '#000000';
        this.accent = data?.accent || '#000000';
    }
}
