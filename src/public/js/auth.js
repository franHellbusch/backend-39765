const authForm = document.getElementById("authForm");

authForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const formData = new FormData(this);
  const formDataObj = {};

  for (const [key, value] of formData.entries()) {
    formDataObj[key] = value;
  }

  const response = await fetch(`${this.dataset.url}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(formDataObj),
  });

  if (response.ok) {
    window.location.href = `${response.url}`;
    return;
  }

  const resJson = (await response.json()) || response;
  console.log(resJson);
});

// eslint-disable-next-line no-unused-vars
async function logout() {
  const response = await fetch("/api/v1/logout", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (response.ok) {
    window.location.href = `${response.url}`;
  }

  const resJson = (await response.json()) || response;
  console.log(resJson);
}
