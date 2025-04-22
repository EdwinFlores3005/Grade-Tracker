const parent = document.getElementById('subjects-container')

const addSubjectBtn = document.getElementById('add-subject-btn')

addSubjectBtn.addEventListener("click", () => {
    var subjectName = document.getElementById('subject-name').value

    const addSubject = document.createElement("div")
    addSubject.classList.add("subject")
    addSubject.insertAdjacentHTML("afterbegin", `<h3>${subjectName}</h3>
        <table>
          <thead>
            <tr>
              <th>Project</th>
              <th>Due Date</th>
              <th>Percentage</th> 
              <th>Grade</th>
            </tr>
          </thead>
          <tbody class="project-rows">
            <!-- project rows will go here -->
          </tbody>
        </table>
        <button class="add-project-btn" value="test">+ Add Project</button>`)
    
    parent.appendChild(addSubject)

    document.getElementById('subject-name').value = ''

    const AddProjectbtn = addSubject.querySelector('.add-project-btn')
    AddProjectbtn.addEventListener("click", () => {
      const ProjectRows = addSubject.querySelector('.project-rows')
      
      const AddRow = document.createElement("tr")
      AddRow.insertAdjacentHTML("afterbegin", `
        <th>Prueba</th>
        <th>Due Date</th>
        <th>Percentage</th> 
        <th>Grade</th>`)
      

      ProjectRows.appendChild(AddRow)
    })

    /*const AddProject = addSubject.getElementById('add-project-btn')

    AddProject.value*/
})


    /*addSubject.innerHTML = `
  <h3>${subjectName}</h3>
  <table>
    <thead>
      <tr>
        <th>Project</th>
        <th>Due Date</th>
        <th>Grade</th>
      </tr>
    </thead>
    <tbody class="project-rows">
      <!-- project rows will go here -->
    </tbody>
  </table>
  <button class="add-project-btn">+ Add Project</button>
`*/

/* innerHTML seems to be to replace, setadjacent seems to be to add*/
