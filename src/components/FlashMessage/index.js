function FlashMessage(message) {
  return `
    <div class="js-flash-message hide">
      <p>${message}</p>
    </div>
  `;
}

export default FlashMessage;
