const form = document.querySelector("form")

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const bookData = new FormData(form)
    const req = Object.fromEntries(bookData)

    const response = await fetch("/add/rating", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(req)
    })
    const data = await response.json()
    console.log(data)

    window.location.href = "/ratings"
})

// write the async function deleteRating
// make sure it redirects to /ratings after

async function deleteRating(id) {
    await fetch('/ratings/' + id, {method: "DELETE"})
    window.location.href = "/ratings"
}

function toggleEditForm(id) {
    const form = document.getElementById('update-form-' + id);
    if (form.style.display === 'none' || form.style.display === '') {
        form.style.display = 'flex';
    } else {
        form.style.display = 'none';
    }
}

// Update rating function
const updateForms = document.querySelectorAll('.update-form');

updateForms.forEach(form => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const req = Object.fromEntries(formData);
    const id = form.getAttribute('data-id');
    const response = await fetch(`/update/rating/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req)
    });
    const data = await response.json();
    console.log(data);
    window.location.href = '/ratings';
  });
});