$(document).ready(function() {
    // Máscaras
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');

    // Validação do CPF
    function validarCPF(cpf) {
        cpf = cpf.replace(/\D/g, '');
        if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
        
        let soma = 0, resto;
        for (let i = 1; i <= 9; i++) soma += parseInt(cpf[i - 1]) * (11 - i);
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf[9])) return false;

        soma = 0;
        for (let i = 1; i <= 10; i++) soma += parseInt(cpf[i - 1]) * (12 - i);
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        return resto === parseInt(cpf[10]);
    }

    // Validação do formulário
    $('#form').on('submit', function(event) {
        let cpf = $('#cpf').val();
        if (!validarCPF(cpf)) {
            alert('CPF inválido!');
            $('#cpf').addClass('invalid');
            event.preventDefault();
        } else {
            $('#cpf').removeClass('invalid');
        }
    });
});
