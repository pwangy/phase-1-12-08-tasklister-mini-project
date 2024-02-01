document.addEventListener('DOMContentLoaded', () => {
	let form = document.querySelector('form')
	document.querySelector('form').addEventListener('submit', (e) => {
		e.preventDefault()
		createTask(e.target.new_task.value)
		form.reset()
	})
})

const createTask = (task) => {
	let listItem = document.createElement('li')
	listItem.textContent = `${task} `

	let btn = document.createElement('button')
	btn.addEventListener('click', handleDelete)
	btn.textContent = 'x'

	listItem.appendChild(btn)
	document.querySelector('#tasks').appendChild(listItem)
}

const handleDelete = (e) => {
	e.target.parentNode.remove()
}

// Deliverables
// x user should be able to type a task into the input field
// x user should be able to click a submit button
// x user sees the task string provided appear in the DOM after the submit button has been activated

// Note: While the example shows one possible working implementation of the TaskLister app, yours can (and is encouraged to!) look however you like!

// Stretch Deliverables
// Once you've got the required deliverables working, you may want to try to implement one or more of the following:

// x A delete function that will remove tasks from your list
// A priority value selected from a dropdownLinks to an external site. that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
// As an additional challenge, implement a sorting functionality that displays the tasks in ascending or descending order based on priority
// An additional input field (e.g. user, duration, date due)
// Ability to edit tasks
// Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM
