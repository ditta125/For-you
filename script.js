
function checkDOB() {
  const input = document.getElementById('dobInput').value;
  if (input === "1998-05-08") {
    location.href = 'page3.html';
  } else {
    alert("Oops! Try again with the correct date.");
  }
}

window.onload = function() {
  if (document.body.classList.contains('page3')) {
    setTimeout(() => {
      document.getElementById('birthdayMessage').style.display = 'block';
    }, 4000);
  }
};
