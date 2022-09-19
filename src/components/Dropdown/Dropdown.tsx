import { StyledSelectionButton, StyledSelectionContainer } from './styles';

type DropdownProps = {
  selectedOption: string;
  isActive: boolean;
  onOptionChange: (option: string) => void;
};

function SelectionButton({
  selectedOption,
  isActive,
  onOptionChange,
}: DropdownProps) {
  function onOptionClick() {
    switch (selectedOption) {
      case 'Active':
        onOptionChange('Done');
        break;
      case 'Done':
        onOptionChange('Active');
        break;
    }
  }

  return (
    <StyledSelectionContainer>
      <StyledSelectionButton isActive={isActive} onClick={onOptionClick}>
        {selectedOption}
      </StyledSelectionButton>
    </StyledSelectionContainer>
  );
}

export default SelectionButton;
