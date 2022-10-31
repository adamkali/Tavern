import TavernColor from '../design/TavernColor';
import * as Colors from '../design/Colors';
import ColorNames from '../design/ColorNames';
import { TavernModels } from '../../providers/receivers';

function factory(colorScheme: string): TavernColor {
    return (
        ColorNames.find((color) => color.name === colorScheme)
            ?.scheme || new TavernColor(Colors.Dark)
    );
}

export function useTavernColor(
    loadFromLocalStorage?: boolean
): TavernColor {
    if (loadFromLocalStorage) {
        const colorScheme = localStorage.getItem('colorScheme');
        if (colorScheme) {
            return factory(colorScheme);
        } else {
            return new TavernColor(Colors.Dark.name);
        }
    } else {
        return new TavernColor(Colors.Dark.name);
    }
}
