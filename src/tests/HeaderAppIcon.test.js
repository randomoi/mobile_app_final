import React from 'react';
import { render } from '@testing-library/react-native';
import { HeaderAppIcon } from '../components/HeaderAppIcon';

// START - code was developed with the help of documentation and research materials described in "References" section.

// creating a simulation of "react-navigation-header-button"
jest.mock('react-navigation-header-buttons', () => ({
  HeaderButton: (props) => <mock-header-button {...props} />, 
}));

// creating a simulation of "MaterialCommunityIcons"
jest.mock('@expo/vector-icons', () => ({
  MaterialCommunityIcons: 'MockedMaterialCommunityIcons',
}));

// verify that HeaderAppIcon is displayed properly
test('HeaderAppIcon display properly', () => {
  const { getByTestId } = render(<HeaderAppIcon />);
  const icon = getByTestId('mock-header-icon');
  expect(icon).toBeTruthy(); 
});

// verify that HeaderAppIcon has valid component
test('HeaderAppIcon uses valid component', () => {
  const { getByTestId } = render(<HeaderAppIcon />);
  const icon = getByTestId('mock-header-icon');
  expect(icon.props.IconComponent).toBe('MockedMaterialCommunityIcons'); 
});

// verify that HeaderAppIcon uses correct size
test('HeaderAppIcon uses correct size', () => {
  const { getByTestId } = render(<HeaderAppIcon />);
  const icon = getByTestId('mock-header-icon');
  expect(icon.props.iconSize).toBe(24); 
});

// References: 
// https://callstack.github.io/react-native-testing-library/
// https://jestjs.io/docs/getting-started
// https://docs.expo.dev/develop/unit-testing/
// https://stackoverflow.com/questions/67897591/react-testing-library-unable-to-find-the-element-with-data-testid
// https://github.com/testing-library/react-testing-library/issues/62
// https://github.com/testing-library/user-event/issues/549
// https://www.tabnine.com/code/javascript/functions/getByTestId
// https://github.com/testing-library/react-testing-library/issues/377
// https://github.com/testing-library/react-testing-library/issues/480
// https://legacy.reactjs.org/docs/test-renderer.html
// https://www.freecodecamp.org/news/testing-react-hooks/
// https://snyk.io/advisor/npm-package/react-testing-library/functions/react-testing-library.fireEvent.click
// https://www.tabnine.com/code/javascript/functions/dom-testing-library/getByTestId
// https://snyk.io/advisor/npm-package/react-testing-library/functions/react-testing-library.fireEvent.change
// https://github.com/expo/vector-icons/issues/143
// https://stackoverflow.com/questions/57443897/why-are-expo-vector-icons-undefined-when-mocking-expo-with-jest-mock
// https://reactnavigation.org/docs/header-buttons/
// https://stackoverflow.com/questions/52569447/how-to-mock-react-navigations-navigation-prop-for-unit-tests-with-typescript-in
// https://github.com/vonovak/react-navigation-header-buttons
// https://callstack.github.io/react-native-testing-library/docs/react-navigation

// END - code was developed with the help of documentation and research materials described in "References" section.



// creating a simulation of "react-navigation-header-button"
jest.mock('react-navigation-header-buttons', () => ({
  HeaderButton: jest.fn((props) => <div {...props} />),
}));

describe('HeaderAppIcon', () => {

  // verify that icon renders right props
  it('renders right props', () => {
    const { root } = render(
      <HeaderAppIcon
        iconName="test-icon"
      />
    );

    const appIcon = root.findByProps({ iconName: 'test-icon' });
    expect(appIcon).toBeTruthy();
  });

  // veryfy icon has correct size
  it('has correct icon size', () => {
    const { root } = render(
      <HeaderAppIcon
        iconSize={24}
      />
    );

    const appIcon = root.findByProps({ iconSize: 24 });
    expect(appIcon).toBeTruthy();
  });
});

// References: 
// https://callstack.github.io/react-native-testing-library/
// https://jestjs.io/docs/getting-started
// https://docs.expo.dev/develop/unit-testing/
// https://stackoverflow.com/questions/67897591/react-testing-library-unable-to-find-the-element-with-data-testid
// https://github.com/testing-library/react-testing-library/issues/62
// https://github.com/testing-library/user-event/issues/549
// https://www.tabnine.com/code/javascript/functions/getByTestId
// https://github.com/testing-library/react-testing-library/issues/377
// https://github.com/testing-library/react-testing-library/issues/480
// https://legacy.reactjs.org/docs/test-renderer.html
// https://www.freecodecamp.org/news/testing-react-hooks/
// https://snyk.io/advisor/npm-package/react-testing-library/functions/react-testing-library.fireEvent.click
// https://www.tabnine.com/code/javascript/functions/dom-testing-library/getByTestId
// https://snyk.io/advisor/npm-package/react-testing-library/functions/react-testing-library.fireEvent.change
// https://github.com/expo/vector-icons/issues/143
// https://stackoverflow.com/questions/57443897/why-are-expo-vector-icons-undefined-when-mocking-expo-with-jest-mock
// https://reactnavigation.org/docs/header-buttons/
// https://stackoverflow.com/questions/52569447/how-to-mock-react-navigations-navigation-prop-for-unit-tests-with-typescript-in
// https://github.com/vonovak/react-navigation-header-buttons
// https://callstack.github.io/react-native-testing-library/docs/react-navigation
// https://github.com/react-navigation/react-navigation/issues/9487
// https://github.com/react-navigation/react-navigation/issues/2820
// https://medium.com/@dariaruckaolszaska/testing-your-react-navigation-5-hooks-b8b8f745e5b6
// https://morioh.com/a/bbd30285b43e/easily-render-header-buttons-for-react-navigation

// END - code was developed with the help of documentation and research materials described in "References" section.