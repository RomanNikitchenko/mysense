export default function checkArrayAndDisableButton(array, disabled) {
  if (!array.length) {
    return (disabled = true);
  } else {
    return (disabled = false);
  }
}
