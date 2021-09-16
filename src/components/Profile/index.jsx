import Photo from "../../assets/photo.jpg";
import { Div } from "./style";

function Profile() {
  return (
    <Div>
      <Div.Image src={Photo} />
      <Div.Name>Diego Batista</Div.Name>
      <Div.List>
        <li>
          Computer Science at <a href="https://www.ufmt.br/" target="_new">Universidade Federal do Mato Grosso</a>
        </li>
        <li>
          Software Engineer Working @ <a href="https://www.zup.com.br/" target="_new">Zup Innovation</a>
        </li>
      </Div.List>
      <Div.Description>
        Hi, I'm Diego Batista, a Computer Science student at the Universidade
        Federal do Mato Grosso and a fullstack developer at the Zup Innovation,
        I'm passionate about technology, sports, beer and coffee. I
        really like Frontend / Backend and enthusiasm for machine learning.
        Since I was a child, I like technology and computers, so I decided to
        pursue an IT career.
      </Div.Description>
    </Div>
  );
};

export default Profile;
