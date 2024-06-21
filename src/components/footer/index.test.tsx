import 'react';
import { render } from '@testing-library/react';
import Footer from './index';

test('renders social media icons', () => {
  const { getByAltText } = render(<Footer />);
  expect(getByAltText('Facebook')).toBeInTheDocument();
  expect(getByAltText('Twitter')).toBeInTheDocument();
  expect(getByAltText('Instagram')).toBeInTheDocument();
});
