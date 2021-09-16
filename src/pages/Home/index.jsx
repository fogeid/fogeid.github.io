import Profile from "../../components/Profile";
import SocialMedia from "../../components/SocialMedia";
import { Main } from "./style";

function Home() {
  return (
    <>
      <Main>
        <Profile />
        <SocialMedia />
      </Main>
    </>
  );
};

export default Home;
