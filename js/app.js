const form = document.getElementById('formulario');
const alerts = document.getElementById('alert');
const inputTask = document.getElementById('task-input');
const renderTask = document.getElementById('container-tasks');
const templateTask = document.getElementById('templateTask').content;

const tasks = [];

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const formData = new FormData(form);
	const [task] = [...formData.values()];

	if (!task.trim()) {
		alerts.classList.remove('alert-none');
		alerts.classList.add('alert');
		inputTask.style.border = '1.5px solid rgb(221, 0, 0)';
		return;
	} else {
		alerts.classList.add('alert-none');
		alerts.classList.remove('alert');
		inputTask.style.border = 'none';
	}
	getTask(task);
	renderTemplateTask();
});

const getTask = (task) => {
	tasksObject = {
		task: task,
		id: `${Date.now()}`,
	};
	tasks.push(tasksObject);
};

const renderTemplateTask = () => {
	renderTask.textContent = '';
	const fragment = document.createDocumentFragment();

	tasks.forEach((item) => {
		const clone = templateTask.cloneNode(true);
		clone.querySelector('span').textContent = item.task;
		fragment.appendChild(clone);
	});
	renderTask.appendChild(fragment);
};