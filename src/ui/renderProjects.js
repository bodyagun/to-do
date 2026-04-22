const projectlist = document.getElementById("project-list")

export default function renderProjects(arr) {
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement("li")
        projectlist.appendChild(li)
        li.textContent = `${arr[i].title}`
    }
}