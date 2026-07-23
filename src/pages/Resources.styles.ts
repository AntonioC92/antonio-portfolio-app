import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../styles/variables';
import { device } from '../styles/mediaQueries';

export const ResourcesWrapper = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 4rem 2rem 6rem;
`;

export const ResourcesHeader = styled.header`
  margin-bottom: 2rem;
`;

export const ResourcesTitle = styled.h1`
  color: ${colors.primary};
  font-size: 2.8rem;
  line-height: 1.1;
  font-weight: 700;
  margin-bottom: 0.75rem;

  @media ${device.mobile} {
    font-size: 2.1rem;
  }
`;

export const ResourcesSubtitle = styled.p`
  color: ${colors.light};
  max-width: 760px;
  line-height: 1.6;
  opacity: 0.92;
`;

export const Controls = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
  margin: 2rem 0;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const SearchInput = styled.input`
  background: #2b2b2b;
  color: ${colors.light};
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 10px;
  padding: 0.75rem 0.9rem;
  font-size: 0.95rem;
  outline: none;
`;

export const CategorySelect = styled.select`
  background: #2b2b2b;
  color: ${colors.light};
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 10px;
  padding: 0.75rem 0.9rem;
  font-size: 0.95rem;
`;

export const ResourceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const ResourceCard = styled(Link)`
  display: block;
  text-decoration: none;
  background: #2c2c2c;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  padding: 1rem 1.1rem;
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: ${colors.primary};
    transform: translateY(-2px);
  }
`;

export const ResourceMeta = styled.p`
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.85rem;
  margin-bottom: 0.65rem;
`;

export const ResourceTitle = styled.h2`
  color: ${colors.light};
  font-size: 1.2rem;
  line-height: 1.35;
  margin-bottom: 0.65rem;
`;

export const ResourceDescription = styled.p`
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  font-size: 0.95rem;
`;

export const EmptyState = styled.p`
  color: rgba(255, 255, 255, 0.75);
  margin-top: 1rem;
`;

export const HubSection = styled.section`
  margin-top: 2.25rem;
`;

export const ResourceSectionHeader = styled.h2`
  color: ${colors.light};
  font-size: 1.35rem;
  margin-bottom: 1rem;
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const CategoryCard = styled(Link)`
  display: block;
  text-decoration: none;
  background: #2c2c2c;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  padding: 1rem 1.1rem;
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: ${colors.primary};
    transform: translateY(-2px);
  }
`;

export const CategoryTitle = styled.h3`
  color: ${colors.light};
  font-size: 1.05rem;
  line-height: 1.35;
  margin-bottom: 0.45rem;
`;

export const CategoryDescription = styled.p`
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.5;
  font-size: 0.92rem;
`;

export const StartHereCard = styled(Link)`
  display: block;
  text-decoration: none;
  background: #2b2b2b;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 12px;
  padding: 1.1rem;
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: ${colors.primary};
    transform: translateY(-2px);
  }
`;

export const StartHereTitle = styled.h3`
  color: ${colors.light};
  font-size: 1.15rem;
  line-height: 1.35;
  margin-bottom: 0.6rem;
`;

export const ArticleWrap = styled.article`
  max-width: 860px;
  margin: 0 auto;
  padding: 4rem 2rem 6rem;
`;

export const ArticleTitle = styled.h1`
  color: ${colors.primary};
  font-size: 2.8rem;
  line-height: 1.12;
  margin-bottom: 0.7rem;
  font-weight: 700;

  @media ${device.mobile} {
    font-size: 2.1rem;
  }
`;

export const ArticleAuthorLine = styled.p`
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.55;
  margin-bottom: 0.5rem;
  font-size: 0.98rem;
`;

export const ArticleMeta = styled.p`
  color: rgba(255, 255, 255, 0.74);
  margin-bottom: 1rem;
  font-size: 0.92rem;
`;

export const MetaLink = styled(Link)`
  color: rgba(255, 255, 255, 0.88);
  text-decoration: none;

  &:hover {
    color: ${colors.primary};
  }
`;

export const ArticleIntro = styled.h2`
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.35;
  margin-bottom: 2rem;
  font-size: 2.15rem;
  font-weight: 500;
  max-width: 1100px;

  @media ${device.mobile} {
    font-size: 1.65rem;
    line-height: 1.4;
  }
`;

export const MarkdownContent = styled.div`
  color: ${colors.light};
  line-height: 1.75;

  p,
  ul,
  ol {
    margin-bottom: 1rem;
  }

  ul,
  ol {
    padding-left: 1.3rem;
  }

  h2,
  h3 {
    color: ${colors.primary};
    margin: 1.6rem 0 0.8rem;
  }
`;

export const RelatedSection = styled.section`
  margin-top: 3rem;
`;

export const AuthorSection = styled.section`
  margin-top: 2.5rem;
`;

export const AuthorTitle = styled.h2`
  color: ${colors.light};
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

export const AuthorText = styled.p`
  color: rgba(255, 255, 255, 0.92);
  line-height: 1.7;
  margin-bottom: 1rem;
`;

export const SignatureSection = styled.section`
  margin-top: 3rem;
  padding: 3rem 2rem;
  border-radius: 16px;
  background: #1a1a1a;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const SignatureCtaRow = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0.5rem;
`;

export const SignatureFooter = styled.p`
  margin-top: 0.5rem;
  color: rgba(255, 255, 255, 0.82);
  font-size: 0.92rem;
`;

export const CtaBtnPrimary = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: ${colors.primary};
  color: #fff;
  font-size: 0.9rem;
  font-weight: 700;
  padding: 0.7rem 1.5rem;
  border-radius: 999px;
  text-decoration: none;
  letter-spacing: 0.02em;
  transition: background 0.2s ease, transform 0.15s ease;

  &:hover {
    background: #e05b40;
    transform: translateY(-1px);
  }
`;

export const CtaBtnSecondary = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: transparent;
  color: rgba(255, 255, 255, 0.88);
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.7rem 1.5rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  text-decoration: none;
  transition: border-color 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.55);
    color: #fff;
  }
`;

export const RelatedTitle = styled.h2`
  color: ${colors.light};
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

export const RelatedList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.8rem;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const NotFoundWrap = styled.section`
  max-width: 760px;
  margin: 0 auto;
  padding: 4rem 2rem 6rem;
  color: ${colors.light};
`;

export const BackLink = styled(Link)`
  color: ${colors.primary};
  text-decoration: none;
  font-weight: 600;
`;

export const BackLinkRow = styled.div`
  margin-top: 1.5rem;
`;
