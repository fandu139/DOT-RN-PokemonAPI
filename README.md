# DOT-Task

Made with React Native

Tech Features:
1. React Native Version 0.74.3
2. Typescript Version 5.0.4
3. React Navigation Version 6.x.x
4. React Native Vector Icons Version 9.2.0
5. React Native Fast Image Version 8.6.3
6. Recoil Version 0.7.7
7. Jest Version 29.6.
8. Testing-library/react-native Version 12.1.2
9. React-native-community/progress-bar-android Version 1.0.5

## Hooks and APIs Implementation
- [X] useCallback i'm use on this file `App/screens/Home/components/PokemonListHome.tsx`
- [X] useEffect
- [X] useRef i'm use on this file `App.tsx`
- [X] useState
- [X] memo --> i'm use on this file `App/screens/Home/components/PokemonItem.tsx`
- [X] lazy --> i'm use on this file `App/screens/Home/index.tsx`

## Setup Environment
First, setup your environment by following this guide on https://reactnative.dev/docs/environment-setup

## Clone Project
```
git clone
cd 
npm install
```

## Structure

```
App
├── assets
│   ├── icon // for icon storage
│   └── image // for image storage. ex : png, jeg, etc
├── fetchApi // for adapter when hit API
├── helper
|   ├── typeColor 
│   └── navigation
├── hook
├── navigation
├── recoil
├── screens
│   ├── Detail
│   └── Home
│   └── Splash
├── theme // for global style on app
├── uikit
│   └── Header
│   └── Icon
│   └── Spinner
│   └── Text
```

## Testing
We have two kind of test: unit test and snapshot test.
For unit test and snapshot, we will use `jest` with react native.

Every unit test must be placed under corresponding feature you want to add test and create `__test__` folder.
Every component should have snapshot test.

if you want to running unit testing, you can run this command `npm run test`

## Icon & Image
We use icomoon for converting svg icon into `.ttf` so you don't need to use png file for icon.
Icomoon can be accessed here: https://icomoon.io/

## Feature on App
### Pokémon List Page
- [X] it has list of Pokémon
- [X] it can be searched by its name
- [X] contain infinity scroll
- [X] it has 2 column for each row
- [X] get 8 Pokémon every fetch new page

### Detail Pokémon Page
- [X] it has information sprites front, back & shiny
- [X] it has information height & weight
- [X] it has information types

### List Testing Coverage
| Type Testing | Location FIle |
| ----------------------- | ----------------------------------- |
| Snapshoot Test | App/uikit/*|
| Function Test | App/helper/typeColor |

## Video Demo
Look vidoe demo this link https://www.awesomescreenshot.com/video/19859586?key=ce30d59a3261e680c2c307d0fda790a2
