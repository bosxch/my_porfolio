import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.2rem
    margin: 0.5px
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#fff;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: linear-gradient(270deg, #00DBD8 0%, #B133FF 100%);
border-radius: 15px;
transition: 0.5s ease;
box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
&:hover{
  background:  linear-gradient(270deg, #ff622e 0%, #B133FF 100%);
  box-shadow: noneL;
}
`;

export const TagList = styled.ul`
list-style-type: none;
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 10px;
margin: 3rem 0;

@media ${props => props.theme.breakpoints.lg}{
  grid-template-columns: repeat(3, 1fr);
  margin: 32px 0;
}

@media ${props => props.theme.breakpoints.md}{
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  margin: 20px 0;
}

@media ${props => props.theme.breakpoints.sm}{
  grid-template-columns: repeat(3, 1fr);
  gap: 3px;
  margin: 10px 0;
}
`
export const Tag = styled.li`
color: #9cc9e3;
font-size: 1.5rem;
`