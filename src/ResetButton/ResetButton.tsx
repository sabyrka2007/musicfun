interface Props {
  onResetSelection: () => void
}

export const ResetButton = ({ onResetSelection }: Props) => {
  return (
    <button
      type="button"
      onClick={onResetSelection}
    >Reset selection
    </button>
  )
}