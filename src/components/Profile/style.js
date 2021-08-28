import styled from 'styled-components';

export const Div = styled.div`
  font-family: var(--font-primary);
  text-align: center;
  color: var(--color-light);
`;

Div.Image = styled.img`
  width: 150px;
  border: 3px solid #eb2f06;
  border-radius: 50%;
`;

Div.Name = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  margin: 20px 0;
`;

Div.List = styled.ul`
  margin-bottom: 20px;

  li {
    width: 80%;
    margin: 10px auto;
    line-height: 1.3rem;

    a {
      text-decoration: none;
      color: var(--color-primary);
    }

    @media (min-width: 1024px) and (max-width: 1440px) {
      a {
        transition: all ease-in .3s;
        
        &:hover {
          color: var(--color-light);
        }
      }

    }
  }
`;

Div.Description = styled.p`
  width: 80%;
  margin: 0 auto;
  font-size: 0.85rem;
  line-height: 1.3rem;

  /* Desktop */
  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 55%;
    font-size: 1rem;
    font-weight: lighter;
  }
`;