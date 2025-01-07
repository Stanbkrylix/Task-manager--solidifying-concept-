const showTasks = function (contentSection) {
    console.log("task");
    console.log(contentSection);
    contentSection.innerHTML = "";

    contentSection.innerHTML = `
      <div class="task-section">
            <div class="task-navbar">
                <h2>Task</h2>

                <button class="add-task-btn">
                    <span class="material-symbols-outlined">add</span>
                    New Task
                </button>
            </div>
            

        <table class="task-table" >
        <thead>
            <tr>
                <th>Task list</th>
                <th>Date</th>
                <th>Priority</th>
                <th>Completed</th>
            </tr>
        </thead>

        <tbody class="task-list-body" >

            <tr class ="task-list-row" >

                <td class="task-list-data" >
                 <div class="task-card">
                    <p class="task-title">Adjust Banner + Content</p>
                    <p>1.Adjust banner</p>
                    <p>2.periotic progress reports</p>
                 </div>
                </td>

                <td class="date-data-cell" >
                     <p class="date">June 2,2024</p>
                </td>

                <td class="priority-data-cell">
                     <div class="priority">
                        <button class="priority-btn prioritize-color">Standard</button>
                    </div>

                </td>

                 <td class="completed-data-cell" >
                     <input
                            type="checkbox"
                            name="completed"
                            id="complete-checkbox"
                        />
                    
                </td>
                    
                </td>

            </tr>

        </tbody>

    </table>
        </div>
    
    `;
};

export { showTasks };
