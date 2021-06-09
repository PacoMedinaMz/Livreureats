

import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              TabOneScreen: 'Home',
            },
          },
          Restaurant: {
            screens: {
              TabTwoScreen: 'Restaurant',
            },
            
          },
         
        },
      },
      NotFound: '*',
    },
  },
};
