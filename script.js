async function generateCard() {
  const username = document.getElementById("username").value;
  const card = document.getElementById("card");

  if (!username) {
    card.innerHTML = "<p>Please enter a username.</p>";
    return;
  }

  const res = await fetch(`https://api.github.com/users/${username}`);
  const data = await res.json();

  if (data.message === "Not Found") {
    card.innerHTML = `<p>User not found!</p>`;
    return;
  }

  card.innerHTML = `
    <img src="${data.avatar_url}" width="100" style="border-radius: 50%"/><br/><br/>
    <strong>${data.name || data.login}</strong><br/>
    <em>${data.bio || "No bio provided"}</em><br/>
    <p>Followers: ${data.followers} | Following: ${data.following}</p>
    <p><a href="${data.html_url}" target="_blank">View Profile</a></p>
  `;
}