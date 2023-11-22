import {themeIcons} from "@/app/constants/icons";

export default function ListThemes({changeTheme}: {changeTheme: (theme: string) => void }) {
    const themes = ['light', 'dark', 'system'];

    return (
        <div className='absolute bg-indigo-600 top-12 -left-2 w-28'>
            {themes.map((theme: string)=> {
              const ThemeIcon = themeIcons[theme as 'light' | 'dark' | 'system'];

              return (
                  <div key={theme} className='flex justify-around items-center my-2 cursor-pointer' onClick={() => changeTheme(theme)}>
                      <div>
                          <ThemeIcon size={24} color={'white'}/>
                      </div>
                      <p className='w-12'>{theme}</p>
                  </div>
              )
            })}
        </div>
    );
}