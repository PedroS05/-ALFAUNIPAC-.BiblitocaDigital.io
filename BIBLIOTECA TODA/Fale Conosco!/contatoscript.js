document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formContato');
    const campos = {
        nome: {
            input: document.getElementById('nome'),
            erro: document.getElementById('erroNome'),
            validacao: valor => valor.trim() !== ''
        },
        email: {
            input: document.getElementById('email'),
            erro: document.getElementById('erroEmail'),
            validacao: valor => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)
        },
        motivo: {
            input: document.getElementById('motivo'),
            erro: document.getElementById('erroMotivo'),
            validacao: valor => valor !== ''
        },
        mensagem: {
            input: document.getElementById('mensagem'),
            erro: document.getElementById('erroMensagem'),
            validacao: valor => valor.trim().length >= 10
        }
    };

    Object.keys(campos).forEach(campo => {
        campos[campo].input.addEventListener('blur', function() {
            validarCampo(campo);
        });

        campos[campo].input.addEventListener('input', function() {
            if (campos[campo].validacao(this.value)) {
                campos[campo].erro.textContent = '';
                this.classList.remove('invalido');
            }
        });
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let formValido = true;
        
        Object.keys(campos).forEach(campo => {
            if (!validarCampo(campo)) {
                formValido = false;
            }
        });

        if (formValido) {
            enviarFormulario();
        }
    });

    function validarCampo(campo) {
        const valor = campos[campo].input.value;
        const valido = campos[campo].validacao(valor);
        
        if (!valido) {
            let mensagem = '';
            switch(campo) {
                case 'nome':
                    mensagem = 'Por favor, insira seu nome';
                    break;
                case 'email':
                    mensagem = 'Por favor, insira um e-mail válido';
                    break;
                case 'motivo':
                    mensagem = 'Por favor, selecione um motivo';
                    break;
                case 'mensagem':
                    mensagem = 'A mensagem deve ter pelo menos 10 caracteres';
                    break;
            }
            
            campos[campo].erro.textContent = mensagem;
            campos[campo].input.classList.add('invalido');
            return false;
        }
        
        campos[campo].erro.textContent = '';
        campos[campo].input.classList.remove('invalido');
        return true;
    }

    function enviarFormulario() {
        const btn = form.querySelector('button[type="submit"]');
        const textoOriginal = btn.innerHTML;
        
        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-check"></i> Enviado!';
            btn.style.backgroundColor = 'var(--success)';
            
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            
            form.reset();
            
            setTimeout(() => {
                btn.innerHTML = textoOriginal;
                btn.style.backgroundColor = '';
                btn.disabled = false;
            }, 3000);
        }, 1500);
    }

    const style = document.createElement('style');
    style.textContent = `
        .invalido {
            border-color: var(--error) !important;
            box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.2) !important;
        }
    `;
    document.head.appendChild(style);
});