import GithubLogo from '../../assets/github.svg';
import LinkedinLogo from '../../assets/linkedin.svg';

import { Div } from './style';

function SocialMedia() {
  return (
    <Div>
      <p>You can find me on:</p>
      <Div.List>
        <li>
          <a href="https://github.com/fogeid" target="_new">
            <img src={GithubLogo} alt="Github" />
            <h2>Github</h2>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/dbatista" target="_new">
            <img src={LinkedinLogo} alt="Linkedin" />
            <h2>Linkedin</h2>
          </a>
        </li>
      </Div.List>
    </Div>
  );
}

export default SocialMedia;
