import React from 'react';
import { render } from '@testing-library/react-native';
import { ImageSelector } from '../components/ImageSelector'; 


// START - code was developed with the help of documentation and research materials described in "References" section.

// verifies that a button for taking a picture is showing
test('displays ImageSelector with a button for taking a picture', () => {
  const { getByText } = render(<ImageSelector />);
  const takePicture = getByText('Take a picture'); 
  expect(takePicture).toBeTruthy(); 
});

// References: 
// https://callstack.github.io/react-native-testing-library/
// https://jestjs.io/docs/getting-started
// https://docs.expo.dev/develop/unit-testing/
// https://stackoverflow.com/questions/66589625/how-to-expect-a-getbytext-to-be-false-in-react-testing-library
// https://github.com/testing-library/jest-dom/issues/382
// https://testing-library.com/docs/react-testing-library/cheatsheet/
// https://react-testing-library-examples.netlify.app
// https://www.rafaelquintanilha.com/react-testing-library-common-scenarios/
// https://plainenglish.io/blog/5-tips-to-perfect-react-testing-library-queries

// END - code was developed with the help of documentation and research materials described in "References" section.