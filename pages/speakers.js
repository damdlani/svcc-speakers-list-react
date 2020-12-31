import { Footer } from "../src/components/Footer/Footer";
import { Header } from "../src/components/Header/Header";
import { Menu } from "../src/components/Menu/Menu";
import { SearchBar } from "../src/components/SearchBar/SearchBar";
import Speakers from "../src/components/Speakers/Speakers";
import { SpeakersContext } from "../src/components/Speakers/SpeakersContext";
import { speakers } from "../src/components/Speakers/speakersData";

const Page = () => {
  //example of using context
  return (
    <SpeakersContext.Provider value={speakers}> 
      <div>
        <Header />
        <Menu />
        <SearchBar />
        <Footer />
        <Speakers />
      </div>
    </SpeakersContext.Provider>
  );
};

export default Page;
