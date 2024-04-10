import React from 'react';
import { render } from '@testing-library/react-native';
import  SuccessAlert  from "../components/SuccessAlert";

// START - code was developed with the help of documentation and research materials described in "References" section.

describe('<SuccessAlert />', () => {

    // verify that the component renders without causing a crash
    it('component renders without causing a crash', () => {
        const { getByText } = render(<SuccessAlert isVisible={true} title="Some Title 123" />);
        expect(getByText('Some Title 123')).toBeTruthy();
    });

    // verify that the proper title is displayed
    it('proper title is displayed', () => {
        const someTestTitle = "Some Title 123";
        const { getByText } = render(<SuccessAlert isVisible={true} title={someTestTitle} />);
        expect(getByText(someTestTitle)).toBeTruthy();
    });
});


// References: 
// https://callstack.github.io/react-native-testing-library/
// https://jestjs.io/docs/getting-started
// https://docs.expo.dev/develop/unit-testing/
// https://stackoverflow.com/questions/66589625/how-to-expect-a-getbytext-to-be-false-in-react-testing-library
// https://github.com/testing-library/react-testing-library/issues/584
// https://github.com/testing-library/react-testing-library/issues/62
// https://davidwcai.medium.com/react-testing-library-and-the-not-wrapped-in-act-errors-491a5629193b
// https://github.com/testing-library/react-testing-library/issues/716
// https://www.tabnine.com/code/javascript/functions/%40testing-library%2Freact/asFragment
// https://www.tabnine.com/code/javascript/functions/dom-testing-library/getByText

// END - code was developed with the help of documentation and research materials described in "References" section.