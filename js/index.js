// Funcionalidade de armazenar perfil ativo no localStorage

document.addEventListener('DOMContentLoaded', function() {
    const profiles = document.querySelectorAll('a.profile');

    /**
     * Armazena as informações do perfil clicado no localStorage
     */
    profiles.forEach(profile => {
        profile.addEventListener('click', function(event) {
            // Extrai o nome do perfil do figcaption
            const profileName = this.querySelector('figcaption').textContent;
            
            // Extrai a URL da imagem do perfil
            const profileImage = this.querySelector('img').getAttribute('src');
            
            // Armazena no localStorage com as chaves esperadas
            localStorage.setItem('perfilAtivoNome', profileName);
            localStorage.setItem('perfilAtivoImagem', profileImage);
            
            console.log('Perfil armazenado:', { name: profileName, image: profileImage });
            
            // Permite que o link seja seguido normalmente
        });
    });
});
