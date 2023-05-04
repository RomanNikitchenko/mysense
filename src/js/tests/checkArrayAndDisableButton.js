export default function checkArrayAndDisableButton(array, disabled) {
  console.log(disabled);
  if (!array.length) {
    return (disabled = true);
  } else {
    return (disabled = false);
  }
}
