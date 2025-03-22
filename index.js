// For copying the text in an element
function copyText(element) {
  const text = element.innerText || element.textContent;
  navigator.clipboard.writeText(text).then(() => {
      element.innerText = "Copied to clipboard!";
      setTimeout(() => {
          element.innerText = text;
      }, 1500);
  }).catch(err => {
      console.error("Failed to copy text: ", err);
  });
}