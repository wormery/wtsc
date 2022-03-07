import { ThemeOptions, ThemeName, ThemeMode } from './option'
export interface SetThemeApi<Options extends ThemeOptions<Options>> {
  setTheme(name: ThemeName<Options>): void
  setTheme<T extends ThemeMode<Options>>(mode: T): void
  setTheme<T extends ThemeMode<Options>>(
    mode: T,
    name: ThemeName<Options, T>
  ): void
}
