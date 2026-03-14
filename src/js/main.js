function showAlert(message) {
  const alertContainer = document.querySelector("#site-alert");

  if (alertContainer) {
    alertContainer.textContent = message;
    alertContainer.style.display = "block";
  }
}

// mensaje personalizable
showAlert("🔥 Spring Sale: 20% off all camping tents! Autor: C.S ");