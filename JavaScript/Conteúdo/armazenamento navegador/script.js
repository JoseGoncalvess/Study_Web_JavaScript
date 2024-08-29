document.getElementById("sessionBtn").addEventListener("click", function () {
  const isvalue = document.getElementById("session");
  sessionStorage.setItem("info", isvalue.value);
  isvalue.value = "";
});

document.getElementById("readSesssion").addEventListener("click", function () {
  document.getElementById("session").value = sessionStorage.getItem("info");
});

// LOCAL STORAGE
document.getElementById("localBtn").addEventListener("click", function () {
  const isvalue = document.getElementById("local");
  localStorage.setItem("info2", isvalue.value);
  isvalue.value = "";
});

document.getElementById("readLocal").addEventListener("click", function () {
  document.getElementById("local").value = localStorage.getItem("info2");
});

// COOKES STORAGE
document.getElementById("cookieBtn").addEventListener("click", function () {
  const isvalue = document.getElementById("cookie");
  // cookieName=value; expires=UTCStringDate; path=/;
  const cookie = "info=" + input.value + ";";
  const expiration = "expires=" + new Date(2024, 8, 30) + ";";
  const path = "path=/;";
  document.cookie = cookie + expiration + path;
  isvalue.value = "";
});

document.getElementById("cookie2Btn").addEventListener("click", function () {
    const isvalue = document.getElementById("cookie2");
    // cookieName=value; expires=UTCStringDate; path=/;
    const cookie = "info=" + input.value + ";";
    const expiration = "expires=" + new Date(2024, 8, 30) + ";";
    const path = "path=/;";
    document.cookie = cookie + expiration + path;
    isvalue.value = "";
  });
