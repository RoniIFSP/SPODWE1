document.getElementById('fetchUser').addEventListener('click', () => {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            document.getElementById('userInfo').innerHTML = `
                <img src="${user.picture.large}" alt="Foto do usuário">
                <p><strong>Nome:</strong> ${user.name.first} ${user.name.last}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>País:</strong> ${user.location.country}</p>
            `;
        })
        .catch(error => {
            console.error('Erro ao buscar usuário:', error);
            document.getElementById('userInfo').innerHTML = '<p style="color:red;">Erro ao carregar os dados.</p>';
        });
});
