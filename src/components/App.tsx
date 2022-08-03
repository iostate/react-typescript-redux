import { Provider } from 'react-redux';
import { store } from "../state/store"
import RepositoriesList from './RepositoriesList';

type FreakAccidentProps = {
  color: string;
}

const FreakAccident = ({ color }: FreakAccidentProps) => {
  return (<h1 className={`text-${color}-500 rounded-lg p-6`}>Welcome to my blog about Redux!</h1>)
}


const App = () => {
  const color = 'red';
  return (
    <>
      {/* @ts-ignore:next-line */}
      <Provider store={store}>
        <div>
          <h1>Search For a Package</h1>
          <RepositoriesList />
        </div>
        <div>
          <FreakAccident color={color} />
        </div>

      </Provider>
    </>
  );
};

export default App;
