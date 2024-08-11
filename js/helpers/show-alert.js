const ALERT_SHOW_TIME = 5000;

const errorMessageTemplate = document.querySelector('#data-error').content;

const showAlert = () => {
  const errorMessageElement = errorMessageTemplate.cloneNode(true);
  document.body.append(errorMessageElement);
  setTimeout(() => {
    document.querySelector('.data-error').remove();
  }, ALERT_SHOW_TIME);
};

export { showAlert };
