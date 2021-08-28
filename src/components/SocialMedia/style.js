import styled from 'styled-components';

export const Div = styled.div`
  font-family: var(--font-primary);
  text-align: center;

  p {
    color: var(--color-light);
    margin-bottom: 15px;
  }
`;

Div.List = styled.ul`
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  
  li + li {
    margin-left: 15px;
  }

  li a {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--color-primary);
    text-decoration: none;

    h2 {
      margin-left: 10px;
    }
  }

  /* Desktop */
  @media (min-width: 1024px) and (max-width: 1440px) {
    li + li {
      margin-left: 25px;
    }

    li {
      h2 {
        transition: all ease-in .3s;

        &:hover {
          color: var(--color-light);
        }
      }
    }
  }
`;