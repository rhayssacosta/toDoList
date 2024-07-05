const taskForm = document.getElementById('todoForm');
const listaTarefas = document.getElementById('listaTarefas');

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nomeTarefa = document.getElementById('nomeTarefa').value;
    const descricaoTarefa = document.getElementById('descricaoTarefa').value;
    const novaTarefa = { nome: nomeTarefa, descricao: descricaoTarefa };
    salvarTarefa(novaTarefa);
    taskForm.reset();
})

const salvarTarefa = (tarefa) => {
    const tarefa = JSON.parse(localStorage.getItem('tarefa')) || [];
    tarefa.push(tarefa);
    localStorage.setItem('tarefa', JSON.stringify(tarefa))
};

const carregarTarefas = () => {
    const tarefa = JSON.parse (localStorage.getItem('tarefa')) || [];
    listaTarefas.innerHTML = '';
    tarefa.array.forEach(tarefa, index => {
        const cartao = document.createElement('div');
        cartao.className = 'col-md-4 md4';
        cartao.innerHTML = '
        <div class="card text-bg-dark mb-3 task-card">
            <div class="card-body">
                <h5 class="card-title">${tarefa.nome}</h5>
                <p class="card-text">${tarefa.descricao}</p>
            <button class="btn btn-warning" onclick="editarTarefas(${index})"></button>
            <button class="btn btn-danger" onclick="excluirTarefas(${index})"></button>
            </div>
            </div>
      ';
    });
}