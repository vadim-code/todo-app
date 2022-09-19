import { StyledEmptyText, StyledNoTodosContainer } from './styles';

type EmptyStateBannerProps = {
  text: string;
};

function EmptyStateBanner({ text }: EmptyStateBannerProps) {
  return (
    <StyledNoTodosContainer>
      <StyledEmptyText>{text}</StyledEmptyText>
    </StyledNoTodosContainer>
  );
}

export default EmptyStateBanner;
