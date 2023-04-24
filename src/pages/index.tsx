import { Inter } from 'next/font/google';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import App from './App';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
