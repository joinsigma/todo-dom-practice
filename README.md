### Project Instructions

For this practice project, you will be building a simple todo list app. The app will allow users to add and remove todo items. The app should have the following features:

- Add a new todo: Users can add a new todo.

- Remove a todo: Users can remove a todo.

- Mark a todo as completed/incomplete: Users can toggle a todo's completed status.

- Mark a todo as priority/non-priority: Users can toggle a todo's priority status.

- Filter todos: Users can filter the todos by selecting their status (all, completed, non-completed, priority, non-priority). For example, if the user selects "completed", only the completed todos will be shown.

- Save todos (Optional): The app saves the todos to localStorage. This will allow the todos to persist even after the user refreshes the page.

- Validation: Users are not allowed to add an empty todo. If the user tries to submit an empty todo, an alert message should be displayed.

Github Repo: https://github.com/joinsigma/todo-dom-practice  
Project Demo: https://joinsigma.github.io/todo-dom-practice

### Running

Make sure you have live server extension installed in your VS Code. If not, install it from here: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

- Open the project in VS Code
- Right click on index.html and select "Open with Live Server"
- Voila! The app is running on your browser

### Max Width

The reason I am using `max-width: 700px` and `width: 100%` instead of just setting `width: 700px` is to provide a responsive design that adapts to different screen sizes.

This makes sure that the container takes up 100% of the available width on smaller screens, but does not exceed 700px on larger screens.

If you set the width directly to 700px, the container would always be 700px wide regardless of the screen size. This might look fine on larger screens but could create horizontal scrolling or visual issues on smaller devices.

By using max-width and width together, we can make the design more flexible and responsive for different screen sizes.
