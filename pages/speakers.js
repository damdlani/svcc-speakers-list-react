import { Footer } from '../src/components/Footer/Footer';
import { Header } from '../src/components/Header/Header';
import { Menu } from '../src/components/Menu/Menu';
import { SearchBar } from '../src/components/SearchBar/SearchBar';
import { Speakers } from '../src/components/Speakers/Speakers';

const Page = () => {
  return (
    <div>
      <Header />
      <Menu />
      <SearchBar />
      <Footer />
      <Speakers />
    </div>
  );
};

export default Page;