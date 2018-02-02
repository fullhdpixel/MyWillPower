#  MyReactTemplate

Kill whats on a part: lsof -ti:8081 | xargs kill

- Change ActiveScreen to redux
- Change statusbar light-content/dark-content on open menu
- DrawerItem animation
- DrawerItem active 
- Settings relateren aan je appr
- Settings slider color
- Mapscreen: circles images from people

- Fix Feed
- Individual Post
- Individual Chatscreen
- Right Sidebar
- Charts
- Map
- Camera
- Stats
- Search ??

- Onboarding 1
- Onboarding 2
- Onboarding 3

- Refactor goPage method

Future:
- Android Debug
- Make Feed more interesting, more types of content
- Make profile more interesting by adding actions

## Troubleshooting:
- cannot find symbol (navigation/config): react-native upgrade

## todo: longer term
- Logo Design
- Form validation
- Dependent on screen ratios

* Libraries
- native base

## :arrow_up: How to Setup

**Step 1:** git clone this repo:

**Step 2:** cd to the cloned repo:

**Step 3:** Install the Application with `yarn` or `npm i`


## :arrow_forward: How to Run App

1. cd to the repo
2. Run Build for either OS
  * for iOS
    * run `react-native run-ios`
  * for Android
    * Run Genymotion
    * run `react-native run-android`

**Understanding Linting Errors**

The linting rules are from JS Standard and React-Standard.  [Regular JS errors can be found with descriptions here](http://eslint.org/docs/rules/), while [React errors and descriptions can be found here](https://github.com/yannickcr/eslint-plugin-react).

## :closed_lock_with_key: Secrets

This project uses [react-native-config](https://github.com/luggit/react-native-config) to expose config variables to your javascript code in React Native. You can store API keys
and other sensitive information in a `.env` file:

```
API_URL=https://myapi.com
GOOGLE_MAPS_API_KEY=abcdefgh
```

and access them from React Native like so:

```
import Secrets from 'react-native-config'

Secrets.API_URL  // 'https://myapi.com'
Secrets.GOOGLE_MAPS_API_KEY  // 'abcdefgh'
```

The `.env` file is ignored by git keeping those secrets out of your repo.

### Get started:
1. Copy .env.example to .env
2. Add your config variables
3. Follow instructions at [https://github.com/luggit/react-native-config#setup](https://github.com/luggit/react-native-config#setup)
4. Done!