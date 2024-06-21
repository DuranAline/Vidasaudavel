import 'react';
import { render } from '@testing-library/react';
import ConteudoRestrito from './index';

 test('renders ConteudoRestrito component', () => {
  const { getByText } = render(<ConteudoRestrito />);
   expect(getByText('Conteúdo Restrito')).toBeInTheDocument();
 });

